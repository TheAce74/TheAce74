/* eslint-disable react/prop-types */
function Testimonial({ title, icon, handleOpenMenu }) {
  return (
    <section
      className="testimonial"
      aria-label="testimonial"
      id="testimonial"
      onClick={() => handleOpenMenu(false)}
    >
      <p className="id">
        <span>{icon()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default Testimonial;
