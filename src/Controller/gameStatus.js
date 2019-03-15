import {CLOSE, CLOSEZERO, BAND} from "../constants/state";
import {updateCurrentElem} from "./updateElem";
import {disabledButtons} from "./disabledButtons";

function blockAllButtons(arrButtons) {

    arrButtons.forEach(elem => {
        if (elem.hasBomb) {
            elem.state = BAND;
            updateCurrentElem(elem);
        }
    });
    disabledButtons();
}

export function gameStatus(arrButtons, result) {
    let resultGame = document.getElementById("resultGame");
    resultGame.innerHTML = result;
    blockAllButtons(arrButtons);
}

export function checkDisabled(arrButtons, countCellsInt) {
    let countButtonNotCheck = arrButtons.length - countCellsInt,
        count = 0;

    for (let i = 0; i < arrButtons.length; i++) {
        if (arrButtons[i].state === CLOSE || arrButtons[i].state === CLOSEZERO) count++;
    }
    return count === countButtonNotCheck;
}
