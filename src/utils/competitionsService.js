const BASE_URL = '/api/competitions';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
  }
  
export function create(competition) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(competition)
    }).then(res => res.json());
  }
  
  export function update(competition) {
    return fetch(`${BASE_URL}/${competition._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(competition)
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }