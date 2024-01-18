import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Themes from "./components/Themes";
import Prize from "./components/Prize";

function App() {
  return (
    <div id="bgimg">
      <Header />
      <Hero />
      <Themes />
      <Prize />
      <Footer />
    </div>
  );
}

export default App;
