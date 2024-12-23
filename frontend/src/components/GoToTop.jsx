// src/components/GoToTop.js
import React, { useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Listen for scroll events
  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={goToTop}
        className="fixed bottom-6 right-6 bg-[#FF4343] text-white p-4 rounded-full shadow-lg hover:bg-[#ff5c5c] transition duration-200 animate-bounce"
      >
        <FaLongArrowAltUp className="text-2xl animate-pulse" />
      </button>
    )
  );
};

export default GoToTop;
