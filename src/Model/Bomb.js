import {randomWithoutRepeat} from "../utilities/generateRandom";
import {CLOSE, CLOSE_ZERO} from "../constants/state";

export function createBombs(ButtonsModel) {

    let result = [];

    if (ButtonsModel.countBombs > ButtonsModel.arr.length) {
        throw new Error();
    }

    for (let i = 0; i < ButtonsModel.countBombs; i++) {
        let randId = randomWithoutRepeat(ButtonsModel.arr.length, result);
        ButtonsModel.setElemHasBomb(ButtonsModel.arr[randId], true);
    }
}

export function countBombsAroundElem(ButtonsModel, elem) {
    let countBombs = 0;
    let arrNeighbors = getNeighbors(elem, ButtonsModel.countCells);

    arrNeighbors.forEach(id => {
        if(ButtonsModel.getElemHasBomb(id)) countBombs++;
    });

    ButtonsModel.setElemState(elem, CLOSE);
    ButtonsModel.setElemCountBombs(elem, countBombs);

    if (countBombs === 0) {
        ButtonsModel.setElemState(elem, CLOSE_ZERO);
        nextBombs(ButtonsModel, arrNeighbors);
    }
}

function getNeighbors(elem, size) {
    let arrNeighbors = [];

    let countCellsNum = +size,
        id = elem.id;

    if (id === 0) arrNeighbors.push(id+1, id+countCellsNum+1, id+countCellsNum);
    else if (id === countCellsNum-1) arrNeighbors.push(id+countCellsNum, id+countCellsNum-1, id-1);
    else if (id === countCellsNum*countCellsNum-countCellsNum) arrNeighbors.push(id-countCellsNum, id-countCellsNum+1, id+1);
    else if (id === countCellsNum*countCellsNum-1) arrNeighbors.push(id-1, id-countCellsNum-1, id-countCellsNum);

    else if (id > 0 && id < countCellsNum-1) arrNeighbors.push(id+1, id+countCellsNum+1, id+countCellsNum, id+countCellsNum-1, id-1);
    else if (id > countCellsNum*countCellsNum-countCellsNum && id < countCellsNum*countCellsNum-1) arrNeighbors.push(id-1, id-countCellsNum-1, id-countCellsNum, id-countCellsNum+1, id+1);
    else if (id % countCellsNum === 0) arrNeighbors.push(id-countCellsNum, id-countCellsNum+1, id+1, id+countCellsNum+1, id+countCellsNum);
    else if ((id + 1) % countCellsNum === 0) arrNeighbors.push(id+countCellsNum, id+countCellsNum-1, id-1, id-countCellsNum-1, id-countCellsNum);
    else arrNeighbors.push(id-countCellsNum, id-countCellsNum+1, id+1, id+countCellsNum+1, id+countCellsNum, id+countCellsNum-1, id-1, id-countCellsNum-1);

    return arrNeighbors;
}


function nextBombs(ButtonsModel, arrNeighbors) {
    arrNeighbors.forEach(id => {
        if(ButtonsModel.getElemState(id) !== CLOSE_ZERO) countBombsAroundElem(ButtonsModel, ButtonsModel.arr[id]);
    })
}




