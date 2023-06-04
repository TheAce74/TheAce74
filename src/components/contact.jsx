/* eslint-disable react/prop-types */
import { useRef } from "react";
import axios from "axios";

function Contact({ title, icon, handleOpenMenu }) {
  const name = useRef(null);
  const email = useRef(null);
  const tel = useRef(null);
  const budget = useRef(null);
  const message = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    // const [name, email, phone, budget, message] = [
    //   name.current.value,
    //   email.current.value,
    //   phone.current.value,
    //   budget.current.value,
    //   message.current.value,
    // ];
    const name = "test";
    const email = "test";
    const phone = "test";
    const budget = "test";
    const message = "test";
    axios
      .post("https://aceserver.onrender.com/contact", {
        name,
        email,
        phone,
        budget,
        message,
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
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

      <h2 className="contact__heading">
        Ready to embark on this adventure together? Let&apos;s make some{" "}
        <span>frontend magic!</span>
      </h2>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Full Name <span className="important">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            required
            ref={name}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email Address <span className="important">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            required
            ref={email}
          />
        </div>
        <div>
          <label htmlFor="tel">
            Phone Number <span className="optional">(optional)</span>
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Your phone number"
            ref={tel}
          />
        </div>
        <div>
          <label htmlFor="budget">
            Budget <span className="optional">(optional)</span>
          </label>
          <input
            type="text"
            name="budget"
            id="budget"
            inputMode="number"
            placeholder="Your budget in dollars"
            ref={budget}
          />
        </div>
        <div>
          <label htmlFor="message">
            Message <span className="important">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write your message here..."
            required
            ref={message}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
