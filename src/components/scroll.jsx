import { memo } from "react";
import { BsArrowUp } from "react-icons/bs";

export default memo(function Scroll({ scroll }) {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0 });
      }}
      className={scroll ? "arrow arrow--shown" : "arrow"}
      key="arrow"
    >
      <BsArrowUp />
    </button>
  );
});
