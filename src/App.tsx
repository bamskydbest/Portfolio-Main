import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useTheme } from "./context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function App() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className="bg-[#0f0f1b] text-white font-sans">
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 p-2 bg-yellow-400 text-black rounded-full z-50"
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
      <Header />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
