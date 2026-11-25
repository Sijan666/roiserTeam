import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [authError, setAuthError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setAuthError(null);
      await new Promise((r) => setTimeout(r, 600));
      const result = await login(data.email, data.password);
      if (!result.success) {
        setAuthError("Invalid email or password. Create an account if you are new.");
        return;
      }
      navigate(location.state?.from || "/", { replace: true });
    } catch {
      setAuthError("Unable to sign in. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Account Login | Roiser</title>
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#F5F5F3] py-10 md:py-14 border-b border-gray-200">
        <Container className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
            Sign In to Your Account
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] mt-1">
            Access your saved wishlist, recent order receipts, and member perks
          </p>
        </Container>
      </div>

      <Container className="py-12 md:py-20 max-w-lg">
        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-10 shadow-xs">
          {authError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 text-xs rounded">
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                {...register("email", { required: "Email is required" })}
                placeholder="name@example.com"
                className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-[#1A1A1A]">Password *</label>
                <Link to="/faq" className="text-xs text-[#E53E3E] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                {...register("password", { required: "Password is required" })}
                placeholder="••••••••"
                className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
              />
              {errors.password && (
                <span className="text-xs text-red-500 mt-1 block">{errors.password.message}</span>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="lg"
              className="w-full py-3.5 uppercase tracking-wider text-xs font-bold"
            >
              {isSubmitting ? "Authenticating..." : "Sign In"}
            </Button>
          </form>

          <p className="text-xs text-[#74787C] text-center mt-6">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              state={location.state}
              className="text-[#E53E3E] font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Login;
