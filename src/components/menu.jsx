import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

function Menu({ openMenu, handleOpenMenu}) {
  useEffect(() => {
    // since "display: none;" isn't transitionable, i came up with this hack
    const menu = document.querySelector(".menu");
    const timer = setTimeout(() => {
      menu.className = openMenu ? "menu menu--open slide" : "menu";
    }, 0);

    const links = menu.querySelectorAll(".menu__links");
    setInterval(() => {
      links.forEach((link, index) => {
        if (Number(menu.getAttribute("data-section")) === index) {
          link.classList.add("menu__links--current");
        } else {
          link.classList.remove("menu__links--current");
        }
      });
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [openMenu]);

  return (
    <section
      className={openMenu ? "menu menu--open" : "menu"}
      aria-label="menu"
      id="menu"
      aria-expanded={openMenu}
      data-section="0"
    >
      <div className="menu__wrapper">
        <button
          className="menu__close"
          onClick={() => handleOpenMenu(false)}
          aria-label="close menu"
          aria-controls="menu"
        >
          <IoMdClose />
        </button>

        <h2>Menu</h2>
        <nav aria-label="primary navigation">
          <ul role="list" className="menu__list">
            <li>
              <a
                href="#home"
                className="menu__links"
              >
                <HiOutlineHome className="icon" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="menu__links"
              >
                <CgProfile className="icon" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="menu__links"
              >
                <GiSmallFire className="icon" />
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="menu__links"
              >
                <BsLightningCharge className="icon" />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="menu__links"
              >
                <BiMessageSquareDetail className="icon" />
                <span>Testimonial</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="menu__links"
              >
                <FiMail className="icon" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>

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
