function logLastMove(attackList) {
    if (attackList.length > 0) {
        var lastMove = attackList[attackList.length - 1];
        var moveLogDiv = document.getElementById("moveLog");
        moveLogDiv.innerHTML += `<br>Last move: ${lastMove}`;  // Appends the last move to the log
    }
}

// Example move logging
var attackList = [[0, 1], [1, 2], [2, 3]];  // Example coordinates of moves
logLastMove(attackList);  // Call this function whenever a move is made
