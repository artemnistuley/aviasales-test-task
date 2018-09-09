import React, { Component } from 'react';
import './assets/styles/style.css';
import logo from './assets/svg/logo.svg';

import Header from './components/Layout/Header';
import Content from './components/Layout/Content';
import Sidebar from './components/Layout/Sidebar';
import Main from './components/Layout/Main';

import TicketList from './components/TicketList';
import CurrencySwitcher from './components/CurrencySwitcher';
import Filter from './components/Filter';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      filteredTickets: [],
      currentCurrency: 'RUB'
    };

    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  async loadTickets(url) {

    try {
      const response = await fetch(url);
      const data = await response.json();
      const tickets = data.tickets;

      tickets.sort((a, b) => a.price > b.price);

      this.initialData = tickets;
      this.setState({ tickets: this.initialData });
    } catch (error) {
      console.error(error);
    }
  }

  handleChangeCurrency(currency) {
    this.setState({ currentCurrency: currency });
  }

  handleChangeFilter(filterNames) {
    const filteredTickets = this.initialData.filter((ticket) => (
      filterNames.includes(`${ticket.stops}`)
    ));

    if (
      !filterNames.length ||
      filterNames.includes('all')
    ) {
      this.setState({ tickets: this.initialData });
    } else {
      this.setState({ tickets: filteredTickets });
    }
  }

  componentDidMount() {
    this.loadTickets('tickets.json');
  }

  render() {
    const { tickets, currentCurrency } = this.state;

    return (
      <div>
        <Header logo={logo} />

        <Content>
          <Sidebar>
            <CurrencySwitcher onCurrencyChange={this.handleChangeCurrency} currentCurrency={currentCurrency} />
            <Filter onFilterChange={this.handleChangeFilter} />
          </Sidebar>

          <Main>
            <TicketList tickets={tickets} currentCurrency={currentCurrency} />
          </Main>
        </Content>
      </div>
    );
  }
}

export default App;
