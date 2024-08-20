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

function App() {
  const { PUBLIC_URL } = process.env;
  return (
    <main className="relative">
      <div
        className="x-0 y-0 z-index-[-1] absolute h-full w-full"
        style={{
          backgroundImage: `url("${PUBLIC_URL}/img/body-bg.png")`,
        }}
      ></div>
      <Header logo={logo} />
      <WelcomeSection />
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
