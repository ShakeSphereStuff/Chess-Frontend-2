// Test the logging with a series of moves
var attackList = [[0, 1], [1, 2], [2, 3]];  // Example move coordinates
logLastMove(attackList);  // Should log "Last move: 2,3"

// Add more moves to test overflow and continuous logging
for (let i = 4; i < 20; i++) {
    attackList.push([i, i+1]);
    logLastMove(attackList);
}
