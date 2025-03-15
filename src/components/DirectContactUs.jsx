import React, { useState } from "react";
import bgImage from "../assets/images/direct.jpg";

const DirectContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Gmail URL (Tries to open Gmail App)
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=bela.farmhouse@gmail.com&su=Direct Contact Request&body=
      Name: ${encodeURIComponent(data.name)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AAddress: ${encodeURIComponent(data.address)}
      %0AMessage: ${encodeURIComponent(data.message)}`;

    // Mailto fallback (Opens default email client)
    const mailtoLink = `mailto:bela.farmhouse@gmail.com?subject=Direct Contact Request&body=
      Name: ${encodeURIComponent(data.name)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AAddress: ${encodeURIComponent(data.address)}
      %0AMessage: ${encodeURIComponent(data.message)}`;

    // Try to open Gmail, fallback to mailto if Gmail isn't available
    window.open(gmailLink, "_blank") || (window.location.href = mailtoLink);

    setMessageSent(true);
  };

  return (
    <div className="w-full">
      {/* Preload background image using an invisible <img> and a hidden preload div */}
      <img src={bgImage} alt="preload background" style={{ display: "none" }} fetchpriority="high" />
      <div
        className="hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "1px",
        }}
      />

      <section
        className="relative bg-cover bg-center py-12 px-6 transition-opacity duration-700 ease-in opacity-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Contact Bela Farm House & Eatery
            </h2>
            {messageSent ? (
              <p className="text-green-600 font-bold text-lg text-center">
                Message Sent Successfully! We will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Left Content */}
          <div className="text-white text-center md:text-left flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Bela Farm House & Eatery</h1>
            <p className="text-lg leading-relaxed mb-4">
              Experience the serenity of nature at Bela Farm House & Eatery. Enjoy a peaceful stay in our cozy rooms and indulge in farm-fresh meals prepared with love.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're looking for a weekend getaway, a long retreat, or simply a delicious meal made with organic ingredients, we provide an unforgettable countryside experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectContactUs;
