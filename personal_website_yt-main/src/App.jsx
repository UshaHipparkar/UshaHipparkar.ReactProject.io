import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
const [theme,setTheme]=useState('light');
  return (
    <>
    
    <div className="{'container ${theme}'}">
      <Header theme={theme} setTheme={setTheme} />
      </div>
      
      <Banner />
      <About />
      <Services />
      <Expertise />
      <Footer />
    </>
  );
}

export default App;
