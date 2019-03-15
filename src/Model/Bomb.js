import {randomWithoutRepeat} from "../utilities/generateRandom";
import {CLOSE, CLOSEZERO} from "../constants/state";
import {updateCurrentElem} from "../Controller/updateElem";

export default class Bomb {

    static countBombsAround(arr, elem, size) {
        Bomb.countBombsAroundElem(arr, elem, size);
    }

    static createBombs(arr, countBombs) {

        let result = [];

        if (countBombs > arr.length) {
            throw new Error();
        }

        for (let i = 0; i < countBombs; i++) {
            let randId = randomWithoutRepeat(arr.length, result);
            arr[randId].hasBomb = true;
        }
    }

    static countBombsAroundElem(arr, elem, size) {
        let countBombs = 0;
        let arrNeighbors = Bomb.getNeighbors(elem, size);

        arrNeighbors.forEach(id => {
            if(arr[id].hasBomb) countBombs++;
        });

        elem.state = CLOSE;
        elem.countBombs = countBombs;
        elem.checkompleted = true;

        if (countBombs === 0) {
            elem.state = CLOSEZERO;
            Bomb.nextBombs(arr, arrNeighbors, size);
        }
        updateCurrentElem(elem);
    }

    static getNeighbors(elem, size) {
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


    static nextBombs(arr, arrNeighbors, size) {
        arrNeighbors.forEach(id => {
                if(!arr[id].checkompleted) Bomb.countBombsAroundElem(arr, arr[id], size);
        })
    }

}
