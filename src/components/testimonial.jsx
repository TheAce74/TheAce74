/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsGithub, BsInstagram } from "react-icons/bs";

function Testimonial({ title, icon, handleOpenMenu }) {
  const ignore = useRef(true);

  useEffect(() => {
    if (ignore.current) {
      // eslint-disable-next-line no-undef, no-unused-vars
      const slider = new A11YSlider(document.querySelector(".slider"), {
        arrows: true,
        dots: false,
      });
    }

    return () => {
      ignore.current = false;
    };
  }, []);

  const testimonials = [
    {
      name: "Victor Iloenyenwa",
      handle: "@ProCode47",
      icon: () => <BsGithub />,
      body: '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, maxime dolore? Quae est commodi incidunt cumque quo exercitationem nihil rerum ullam ex laudantium, officia, eaque quisquam quibusdam natus libero voluptate!"',
    },
    {
      name: "Jeffrey Adjari",
      handle: "@Walter-Tronics",
      icon: () => <BsGithub />,
      body: '"I have worked with Chisom Udonsi for years and he has always been a professional. He can work under pressure and easily adapt to change, embraces diversity and is open to growth opportunities. He\'s a great problem-solver with great leadership skills. He can easily work with anyone because of his interpersonal talent. I hope he grows and continues to thrive in his endeavours."',
    },
    {
      name: "Henry Kanu",
      handle: "@Stan545",
      icon: () => <BsGithub />,
      body: '"Chisom, also known as the "Senku Ishigami of the Dev World", is a tech enthusiast and highly skilled frontend developer. His relentless pursuit of knowledge and unwavering determination have made a profound impact on my programming journey. Chisom\'s mastery of frontend development is awe-inspiring, as he effortlessly translates complex concepts into elegant code. With his guidance and expertise, I have experienced tremendous growth and gained invaluable insights. Chisom\'s exceptional mentorship inspires positive change, making him a source of inspiration in my life."',
    },
    {
      name: "Christopher Asor",
      handle: "@asor_christopher",
      icon: () => <BsInstagram />,
      body: '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, maxime dolore? Quae est commodi incidunt cumque quo exercitationem nihil rerum ullam ex laudantium, officia, eaque quisquam quibusdam natus libero voluptate!"',
    },
    {
      name: "Tochukwu Nwankwo",
      handle: "@Emmanuetoks",
      icon: () => <BsGithub />,
      body: '"Chisom is a very remarkable programmer and mentor. His quick problem-solving skills and structured lifestyle make him one of the best programmers in the tech niche of our school. His efficient teaching skills and flawless communication enabled me to grasp whatever he taught me or any other person in just minutes. Of course, all these qualities of his are just to name a few; working and interacting with him will reveal just how good he is at what he does."',
    },
  ];

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

      <h2 className="testimonial__heading">
        What people say about <span>me</span>
      </h2>
      <ul role="list" className="slider">
        {testimonials.map(testimonial => (
          <li key={uuidv4()}>
            <div>
              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.handle}</p>
              </div>
              {testimonial.icon()}
            </div>
            <div>{testimonial.body}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonial;
