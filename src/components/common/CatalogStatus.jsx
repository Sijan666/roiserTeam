import React from "react";
import Container from "./Container";
import Button from "./Button";

const CatalogStatus = ({ loading, error, onRetry }) => {
  if (loading) {
    return (
      <Container className="py-20 flex flex-col items-center justify-center gap-4 text-center">
        <div
          role="status"
          aria-label="Loading catalog"
          className="w-10 h-10 border-4 border-[#E53E3E]/20 border-t-[#E53E3E] rounded-full animate-spin"
        />
        <p className="text-sm text-[#74787C]">Loading products from DummyJSON...</p>
      </Container>
    );
  }

  if (!error) return null;

  return (
    <Container className="py-20 text-center">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Catalog unavailable</h2>
      <p role="alert" className="text-sm text-[#74787C] mb-6">
        Could not load products from DummyJSON. {error.message}
      </p>
      <Button onClick={onRetry} variant="primary">
        Try again
      </Button>
    </Container>
  );
};

export default CatalogStatus;
