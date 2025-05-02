import image1 from "../assets/undraw_dev_productivity_umsq.svg";
import image2 from "../assets/mongodb.svg";
import image3 from "../assets/express.svg";
import image4 from "../assets/node-js.svg";

export default function Hero() {
  const diffInMilliseconds =
    new Date().getTime() - new Date(2021, 2, 1).getTime();
  const diffInYears = Math.floor(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <>
      <div className="hero col-sm-r">
        <div className="hero-text col-item">
          <div className="main-text m-1">
            <div className="badge">Backend Developer</div>
            <h2>Talk is cheap.</h2>
            <h2>Show me the code.</h2>
            <p>
              I architect and develop robust, scalable backend systems, and I
              absolutely love what I do.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=2347063265056"
              target="_blank"
            >
              Let's Chat!
            </a>
          </div>

          <div className="stats">
            <div className="stat">
              <b>{diffInYears}+</b>
              <span>
                <p>YEARS</p>
                <p>EXPERIENCE</p>
              </span>
            </div>
            <div className="stat">
              <b>10+</b>
              <span>
                <p>PROJECTS</p>
                <p>COMPLETED</p>
              </span>
            </div>
          </div>
        </div>
        <div className="hero-img col-item m-md">
          <img src={image1} />
          <img className="tech rotate mongodb hide-sm" src={image2} />
          <img className="tech float express hide-sm" src={image3} />
          <img className="tech zoom js hide-sm" src={image4} />
        </div>
      </div>
    </>
  );
}
