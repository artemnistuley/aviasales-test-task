import React, { Component } from 'react';
import CurrencyButton from './CurrencyButton';

const currencyNames = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR'
};

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    const currency = e.target.dataset.currency;
    this.props.onCurrencyChange(currency);
  }
  
  render() {
    const currentCurrency = this.props.currentCurrency;

    return (
      <div className="currency-switcher">
        <div className="currency-switcher__wrap">
          <div className="currency-switcher__title">Валюта</div>
          <div className="currency-switcher__buttons">
            <CurrencyButton 
              currentCurrency={currentCurrency}
              currencyName={currencyNames.RUB}
              onClick={this.handleClick}
              modifier="currency-button--left"
            />
            <CurrencyButton 
              currentCurrency={currentCurrency}
              currencyName={currencyNames.USD}
              onClick={this.handleClick}
              modifier="currency-button--center"
            />
            <CurrencyButton 
              currentCurrency={currentCurrency}
              currencyName={currencyNames.EUR}
              onClick={this.handleClick}
              modifier="currency-button--right"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencySwitcher;
