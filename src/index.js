import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharactersList from "./pages/CharactersList";
import CharacterShow from "./pages/CharacterShow";
import ComicsList from "./pages/ComicsList";
import ComicShow from "./pages/ComicShow";

// wrap our application inside of router to enable using router
ReactDOM.render(
  
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/marvel" element={<HomePage/>} />
          <Route path="/marvel/characters/" element={<CharactersList/>} />
          <Route path="/marvel/characters/:id" element={<CharacterShow/>} />
          <Route path="/marvel/comics" element={<ComicsList/>} >
            <Route path="/marvel/comics/:id" element={<ComicShow/>} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();