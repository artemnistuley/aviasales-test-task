import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      all: false,
      0: false,
      1: false,
      2: false,
      3: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.checked;

    const checkedNames = [];

    this.setState({
      [name]: value
    }, _ => {
      const state = this.state;
      
      for (let key in state) {
        if (state[key]) {
          checkedNames.push(key);
        }
      }

      this.props.onFilterChange(checkedNames);
    });
  }

  handleClick(e) {
    const target = e.target;
    const name = target.dataset.name;
    const state = this.state;

    const newState = {};

    for (let key in state) {
      if (key === name) {
        newState[key] = true;
      } else {
        newState[key] = false;
      }
    }
    
    this.setState(newState, _ => {
      this.props.onFilterChange([name]);
    });
  }
  
  render() {

    return (
      <div className="filter">
        <div className="filter__wrap">
          <div className="filter__title">Количество пересадок</div>   
          <div className="filter__items">
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">Все
                  <input
                    className="checkbox__element"
                    name="all"
                    type="checkbox"
                    checked={this.state.all}
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick} data-name="all">Только</button>
            </div>
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">Без пересадок
                  <input
                    className="checkbox__element"
                    name="0"
                    type="checkbox"
                    checked={this.state[0]}
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick} data-name="0">Только</button>
            </div>
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">1 пересадка
                  <input
                    className="checkbox__element"
                    name="1"
                    type="checkbox"
                    checked={this.state[1]}
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick} data-name="1">Только</button>
            </div>
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">2 пересадки
                  <input
                    className="checkbox__element"
                    name="2"
                    type="checkbox"
                    checked={this.state[2]}
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick} data-name="2">Только</button>
            </div>
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">3 пересадки
                  <input
                    className="checkbox__element"
                    name="3"
                    type="checkbox"
                    checked={this.state[3]}
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick} data-name="3">Только</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
