import {OPEN, CLOSE, CLOSEZERO, FLAG, BAND} from '../constants/state'

export default function setButtonStyle(elem, state, countBomb) {

    switch (state) {
        case OPEN: {
            elem.className = "btn btn-info";
            elem.firstElementChild.className = "fab fa-accessible-icon";
            break;
        }
        case CLOSE: {
            elem.className = "btn btn-success";
            elem.innerHTML = `<spaw class="pl-1 pr-1">${countBomb}</spaw>`;
            elem.disabled = true;
            break;
        }
        case CLOSEZERO: {
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
