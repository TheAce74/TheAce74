import { useEffect } from "react";
import "../../CSS/scroll-top-btn.css";
import { IoIosArrowUp } from "react-icons/io";
import { useRef } from "react";

const ScrollToTopBtn = () => {
  const scrollToTopBtn = useRef(null);
  useEffect(() => {
    const heightThreshold = window.innerHeight * 5;
    window.addEventListener("scroll", () => {
      if (window.scrollY > heightThreshold) {
        scrollToTopBtn.current.classList.add("show-scroll-btn");
      } else {
        scrollToTopBtn.current.classList.remove("show-scroll-btn");
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
  };
  return (
    <button
      ref={scrollToTopBtn}
      id="scrollToTop"
      className="app__scroll-to-top-btn "
      onClick={scrollToTop}
    >
      <span className="sr-only">Scroll to top</span>
      <IoIosArrowUp className="scroll-btn-arrow-up-icon" />
    </button>
  );
};

export default ScrollToTopBtn;
