import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { faqs } from "../data/faqs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState("faq-1");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const categories = ["all", "Orders & Shipping", "Returns & Exchanges", "Payments & Security", "Product & Sizing"];

  const filteredFaqs = faqs.filter(
    (f) => selectedCategory === "all" || f.category === selectedCategory
  );

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | Roiser</title>
        <meta
          name="description"
          content="Answers to questions regarding shipping speeds, returns, international duties, sizing, and order payments at Roiser."
        />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#F5F5F3] py-12 md:py-16 border-b border-gray-200">
        <Container className="text-center max-w-2xl">
          <span className="text-xs font-bold text-[#E53E3E] uppercase tracking-widest block mb-2">
            Help & Customer Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] mt-2 leading-relaxed">
            Everything you need to know about placing an order, garment care, and our 30-day worldwide guarantee.
          </p>
        </Container>
      </div>

      <Container className="py-12 md:py-20">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#E53E3E] text-white shadow-xs"
                  : "bg-gray-100 text-[#1A1A1A] hover:bg-gray-200"
              }`}
            >
              {cat === "all" ? "All Questions" : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* FAQ Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-[#1A1A1A] hover:text-[#E53E3E] transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <MdKeyboardArrowDown
                      className={`text-xl shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#E53E3E]" : "text-gray-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#74787C] leading-relaxed border-t border-gray-100 bg-[#FAFAFA]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ask a Question Box */}
          <div className="lg:col-span-5 bg-[#F6F6F7] border border-gray-200 rounded-md p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-[#1A1A1A] font-Jost uppercase tracking-wide">
              Still Have Questions?
            </h3>
            <p className="text-xs text-[#74787C] leading-relaxed">
              If your inquiry isn't covered in our FAQs, send our support team a direct note and we will reply within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs flex items-center gap-2.5">
                <FiCheckCircle className="text-emerald-600 text-lg shrink-0" />
                <span>Thank you! Your message has been received. Our support team will get back to you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuestion} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows="4"
                    placeholder="Your Question / Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs p-3 bg-white border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
                  />
                </div>
                <Button type="submit" variant="primary" size="md" className="w-full">
                  Submit Question
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
