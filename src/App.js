import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import Navigation from "./components/Navigation";
import GlobalStyle from "./theme/globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        {routes}
      </BrowserRouter>
    </>
  );
};

export default App;
