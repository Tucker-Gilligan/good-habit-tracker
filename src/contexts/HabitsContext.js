import React, { Component } from 'react';
const HabitsContext = React.createContext({
  habits: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setHabits: () => {},
});
export default HabitsContext;

export class HabitsProvider extends Component {
  state = {
    habits: [],
    error: null,
  };

  setHabits = habits => {
    this.setState({ habits });
  };

  setError = error => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      habits: this.state.habits,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setHabits: this.setHabits,
    };
    return (
      <HabitsContext.Provider value={value}>
        {this.props.children}
      </HabitsContext.Provider>
    );
  }
}
