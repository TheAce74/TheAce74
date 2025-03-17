import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

const testimonials = [
  {
    displayName: "Victor Iloenyenwa",
    username: "@shadowbytee",
    icon: <BsTwitterX size={20} color="#1290cd" />,
    comment:
      "Chisom is a skilled backend engineer with expertise in system architecture, APIs, and scalable solutions. He excels at solving complex problems and building efficient systems, making him a valuable asset to any team.",
    link: "https://x.com/shadowbytee",
  },
  {
    displayName: "Christopher Asor",
    username: "@asor_chris",
    icon: <BsInstagram size={20} color="#1290cd" />,
    comment:
      "Chisom is a top-tier backend developer focused on efficiency and scalability. He builds robust APIs, optimizes databases, and upholds security best practices while ensuring smooth team collaboration. Highly recommended!",
    link: "https://www.instagram.com/asor_chris/",
  },
  {
    displayName: "Tochukwu Nwankwo",
    username: "@Emmanuetoks",
    icon: <BsGithub size={20} color="#1290cd" />,
    comment:
      "Chisom is a skilled backend engineer and mentor, excelling at troubleshooting and optimizing systems. He simplifies complex topics and fosters great collaboration. Always a pleasure to work with!",
    link: "https://github.com/Emmanuetoks",
  },
  {
    displayName: "Victor Iloenyenwa",
    username: "@shadowbytee",
    icon: <BsTwitterX size={20} color="#1290cd" />,
    comment:
      "Chisom is a skilled backend engineer with expertise in system architecture, APIs, and scalable solutions. He excels at solving complex problems and building efficient systems, making him a valuable asset to any team.",
    link: "https://x.com/shadowbytee",
  },
  {
    displayName: "Christopher Asor",
    username: "@asor_chris",
    icon: <BsInstagram size={20} color="#1290cd" />,
    comment:
      "Chisom is a top-tier backend developer focused on efficiency and scalability. He builds robust APIs, optimizes databases, and upholds security best practices while ensuring smooth team collaboration. Highly recommended!",
    link: "https://www.instagram.com/asor_chris/",
  },
  {
    displayName: "Tochukwu Nwankwo",
    username: "@Emmanuetoks",
    icon: <BsGithub size={20} color="#1290cd" />,
    comment:
      "Chisom is a skilled backend engineer and mentor, excelling at troubleshooting and optimizing systems. He simplifies complex topics and fosters great collaboration. Always a pleasure to work with!",
    link: "https://github.com/Emmanuetoks",
  },
  {
    displayName: "Victor Iloenyenwa",
    username: "@shadowbytee",
    icon: <BsTwitterX size={20} color="#1290cd" />,
    comment:
      "Chisom is a skilled backend engineer with expertise in system architecture, APIs, and scalable solutions. He excels at solving complex problems and building efficient systems, making him a valuable asset to any team.",
    link: "https://x.com/shadowbytee",
  },
  {
    displayName: "Christopher Asor",
    username: "@asor_chris",
    icon: <BsInstagram size={20} color="#1290cd" />,
    comment:
      "Chisom is a top-tier backend developer focused on efficiency and scalability. He builds robust APIs, optimizes databases, and upholds security best practices while ensuring smooth team collaboration. Highly recommended!",
    link: "https://www.instagram.com/asor_chris/",
  },
  {
    displayName: "Tochukwu Nwankwo",
    username: "@Emmanuetoks",
    icon: <BsGithub size={20} color="#1290cd" />,
    comment:
      "Chisom is a skilled backend engineer and mentor, excelling at troubleshooting and optimizing systems. He simplifies complex topics and fosters great collaboration. Always a pleasure to work with!",
    link: "https://github.com/Emmanuetoks",
  },
];

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
          <h1>Testimonials</h1>
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
          {testimonials.map((testimonial, idx) => (
            <div className="review-profile" key={testimonial.displayName + idx}>
              <div className="profile-bar">
                <span>
                  <h4>{testimonial.displayName}</h4>
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
          {testimonials.map((testimonial, idx) => (
            <div className="review-profile" key={testimonial.username + idx}>
              <div className="profile-bar">
                <span>
                  <h4>{testimonial.displayName}</h4>
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
