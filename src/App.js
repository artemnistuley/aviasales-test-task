import React, { Component } from 'react';
import './App.css';

import TicketList from './components/TicketList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: []
    };
  }
  
  async loadTickets (url) {

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

  componentDidMount() {
    this.loadTickets('tickets.json');
  }

  render() {
    const tickets = this.state.tickets;
    
    return (
      <div className="page">
        <div className="page__wrap">

          <TicketList tickets={tickets} />
        </div>
      </div>
    );
  }
}

export default App;
