// GLAB 308A.2.1: An Object-Oriented Adventure

// Part 1

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }

console.log(adventurer.inventory[0]);

// Create a loop that logs each item in Robin’s inventory.

for (let i=0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i])
}



// also works:
// let RobinsInventory = [];
//     for (let i=0; i < adventurer.inventory.length; i++) {
//         RobinsInventory[i] = `Robin's inventory consists of: ${adventurer.inventory}`;
//     }
//     console.log(RobinsInventory[0])         // works