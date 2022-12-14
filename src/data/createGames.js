import ID from './gameData.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const handleForm = async (e, values) => {
  e.preventDefault();
  const { name, score } = values;
  await fetch(`${baseUrl}games/${ID}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'content-type': 'Application/json; charset=UTF-8',
    },
  }).then((Response) => Response.json());
  alert('Data saved! Refresh to see Scores');
  name.value = '';
  score.value = '';
};

export const refresh = () => window.location.reload();

export const getData = async () => {
  const data = await fetch(`${baseUrl}games/${ID}/scores`);
  const res = await data.json();
  return res;
};
