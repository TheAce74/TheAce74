import { FiCode, FiDatabase, FiDownload, FiSmartphone } from "react-icons/fi";
import resume from "../assets/resume.pdf";

export default function About() {
  return (
    <>
      <div className="about col-sm" id="about">
        <div className="about-tabs col-item m-0">
          <div className="tab m-sm">
            <div className="text">
              <h2>Web</h2>
              <p>
                I build high-performance APIs and backend services for the web.
              </p>
              <p className="project">10 PROJECTS</p>
            </div>
            <div className="icon">
              <FiCode color="#1290cd" size={25} />
            </div>
          </div>
          <div className="tab m-sm">
            <div className="text">
              <h2>Desktop</h2>
              <p>
                I develop scalable and secure backend systems for desktop
                applications.
              </p>
              <p className="project">2 PROJECTS</p>
            </div>
            <div className="icon">
              <FiDatabase color="#1290cd" size={25} />
            </div>
          </div>
          <div className="tab m-sm">
            <div className="text">
              <h2>Mobile</h2>
              <p>
                I power mobile applications with fast and reliable backend
                services.
              </p>
              <p className="project">3 PROJECTS</p>
            </div>
            <div className="icon">
              <FiSmartphone color="#1290cd" size={25} />
            </div>
          </div>
        </div>
        <div className="about-text col-item p-adjust">
          <p>The Intro</p>
          <h2 className="text-center txt-dmn">
            Hi buddy ✌ <br />
            I&apos;m Chisom Udonsi
          </h2>
          <i className="quote text-xs">
            the journey of a thousand lines of code begins with one{" "}
            <span style={{ color: "#1290cd", fontWeight: "bold" }}>
              Hello World...
            </span>
          </i>
          <p>
            Looking back from when I wrote my first express app, it has been a
            rollercoaster. From feeling like a genius when everything works
            seamlessly to sleepless nights debugging server errors and
            optimizing database queries. Nevertheless, I've built scalable
            backend systems for clients and collaborated with talented engineers
            to develop robust and secure digital products. I'm quietly
            confident, naturally curious, and always refining my skills to write
            efficient, maintainable, and high-performing backend solutions.
          </p>
          <a href={resume} download="chisom_udonsi_resume" target="_blank">
            <button className="text-xs">
              Download Resume <FiDownload />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
