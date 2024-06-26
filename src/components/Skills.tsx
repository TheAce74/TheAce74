import { v4 as uuidv4 } from "uuid";
import { ReactNode, memo } from "react";
import { InView } from "react-intersection-observer";
import { useAppContext } from "@/context/AppContext";
import { SKILLS } from "@/utils/constants";

type SkillsProps = {
  title: string;
  icon: ReactNode;
};

function Skills({ title, icon }: SkillsProps) {
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
        My <span>Tech Savvy</span>
      </h2>
      <div className="skills__grid">
        {SKILLS.map((skill) => (
          <div className="skills__card" key={uuidv4()}>
            <div
              className={`skills__icon ${skill.title
                .split(/\s+|\./)
                .join("")
                .toLowerCase()}`}
            >
              {skill.icon}
            </div>
            <h3 className="skills__title">{skill.title}</h3>
          </div>
        ))}
      </div>
    </InView>
  );
}

export default memo(Skills);
