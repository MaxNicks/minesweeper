export function disabledButtons() {
    const tableGame = document.getElementById("tableGame");
    const buttons = tableGame.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
