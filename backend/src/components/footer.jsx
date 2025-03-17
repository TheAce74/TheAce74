export default function Footer() {
  return (
    <>
      <div className="footer" id="contact">
        <div className="contact col-sm">
          <div className="sayhi col-item">
            <h2 className="text-md">
              Let&apos;s make something amazing together.
            </h2>
            <h2>
              Start by{" "}
              <a
                href="https://api.whatsapp.com/send?phone=2347063265056"
                target="_blank"
              >
                saying hello
              </a>
            </h2>
          </div>
          <div className="info col-item">
            <h6>Contact Info</h6>
            <p>udonsichisom02@gmail.com</p>
            <h2 className="text-xs">+234 706 326 5056</h2>
            <span>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Works</a>
              </li>
              <li>
                <a href="#review">Reviews</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </span>
          </div>
        </div>
        <div className="stamp col-sm">
          <h2 className="col-item center">
            <b>The Ace</b>
          </h2>
          <span
            className="credits col-center col-item neg-marg"
            aria-label="credits"
          >
            <p className="center">
              <a
                href="https://dribbble.com/shots/11276631-DS-Personal-Developer-Portfolio/attachments/2884963?mode=media"
                target="_blank"
              >
                Dribble
              </a>
            </p>
            <p className="center">
              <a
                href="https://github.com/TheAce74/TheAce74/tree/prod/backend"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
