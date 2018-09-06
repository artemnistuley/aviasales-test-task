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
          <CurrencyButton 
            currentCurrency={currentCurrency}
            currencyName={currencyNames.RUB}
            onClick={this.handleClick}
          />
          <CurrencyButton 
            currentCurrency={currentCurrency}
            currencyName={currencyNames.USD}
            onClick={this.handleClick}
          />
          <CurrencyButton 
            currentCurrency={currentCurrency}
            currencyName={currencyNames.EUR}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default CurrencySwitcher;