import React, { Component } from 'react';
class HabitsList extends Component {
  render() {
    return (
      <li className='habits__list__item'>
        <h4 className='habit__name'>{this.props.name}</h4>
        <p className='habit__details__item'>Goal: {this.props.description}</p>
        <p className='habit__details__item'>
          Current streak: {this.props.current_streak}
        </p>
        <p className='habit__details__item'>
          Best streak: {this.props.best_streak}
        </p>
        <p className='habit__details__item'>
          {/* Date last completed: {this.props.date_completed} */}
        </p>
      </li>
    );
  }
}

export default HabitsList;
