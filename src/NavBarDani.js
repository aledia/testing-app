import React from 'react';
import "./NavBarDani.css";

function NavBarDani(props) {
  return (
    <nav className="NavBarDani" style={{backgroundColor: props.color}}>
        User: {props.user}
        Color: {props.color}
    </nav>
  );
}

export default NavBarDani;
