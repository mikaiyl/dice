const diceRolled = [ 0,0,0,0, 0,0,0,0, 0,0,0 ];

    /*
     *  Math functions
     */

function getNumber() {
    return Math.ceil(Math.random()*6);
}

function countNumber(number) {
    diceRolled[ number - 2]++;
}

function diceRoll() {
    let first = getNumber();
    let second = getNumber();
    let total = first + second;

    countNumber(total);
    return total;
}

    /*
     *  DOM Stuff
     */

function createText(text, mountPoint = "body", id) {
    let el = document.createElement("div");

    if (typeof id != "undefined") el.id = id;

    el.textContent = text;

    document.getElementById(mountPoint).appendChild(el);
}

function createBar(num, label) {
    let el = document.createElement("div");
    let lb = document.createElement("p");

    lb.textContent = label;
    lb.className = "rotate";

    el.style.width = "20px"
    el.style.height = num + "px";

    el.className = "bar";

    el.appendChild(lb);

    document.getElementById("board").appendChild(el);
}

function printDiceRolled() {
    for (let i = 2; i <= 12; i++){
        createText(i + ": " + diceRolled[i - 2], "aside" );
    }
}

function rollNumber(num) {
    do {
        diceRoll();
    } while( num-- > 1 );
}

function printBars() {
    for (let i = 2; i <= 12; i++) {
        createBar(diceRolled[i - 2], i.toString());
    }
}

    /*
     *  Maine
    */

(() => {
    rollNumber(1000);
    printDiceRolled();
    printBars();
})();
