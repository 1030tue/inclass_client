import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import ClassPage from "./Containers/ClassPage";

function App() {
  return (
    <div className="App">
    <NavBar />
      <ClassPage/>
    </div>
  );
}

export default App;
