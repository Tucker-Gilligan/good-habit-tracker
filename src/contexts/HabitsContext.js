import React, { Component } from 'react';
const HabitsContext = React.createContext({
  habits: [],
  error: null,
  feedback: '',
  setError: () => {},
  clearError: () => {},
  setHabits: () => {},
  setFeedback: () => {},
});
export default HabitsContext;

export class HabitsProvider extends Component {
  state = {
    habits: [],
    feedback: '',
    error: null,
  };

  setFeedback = feedback => {
    this.setState({ feedback });
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
      feedback: this.state.feedback,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setHabits: this.setHabits,
      setFeedback: this.setFeedback,
    };
    return (
      <HabitsContext.Provider value={value}>
        {this.props.children}
      </HabitsContext.Provider>
    );
  }
}
