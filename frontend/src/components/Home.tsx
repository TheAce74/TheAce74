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
        I&apos;m a Frontend Software Engineer building fast, accessible
        interfaces with React, TypeScript, and modern CSS. I care about the
        details most people scroll past — the 200ms of polish that makes an
        interface feel alive. Open to contract &amp; part-time work.
      </p>
    </InView>
  );
}

export default Home;
