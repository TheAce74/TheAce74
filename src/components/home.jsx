import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

function Home({ title, icon, handleOpenMenu }) {
  const control = useAnimation();
  const [ref] = useInView();

  return (
    <motion.section
      className="home"
      aria-label="home"
      id="home"
      onClick={() => handleOpenMenu(false)}
      ref={ref}
      initial="hidden"
      whileInView="visible"
      variants={sectionVariant}
      animate={control}
      viewport={{ once: true }}
    >
      <p className="id">
        <span>{icon()}</span>
        <span>{title}</span>
      </p>

      <h2 className="home__heading">
        Hi, I&apos;m <span>Chisom</span>. Welcome to my digital abode!{" "}
      </h2>
      <p className="home__info">
        I&apos;m a passionate frontend developer, crafting captivating user
        experiences one line of code at a time. With a blend of creativity and
        technical expertise, I strive to bring life to pixels, transforming
        ideas into seamless interactive journeys. Step into my world, where
        innovation meets design, and let&apos;s create remarkable digital
        landscapes together.
      </p>
    </motion.section>
  );
}

export default Home;
