import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useAuth } from "../hooks/useAuth";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [authError, setAuthError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      setAuthError(null);
      await new Promise((r) => setTimeout(r, 600));
      const result = await signup({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      if (!result.success) {
        setAuthError(result.error || "Unable to create account. Please try again.");
        return;
      }
      navigate(location.state?.from || "/", { replace: true });
    } catch {
      setAuthError("Unable to create account. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Account | Roiser eCommerce</title>
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#F5F5F3] py-10 md:py-14 border-b border-gray-200">
        <Container className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
            Create an Account
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] mt-1">
            Join the Roiser community to unlock exclusive member markdowns
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
                Full Name *
              </label>
              <input
                type="text"
                required
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
              />
              {errors.name && (
                <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                {...register("email", { required: "Valid email is required" })}
                placeholder="name@example.com"
                className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                Create Password *
              </label>
              <input
                type="password"
                required
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                placeholder="At least 6 characters"
                className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
              />
              {errors.password && (
                <span className="text-xs text-red-500 mt-1 block">{errors.password.message}</span>
              )}
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                {...register("acceptTerms", { required: "You must accept the terms" })}
                className="accent-[#E53E3E] mt-0.5 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-[#74787C] cursor-pointer leading-tight">
                I agree to the{" "}
                <Link to="/about" className="text-[#E53E3E] underline">
                  Terms of Service
                </Link>{" "}
                and Privacy Policy.
              </label>
            </div>
            {errors.acceptTerms && (
              <span className="text-xs text-red-500 block">{errors.acceptTerms.message}</span>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="lg"
              className="w-full py-3.5 uppercase tracking-wider text-xs font-bold"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <p className="text-xs text-[#74787C] text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              state={location.state}
              className="text-[#E53E3E] font-bold hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Signup;
