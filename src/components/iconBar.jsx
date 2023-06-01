/* eslint-disable react/prop-types */
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

function IconBar({ currentSection }) {
  return (
    <aside className="iconBar" aria-label="menu icon bar">
      <a href="#home" aria-label="go to home" data-title="Home">
        <HiOutlineHome className={currentSection === 0 ? "current" : ""} />
      </a>
      <a href="#about" aria-label="go to about" data-title="About">
        <CgProfile className={currentSection === 1 ? "current" : ""} />
      </a>
      <a href="#skills" aria-label="go to skills" data-title="Skills">
        <GiSmallFire className={currentSection === 2 ? "current" : ""} />
      </a>
      <a href="#portfolio" aria-label="go to portfolio" data-title="Portfolio">
        <BsLightningCharge className={currentSection === 3 ? "current" : ""} />
      </a>
      <a
        href="#testimonial"
        aria-label="go to testimonial"
        data-title="Testimonial"
      >
        <BiMessageSquareDetail
          className={currentSection === 4 ? "current" : ""}
        />
      </a>
      <a href="#contact" aria-label="go to contact" data-title="Contact">
        <FiMail className={currentSection === 5 ? "current" : ""} />
      </a>
    </aside>
  );
}

export default IconBar;
