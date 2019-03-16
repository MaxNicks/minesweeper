import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import initGame from './Controller/initGame';

let buttonStartGame = document.getElementById('startGame');
buttonStartGame.onclick = () => initGame();

