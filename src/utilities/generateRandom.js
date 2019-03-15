export function randomWithoutRepeat(max, result) {
    let rand = randomInteger(max);
    if (result.includes(rand))
        return randomWithoutRepeat(max, result);
    else {
        result.push(rand);
        return rand;
    }
}

function randomInteger(max) {
    let rand = Math.random() * max;
    rand = Math.floor(rand);
    return rand;
}
