import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const checkboxes = e.target
    .parentElement
    .parentElement
    .parentElement
    .parentElement
    .querySelectorAll(".checkbox__element");

    const checkedCheckboxes = [...checkboxes].filter((checkbox)=> checkbox.checked);
    const checkedNames = checkedCheckboxes.map((checkbox)=>checkbox.name);

    this.props.onFilterChange(checkedNames);
  }

  handleClick(e) {
    const targetCheckbox = e.target
    .parentElement
    .querySelector(".checkbox__element");

    const targetName = targetCheckbox.name;

    const allCheckboxes = e.target
    .parentElement
    .parentElement
    .parentElement
    .querySelectorAll(".checkbox__element");

    [...allCheckboxes].forEach((checkbox) => {
      checkbox.checked = false;
    });
    targetCheckbox.checked = true;

    this.props.onFilterChange([targetName]);
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
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick}>Только</button>
            </div>
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">Без пересадок
                  <input
                    className="checkbox__element"
                    name="0"
                    type="checkbox"
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick}>Только</button>
            </div>
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">1 пересадка
                  <input
                    className="checkbox__element"
                    name="1"
                    type="checkbox"
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick}>Только</button>
            </div>
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">2 пересадки
                  <input
                    className="checkbox__element"
                    name="2"
                    type="checkbox"
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick}>Только</button>
            </div>
            <div className="filter__item">
              <div className="checkbox">
                <label className="checkbox__label">3 пересадки
                  <input
                    className="checkbox__element"
                    name="3"
                    type="checkbox"
                    onChange={this.handleChange}
                  />
                  <div className="checkbox__check"></div>
                </label>
              </div>
              <button className="filter__button" onClick={this.handleClick}>Только</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
