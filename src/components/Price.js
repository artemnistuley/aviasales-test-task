import React from 'react';

const convertToUsd = (value) => Math.round(value * 0.015);
const convertToEur = (value) => Math.round(value * 0.013);

const Price = (props) => {
  let price = props.price;
  const currentCurrency = props.currentCurrency;

  let currencySign;

  switch (currentCurrency) {
    case 'USD':
      currencySign = '$';
      price = convertToUsd(price);
      break;
    case 'EUR':
      currencySign = '€';
      price = convertToEur(price);
      break;
    default:
      currencySign = '₽';
  }
  
  return (
    <span>{price} {currencySign}</span>
  )
};

export default Price;

// data.toLocaleString('en-US', {style: 'currency', currency: 'EUR'})
// data.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
// data.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})