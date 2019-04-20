import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Swing from './components/Parallax';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
     <Navbar/>
     <Swing/>
     <Footer/>
     </div>
    );
  }
}

export default App;