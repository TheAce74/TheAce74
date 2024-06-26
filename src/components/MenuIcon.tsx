import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Dispatch, SetStateAction, memo } from "react";

type MenuIconProps = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export default memo(function MenuIcon({ setOpenMenu }: MenuIconProps) {
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
