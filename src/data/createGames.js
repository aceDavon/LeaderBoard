import axios from 'axios';
import { ID } from './gameData';

const baseUrl =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const handleForm = async (e, values) => {
  e.preventDefault();
  const { name, score } = values;
  const data = await fetch(`${baseUrl}games/${ID}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'content-type': 'Application/json; charset=UTF-8',
    },
  }).then((Response) => Response.json());

  console.log(data);
};

export const getData = async () => {
  const data = await fetch(`${baseUrl}games/${ID}/scores`)
  const res = await data.json()

  return res;
};
