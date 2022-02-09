import react, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
// import Slider from "@material-ui/core/Slider";

import theme from "./theme";
import { Nav, PlanetsNav, Moon, Mars, Europa, Titan } from "./components/index";

import Home from "./pages/Home/Home";
import Destionation from "./pages/Destionation/Destionation";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destionation />}>
          <Route index element={<Moon />} />
          <Route index path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="crew" element={<Crew />}></Route>
        <Route path="technology" element={<Technology />}></Route>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
