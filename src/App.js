import "./App.css";
import Clients from "./sections/Clients";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Goal from "./sections/Goal";
import Header from "./sections/Header";
import Industries from "./sections/Industries";
import OurWorks from "./sections/OurWorks";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import WelcomeSection from "./sections/WelcomeSection";
import logo from "./assets/logo.png";
import About from "./sections/About";

function App() {
  const { PUBLIC_URL } = process.env;
  return (
    <main className="relative isolate ">
      <div
        className="absolute inset-0 z-[-1] h-full w-full"
        style={{
          backgroundImage: `url("${PUBLIC_URL}/img/body-bg.png")`,
          backgroundColor: "#f5f5f5",
        }}
      ></div>
      <Header logo={logo} />
      <WelcomeSection />
      <About />
      <Portfolio />
      <Team />
      <Services />
      <OurWorks />
      <Industries />
      <Testimonials />
      <Clients />
      <Goal />
      <FAQ />
      <Footer logo={logo} />
    </main>
  );
}

export default App;
