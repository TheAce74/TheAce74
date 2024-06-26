import { ReactNode } from "react";
import resume from "@/assets/Chisom Udonsi's Resume.pdf";
import { useAppContext } from "@/context/AppContext";
import { InView } from "react-intersection-observer";

type AboutProps = {
  title: string;
  icon: ReactNode;
};

function About({ title, icon }: AboutProps) {
  const { setSection, section } = useAppContext();

  return (
    <InView
      as="section"
      className="about"
      aria-label="about"
      id="about"
      onChange={(inView) => {
        if (inView && section !== 1) {
          setSection(1);
        }
      }}
    >
      <p className="id">
        <span>{icon}</span>
        <span>{title}</span>
      </p>
      <h2 className="about__heading">
        Unleashing the Power of <span>Frontend Magic</span>
      </h2>
      <p className="about__info">
        Since the early days of my coding adventure, I have immersed myself in
        the world of frontend development. From tinkering with HTML and CSS to
        exploring the dynamic realms of JavaScript and modern frameworks, my
        journey has been a fascinating exploration of endless possibilities.
      </p>
      <div className="about__extra">
        <div>
          <h3>3+</h3>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div>
          <h3>85+</h3>
          <p>PROJECTS COMPLETED</p>
        </div>
        <a href={resume} className="resume" download="Chisom Udonsi's Resume">
          Download Resume
        </a>
      </div>
    </InView>
  );
}

export default About;
