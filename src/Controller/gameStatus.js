import {CLOSE, CLOSE_ZERO, BAND} from "../constants/state";
import {disabledButtons} from "./disabledButtons";

function blockAllButtons(ButtonsModel) {

    ButtonsModel.arr.forEach(elem => {
        if (elem.hasBomb) {
            ButtonsModel.setElemState(elem,BAND);
        }
    });
    disabledButtons();
}

export function gameStatus(ButtonsModel, result) {
    const resultGame = document.getElementById("resultGame");
    resultGame.innerHTML = result;
    blockAllButtons(ButtonsModel);
}

export function checkDisabled(ButtonsModel) {
    let countButtonNotCheck = ButtonsModel.arr.length - ButtonsModel.countCells,
        count = 0;

    for (let i = 0; i < ButtonsModel.arr.length; i++) {
        if (ButtonsModel.arr[i].state === CLOSE || ButtonsModel.arr[i].state === CLOSE_ZERO) count++;
    }
    return count === countButtonNotCheck;
}
