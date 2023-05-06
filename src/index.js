// Import React and reactDOM component
import React from 'react'
import ReactDOM from 'react-dom'

// import pages
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

//import styless
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
  <App />
  ,
  document.getElementById("root")
)