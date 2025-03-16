import { useSectionStore } from "@/store/sectionStore";
import { ReactNode } from "react";
import { InView } from "react-intersection-observer";

type HomeProps = {
  title: string;
  icon: ReactNode;
};

function Home({ title, icon }: HomeProps) {
  const { setSection, section } = useSectionStore();

  return (
    <InView
      as="section"
      className="home"
      aria-label="home"
      id="home"
      onChange={(inView) => {
        if (inView && section !== 0) {
          setSection(0);
        }
      }}
    >
      <p className="id">
        <span>{icon}</span>
        <span>{title}</span>
      </p>
      <h2 className="home__heading">
        Hi, I&apos;m <span>Chisom</span>. Welcome to my digital abode!
      </h2>
      <p className="home__info">
        I&apos;m a passionate software engineer, crafting captivating user
        experiences one line of code at a time. With a blend of creativity and
        technical expertise, I strive to bring life to pixels, transforming
        ideas into seamless interactive journeys. Step into my world, where
        innovation meets design, and let&apos;s create remarkable digital
        landscapes together.
      </p>
    </InView>
  );
}

export default Home;
