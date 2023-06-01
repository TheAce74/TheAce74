/* eslint-disable react/prop-types */
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

function IconBar({ currentSection, handleTravel }) {
  return (
    <aside className="iconBar" aria-label="menu icon bar">
      <a
        href="#home"
        aria-label="go to home"
        onClick={() => handleTravel(0)}
        data-title="Home"
      >
        <HiOutlineHome className={currentSection === 0 ? "current" : ""} />
      </a>
      <a
        href="#about"
        aria-label="go to about"
        onClick={() => handleTravel(1)}
        data-title="About"
      >
        <CgProfile className={currentSection === 1 ? "current" : ""} />
      </a>
      <a
        href="#skills"
        aria-label="go to skills"
        onClick={() => handleTravel(2)}
        data-title="Skills"
      >
        <GiSmallFire className={currentSection === 2 ? "current" : ""} />
      </a>
      <a
        href="#portfolio"
        aria-label="go to portfolio"
        onClick={() => handleTravel(3)}
        data-title="Portfolio"
      >
        <BsLightningCharge className={currentSection === 3 ? "current" : ""} />
      </a>
      <a
        href="#testimonial"
        aria-label="go to testimonial"
        onClick={() => handleTravel(4)}
        data-title="Testimonial"
      >
        <BiMessageSquareDetail
          className={currentSection === 4 ? "current" : ""}
        />
      </a>
      <a
        href="#contact"
        aria-label="go to contact"
        onClick={() => handleTravel(5)}
        data-title="Contact"
      >
        <FiMail className={currentSection === 5 ? "current" : ""} />
      </a>
    </aside>
  );
}

export default IconBar;
