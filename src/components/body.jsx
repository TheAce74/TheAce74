/* eslint-disable react/prop-types */
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
import { useState, useEffect } from "react";

function Body({ openMenu, handleOpenMenu }) {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const section = {
      home: 0,
      about: 1,
      skills: 2,
      portfolio: 3,
      testimonial: 4,
      contact: 5,
    };

    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    const skills = document.querySelector(".skills");
    const portfolio = document.querySelector(".portfolio");
    const testimonial = document.querySelector(".testimonial");
    const contact = document.querySelector(".contact");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const value = entry.target.className;
            setCurrentSection(section[value]);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(home);
    observer.observe(about);
    observer.observe(skills);
    observer.observe(portfolio);
    observer.observe(testimonial);
    observer.observe(contact);
  }, []);

  return (
    <section className="body" aria-label="body">
      <Home
        title="introduction"
        icon={() => <HiOutlineHome />}
        handleOpenMenu={handleOpenMenu}
      />
      <div className="icon__wrapper">
        <MenuIcon handleOpenMenu={handleOpenMenu} />
        <IconBar currentSection={currentSection} />
      </div>
      <Menu
        openMenu={openMenu}
        handleOpenMenu={handleOpenMenu}
        currentSection={currentSection}
      />
      <About
        title="about"
        icon={() => <CgProfile />}
        handleOpenMenu={handleOpenMenu}
      />
      <Skills
        title="my skills"
        icon={() => <GiSmallFire />}
        handleOpenMenu={handleOpenMenu}
      />
      <Portfolio
        title="portfolio"
        icon={() => <BsLightningCharge />}
        handleOpenMenu={handleOpenMenu}
      />
      <Testimonial
        title="testimonial"
        icon={() => <BiMessageSquareDetail />}
        handleOpenMenu={handleOpenMenu}
      />
      <Contact
        title="contact"
        icon={() => <FiMail />}
        handleOpenMenu={handleOpenMenu}
      />
    </section>
  );
}

export default Body;
