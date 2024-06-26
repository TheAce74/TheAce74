import IconBar from "@/components/IconBar";
import Menu from "@/components/Menu";
import MenuIcon from "@/components/MenuIcon";
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
