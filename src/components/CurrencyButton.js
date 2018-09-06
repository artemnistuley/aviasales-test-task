import React, { Component } from 'react';

const CurrencyButton = (props) => {
  const currency = props.currency;
  const currencyName = props.currencyName;
  const onClick = props.onClick;

  return (
    <button 
      className={`currency-button ${currencyName === currency ? 'currency-button--active' : '' }`}
      data-currency={currencyName}
      onClick={onClick}>
        {currencyName}
    </button>
  );
}
  
export default CurrencyButton;