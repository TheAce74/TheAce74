export default function TestimonialMessage({ testimonial }) {
  return (
    <div className="testimonial">
      <div className="testimonial__flex">
        <div>
          <h3>{testimonial.name}</h3>
          <p aria-label={`${testimonial.platform} handle`}>
            {testimonial.handle}
          </p>
        </div>
        {testimonial.icon}
      </div>
      <div>{testimonial.body}</div>
    </div>
  );
}
