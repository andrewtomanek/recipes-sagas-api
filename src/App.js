import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import Navigation from "./components/Navigation";
import GlobalStyle from "./theme/globalStyle";

const App = () => {
  return (
    <div className="layout">
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        {routes}
      </BrowserRouter>
    </div>
  );
};

export default App;
