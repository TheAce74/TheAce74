/* eslint-disable react/prop-types */
function Skills({ title, icon, handleOpenMenu }) {
  return (
    <section
      className="skills"
      aria-label="skills"
      id="skills"
      onClick={() => handleOpenMenu(false)}
    >
      <p className="id">
        <span>{icon()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default Skills;
