import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GiSmallFire } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { useEffect } from "react";

function IconBar() {
  useEffect(() => {
    const iconBar = document.querySelector(".iconBar");
    const links = iconBar.querySelectorAll("svg");
    setInterval(() => {
      links.forEach((link, index) => {
        if (Number(iconBar.getAttribute("data-section")) === index) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    }, 300);
  }, []);

  return (
    <nav className="iconBar" aria-label="menu icon bar" data-section="0">
      <ul role="list" aria-label="secondary navigation">
        <li>
          <a href="#home" aria-label="go to home" data-title="Home">
            <HiOutlineHome />
          </a>
        </li>
        <li>
          <a href="#about" aria-label="go to about" data-title="About">
            <CgProfile />
          </a>
        </li>
        <li>
          <a href="#skills" aria-label="go to skills" data-title="Skills">
            <GiSmallFire />
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            aria-label="go to portfolio"
            data-title="Portfolio"
          >
            <BsLightningCharge />
          </a>
        </li>
        <li>
          <a
            href="#testimonial"
            aria-label="go to testimonial"
            data-title="Testimonial"
          >
            <BiMessageSquareDetail />
          </a>
        </li>
        <li>
          <a href="#contact" aria-label="go to contact" data-title="Contact">
            <FiMail />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default IconBar;
