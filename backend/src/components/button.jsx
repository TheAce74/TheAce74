import { useEffect, useRef } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function Button() {
  const ref = useRef(null);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
      }
    }

    document.addEventListener("scroll", scrollFunction);

    return () => {
      document.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button ref={ref} id="topbtn" onClick={topFunction} title="Go to top">
      <FaChevronUp />
    </button>
  );
}
