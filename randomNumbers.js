let x = 0;
let x1 = 0;
function randomNumber() {
    do {
        x = Math.floor(Math.random() * 10 + 1);
    } // Make sure we get either a lower or a higher number,
      // generate a random number again if it's equal to the previous one
    while (x === x1);
    document.getElementById("numberDisplay").innerHTML = x;
    x1 = x;
}
let x2;

function addOrRemoveMoney(operation) {
    let money = Number(document.getElementById("money").textContent);
    // If the condition is true, add more money to the total,
    // otherwise subtract.
    // This function is used in hiloCheck(),
    // Where we pass "true" as the argument
    // if the guess is correct.
    if (operation) {
        document.getElementById("tekst").innerHTML = "Correct!";
        money += 50;
        document.getElementById("money").innerHTML = money;
    } else {
        document.getElementById("tekst").innerHTML = "Wrong!";
        money -= 50;
        document.getElementById("money").innerHTML = money;
    }
}
function hiloCheck(hilo) {
    x2 = x;
    randomNumber();
    let money = Number(document.getElementById("money").textContent);
    switch (hilo) {
        // case 1 is for when the player chooses Higher
        case 1:
            if (x > x2) {
                // The guess is correct
                addOrRemoveMoney(true);
            }
            else {
                // The guess is incorrect
                addOrRemoveMoney(false)
            }
            break;
        // case 2 is for when the player chooses Lower
        case 2:
            if (x < x2) {
                // The guess is correct
                addOrRemoveMoney(true);
            } else {
                // The guess is incorrect
                addOrRemoveMoney(false);
            }
            break;
    }
}