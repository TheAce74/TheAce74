import profilePic from "../assets/image.webp";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FiMail } from "react-icons/fi";

function Profile({ handleOpenMenu }) {
  return (
    <section className="profile" aria-label="profile" onClick={handleOpenMenu}>
      <div className="profile__wrapper">
        <div className="profile__title">
          <h1>
            Chisom <sup aria-hidden="true">C</sup>
          </h1>
          <p>Developer</p>
        </div>
        <div className="profile__img">
          <img src={profilePic} alt="profile picture" />
        </div>
        <p aria-label="email">udonsichisom02@gmail.com</p>
        <p aria-label="location">Based in Imo, Nigeria</p>
        <p>&copy; 2023 Chisom. All Rights Reserved</p>
        <ul role="list" className="profile__socials" aria-label="social links">
          <li>
            <a
              href="https://github.com/TheAce74"
              aria-label="github"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="profile__icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/chisom-udonsi-45196b216/"
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="profile__icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/TheAce74"
              aria-label="frontendmentor"
              target="_blank"
              rel="noreferrer"
            >
              <SiFrontendmentor className="profile__icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/TheAce74"
              aria-label="twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="profile__icon" />
            </a>
          </li>
        </ul>
        <a
          href="https://api.whatsapp.com/send?phone=2347063265056"
          className="profile__email"
        >
          <FiMail />
          HIRE ME!
        </a>
      </div>
    </section>
  );
}

export default Profile;
