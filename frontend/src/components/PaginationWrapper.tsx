import Arrow from "@/components/Arrow";
import { useEffect, useState } from "react";

function PaginationWrapper() {
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      (document.querySelector(".pagination") as HTMLDivElement).style.width =
        scrolled + "%";
      if (window.scrollY > 500) {
        setArrow(true);
      } else {
        setArrow(false);
      }
    });
  }, []);

  return (
    <>
      <div className="pagination"></div>
      <Arrow arrow={arrow} />
    </>
  );
}

export default PaginationWrapper;
