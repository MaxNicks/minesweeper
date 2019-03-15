import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';

import Table from "./View/Table";
import Button from "./Model/Button";
import Bomb from './Model/Bomb';
import {addEvent} from "./Model/clickEvent";


let a = document.getElementById('startGame');
a.onclick = function() { main() };

function main() {
    document.body.oncontextmenu = () => false;
    let resultGame = document.getElementById("resultGame");
    resultGame.innerHTML = '';

    let tableGame = document.getElementById("tableGame"),
        countBombs = document.getElementById("countBombs"),
        countCells = document.getElementById("countCells");
    let countCellsInt = +countCells.value;

    Table.createTable();
    let buttonsView = tableGame.getElementsByTagName("button");

    let button = new Button(countCellsInt),
        arrButtons = button.createArrButtons();

    addEvent(arrButtons, buttonsView, countCellsInt);

    Bomb.createBombs(arrButtons,+countBombs.value);
}

