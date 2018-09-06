import React from 'react';
import TicketItem from './TicketItem';

const TicketList = (props) => {
  const tickets = props.tickets;
  const currency = props.currency;
  
  const items = tickets.map((ticket, index) => (
    <TicketItem key={index} ticket={ticket} currency={currency} />
  ));

  return (
    <div className="ticket-list">
      <div className="ticket-list__wrap">
        {items}
      </div>
    </div>
  )
};

export default TicketList;