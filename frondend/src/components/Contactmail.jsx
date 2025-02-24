import React from "react";

const Contactm = () => {
  // WhatsApp link (replace with your WhatsApp number or link)
  const whatsappLink = "https://wa.me/+918344292756"; // Replace with your WhatsApp number
  const emailLink = "mailto:chandaji628@gmail.com"; // Replace with your email

  return (
    // <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
    //   <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>

      <div className="flex gap-8">

        {/* Email Icon */}
        <a
          href={emailLink}
          className="flex items-center justify-center w-9 h-9 rounded-full shadow-lg hover:scale-150 transform transition-transform duration-500"
        >
          <img src="assets/gmaillogo.svg" alt="gmail" />
        </a>
      </div>

  );
};

export default Contactm;
