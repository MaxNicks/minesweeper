import Bomb from './Bomb';
import {updateCurrentElem} from '../Controller/updateElem';
import {FLAG, OPEN} from "../constants/state";
import {checkDisabled, gameStatus} from "../Controller/gameStatus";

export function checkButton(arrButtons, elem, countCellsInt) {

    if (elem.hasBomb) gameStatus(arrButtons, 'Проиграл');
    else {
        Bomb.countBombsAround(arrButtons, elem, countCellsInt);
        if (checkDisabled(arrButtons, countCellsInt)) gameStatus(arrButtons, 'Выиграл');
    }
}

export function bombIsHere(arrButtons, elem) {

    !elem.rightClick ? elem.state = FLAG : elem.state = OPEN;
    updateCurrentElem(elem);

    elem.rightClick = !elem.rightClick;
}

export function addEvent(arrButtons, buttons, countCellsInt) {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].id = i;
        updateCurrentElem(arrButtons[i]);
        buttons[i].addEventListener("click", () => checkButton(arrButtons, arrButtons[i], countCellsInt));
        buttons[i].addEventListener("contextmenu", () => bombIsHere(arrButtons, arrButtons[i]));
    }
}
