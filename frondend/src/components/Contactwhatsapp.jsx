import React from "react";

const Contactw = () => {
  // WhatsApp link (replace with your WhatsApp number or link)
  const whatsappLink = "https://wa.me/+918344292756"; // Replace with your WhatsApp number

  return (
    // <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
    //   <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>

      <div className="flex gap-8">
        {/* WhatsApp Icon */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-full shadow-3lg hover:scale-150 transform transition-transform duration-500"
        >
    <img src="assets/whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
    // </div>
  );
};

export default Contactw;
