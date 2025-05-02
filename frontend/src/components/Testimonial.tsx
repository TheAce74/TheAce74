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
