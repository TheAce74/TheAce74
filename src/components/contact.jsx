/* eslint-disable react/prop-types */
function Contact({ title, icon, handleOpenMenu }) {
  return (
    <section
      className="contact"
      aria-label="contact"
      id="contact"
      onClick={() => handleOpenMenu(false)}
    >
      <p className="id">
        <span>{icon()}</span>
        <span>{title}</span>
      </p>
    </section>
  );
}

export default Contact;
