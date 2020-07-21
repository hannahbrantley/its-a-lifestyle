import tokenService from './tokenService';
const BASE_URL = '/api/competitions';

export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    .then(res => res.json());
  }
  
export function create(competition) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(competition)
    }).then(res => res.json());
  }
  
  export function update(competition) {
    return fetch(`${BASE_URL}/${competition._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(competition)
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
