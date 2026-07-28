import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  BsGithub,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

const testimonials = [
  {
    displayName: "Olalekan Oladosu",
    username: "@culjo",
    icon: <BsGithub size={20} color="#1290cd" />,
    platform: "GitHub",
    comment:
      "I've mentored a lot of engineers over the years, and Chisom is one of the few I keep bringing back onto new projects; we've built and shipped together across Seamailer, Bridge Credit, and Alajo. He doesn't just write code that works, he writes code that holds up in production: fast, reliable, and genuinely well-thought-out. He takes ownership like it's his own product, and that's rare. Any team or client would be lucky to have him.",
    link: "https://github.com/culjo",
  },
  {
    displayName: "Victor Okoye",
    username: "@ChuloWay",
    icon: <BsGithub size={20} color="#1290cd" />,
    platform: "GitHub",
    comment:
      "Working with Chisom at YPMC was a great experience. He owned the frontend development for both the user-facing and logistics partner web applications, and delivered consistently throughout the project. Beyond shipping features, he also put in the work to improve performance and reduce page load times, which had a direct impact on the product experience. He's technically solid, easy to collaborate with, and the kind of engineer who takes ownership of his work. I'd work with him again without hesitation.",
    link: "https://github.com/ChuloWay",
  },
  {
    displayName: "Kenechukwu Anolue",
    username: "@Kene_Nna",
    icon: <BsTwitterX size={20} color="#1290cd" />,
    platform: "X",
    comment:
      "When we brought Chisom onto Assist Factory, he delivered the frontend UI well ahead of the timeline we'd projected, which almost never happens. The quality held up too, not just the speed. I was so happy with the outcome that I've since recommended him for two other projects. He's become someone I trust to just hand a problem to and know it'll get done right.",
    link: "https://x.com/Kene_Nna",
  },
  {
    displayName: "Chibundu Ogbonnia",
    username: "@chibunduogbonnia",
    icon: <BsLinkedin size={20} color="#1290cd" />,
    platform: "LinkedIn",
    comment:
      "After Assist Factory, I kept bringing Chisom onto new projects - three more since then, and Umuigbo Diaspora is the one I'm proudest of us shipping together. He also built my own personal portfolio, and that's not something I can hand off lightly. What I've come to rely on most is his resilience; when a project gets hard, he doesn't fold or cut corners, he just keeps working the problem until it's actually solved. He delivers work I don't have to double-check.",
    link: "https://www.linkedin.com/in/chibunduogbonnia",
  },
  {
    displayName: "Uchenna Onyenso",
    username: "@Onyenso",
    icon: <BsGithub size={20} color="#1290cd" />,
    platform: "GitHub",
    comment:
      "Assist Factory was the first project Chisom and I worked on together, but you'd never have guessed it, we synced like we'd shipped ten products before it. He took real ownership of the frontend, not just tickets, and it showed: what started as a contract engagement turned into a part-time role because management could see the work ethic and how well we operated as a unit. As the backend engineer on that build, I can say without hesitation, he's technically sharp, moves fast, and makes whoever he's working with better. I'd bring him onto any project, no second thoughts.",
    link: "https://github.com/Onyenso",
  },
  {
    displayName: "Opeyemi Olayinka",
    username: "@opeyemi-olayinka-912636189",
    icon: <BsLinkedin size={20} color="#1290cd" />,
    platform: "LinkedIn",
    comment:
      "Chisom was my favorite kind of engineer to work with on Alajo, the kind who doesn't add to my stress pile. He was always attentive, always ahead of problems instead of behind them, and some of our best product improvements came out of side conversations he started, not tickets I assigned. Whether it was catching an error before it became a bug report or pushing for a better UX flow, he just handled it. As a PM, that's priceless. I'd work with him again in a heartbeat, it takes real weight off my shoulders knowing he's on the team.",
    link: "https://www.linkedin.com/in/opeyemi-olayinka-912636189",
  },
  {
    displayName: "Wisdom Chima",
    username: "@kreatorgraphics",
    icon: <BsInstagram size={20} color="#1290cd" />,
    platform: "Instagram",
    comment:
      "I needed a portfolio as a designer with which I could begin my cold outreach to prospective clients. I reached out to Chisom to help me out with the development, and at every step of the development phase, he inquired for feedback showing how detailed and committed he was to the project. He eventually ended up over delivering on the design I sent to him with amazing insights & suggestions, and the site was very optimized and clean. 100% recommend him.",
    link: "http://instagram.com/kreatorgraphics",
  },
  {
    displayName: "Victor Iloenyenwa",
    username: "@ProCode47",
    icon: <BsGithub size={20} color="#1290cd" />,
    platform: "GitHub",
    comment:
      "Chisom is a brilliant developer in every definition of the word, he is well versed in the technologies he utilizes and can analyze tricky problems and implement amazing solutions. He's a lifelong learner obsessed with perfecting his craft. He's definitely the guy for the job. Whatever it is, he can crack it",
    link: "https://github.com/ProCode47",
  },
  {
    displayName: "Christopher Asor",
    username: "@asor_chris",
    icon: <BsInstagram size={20} color="#1290cd" />,
    platform: "Instagram",
    comment:
      "Chisom is a very unique and talented developer. He combines effective and efficient implementation of functionalities with great attention to detail. He's a great team player and always tries to keep up good communication with his client, thanks to his great communication skills. He has shown a great sense of responsibility in the few projects he's worked on with me and I'll recommend him to every hiring manager because he'll be an excellent addition and improvement to any team!",
    link: "https://www.instagram.com/asor_chris/",
  },
  {
    displayName: "Jeffrey Adjari",
    username: "@Walter-Tronics",
    icon: <BsGithub size={20} color="#1290cd" />,
    platform: "GitHub",
    comment:
      "I have worked with Chisom Udonsi for years and he has always been a professional. He can work under pressure and easily adapt to change, embraces diversity and is open to growth opportunities. He's a great problem-solver with great leadership skills. He can easily work with anyone because of his interpersonal talent. I hope he grows and continues to thrive in his endeavours.",
    link: "https://github.com/Walter-Tronics",
  },
  {
    displayName: "Henry Kanu",
    username: "@Stan545",
    icon: <BsGithub size={20} color="#1290cd" />,
    platform: "GitHub",
    comment:
      "Chisom, also known as the \"Senku Ishigami of the Dev World\", is a tech enthusiast and highly skilled developer. His relentless pursuit of knowledge and unwavering determination have made a profound impact on my programming journey. Chisom's mastery of frontend development is awe-inspiring, as he effortlessly translates complex concepts into elegant code. With his guidance and expertise, I have experienced tremendous growth and gained invaluable insights. Chisom's exceptional mentorship inspires positive change, making him a source of inspiration in my life.",
    link: "https://github.com/Stan545",
  },
  {
    displayName: "Tochukwu Nwankwo",
    username: "@Emmanuetoks",
    icon: <BsGithub size={20} color="#1290cd" />,
    platform: "GitHub",
    comment:
      "Chisom is a very remarkable programmer and mentor. His quick problem-solving skills and structured lifestyle make him one of the best programmers in the tech niche of our school. His efficient teaching skills and flawless communication enabled me to grasp whatever he taught me or any other person in just minutes. Of course, all these qualities of his are just to name a few; working and interacting with him will reveal just how good he is at what he does.",
    link: "https://github.com/Emmanuetoks",
  },
];

