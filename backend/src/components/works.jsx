import { FaAws } from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiZod,
  SiPuppeteer,
  SiCheerio,
} from "react-icons/si";

export default function Works() {
  const links = ["https://srsai.vercel.app", "https://srscafe.vercel.app"];
  const randomIndex = Math.floor(Math.random() * links.length);
  const link = links[randomIndex];

  return (
    <>
      <div className="works work-adjust" id="work">
        <div className="intro">
          <span>
            <h1>Featured Works</h1>
            <p>Perfect solutions to digital experiences</p>
          </span>
        </div>
        <div className="card card1">
          <div className="card-head">
            <h2>
              <a
                href="https://github.com/TheAce74/ShoutMeBackend"
                target="_blank"
              >
                ShoutMe
              </a>
            </h2>
            <span>
              <h3>
                <SiExpress /> Express
              </h3>
              <h3>
                <SiMongodb /> MongoDB
              </h3>
              <h3>
                <FaAws /> AWS
              </h3>
            </span>
          </div>
          <div className="card-img" title="first">
            {/* <img src={image1}/> */}
          </div>
        </div>
        <div className="card card2">
          <div className="card-head">
            <h2>
              <a href={link} target="_blank">
                SRS
              </a>
            </h2>
            <span>
              <h3>
                <SiNodedotjs /> Node
              </h3>
              <h3>
                <SiTypescript /> Typescript
              </h3>
              <h3>
                <SiZod /> Zod
              </h3>
            </span>
          </div>
          <div className="card-img" title="second">
            {/* <img src={image2}/> */}
          </div>
        </div>
        <div className="card card3">
          <div className="card-head">
            <h2>
              <a
                href="https://github.com/TheAce74/anifetch-backend"
                target="_blank"
              >
                AniFetch
              </a>
            </h2>
            <span>
              <h3>
                <SiExpress /> Express
              </h3>
              <h3>
                <SiPuppeteer /> Puppeteer
              </h3>
              <h3>
                <SiCheerio /> Cheerio
              </h3>
            </span>
          </div>
          <div className="card-img" title="third">
            {/* <img src={image3}/> */}
          </div>
        </div>
        <div className="outro">
          <h1>
            <a href="https://github.com/TheAce74" target="_blank">
              ALL PROJECTS
            </a>
          </h1>
          <p className="text-center">
            Looking for more of my projects? You can always check out my
            <a href="https://github.com/TheAce74" target="_blank">
              {" "}
              GitHub
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
