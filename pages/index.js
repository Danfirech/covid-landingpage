import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Legal from "../components/Legal";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import TestOptions from "../components/TestOptions";

export default function Home() {
  return (
    <>
      <Navbar />
      <CallToAction />
      <About />
      <TestOptions />
      <Reviews />
      <Footer />
      <Legal />
    </>
  );
}
