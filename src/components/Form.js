import { handleForm } from '../data/createGames.js';

const Form = () => {
  const form = document.createElement('form');
  const name = document.createElement('input');
  const score = document.createElement('input');
  const btn = document.createElement('button');
  const values = { name, score };
  btn.setAttribute('type', 'button');
  btn.innerText = 'Submit';
  btn.addEventListener('click', (e) => handleForm(e, values));
  name.setAttribute('id', 'name');
  score.setAttribute('id', 'score');

  form.appendChild(name);
  form.appendChild(score);
  form.appendChild(btn);

  return form;
};

export default Form;
