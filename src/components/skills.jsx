/* eslint-disable react/prop-types */
function Skills({ title, render }) {
  return (
    <section className="skills" aria-label="skills">
      <p className="id">
        <span>{render()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default Skills;
