import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Tech from "./components/tech";
import Testimonials from "./components/testimonials";
import Works from "./components/works";
import "./style.scss";
import Button from "./components/button";

function App() {
  return (
    <main className="app">
      <Button />
      <Header />
      <Hero />
      <About />
      <Tech />
      <Works />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
