import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import contactMap from "../assets/contactMap.png";
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Customer Concierge | Roiser</title>
        <meta
          name="description"
          content="Get in touch with Roiser customer concierge for bespoke tailoring appointments, sizing queries, and order support."
        />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#F5F5F3] py-12 md:py-16 border-b border-gray-200">
        <Container className="text-center max-w-xl">
          <span className="text-xs font-bold text-[#E53E3E] uppercase tracking-widest block mb-2">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-Jost">
            Contact Customer Concierge
          </h1>
          <p className="text-xs sm:text-sm text-[#74787C] mt-2">
            We are here to assist with sizing consultations, shipping inquiries, and boutique bookings.
          </p>
        </Container>
      </div>

      <Container className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-md p-6 sm:p-10 shadow-xs">
            <h2 className="text-2xl font-bold text-[#1A1A1A] font-Jost mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-[#74787C] mb-8">
              Fill out the form below and a personal concierge will respond within one business day.
            </p>

            {submitted ? (
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-sm flex items-start gap-3">
                <FiCheckCircle className="text-emerald-600 text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm mb-1">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you for reaching out. We have received your inquiry and a dedicated specialist will contact you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Custom sizing or order inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Describe how we can help you today..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 border border-gray-300 rounded outline-none focus:border-[#E53E3E]"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Right 5 Columns: Showroom Details & Graphic */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8F9FA] border border-gray-200 rounded-md p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-[#1A1A1A] font-Jost">
                Headquarters & Flagship
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#74787C]">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[#E53E3E] text-base shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block">Berlin Flagship Boutique:</strong>
                    Friedrichstraße 140, 10117 Berlin, Germany
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiPhone className="text-[#E53E3E] text-base shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block">Toll-Free Phone:</strong>
                    +(258) 2159-2159 / +1 800-459-2159
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMail className="text-[#E53E3E] text-base shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block">Direct Email:</strong>
                    concierge@roiser-fashion.com
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="text-[#E53E3E] text-base shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1A1A] block">Showroom Hours:</strong>
                    Mon – Fri: 8:00am – 6:00pm<br />
                    Saturday: 9:00am – 5:00pm<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>

            {/* Map Graphic */}
            <div className="rounded-md overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src={contactMap}
                alt="Showroom Map Location"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
