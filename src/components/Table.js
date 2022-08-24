import { getData } from '../data/createGames.js';

const Table = () => {
  const dataEntry = document.getElementById('data_point');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  const data = getData();
  data.then((x) => {
    const arr = x.result;
    arr.map((obj) => {
      const row = document.createElement('tr');
      row.innerHTML += `
          <td>${obj.user}</td>
          <td>${obj.score}</td>
        `;
      return tbody.appendChild(row);
    });
  });

  table.appendChild(tbody);
  dataEntry.appendChild(table);
};

export default Table;
