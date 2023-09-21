import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useAppContext } from "../context/AppContext";
import { memo } from "react";

export default memo(function MenuIcon() {
  const { setOpenMenu } = useAppContext();

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
