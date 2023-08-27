import { HiOutlineMenuAlt4 } from "react-icons/hi";
function MenuIcon({ handleOpenMenu }) {
  return (
    <button
      className="menuIcon"
      aria-controls="menu"
      aria-label="open menu"
      onClick={() => handleOpenMenu(true)}
    >
      <HiOutlineMenuAlt4 />
    </button>
  );
}

export default MenuIcon;
