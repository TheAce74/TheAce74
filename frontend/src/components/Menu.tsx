import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { Dispatch, SetStateAction } from "react";
import { useClickAway } from "use-click-away-react";
import { useSectionStore } from "@/store/sectionStore";

type MenuProps = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

function Menu({ openMenu, setOpenMenu }: MenuProps) {
  const { section } = useSectionStore();
  const { clickAwayRef } = useClickAway(() => setOpenMenu(false));

  return (
    <section
      className={openMenu ? "menu menu--open" : "menu"}
      aria-label="menu"
      id="menu"
      aria-expanded={openMenu}
      ref={clickAwayRef}
    >
      <div className="menu__wrapper">
        <button
          className="menu__close"
          onClick={() => setOpenMenu(false)}
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
                className={
                  section === 0
                    ? "menu__links menu__links--current"
                    : "menu__links"
                }
                onClick={() => setOpenMenu(false)}
              >
                <HiOutlineHome className="icon" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={
                  section === 1
                    ? "menu__links menu__links--current"
                    : "menu__links"
                }
                onClick={() => setOpenMenu(false)}
              >
                <CgProfile className="icon" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={
                  section === 2
                    ? "menu__links menu__links--current"
                    : "menu__links"
                }
                onClick={() => setOpenMenu(false)}
              >
                <GiSmallFire className="icon" />
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={
                  section === 3
                    ? "menu__links menu__links--current"
                    : "menu__links"
                }
                onClick={() => setOpenMenu(false)}
              >
                <BsLightningCharge className="icon" />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className={
                  section === 4
                    ? "menu__links menu__links--current"
                    : "menu__links"
                }
                onClick={() => setOpenMenu(false)}
              >
                <BiMessageSquareDetail className="icon" />
                <span>Testimonials</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={
                  section === 5
                    ? "menu__links menu__links--current"
                    : "menu__links"
                }
                onClick={() => setOpenMenu(false)}
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
              onClick={() => setOpenMenu(false)}
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
              onClick={() => setOpenMenu(false)}
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
              onClick={() => setOpenMenu(false)}
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
