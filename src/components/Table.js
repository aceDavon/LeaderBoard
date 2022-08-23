const Table = () => {
  const table = document.createElement('table');

  table.innerHTML = `
  <tr>
    <td>Alfredse</td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>Centro</td>
    <td>Francisco Chang</td>
  </tr>
  <tr>
    <td>Ernsl</td>
    <td>Roland Mendel</td>
  </tr>
  <tr>
    <td>Island</td>
    <td>Helen Bennett</td>
  </tr>
  <tr>
    <td>Laughing B</td>
    <td>Yoshi Tannamuri</td>
  </tr>
  <tr>
    <td>Magazzini A</td>
    <td>Giovanni Rovelli</td>
  </tr>
`;

  return table;
};

export default Table;
