/* eslint-disable react/prop-types */
import shortly from "../assets/shortly.webp";
import femCountries from "../assets/fem-countries.webp";
import musicPlayer from "../assets/music-player.webp";
import ecommerce from "../assets/e-commerce.webp";
import todoApp from "../assets/todo-app.webp";
import huddle from "../assets/huddle.webp";
import miniLibrary from "../assets/mini-library.webp";
import crowdfunding from "../assets/shortly.webp";
import { v4 as uuidv4 } from "uuid";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function Portfolio({ title, icon, handleOpenMenu }) {
  const projects = [
    {
      title: "Shortly",
      tools: ["JavaScript", "ShrtCode API", "Sweet Alert"],
      pic: shortly,
      link: "https://frontendmentorlibrary.netlify.app/url-shortening-api/index.html",
      github:
        "https://github.com/TheAce74/Frontend-Mentor-Projects/tree/main/url-shortening-api",
    },
    {
      title: "REST Countries API",
      tools: ["React", "React Router", "Sass", "Vite", "JSON"],
      pic: femCountries,
      link: "https://fem-countries.netlify.app",
      github: "https://github.com/TheAce74/fem-countries",
    },
    {
      title: "Music Player",
      tools: ["HTML", "CSS", "JavaScript"],
      pic: musicPlayer,
      link: "https://beats-by-ace.netlify.app",
      github: "https://github.com/TheAce74/Music-Player",
    },
    {
      title: "E-Commerce Product Page",
      tools: ["HTML", "CSS", "JavaScript"],
      pic: ecommerce,
      link: "https://frontendmentorlibrary.netlify.app/ecommerce-product-page/index.html",
      github:
        "https://github.com/TheAce74/Frontend-Mentor-Projects/tree/main/ecommerce-product-page",
    },
    {
      title: "Todo App",
      tools: ["JavaScript", "Sortable JS"],
      pic: todoApp,
      link: "https://frontendmentorlibrary.netlify.app/todo-app/index.html",
      github:
        "https://github.com/TheAce74/Frontend-Mentor-Projects/tree/main/todo-app",
    },
    {
      title: "Huddle Landing Page",
      tools: ["HTML", "CSS"],
      pic: huddle,
      link: "https://frontendmentorlibrary.netlify.app/huddle-landing-page-with-curved-sections/index.html",
      github:
        "https://github.com/TheAce74/Frontend-Mentor-Projects/tree/main/huddle-landing-page-with-curved-sections",
    },
    {
      title: "Mini Library",
      tools: ["HTML", "CSS", "JavaScript"],
      pic: miniLibrary,
      link: "https://mini-library-by-the-ace.netlify.app",
      github: "https://github.com/TheAce74/Mini-Library",
    },
    {
      title: "Crowd Funding Product Page",
      tools: ["HTML", "CSS", "JavaScript"],
      pic: crowdfunding,
      link: "https://frontendmentorlibrary.netlify.app/crowdfunding-product-page/index.html",
      github:
        "https://github.com/TheAce74/Frontend-Mentor-Projects/tree/main/crowdfunding-product-page",
    },
  ];
  return (
    <section
      className="portfolio"
      aria-label="portfolio"
      id="portfolio"
      onClick={() => handleOpenMenu(false)}
    >
      <p className="id">
        <span>{icon()}</span>
        <span>{title}</span>
      </p>

      <h2 className="portfolio__heading">
        Featured <span>Projects</span>
      </h2>

      <div className="portfolio__projects">
        {projects.map(project => (
          <>
            <div className="portfolio__project" key={uuidv4()}>
              <img
                src={project.pic}
                alt={`${project.title} image`}
                className="portfolio__img"
              />
              <div className="portfolio__container">
                <div className="portfolio__tags" aria-label="tools used">
                  {project.tools.map(tool => (
                    <span key={uuidv4()}>{tool}</span>
                  ))}
                </div>
                <div className="portfolio__links">
                  <a href={project.github} aria-label="View on GitHub">
                    <BsGithub />
                  </a>
                  <a href={project.link} aria-label="View Live">
                    <BiLinkExternal />
                  </a>
                </div>
              </div>
            </div>
            <p className="portfolio__title">{project.title}</p>
          </>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
