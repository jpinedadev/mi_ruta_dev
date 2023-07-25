import React from "react"
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero.jsx";
import Article from "./components/Article.jsx";

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Hero />
        <Article />
    </div>
  );
}

export default App;
