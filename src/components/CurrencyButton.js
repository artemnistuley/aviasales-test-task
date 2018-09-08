import React from 'react';

const CurrencyButton = (props) => {
  const currentCurrency = props.currentCurrency;
  const currencyName = props.currencyName;
  const onClick = props.onClick;
  const modifier = props.modifier ? props.modifier : '';
  
  return (
    <button 
      className={`currency-button ${modifier} ${currencyName === currentCurrency ? 'currency-button--active' : '' }`}
      data-currency={currencyName}
      onClick={onClick}>
        {currencyName}
    </button>
  );
}
  
export default CurrencyButton;