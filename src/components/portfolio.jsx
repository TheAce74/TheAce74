/* eslint-disable react/prop-types */
function Portfolio({ title, icon, handleOpenMenu }) {
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
    </section>
  );
}

export default Portfolio;
