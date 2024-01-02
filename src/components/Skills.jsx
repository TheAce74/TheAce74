import { v4 as uuidv4 } from "uuid";
import { skills } from "../data/skills";
import { memo } from "react";
import { useAppContext } from "../context/AppContext";
import { InView } from "react-intersection-observer";

function Skills({ title, icon }) {
  const { setSection } = useAppContext();

  return (
    <InView
      as="section"
      className="skills"
      aria-label="skills"
      id="skills"
      onChange={(inView) => {
        if (inView) {
          setSection(2);
        }
      }}
    >
      <p className="id">
        <span>{icon}</span>
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
              {skill.icon}
            </div>
            <h3 className="skills__title">{skill.title}</h3>
            <p className="skills__level">{`${skill.level}%`}</p>
          </div>
        ))}
      </div>
    </InView>
  );
}

export default memo(Skills);
