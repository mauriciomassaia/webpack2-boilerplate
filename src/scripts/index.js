import Drop from '../assets/drop.jpg';
import '../styles/index.css';

window.addEventListener('load', () => {
  console.log('window ready.');

  console.log(Drop);

  const img = new Image();
  img.src = Drop;
  const container = document.getElementsByClassName('container')[0];
  container.className = 'drop-image';
  container.appendChild(img);
  console.log('container', container);
  console.log('image', img);
});
