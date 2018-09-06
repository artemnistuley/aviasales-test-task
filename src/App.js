import React, { Component } from 'react';
import './App.css';

import TicketList from './components/TicketList';
import CurrencySwitcher from './components/CurrencySwitcher';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      currentCurrency: 'RUB'
    };

    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
  }

  async loadTickets(url) {

    try {
      const response = await fetch(url);
      const data = await response.json();
      const tickets = data.tickets;

      tickets.sort((a, b) => a.price > b.price);

      this.setState({ tickets });
    } catch (error) {
      console.error(error);
    }
  }

  handleChangeCurrency(currency) {
    this.setState({ currentCurrency: currency });
  }

  componentDidMount() {
    this.loadTickets('tickets.json');
  }

  render() {
    const { tickets, currentCurrency } = this.state;
    
    return (
      <div className="page">
        <div className="page__wrap">

          <div className="sidebar">
            <CurrencySwitcher onCurrencyChange={this.handleChangeCurrency} currentCurrency={currentCurrency} />
          </div>

          <TicketList tickets={tickets} currentCurrency={currentCurrency} />
        </div>
      </div>
    );
  }
}

export default App;
