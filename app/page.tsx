import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";

export default function Index() {
  return (
    <div className="">
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
