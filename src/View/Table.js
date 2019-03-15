export default class Table {

    static createButtonCells(countCells) {
        let strCells = '<tr>';

        for (let i = 0; i < countCells; i++) {
            strCells += '<td><button><span></span></button></td>';
        }
        strCells += '</tr>';

        return strCells
    }

    static createFullTable(countCells) {
        let strCells = Table.createButtonCells(countCells.value),
            contents = '';

        for (let i = 0; i < countCells.value; i++) {
            contents += strCells;
        }
        contents = '<table><tbody>' + contents + '</tbody></table>';

        return contents;
    }

    static createTable() {
        let countCells = document.getElementById("countCells"),
            tableGame = document.getElementById("tableGame");

        tableGame.innerHTML = Table.createFullTable(countCells);
    }
}
