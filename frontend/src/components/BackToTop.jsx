import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={goToTop}
      title="Go To Top"
      className={`${
        isVisible ? "block" : "hidden"
      } fixed z-50 cursor-pointer bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[var(--color-blue-light)] to-[var(--color-brown)]  hover:bg-purple-700 text-white text-lg font-semibold transition-colors duration-300`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
      </svg>
      <span className="sr-only">Go to top</span>
    </button>
  );
}
