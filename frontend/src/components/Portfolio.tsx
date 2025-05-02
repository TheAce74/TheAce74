import { v4 as uuidv4 } from "uuid";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { ReactNode, memo, useMemo } from "react";
import { useSpinner } from "@/hooks/useSpinner";
import { InView } from "react-intersection-observer";
import { PROJECTS } from "@/utils/constants";
import { useSectionStore } from "@/store/sectionStore";

type PortfolioProps = {
  title: string;
  icon: ReactNode;
};

function Portfolio({ title, icon }: PortfolioProps) {
  const { spinner, spinnerRef, loading } = useSpinner();
  const { setSection, section } = useSectionStore();
  const projects = useMemo(() => PROJECTS, []);

  return (
    <InView
      as="section"
      className="portfolio"
      aria-label="portfolio"
      id="portfolio"
      onChange={(inView) => {
        if (inView && section !== 3) {
          setSection(3);
        }
      }}
    >
      <p className="id">
        <span>{icon}</span>
        <span>{title}</span>
      </p>
      <h2 className="portfolio__heading">
        Featured <span>Projects</span>
      </h2>
      <div className="portfolio__projects">
        {projects.map((project) => (
          <div key={uuidv4()}>
            <div className="portfolio__project">
              {spinner()}
              <img
                src={project.pic}
                alt={`${project.title} image`}
                loading="lazy"
                ref={spinnerRef}
                className={
                  loading ? "portfolio__img spinner-show" : "portfolio__img"
                }
              />
              <div className="portfolio__container">
                <div className="portfolio__tags" aria-label="tools used">
                  {project.tools.map((tool) => (
                    <span key={uuidv4()}>{tool}</span>
                  ))}
                </div>
                <div className="portfolio__links">
                  <a
                    href={project.github}
                    aria-label="View on GitHub"
                    title="View on GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href={project.link}
                    aria-label="View Live Site"
                    title="View Live Site"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLinkExternal />
                  </a>
                </div>
              </div>
            </div>
            <p className="portfolio__title">{project.title}</p>
          </div>
        ))}
      </div>
    </InView>
  );
}

export default memo(Portfolio);
