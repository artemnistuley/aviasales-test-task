import React from 'react';
import Price from './Price';

const TicketItem = (props) => {
  const ticket = props.ticket;
  const currency = props.currency;
  
  return (
    <div className="ticket-item">
      <div className="ticket-item__wrap">
        <div>{ticket.origin}</div>
        <div>{ticket.origin_name}</div>
        <div>{ticket.destination}</div>
        <div>{ticket.destination_name}</div>
        <div>{ticket.departure_date}</div>
        <div>{ticket.departure_time}</div>
        <div>{ticket.arrival_date}</div>
        <div>{ticket.arrival_time}</div>
        <div>{ticket.carrier}</div>
        <div>{ticket.stops}</div>

        <Price price={ticket.price} currency={currency} />
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default TicketItem;