import React from 'react';

const convertToUsd = (value) => Math.round(value * 0.015);
const convertToEur = (value) => Math.round(value * 0.013);

const Price = (props) => {
  let price = props.price;
  const currentCurrency = props.currentCurrency;

  switch (currentCurrency) {
    case 'USD':
      price = convertToUsd(price).toLocaleString('en-US', {
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0
      });

      break;

    case 'EUR':
      price = convertToEur(price).toLocaleString('en-US', {
        style: 'currency', 
        currency: 'EUR',
        minimumFractionDigits: 0
      });
      break;

    default:
      price = price.toLocaleString('ru-RU', {
        style: 'currency', 
        currency: 'RUB', 
        minimumFractionDigits: 0
      });
  }
  
  return (
    <span>{price}</span>
  )
};

export default Price;
