import resume from "../assets/Chisom Udonsi's Resume.pdf";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

function About({ title, icon, handleOpenMenu }) {
  const control = useAnimation();
  const { ref } = useInView();

  return (
    <motion.section
      className="about"
      aria-label="about"
      id="about"
      onClick={() => handleOpenMenu(false)}
      ref={ref}
      initial="hidden"
      whileInView="visible"
      variants={sectionVariant}
      animate={control}
      viewport={{ once: true }}
    >
      <p className="id">
        <span>{icon()}</span>
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
          <h3>1+</h3>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>PROJECTS COMPLETED</p>
        </div>
        <a href={resume} className="resume" download="Chisom Udonsi's Resume">
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}

export default About;
