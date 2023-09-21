import Home from "./home";
import MenuIcon from "./menuIcon";
import IconBar from "./iconBar";
import Menu from "./menu";
import About from "./about";
import Skills from "./skills";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import Contact from "./contact";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { memo } from "react";

function Body() {
  return (
    <section className="body" aria-label="body">
      <Home title="introduction" icon={<HiOutlineHome />} />
      <div className="icon__wrapper">
        <MenuIcon />
        <IconBar />
      </div>
      <Menu />
      <About title="about" icon={<CgProfile />} />
      <Skills title="my skills" icon={<GiSmallFire />} />
      <Portfolio title="portfolio" icon={<BsLightningCharge />} />
      <Testimonials title="testimonials" icon={<BiMessageSquareDetail />} />
      <Contact title="contact" icon={<FiMail />} />
    </section>
  );
}

export default memo(Body);
