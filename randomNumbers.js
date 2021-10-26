let x = 0;
let x1 = 0;
function randomNumber() {
    do {
        x = Math.floor(Math.random() * 10 + 1);
    }
    while (x === x1);
    document.getElementById("numberDisplay").innerHTML = x;
    x1 = x;
}
let x2;

function addOrRemoveMoney(operation) {
    let money = Number(document.getElementById("money").textContent);
    // If the condition is true, add more money to the total,
    // otherwise subtract.
    // This function is used in hiloCheck()
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
        case 1:
            if (x > x2) {
                addOrRemoveMoney(true);
            }
            else {
                addOrRemoveMoney(false)
            }
            break;
        case 2:
            if (x < x2) {
                addOrRemoveMoney(true);
            } else {
                addOrRemoveMoney(false);
            }
            break;
    }
}