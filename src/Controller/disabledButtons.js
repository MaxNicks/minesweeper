export function disabledButtons() {
    let tableGame = document.getElementById("tableGame");
    let buttons = tableGame.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
