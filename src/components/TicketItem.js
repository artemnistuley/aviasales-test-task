import React from 'react';
import Price from './Price';

import ticketLogo from '../assets/images/ticket-logo.png';
import airplaneIcon from  '../assets/svg/airplane.svg';

// :)
const formatDate = (date) => {
  const dateArray = date.split('.').reverse();

  const newDate = new Date(
    '20' + dateArray[0],
    dateArray[1] - 1,
    dateArray[2]
  );

  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short'
  }

  const formatedDate = newDate
  .toLocaleString("ru", options)
  .replace(/\.|г/g,'')
  .trim()
  .split(', ')
  .reverse()
  .join(', ');

  return formatedDate;
};

const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
}

const stopsTitles = ['пересадка', 'пересадки', 'пересадок'];

const TicketItem = (props) => {
  const ticket = props.ticket;
  const currentCurrency = props.currentCurrency;
  
  return (
    <div className="ticket-item">
      <div className="ticket-item__wrap">
        <div className="ticket-item__left-part">
          <div className="ticket-item__logo">
            <img className="ticket-item__logo-img" src={ticketLogo} alt="" />
          </div>
          <div className="ticket-item__button">
            <a className="ticket-item__btn" href="#">
              <span className="ticket-item__btn-title ticket-item__btn-title--top">Купить</span>
              <span className="ticket-item__btn-title ticket-item__btn-title--bottom">
                за <Price price={ticket.price} currentCurrency={currentCurrency} />
              </span>
            </a>
          </div>
        </div>
        <div className="ticket-item__right-part">
          <div className="ticket-item__info ticket-item__info--departure">
            <div className="ticket-item__info-time">{ticket.departure_time}</div>
            <div className="ticket-item__info-name">{ticket.origin}, {ticket.origin_name}</div>
            <div className="ticket-item__info-date">{formatDate(ticket.departure_date)}</div>
          </div>
          <div className="ticket-item__stops">
            <div className="ticket-item__stops-title">
              {!!ticket.stops && (
                `${ticket.stops} ${declOfNum(ticket.stops, stopsTitles)}`
              )}
            </div>
            <div className="ticket-item__stops-icon">
              <div className="ticket-item__stops-line"></div>
              <img className="ticket-item__stops-img" src={airplaneIcon} alt="" />
            </div>
          </div>
          <div className="ticket-item__info ticket-item__info--arrival">
            <div className="ticket-item__info-time">{ticket.arrival_time}</div>
            <div className="ticket-item__info-name">{ticket.destination_name}, {ticket.destination}</div>
            <div className="ticket-item__info-date">{formatDate(ticket.arrival_date)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
