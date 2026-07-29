import {
  SiExpress,
  SiSequelize,
  SiRedis,
  SiNestjs,
  SiPostgresql,
  // SiTypeorm,
  SiPrisma,
} from "react-icons/si";

export default function Works() {
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
          </div>
        </div>
        {/* <div className="card card2">
          <div className="card-head">
            <h2>
              <a href="https://app.bridgecredit.ng" target="_blank">
                Bridge Credit Limited
              </a>
            </h2>
            <span>
              <h3>
                <SiNestjs aria-hidden="true" /> NestJS
              </h3>
              <h3>
                <SiPostgresql aria-hidden="true" /> PostgreSQL
              </h3>
              <h3>
                <SiTypeorm aria-hidden="true" /> TypeORM
              </h3>
            </span>
          </div>
          <div className="card-img" title="second">
          </div>
        </div> */}
        <div className="card card3">
          <div className="card-head">
            <h2>
              <a href="https://umuigbodiaspora.com" target="_blank">
                Umuigbo Diaspora
              </a>
            </h2>
            <span>
              <h3>
                <SiNestjs aria-hidden="true" /> NestJS
              </h3>
              <h3>
                <SiPostgresql aria-hidden="true" /> PostgreSQL
              </h3>
              <h3>
                <SiPrisma aria-hidden="true" /> Prisma
              </h3>
            </span>
          </div>
          <div className="card-img" title="third">
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
