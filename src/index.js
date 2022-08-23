import Form from './components/Form';
import Table from './components/Table';
import './index.css';

function component() {
  const dataEntry = document.getElementById('data_point');
  const entry = document.getElementById('data_input');

  dataEntry.appendChild(Table());
  entry.appendChild(Form());

}

component();
