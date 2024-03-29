import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { memo } from "react";

export default memo(function MenuIcon({ setOpenMenu }) {
  return (
    <button
      className="menuIcon"
      aria-controls="menu"
      aria-label="open menu"
      onClick={() => setOpenMenu(true)}
    >
      <HiOutlineMenuAlt4 />
    </button>
  );
});
