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
      platform: "GitHub",
      body: "\"Chisom is a brilliant developer in every definition of the word, he is well versed in the technologies he utilizes and can analyze tricky problems and implement amazing solutions. He's a lifelong learner obsessed with perfecting his craft. He's definitely the guy for the job. Whatever it is, he can crack it\"",
    },
    {
      name: "Christopher Asor",
      handle: "@asor_christopher",
      icon: () => <BsInstagram />,
      platform: "Instagram",
      body: "\"Chisom is a very unique and talented frontend developer. He combines effective and efficient implementation of functionalities with great attention to detail. He's a great team player and always tries to keep up good communication with his client, thanks to his great communication skill. He has shown a great sense of responsibility in the few projects he's worked on with me and I'll recommend him to every hiring manager because he'll be an excellent addition and improvement to any team!\"",
    },
    {
      name: "Jeffrey Adjari",
      handle: "@Walter-Tronics",
      icon: () => <BsGithub />,
      platform: "GitHub",
      body: '"I have worked with Chisom Udonsi for years and he has always been a professional. He can work under pressure and easily adapt to change, embraces diversity and is open to growth opportunities. He\'s a great problem-solver with great leadership skills. He can easily work with anyone because of his interpersonal talent. I hope he grows and continues to thrive in his endeavours."',
    },
    {
      name: "Henry Kanu",
      handle: "@Stan545",
      icon: () => <BsGithub />,
      platform: "GitHub",
      body: '"Chisom, also known as the "Senku Ishigami of the Dev World", is a tech enthusiast and highly skilled frontend developer. His relentless pursuit of knowledge and unwavering determination have made a profound impact on my programming journey. Chisom\'s mastery of frontend development is awe-inspiring, as he effortlessly translates complex concepts into elegant code. With his guidance and expertise, I have experienced tremendous growth and gained invaluable insights. Chisom\'s exceptional mentorship inspires positive change, making him a source of inspiration in my life."',
    },
    {
      name: "Tochukwu Nwankwo",
      handle: "@Emmanuetoks",
      icon: () => <BsGithub />,
      platform: "GitHub",
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
        {testimonials.map((testimonial) => (
          <li key={uuidv4()}>
            <div>
              <div>
                <h3>{testimonial.name}</h3>
                <p aria-label={`${testimonial.platform} handle`}>
                  {testimonial.handle}
                </p>
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