const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    controls1.start({ x: "-100%" });
    controls2.start({ x: "0%" });

    return () => {
      controls1.stop();
      controls2.stop();
    };
  }, []);

  return (
    <>
      <div className="testimonials" id="review">
        <span className="head m-sm">
          <h2>Testimonials</h2>
          <p className="hide-sm">What people say about me</p>
        </span>
        <motion.div
          initial={{ x: "-25%" }}
          animate={controls1}
          transition={{
            duration: 12,
            repeat: Infinity,
            type: "tween",
            repeatType: "mirror",
          }}
          className="review-profiles"
          onMouseEnter={() => controls1.stop()}
          onMouseLeave={() => controls1.start({ x: "-100%" })}
        >
          {repeatedTestimonials.map((testimonial, idx) => (
            <div className="review-profile" key={testimonial.displayName + idx}>
              <div className="profile-bar">
                <span>
                  <h3>{testimonial.displayName}</h3>
                  <p>
                    <a href={testimonial.link} target="_blank">
                      {testimonial.username}
                    </a>
                  </p>
                </span>
                {testimonial.icon}
              </div>
              <div className="profile-review">
                <p>{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <br />
        <br />
        <br />
        <motion.div
          initial={{ x: "-100%" }}
          animate={controls2}
          transition={{
            duration: 12,
            repeat: Infinity,
            type: "tween",
            repeatType: "mirror",
          }}
          className="review-profiles"
          onMouseEnter={() => controls2.stop()}
          onMouseLeave={() => controls2.start({ x: "0%" })}
        >
          {repeatedTestimonials.map((testimonial, idx) => (
            <div className="review-profile" key={testimonial.username + idx}>
              <div className="profile-bar">
                <span>
                  <h3>{testimonial.displayName}</h3>
                  <p>
                    <a href={testimonial.link} target="_blank">
                      {testimonial.username}
                    </a>
                  </p>
                </span>
                {testimonial.icon}
              </div>
              <div className="profile-review">
                <p>{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
