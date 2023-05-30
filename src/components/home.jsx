/* eslint-disable react/prop-types */
function Home({ title, render }) {
  return (
    <section className="home" aria-label="home">
      <p className="id">
        <span>{render()}</span>
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
    </section>
  );
}

export default Home;
