import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkStyles, LightStyles } from "./styles/Themes";
import "./index.css";

import Header from "./components/Header";
import CountriesHome from "./pages/CountriesHome";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [lightTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!lightTheme);
  };

  return (
    <Router>
      <ThemeProvider theme={lightTheme ? LightStyles : DarkStyles}>
        <div className="app__wrapper">
          <Header toggleTheme={toggleTheme} lightTheme={lightTheme} />
          <Switch>
            <Route exact path="/" component={CountriesHome} />
            <Route path="/country/:country" component={CountryDetail} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
