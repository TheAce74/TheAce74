import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";

type MenuIconProps = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export default function MenuIcon({ setOpenMenu }: MenuIconProps) {
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
}
