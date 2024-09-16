"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 p-4">
      {/* Contact Section */}
      <section className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Get In Touch
        </h2>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Contact Information</h3>
          <p className="text-lg text-gray-600 mb-2">
            Mobile: <span className="font-medium text-gray-800">9848430888</span>
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Email: <a href="mailto:anishjoshi1999@gmail.com" className="text-blue-500 hover:underline">anishjoshi1999@gmail.com</a>
          </p>
          <p className="text-lg text-gray-600">
            LinkedIn: <a href="https://www.linkedin.com/in/anishjoshi1999" className="text-blue-500 hover:underline">linkedin.com/in/anishjoshi1999</a>
          </p>
        </div>

        {/* Contact Form */}
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-xl text-green-600 font-semibold mt-6">
            Thank you for your message! I will get back to you soon.
          </div>
        )}
      </section>

      
    </div>
  );
}
