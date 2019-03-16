import Buttons from "../Model/Buttons";
import Table from "../View/Table";
import {createBombs} from "../Model/Bomb";
import {addEvent} from "../Controller/clickEvent";

export default function initGame() {

    document.body.oncontextmenu = () => false;
    document.getElementById("resultGame").innerHTML = '';

    const tableGame = document.getElementById("tableGame"),
          countBombs = document.getElementById("countBombs"),
          countCells = document.getElementById("countCells");

    const TableView = new Table(tableGame, +countCells.value);
    const ButtonsModel = new Buttons(+countCells.value, +countBombs.value);

    addEvent(ButtonsModel, TableView);
    createBombs(ButtonsModel);
}
