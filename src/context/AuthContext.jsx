import React, { useState, useEffect } from "react";
import { storage } from "../utils/storage";
import { AuthContext } from "./auth.context";

const AUTH_STORAGE_KEY = "roiser_user_v2";
const LEGACY_AUTH_STORAGE_KEY = "roiser_user";
const ACCOUNTS_STORAGE_KEY = "roiser_accounts";
const PASSWORD_HASH_ITERATIONS = 120000;

const hashPassword = async (password, salt) => {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const hash = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: new Uint8Array(salt), iterations: PASSWORD_HASH_ITERATIONS, hash: "SHA-256" },
    keyMaterial,
    256
  );

  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, "0")).join("");
};

const toSessionUser = ({ id, name, email, joinedDate }) => ({
  id,
  name,
  email,
  role: "customer",
  joinedDate,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => storage.get(AUTH_STORAGE_KEY, null));
  const [accounts, setAccounts] = useState(() => {
    const savedAccounts = storage.get(ACCOUNTS_STORAGE_KEY, []);
    return Array.isArray(savedAccounts) ? savedAccounts : [];
  });

  useEffect(() => {
    storage.remove(LEGACY_AUTH_STORAGE_KEY);
    if (user) {
      storage.set(AUTH_STORAGE_KEY, user);
    } else {
      storage.remove(AUTH_STORAGE_KEY);
    }
  }, [user]);

  useEffect(() => {
    storage.set(ACCOUNTS_STORAGE_KEY, accounts);
  }, [accounts]);

  const login = async (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const account = accounts.find((savedAccount) => savedAccount.email === normalizedEmail);
    if (!account || (await hashPassword(password, account.salt)) !== account.passwordHash) {
      return { success: false };
    }

    const authenticatedUser = toSessionUser(account);
    setUser(authenticatedUser);
    return { success: true, user: authenticatedUser };
  };

  const signup = async (userData) => {
    const normalizedEmail = userData.email.trim().toLowerCase();
    if (accounts.some((account) => account.email === normalizedEmail)) {
      return { success: false, error: "An account with this email already exists." };
    }

    const salt = crypto.getRandomValues(new Uint8Array(16));
    const account = {
      id: "usr-" + Date.now(),
      name: userData.name.trim(),
      email: normalizedEmail,
      joinedDate: new Date().toISOString(),
      salt: Array.from(salt),
      passwordHash: await hashPassword(userData.password, salt),
    };

    setAccounts((previousAccounts) => [...previousAccounts, account]);
    const authenticatedUser = toSessionUser(account);
    setUser(authenticatedUser);
    return { success: true, user: authenticatedUser };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
