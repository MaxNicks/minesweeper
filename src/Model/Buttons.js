import {OPEN} from '../constants/state';

export default class Buttons {

    constructor(countCells, countBombs) {
        this.countCells = countCells;
        this.arr = this.createArrButtons();
        this.countBombs = countBombs;
    }

    createArrButtons() {
        const arr = [];

        for(let i=0; i < this.countCells * this.countCells; i++){
            arr[i] = {
                id: i,
                hasBomb: false,
                state: OPEN,
                countBombs: 0
            };
        }

        return arr;
    }

    getElemState(id) {
        return this.arr[id].state;
    }

    getElemId(id) {
        return this.arr[id].id;
    }

    getElemCountBombs(id) {
        return this.arr[id].countBombs;
    }

    setElemState(elem, state) {
        this.arr[elem.id].state = state;
    }

    setElemCountBombs(elem, countBombs){
        this.arr[elem.id].countBombs = countBombs;
    }

    getElemHasBomb(id) {
        return this.arr[id].hasBomb;
    }

    setElemHasBomb(elem, hasBomb) {
        this.arr[elem.id].hasBomb = hasBomb;
    }
}
