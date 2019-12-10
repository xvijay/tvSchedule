import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";

import Header from "./Components/Header";

import Layout from "./Pages/Main";

function App() {
  let nav = React.createRef();
  let scrollFunction = () => {
    window.scrollTo({
      top: nav.current.offsetHeight,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header scrollFunction={scrollFunction} nav={nav}></Header>
        <Router>
          <Layout id="layout" style={{}}></Layout>
        </Router>
      </header>
    </div>
  );
}

export default App;
