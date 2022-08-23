import './index.css';
import Icon from './img/icon-pwa.png';

function component() {
  const el = document.getElementById('entry');
  const element = document.createElement('div');
  const media = document.createElement('img');
  const code = document.createElement('code');
  const link = document.createElement('a');
  link.href = 'https://webpack.org';
  link.target = '_blank';
  link.innerText = 'official Website documentation';

  element.innerHTML = 'Hello There, This is webpack!!!';
  element.classList.add('hello');
  media.classList.add('media');
  el.appendChild(element);
  media.src = Icon;
  code.innerText = 'to learn more, visit the ';
  code.appendChild(link);
  el.appendChild(media);
  el.appendChild(code);

  return el;
}

document.body.appendChild(component());