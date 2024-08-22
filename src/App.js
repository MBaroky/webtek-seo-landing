import "./App.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Clients from "./sections/Clients";
import WelcomeSection from "./sections/WelcomeSection";
import logo from "./assets/logo.png";
import About from "./sections/About";
import Industries from "./sections/Industries";
import Services from "./sections/Services";
import Mission from "./sections/Mission";

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
      <Services />
      <Mission />
      <Clients />
      <Industries />
      <Footer logo={logo} />
    </main>
  );
}

export default App;
