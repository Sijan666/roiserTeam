import React, { useEffect, useState } from "react";
import { fetchProductCatalog } from "../data/products";
import { CatalogContext } from "./catalog.context";

export const CatalogProvider = ({ children }) => {
  const [catalog, setCatalog] = useState({ products: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadCatalog = async () => {
      setLoading(true);
      setError(null);
      try {
        const nextCatalog = await fetchProductCatalog(controller.signal);
        setCatalog(nextCatalog);
      } catch (loadError) {
        if (!controller.signal.aborted) {
          setError(
            loadError instanceof Error
              ? loadError
              : new Error("Unable to load the product catalog.")
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadCatalog();
    return () => controller.abort();
  }, [reloadCount]);

  const retry = () => setReloadCount((count) => count + 1);

  return (
    <CatalogContext.Provider value={{ ...catalog, loading, error, retry }}>
      {children}
    </CatalogContext.Provider>
  );
};
