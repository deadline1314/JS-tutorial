export const newGame = () => {
  return fetch('//localhost:8000/newGame')
    .then( (response) => { return response.json(); })
    .catch( (e) => { alert(`failed to reach server: ${e}`); });
};

export const takeTurn = (game) => {
  return fetch('//localhost:8000/takeTurn', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify( game )
  })
    .then( (response) => {
      return response.json(); 
    })
    .catch( (error) => {
      alert('failed to load', error);
    });
};
