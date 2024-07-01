import { ReactNode, memo, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { InView } from "react-intersection-observer";
import { TESTIMONIALS } from "@/utils/constants";
import Testimonial from "@/components/Testimonial";
import { useSectionStore } from "@/store/sectionStore";

type TestimonialsProps = {
  title: string;
  icon: ReactNode;
};

function Testimonials({ title, icon }: TestimonialsProps) {
  const [slides, setSlides] = useState(0);
  const testimonials = useMemo(() => TESTIMONIALS, []);
  const slidesRef = useRef(testimonials.length - 1);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const { setSection, section } = useSectionStore();

  const showSlides = (value: number | string) => {
    if (typeof value === "number" && sliderRef.current) {
      if (value > slidesRef.current) {
        sliderRef.current.scrollLeft = 0;
        setSlides(0);
      } else if (value < 0) {
        sliderRef.current.scrollLeft =
          slidesRef.current * sliderRef.current.clientWidth;
        setSlides(slidesRef.current);
      } else {
        sliderRef.current.scrollLeft = value * sliderRef.current.clientWidth;
        setSlides(value);
      }
    } else {
      if (value === "prev") {
        showSlides(slides - 1);
      } else {
        showSlides(slides + 1);
      }
    }
  };

  return (
    <InView
      as="section"
      className="testimonials"
      aria-label="testimonials"
      id="testimonials"
      onChange={(inView) => {
        if (inView && section !== 4) {
          setSection(4);
        }
      }}
    >
      <p className="id">
        <span>{icon}</span>
        <span>{title}</span>
      </p>
      <h2 className="testimonials__heading">
        What people say about <span>me</span>
      </h2>
      <div className="slideshow-container">
        <div className="wrapper" ref={sliderRef}>
          {testimonials.map((testimonial) => (
            <Testimonial key={uuidv4()} testimonial={testimonial} />
          ))}
        </div>
        <button className="prev" onClick={() => showSlides("prev")}>
          <FaAngleLeft />
        </button>
        <button className="next" onClick={() => showSlides("next")}>
          <FaAngleRight />
        </button>
      </div>
      <div className="dot-container">
        {testimonials.map((_, index) => (
          <button
            key={uuidv4()}
            className={index === slides ? "dot dot--active" : "dot"}
            onClick={() => showSlides(index)}
          ></button>
        ))}
      </div>
    </InView>
  );
}

export default memo(Testimonials);
