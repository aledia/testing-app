//bindings
import React from 'react';
import './App.css';
import CalendarDani from './CalendarDani';
import NavBarDani from './NavBarDani';
import ToggableMenu from './ToggableMenu';

function App() {
  var userName = "Paco y Pepe " + Math.random();

  return (
    <div className="App">
      {/* <RaulCoolButton>Hola</RaulCoolButton> */}
      <h1>Hola qué tal</h1>
      <ToggableMenu nameIronhacker="fede"></ToggableMenu>
      <ToggableMenu nameIronhacker="laura"></ToggableMenu>
      <button>Test</button>
      <NavBarDani user={userName} color="green" />
      <CalendarDani />
    </div>
  );
}

export default App;
