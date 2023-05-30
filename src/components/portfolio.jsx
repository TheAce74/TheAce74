/* eslint-disable react/prop-types */
function Portfolio({ title, render }) {
  return (
    <section className="portfolio" aria-label="portfolio">
      <p className="id">
        <span>{render()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default Portfolio;
