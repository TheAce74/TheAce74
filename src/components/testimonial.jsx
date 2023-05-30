/* eslint-disable react/prop-types */
function Testimonial({ title, render }) {
  return (
    <section className="testimonial" aria-label="testimonial">
      <p className="id">
        <span>{render()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default Testimonial;
