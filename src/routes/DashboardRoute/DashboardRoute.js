import React, { Component } from 'react';
import HabitsApiService from '../../services/habits-api-service';
import HabitsContext from '../../contexts/HabitsContext';
import './DashboardRoute.css';
import HabitsList from '../../components/HabitsList/HabitsList';
import NewHabitForm from '../../components/NewHabitForm/NewHabitForm';
class DashboardRoute extends Component {
  static contextType = HabitsContext;
  state = {
    isAdding: false,
  };

  componentDidMount() {
    this.context.clearError();
    HabitsApiService.getUserHabits()
      .then(res => {
        this.context.setHabits(res);
      })
      .catch(this.context.setError);
  }

  renderHabits() {
    // console.log(this.context.habits, 'LOOK AT MY HABITS');
    const { habits = [] } = this.context;
    return habits.map(habit => (
      <HabitsList
        key={habit.id}
        name={habit.name}
        description={habit.description}
        current_streak={habit.current_streak}
        // date_completed={habit.date_completed}
        best_streak={habit.best_streak}
      />
    ));
  }

  handleHabitForm = evt => {
    evt.preventDefault();
    this.setState({ isAdding: true });
  };

  render() {
    // const { habits = [] } = this.context;
    return (
      <div className='dashboard'>
        {this.context.feedback !== '' && <h3>{this.context.feedback}</h3>}
        {this.state.isAdding === false ? (
          <button className='add__habit' onClick={this.handleHabitForm}>
            Create a new habit
          </button>
        ) : (
          <NewHabitForm />
        )}
        <h2 className='habits__header'>your habits!</h2>

        <ul className='habits__list'>{this.renderHabits()}</ul>
      </div>
    );
  }
}

export default DashboardRoute;
