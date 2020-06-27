import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import LanguageContext from "./LanguageContext";

const App = () => {
  const [lang, setLang] = useState("us");

  return (
    <Router>
      <LanguageContext.Provider value={lang}>
        <Header onLanguageChange={setLang} />
        <Main />
        <Footer />
      </LanguageContext.Provider>
    </Router>
  );
};

export default App;
