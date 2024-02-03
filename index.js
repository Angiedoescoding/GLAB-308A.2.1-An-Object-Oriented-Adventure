// GLAB 308A.2.1: An Object-Oriented Adventure

// Part 1

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat"
//     },
// }

// console.log(adventurer.inventory[0]);


// // 1.1 Create a loop that logs each item in Robin’s inventory.

// for (let i=0; i < adventurer.inventory.length; i++) {
//     console.log(adventurer.inventory[i])
// }


// // also works:
// // let RobinsInventory = [];
// //     for (let i=0; i < adventurer.inventory.length; i++) {
// //         RobinsInventory[i] = `Robin's inventory consists of: ${adventurer.inventory}`;
// //     }
// //     console.log(RobinsInventory[0])         // works


// // 1.2 Adding a friend Leo (added at the top (updated the initial data provided in the lab)) + checking

// console.log(adventurer.companion)


// // 1.3 Next, give Robin’s feline friend a friend of his own:
//         // Add a “companion” sub-object to “Leo” with the following properties:
//         // The companion’s name is “Frank.”
//         // The companion’s type is “Flea.”
//         // The companion has its own belongings, which includes a small hat and sunglasses.

// adventurer.companion.companion = {
//     name: "Frank",
//     type: "Flea",
//     inventory: ["hat", "sunglasses"]
// };

// console.log(adventurer)
// console.log(adventurer.companion)

// Since the sub-object got created and now I have to use new data provided in the lab, now I am going to comment out the data above and continue with the following where the roll function from the lab is also added.


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {        // a new object "companion" within an object "companion" within objects of "adventurer"
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]            // should "inventory" be renamed to "belongins"?
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}
console.log(adventurer)
