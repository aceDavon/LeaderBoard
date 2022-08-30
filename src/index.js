import Form from './components/Form.js';
import Table from './components/Table.js';
import { refresh } from './data/createGames.js';
import './index.css';

const component = () => {
  const entry = document.getElementById('data_input');
  const refBtn = document.getElementById('refresh');
  const extLink = document.querySelector('.copyright')
  refBtn.addEventListener('click', () => refresh());
  Table();
  extLink.addEventListener('click', () => {
    window.location.href='https://github.com/aceDavon'
  })


  entry.appendChild(Form());
};

component();
