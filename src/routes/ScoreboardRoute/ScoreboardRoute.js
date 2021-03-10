import React, { Component } from 'react';
import HabitsContext from '../../contexts/HabitsContext';

class ScoreboardRoute extends Component {
  static contextType = HabitsContext;

  renderCurrentBest() {
    const { habits = [] } = this.context;
    if (habits.length === 0) {
      return <h4>Loading page stats....</h4>;
    }
    let topScore = 0;
    habits.forEach(
      habit =>
        habit.current_streak > topScore && (topScore = habit.current_streak)
    );
    let bestHabit = habits.find(habit => habit.current_streak === topScore);
    return (
      <div className='scoreboard__item'>
        <h3>Current</h3>
        <p>
          {bestHabit.name}:{bestHabit.current_streak}
        </p>
      </div>
    );
  }

  renderBestStreak() {
    const { habits = [] } = this.context;
    if (habits.length === 0) {
      return <h4>Loading page stats....</h4>;
    }
    let topScore = 0;
    habits.forEach(
      habit => habit.best_streak > topScore && (topScore = habit.best_streak)
    );
    let bestHabit = habits.find(habit => habit.best_streak === topScore);
    return (
      <div className='scoreboard__item'>
        <h3>All time</h3>
        <p>
          {bestHabit.name}:{bestHabit.best_streak}
        </p>
      </div>
    );
  }

  renderCurrentLowest() {
    const { habits = [] } = this.context;
    if (habits.length === 0) {
      return <h4>Loading page stats....</h4>;
    }
    let lowScore = habits[0].current_streak;
    habits.forEach(
      habit =>
        habit.current_streak < lowScore && (lowScore = habit.current_streak)
    );
    let lowHabit = habits.find(habit => habit.current_streak === lowScore);
    return (
      <div className='scoreboard__item'>
        <h3>Current</h3>
        <p>
          {lowHabit.name}:{lowHabit.current_streak}
        </p>
      </div>
    );
  }
  renderLowestStreak() {
    const { habits = [] } = this.context;
    if (habits.length === 0) {
      return <h4>Loading page stats....</h4>;
    }
    let lowScore = habits[0].best_streak;
    habits.forEach(
      habit => habit.best_streak < lowScore && (lowScore = habit.best_streak)
    );
    let lowHabit = habits.find(habit => habit.best_streak === lowScore);
    return (
      <div className='scoreboard__item'>
        <h3>All Time</h3>
        <p>
          {lowHabit.name}:{lowHabit.best_streak}
        </p>
      </div>
    );
  }
  render() {
    return (
      <div className='habit__stats'>
        <h2>ScoreBoard</h2>
        <h3>Best Streaks!</h3>
        <div className='best__streaks '>
          {this.renderCurrentBest()}
          {this.renderBestStreak()}
        </div>
        <div className='lowest__streaks '>
          <h3>Try to work on these</h3>
          {this.renderCurrentLowest()}
          {this.renderLowestStreak()}
        </div>
      </div>
    );
  }
}

export default ScoreboardRoute;
