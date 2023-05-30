/* eslint-disable react/prop-types */
function Contact({ title, render }) {
  return (
    <section className="contact" aria-label="contact">
      <p className="id">
        <span>{render()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default Contact;
