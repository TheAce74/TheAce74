import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiDownload, FiMail } from "react-icons/fi";
import { loader } from "./loader";
import resume from "../assets/resume.pdf";

export default function Header() {
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    loader();
  }, []);

  return (
    <>
      <div id="overlay" className="preloader">
        <h1 id="loader"></h1>
      </div>
      <header>
        <div className="brand text-sm">
          <b>Chisom</b>Udonsi
        </div>
        <div className="nav nav-links hide-sm">
          <li className="nav-item">
            <a href="#about"> About</a>
          </li>
          <li className="nav-item">
            <a href="#work">Works</a>
          </li>
          <li className="nav-item">
            <a href="#review">Reviews</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </div>
        <div className="social">
          <li className="social-item hide-sm">
            <FaXTwitter style={{ marginRight: 10 }} />
            <a href="https://twitter.com/TheAce74" target="_blank">
              {" "}
              Twitter
            </a>
          </li>
          <li className="social-item hide-sm">
            <FaGithub style={{ marginRight: 10 }} />
            <a href="https://github.com/TheAce74" target="_blank">
              {" "}
              Github
            </a>
          </li>
          <li className="social-item hide-sm">
            <div className="circle hide-sm">
              <a href="mailto:udonsichisom02@gmail.com">
                <FiMail color="#1290cd" />
              </a>
            </div>
          </li>
          <div
            onClick={() => toggleModal()}
            className={`show-sm hide-lg hamburger ${
              modalState ? `change-bg` : ``
            }`}
          >
            <div
              className={`line line1 ${modalState ? `transform-line1` : ``}`}
            ></div>
            <div
              className={`line line2 ${modalState ? `transform-line2` : ``}`}
            ></div>
            <div
              className={`line line3 ${modalState ? `transform-line3` : ``}`}
            ></div>
          </div>
        </div>
      </header>
      <div className={`menu ${modalState ? `expand-menu` : ``}`}>
        <div className="menu-items">
          <h2>The Ace</h2>
          <span>
            <FaXTwitter
              onClick={() => {
                window.open("https://twitter.com/TheAce74", "_blank");
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaLinkedin
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/chisom-udonsi",
                  "_blank"
                );
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaGithub
              onClick={() => {
                window.open("https://github.com/TheAce74", "_blank");
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaWhatsapp
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send?phone=2347063265056",
                  "_blank"
                );
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaStackOverflow
              onClick={() => {
                window.open(
                  "https://stackoverflow.com/users/22462999/chisom-udonsi",
                  "_blank"
                );
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
          </span>
          <a href={resume} download="chisom_udonsi_resume" target="_blank">
            <h3>
              Download Resume <FiDownload />
            </h3>
          </a>

          <h2>Menu</h2>
          <div className="menu_list">
            <a
              onClick={() => toggleModal()}
              className="menu-link"
              href="#about"
            >
              About
            </a>
            <a onClick={() => toggleModal()} className="menu-link" href="#work">
              Works
            </a>
            <a
              onClick={() => toggleModal()}
              className="menu-link"
              href="#review"
            >
              Reviews
            </a>
            <a
              onClick={() => toggleModal()}
              className="menu-link"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
