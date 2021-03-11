import { Component } from 'react';
import HabitsApiService from '../../services/habits-api-service';
import HabitsContext from '../../contexts/HabitsContext';
class NewHabitForm extends Component {
  static contextType = HabitsContext;
  state = {
    newHabitName: '',
    newHabitDescription: '',
  };
  handleSubmitNewHabit = evt => {
    evt.preventDefault();
    const newHabit = {
      name: this.state.newHabitName,
      description: this.state.newHabitDescription,
    };
    HabitsApiService.postNewHabit(newHabit)
      .then(res => {
        console.log(res, 'RES');
        this.setState({ newHabitName: '' });
        this.setState({ newHabitDescription: '' });
        this.context.setHabits([...this.context.habits, res]);
        this.context.setFeedback('New habit submitted!');
        setTimeout(() => {
          this.context.setFeedback('');
        }, 4000);
      })
      .catch(this.context.setError);
  };

  handleOnChangeName = evt => {
    evt.preventDefault();
    let userInput = evt.target.value;
    this.setState({ newHabitName: userInput });
    console.log(this.state.newHabitName);
  };
  handleOnChangeDescription = evt => {
    evt.preventDefault();
    let userInput = evt.target.value;
    this.setState({ newHabitDescription: userInput });
  };
  render() {
    return (
      <form className='new__habit__form' onSubmit={this.handleSubmitNewHabit}>
        <label htmlFor='new__habit__name' className='new__habit__label'>
          New Habit Name
        </label>
        <input
          type='text'
          className='new__habit__name'
          id='new__habit__name'
          name='new__habit__name'
          value={this.state.newHabitName}
          onChange={this.handleOnChangeName}
        />
        <label htmlFor='new__habit__description' className='new__habit__label'>
          New Habit Name
        </label>
        <input
          type='text'
          className='new__habit__description'
          id='new__habit__description'
          name='new__habit__description'
          value={this.state.newHabitDescription}
          onChange={this.handleOnChangeDescription}
        />
        <button type='submit' className='submit__new'>
          Submit Habit
        </button>
      </form>
    );
  }
}

export default NewHabitForm;
