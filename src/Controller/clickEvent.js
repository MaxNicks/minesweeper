import {countBombsAroundElem} from "../Model/Bomb";
import {FLAG, OPEN} from "../constants/state";
import {checkDisabled, gameStatus} from "./gameStatus";

export function checkButton(ButtonsModel, elem, TableView) {

    if (elem.hasBomb) gameStatus(ButtonsModel, 'Проиграл');
    else {
        countBombsAroundElem(ButtonsModel, elem);
        if (checkDisabled(ButtonsModel)) gameStatus(ButtonsModel, 'Выиграл');
    }

    ButtonsModel.arr.forEach(elem =>
        update(TableView, ButtonsModel, elem)
    );
}


export function bombIsHere(ButtonsModel, elem, TableView) {

    ButtonsModel.setElemState(elem, ButtonsModel.getElemState(elem.id) === OPEN ? FLAG : OPEN);
    update(TableView, ButtonsModel, elem);
}

export function addEvent(ButtonsModel, TableView) {

    for (let i = 0; i < TableView.buttonsView.length; i++) {
        TableView.buttonsView[i].id = i;

        let elem = ButtonsModel.arr[i];
        update(TableView, ButtonsModel, elem);

        TableView.buttonsView[i].addEventListener("click", () => checkButton(ButtonsModel, ButtonsModel.arr[i], TableView));
        TableView.buttonsView[i].addEventListener("contextmenu", () => bombIsHere(ButtonsModel, ButtonsModel.arr[i], TableView));
    }
}

function update(TableView, ButtonsModel, elem) {
    TableView.updateCurrentElem(
        ButtonsModel.getElemId(elem.id),
        ButtonsModel.getElemState(elem.id),
        ButtonsModel.getElemCountBombs(elem.id)
    );
}
