/* eslint-disable react/prop-types */
function About({ title, render }) {
  return (
    <section className="about" aria-label="about">
      <p className="id">
        <span>{render()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default About;
