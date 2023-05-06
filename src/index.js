// import react and reactDOM components
import React from "react";
import ReactDOM from "react-dom";

//import pages
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

//import styles
import "./index.css"

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)