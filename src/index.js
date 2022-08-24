import Form from './components/Form';
import Table from './components/Table';
import './index.css';

// const createGame = async () => {
//   const url =
//     'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

//   return await fetch(url, {
//     method: 'post',
//     body: JSON.stringify({
//       name: 'My new cool game',
//     }),
//     headers: {
//       'content-type': 'Application/json; charset=UTF-8'
//     }
//   })
//     .then((Response) => Response.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err.message));
// };

export const gameID = 'Frg7UHGSqJIiPKiZWVNs';

function component() {
  const entry = document.getElementById('data_input');
  const refBtn = document.getElementById('refresh');
  refBtn.addEventListener('click', () => Table());

  entry.appendChild(Form());
}

component();
