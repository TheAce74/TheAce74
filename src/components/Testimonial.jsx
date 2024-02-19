export default function Testimonial({ testimonial }) {
  return (
    <div className="testimonial">
      <div className="testimonial__flex">
        <div>
          <h3>{testimonial.name}</h3>
          <a
            aria-label={`${testimonial.platform} handle`}
            href={testimonial.link}
            target="_blank"
            rel="noreferrer"
          >
            {testimonial.handle}
          </a>
        </div>
        {testimonial.icon}
      </div>
      <div>{testimonial.body}</div>
    </div>
  );
}
