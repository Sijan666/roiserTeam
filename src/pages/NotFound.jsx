import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import errorImg from "../assets/error.png";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found | Roiser eCommerce</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Container className="site-page-enter py-16 text-center md:py-24">
        <div className="max-w-md mx-auto mb-8">
          <img
            src={errorImg}
            alt="404 Page Not Found"
            className="w-full h-auto object-contain max-h-72 mx-auto"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-[#1A1A1A] font-Jost mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#74787C] max-w-md mx-auto mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg">
              Back to Homepage
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="outlineDark" size="lg">
              Explore Our Shop
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
