import { FaAws } from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiZod,
  SiSequelize,
  SiRedis,
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
            <h2>Featured Works</h2>
            <p>Perfect solutions to digital experiences</p>
          </span>
        </div>
        <div className="card card1">
          <div className="card-head">
            <h2>
              <a href="https://seamailer.app" target="_blank">
                Seamailer
              </a>
            </h2>
            <span>
              <h3>
                <SiExpress aria-hidden="true" /> Express
              </h3>
              <h3>
                <SiSequelize aria-hidden="true" /> Sequelize
              </h3>
              <h3>
                <SiRedis aria-hidden="true" /> Redis
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
                <SiNodedotjs aria-hidden="true" /> Node
              </h3>
              <h3>
                <SiTypescript aria-hidden="true" /> Typescript
              </h3>
              <h3>
                <SiZod aria-hidden="true" /> Zod
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
                href="https://github.com/TheAce74/ShoutMeBackend"
                target="_blank"
              >
                ShoutMe
              </a>
            </h2>
            <span>
              <h3>
                <SiExpress aria-hidden="true" /> Express
              </h3>
              <h3>
                <SiMongodb aria-hidden="true" /> MongoDB
              </h3>
              <h3>
                <FaAws aria-hidden="true" /> AWS
              </h3>
            </span>
          </div>
          <div className="card-img" title="third">
            {/* <img src={image3}/> */}
          </div>
        </div>
        <div className="outro">
          <h2>
            <a href="https://github.com/TheAce74" target="_blank">
              ALL PROJECTS
            </a>
          </h2>
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
