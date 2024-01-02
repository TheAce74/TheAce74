import MenuIcon from "./MenuIcon";
import IconBar from "./IconBar";
import Menu from "./Menu";
import { memo, useState } from "react";

export default memo(function MenuItemsWrapper() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="icon__wrapper">
        <MenuIcon setOpenMenu={setOpenMenu} />
        <IconBar />
      </div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
});
