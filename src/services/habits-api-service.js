import config from '../config';
import TokenService from './token-service';

const HabitsApiService = {
  getUserHabits() {
    return fetch(`${config.API_ENDPOINT}/habits`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  postNewHabit(habit) {
    return fetch(`${config.API_ENDPOINT}/habits`, {
      method: 'POST',
      body: JSON.stringify(habit),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
};

export default HabitsApiService;
