import { ReactNode } from "react";

type TestimonialProps = {
  testimonial: {
    name: string;
    handle: string;
    icon: ReactNode;
    platform: string;
    body: string;
    link: string;
  };
};

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="testimonial">
      <div className="testimonial__flex">
        <div>
          <h3>{testimonial.name}</h3>
          <a
            aria-label={`${testimonial.handle} on ${testimonial.platform}`}
            href={testimonial.link}
            target="_blank"
            rel="noreferrer"
          >
            {testimonial.handle}
          </a>
        </div>
        <span aria-hidden="true">{testimonial.icon}</span>
      </div>
      <div>{testimonial.body}</div>
    </div>
  );
}
