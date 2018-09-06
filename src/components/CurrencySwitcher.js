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
    const currency = this.props.currency;

    return (
      <div className="currency-switcher">
        <div className="currency-switcher__wrap">
          <CurrencyButton 
            currency={currency}
            currencyName={currencyNames.RUB}
            onClick={this.handleClick}
          />
          <CurrencyButton 
            currency={currency}
            currencyName={currencyNames.USD}
            onClick={this.handleClick}
          />
          <CurrencyButton 
            currency={currency}
            currencyName={currencyNames.EUR}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default CurrencySwitcher;