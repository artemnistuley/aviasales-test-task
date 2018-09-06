import React, { Component } from 'react';

const CurrencyButton = (props) => {
  const currentCurrency = props.currentCurrency;
  const currencyName = props.currencyName;
  const onClick = props.onClick;

  return (
    <button 
      className={`currency-button ${currencyName === currentCurrency ? 'currency-button--active' : '' }`}
      data-currency={currencyName}
      onClick={onClick}>
        {currencyName}
    </button>
  );
}
  
export default CurrencyButton;