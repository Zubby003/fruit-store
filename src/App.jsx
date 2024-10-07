import "./App.css";
import Banner from "./conponents/Banners/Banner";
import Banner2 from "./conponents/Banners/Banner2";
import Banner3 from "./conponents/Banners/Banner3";
import Footer from "./conponents/Footer/Footer";
import Hero from "./conponents/Hero/Hero";
import Menus from "./conponents/Menus/Menus";
import Navbar from "./conponents/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
}

export default App;
