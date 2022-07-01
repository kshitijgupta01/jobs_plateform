import './App.css';
import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
    </div>
  );
}

export default App;
