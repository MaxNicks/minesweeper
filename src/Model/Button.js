import {OPEN} from '../constants/state';

export default class Button {

    constructor(size) {
        this.size = size;
    }

    createArrButtons() {
        let arr = [];

        for(let i=0; i<this.size*this.size; i++){
            arr[i] = {id: i, hasBomb: false, state: OPEN, checkCompleted: false, countBombs: 0};
        }

        return arr;
    }
}
