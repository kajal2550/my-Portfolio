import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s9njseb",   // ✅ Your EmailJS Service ID
        "template_u28lwup",  // ✅ Your EmailJS Template ID
        form.current,
        "lPm4zGUVXZZxiftVb"  // ✅ Your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-purple-500 transition-colors duration-300 uppercase tracking-wider">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold transition-colors duration-300">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-8 rounded-3xl border border-gray-200 dark:border-white/20 shadow-2xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center transition-colors duration-300">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-gray-50 dark:bg-[#131025] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;