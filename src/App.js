import React, { useState } from "react";
import HomePage from "./components/pages/HomePage";
import CatalogPage from "./components/pages/CatalogPage";
import {
  BrowserRouter as Router,
  Route,
  // Navigate,
  // Outlet,
  Routes,
} from "react-router-dom";
import SportingCars from "./components/pages/SportingCars";
import SuvCars from "./components/pages/SuvCars";
import AllRoadCars from "./components/pages/AllRoadCars";
import ButtonTheme from "./components/ButtonTheme";

// import { Sidebar } from "./components/Sidebar";

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div className={`${isDarkTheme ? "page-dark-theme" : "page-light-theme"}`}>
      {/* <Sidebar /> */}
      <ButtonTheme setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/sporting" element={<SportingCars />} />
          <Route path="/suv" element={<SuvCars />} />
          <Route path="/all road" element={<AllRoadCars />} />
        </Routes>
      </Router>
    </div>
  );
};

// import React from "react";
// import { HomePage } from "./components/pages/HomePage";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// // import HomePage from "./pages/HomePage";
// // import CatalogPage from "./pages/CatalogPage";
// // import FavoritesPage from "./pages/FavoritesPage";
// import { Sidebar } from "./components/Sidebar";

// export const App = () => {
//   return (
//     <>
//       <Sidebar />
//       <Router>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           {/* <Route exact path="/catalog" component={CatalogPage} />
//           <Route exact path="/favorites" component={FavoritesPage} /> */}
//           <Redirect to="/" />
//         </Switch>
//       </Router>
//     </>
//   );
// };

// import logo from "./logo.svg";
// import "./App.css";

// export const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };
