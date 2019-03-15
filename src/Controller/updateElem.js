import setButtonStyle from '../View/buttonTypeStyle'

export function updateCurrentElem(elem) {
    let buttons = document.getElementById(elem.id);
    setButtonStyle(buttons, elem.state, elem.countBombs);
}
