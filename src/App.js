import './App.css';
import Contenu from './pages/Contenu';
import React from 'react';
import Sidebar from './pages/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Contenu />
      </div>
    </div>
  );
}

export default App;
