import {CLOSE, CLOSE_ZERO, OPEN, BAND, FLAG} from "../constants/state";

export default class Table {

    constructor(tableGame, countCells) {
        this.countCells = countCells;
        this.tableGame = tableGame;
        this.createTable(tableGame);
        this.buttonsView = this.arrButtonsView();
    }

    createButtonCells() {
        let strCells = '<tr>';

        for (let i = 0; i < this.countCells; i++) {
            strCells += '<td><button><span></span></button></td>';
        }
        strCells += '</tr>';

        return strCells
    }

    createFullTable() {
        const strCells = this.createButtonCells();
        let contents = '';

        for (let i = 0; i < this.countCells; i++) {
            contents += strCells;
        }
        contents = '<table><tbody>' + contents + '</tbody></table>';

        return contents;
    }

    createTable() {
        this.tableGame.innerHTML = this.createFullTable();
    }

    arrButtonsView() {
        return this.tableGame.getElementsByTagName("button");
    }

    updateCurrentElem(id, state, countBombs) {
        Table.setButtonStyle(this.buttonsView[id], state, countBombs);
    }

    static setButtonStyle(elem, state, countBomb) {

        switch (state) {
            case OPEN: {
                elem.className = "btn btn-info";
                elem.firstElementChild.className = "fas fa-circle";
                break;
            }
            case CLOSE: {
                elem.className = "btn btn-success";
                elem.innerHTML = `<spaw class="pl-1 pr-1">${countBomb}</spaw>`;
                elem.disabled = true;
                break;
            }
            case CLOSE_ZERO: {
                elem.className = "btn btn-success";
                elem.innerHTML = `<spaw class="pl-2 pr-2"></spaw>`;
                elem.disabled = true;
                break;
            }
            case FLAG: {
                elem.className = "btn btn-warning";
                elem.firstElementChild.className = "fas fa-check";
                break;
            }
            case BAND: {
                elem.className = "btn btn-danger";
                elem.firstElementChild.className = "fas fa-bomb";
                break;
            }
        }

    }
}
