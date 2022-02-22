import Footer from "../components/Footer";
import Header from "../components/Header";
import profile from "./../assets/profile.png";

import TechLogos from "../components/TechLogos";
import Form from "../components/Form";
import AboutDescription from "../components/AboutDescription";

export default function About() {
  return (
    <div>
      <Header />
      <div className="wrap">
        <AboutDescription />
        <TechLogos />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
