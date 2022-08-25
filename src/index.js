import Form from './components/Form.js';
import Table from './components/Table.js';
import { refresh } from './data/createGames.js';
import './index.css';

const component = () => {
  const entry = document.getElementById('data_input');
  const refBtn = document.getElementById('refresh');
  refBtn.addEventListener('click', () => refresh());
  Table();

  entry.appendChild(Form());
};

component();
