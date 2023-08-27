import { FaHtml5, FaCss3Alt, FaReact, FaYarn } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNpm } from "react-icons/io";
import {
  SiSass,
  SiReactrouter,
  SiRedux,
  SiJquery,
  SiVite,
  SiFramer,
  SiSwiper,
  SiAxios,
  SiJson,
} from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

function Skills({ title, icon, handleOpenMenu }) {
  const skills = [
    {
      title: "HTML",
      icon: () => <FaHtml5 />,
      level: 100,
    },
    {
      title: "CSS",
      icon: () => <FaCss3Alt />,
      level: 100,
    },
    {
      title: "JavaScript",
      icon: () => <IoLogoJavascript />,
      level: 100,
    },
    {
      title: "React",
      icon: () => <FaReact />,
      level: 70,
    },
    {
      title: "Sass",
      icon: () => <SiSass />,
      level: 90,
    },
    {
      title: "React Router",
      icon: () => <SiReactrouter />,
      level: 100,
    },
    {
      title: "NPM",
      icon: () => <IoLogoNpm />,
      level: 100,
    },
    {
      title: "Yarn",
      icon: () => <FaYarn />,
      level: 100,
    },
    {
      title: "Git",
      icon: () => <BsGit />,
      level: 75,
    },
    {
      title: "GitHub",
      icon: () => <BsGithub />,
      level: 80,
    },
    {
      title: "Redux",
      icon: () => <SiRedux />,
      level: 80,
    },
    {
      title: "jQuery",
      icon: () => <SiJquery />,
      level: 62,
    },
    {
      title: "Vite",
      icon: () => <SiVite />,
      level: 70,
    },
    {
      title: "VS Code",
      icon: () => <TbBrandVscode />,
      level: 80,
    },
    {
      title: "Framer Motion",
      icon: () => <SiFramer />,
      level: 50,
    },
    {
      title: "Swiper JS",
      icon: () => <SiSwiper />,
      level: 90,
    },
    {
      title: "Axios",
      icon: () => <SiAxios />,
      level: 96,
    },
    {
      title: "JSON",
      icon: () => <SiJson />,
      level: 100,
    },
  ];
  return (
    <section
      className="skills"
      aria-label="skills"
      id="skills"
      onClick={() => handleOpenMenu(false)}
    >
      <p className="id">
        <span>{icon()}</span>
        <span>{title}</span>
      </p>

      <h2 className="skills__heading">
        My <span>Savvy</span>
      </h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div className="skills__card" key={uuidv4()}>
            <div
              className={`skills__icon ${skill.title
                .split(" ")
                .join("")
                .toLowerCase()}`}
            >
              {skill.icon()}
            </div>
            <h3 className="skills__title">{skill.title}</h3>
            <p className="skills__level">{`${skill.level}%`}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
