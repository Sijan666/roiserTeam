import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
import { CatalogProvider } from "./context/CatalogContext";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <CatalogProvider>
            <WishlistProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </WishlistProvider>
          </CatalogProvider>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>
  </HelmetProvider>
);
