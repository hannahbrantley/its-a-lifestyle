import tokenService from './tokenService';
const BASE_URL = '/api/workouts';

export function getAll() {
    console.log('getAll workouts from workoutService')
    return fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    .then(res => res.json());
  }
  
export function create(workout) {
    console.log('workoutService create func')
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(workout)
    }).then(res => res.json());
  }
  
  export function update(workout) {
    return fetch(`${BASE_URL}/${workout._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(workout)
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    }).then(res => res.json());
  }