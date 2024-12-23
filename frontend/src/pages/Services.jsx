import React from "react";
import Navbar from "../components/Navbar";
import GoToTop from "../components/GoToTop";

const Services = () => {
  const services = [
    {
      title: "Single Language Support",
      description:
        "Currently, we support a single programming language to help you focus on coding without the distraction of switching between multiple languages.",
      icon: "💻",
    },
    {
      title: "Instant Code Execution",
      description:
        "Run your code instantly and get feedback directly in the editor, helping you identify and correct errors quickly.",
      icon: "⚡",
    },
    {
      title: "User-Friendly Interface",
      description:
        "A clean and intuitive interface designed to make coding more efficient and less cluttered, so you can focus solely on writing your code.",
      icon: "🖥️",
    },
    {
      title: "Customizable Themes",
      description:
        "Customize the look and feel of the editor with light and dark themes to create the perfect environment for your coding sessions.",
      icon: "🎨",
    },
    {
      title: "Secure File Storage",
      description:
        "Keep your projects safe with secure, encrypted storage, allowing you to access them from anywhere at any time.",
      icon: "🔐",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="services bg-[#141414] text-white py-16 px-6 mt-[4rem]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#FF4343]">Our Services</h2>
          <p className="text-lg mb-12 text-gray-300">
            Discover the features and services that make our online code editor the perfect tool for developers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-[#202020] text-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="icon text-4xl mb-4 text-[#FF4343]">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <GoToTop />
      </section>
    </>
  );
};

export default Services;
