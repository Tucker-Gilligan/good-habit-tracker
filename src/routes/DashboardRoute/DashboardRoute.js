import React, { Component } from 'react';
import HabitsApiService from '../../services/habits-api-service';
import HabitsContext from '../../contexts/HabitsContext';
import './DashboardRoute.css';
import HabitsList from '../../components/HabitsList/HabitsList';
class DashboardRoute extends Component {
  static contextType = HabitsContext;

  componentDidMount() {
    this.context.clearError();
    HabitsApiService.getUserHabits()
      .then(res => {
        this.context.setHabits(res);
      })
      .catch(this.context.setError);
  }

  renderHabits() {
    console.log(this.context.habits, 'LOOK AT MY HABITS');
    return this.context.habits.map(habit => (
      <HabitsList
        key={habit.id}
        name={habit.name}
        description={habit.description}
        current_streak={habit.current_streak}
        date_completed={habit.date_completed}
        best_streak={habit.best_streak}
      />
    ));
  }

  render() {
    // const { habits = [] } = this.context;
    return (
      <div className='dashboard'>
        <h2 className='habits__header'>your habits!</h2>

        <ul className='habits__list'>{this.renderHabits()}</ul>
      </div>
    );
  }
}

export default DashboardRoute;
