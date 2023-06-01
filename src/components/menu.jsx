/* eslint-disable react/prop-types */
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { IoMdClose } from "react-icons/io";

function Menu({ openMenu, handleOpenMenu, currentSection }) {
  return (
    <section
      className={openMenu ? "menu menu--open" : "menu"}
      aria-label="menu"
      id="menu"
    >
      <div className="menu__wrapper">
        <button className="menu__close" onClick={() => handleOpenMenu(false)}>
          <IoMdClose />
        </button>

        <h2>Menu</h2>
        <ul role="list" className="menu__list">
          <li>
            <a
              href="#home"
              className={
                currentSection === 0
                  ? "menu__links menu__links--current"
                  : "menu__links"
              }
              onClick={() => handleOpenMenu(false)}
            >
              <HiOutlineHome className="icon" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={
                currentSection === 1
                  ? "menu__links menu__links--current"
                  : "menu__links"
              }
              onClick={() => handleOpenMenu(false)}
            >
              <CgProfile className="icon" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={
                currentSection === 2
                  ? "menu__links menu__links--current"
                  : "menu__links"
              }
              onClick={() => handleOpenMenu(false)}
            >
              <GiSmallFire className="icon" />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={
                currentSection === 3
                  ? "menu__links menu__links--current"
                  : "menu__links"
              }
              onClick={() => handleOpenMenu(false)}
            >
              <BsLightningCharge className="icon" />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className={
                currentSection === 4
                  ? "menu__links menu__links--current"
                  : "menu__links"
              }
              onClick={() => handleOpenMenu(false)}
            >
              <BiMessageSquareDetail className="icon" />
              <span>Testimonial</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={
                currentSection === 5
                  ? "menu__links menu__links--current"
                  : "menu__links"
              }
              onClick={() => handleOpenMenu(false)}
            >
              <FiMail className="icon" />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        <h2>Social</h2>
        <ul role="list" className="menu__socials" aria-label="social links">
          <li>
            <a
              href="https://www.linkedin.com/in/chisom-udonsi-45196b216/"
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              onClick={() => handleOpenMenu(false)}
            >
              <FaLinkedin className="menu__icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/TheAce74"
              aria-label="frontendmentor"
              target="_blank"
              rel="noreferrer"
              onClick={() => handleOpenMenu(false)}
            >
              <SiFrontendmentor className="menu__icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/TheAce74"
              aria-label="twitter"
              target="_blank"
              rel="noreferrer"
              onClick={() => handleOpenMenu(false)}
            >
              <FaTwitter className="menu__icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Menu;
