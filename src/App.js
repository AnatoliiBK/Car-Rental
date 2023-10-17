// App.js
import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import CatalogPage from "./pages/CatalogPage";
// import FavoritesPage from "./pages/FavoritesPage";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <Sidebar />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalog" component={CatalogPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
          <Redirect to="/" />
        </Switch>
      </Router> */}
    </>
  );
};

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
