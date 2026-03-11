import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  type Language,
} from "./locales";

// App
const App = () => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;

    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === "en" || storedLanguage === "it") {
      return storedLanguage;
    }

    return navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
  });

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide language={language} setLanguage={setLanguage} />
          <Hero language={language} />
        </div>
        <About language={language} />
        <Experience language={language} />
        <Tech language={language} />
        <Works language={language} />

        {/* Contact */}
        <div className="relative z-0">
          <Contact language={language} />
          <StarsCanvas />
        </div>
        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
};

export default App;
