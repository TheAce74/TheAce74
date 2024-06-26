import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import Home from "@/components/Home";
import MenuItemsWrapper from "@/components/MenuItemsWrapper";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

function Body() {
  return (
    <section className="body" aria-label="body">
      <Home title="introduction" icon={<HiOutlineHome />} />
      <MenuItemsWrapper />
      <About title="about" icon={<CgProfile />} />
      <Skills title="my skills" icon={<GiSmallFire />} />
      <Portfolio title="portfolio" icon={<BsLightningCharge />} />
      <Testimonials title="testimonials" icon={<BiMessageSquareDetail />} />
      <Contact title="contact" icon={<FiMail />} />
    </section>
  );
}

export default Body;
