/* eslint-disable react/prop-types */
function About({ title, icon, handleOpenMenu }) {
  return (
    <section
      className="about"
      aria-label="about"
      id="about"
      onClick={() => handleOpenMenu(false)}
    >
      <p className="id">
        <span>{icon()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default About;
