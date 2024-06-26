import { memo } from "react";
import { BsArrowUp } from "react-icons/bs";

type ArrowProps = {
  arrow: boolean;
};

export default memo(function Arrow({ arrow }: ArrowProps) {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0 });
      }}
      className={arrow ? "arrow arrow--shown" : "arrow"}
      key="arrow"
    >
      <BsArrowUp />
    </button>
  );
});
