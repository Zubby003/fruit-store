import "./App.css";
import Hero from "./conponents/Hero/Hero";
import Navbar from "./conponents/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}

export default App;
