import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__wrap wrap">
        <img className="header__logo" src={props.logo} alt="Aviasales" />
      </div> 
    </header>
  );
}
  
export default Header;
