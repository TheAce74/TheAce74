import Home from "./home";
import MenuIcon from "./menuIcon";
import IconBar from "./iconBar";
import Menu from "./menu";
import About from "./about";
import Skills from "./skills";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import Contact from "./contact";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

function Body() {
  return (
    <section className="body" aria-label="body">
      <Home title="introduce" render={() => <HiOutlineHome />} />
      <div className="body__wrapper">
        <MenuIcon />
        <IconBar />
      </div>
      <Menu />
      <About title="about" render={() => <CgProfile />} />
      <Skills title="my skills" render={() => <GiSmallFire />} />
      <Portfolio title="portfolio" render={() => <BsLightningCharge />} />
      <Testimonial
        title="testimonial"
        render={() => <BiMessageSquareDetail />}
      />
      <Contact title="contact" render={() => <FiMail />} />
    </section>
  );
}

export default Body;
