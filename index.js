// GLAB 308A.2.1: An Object-Oriented Adventure

// ================== Part 1

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
            inventory: ["small hat", "sunglasses"]            // should "inventory" be renamed to "belongins"?
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}
console.log(adventurer.roll()) // Robin rolled a 3.; Robin rolled a 9. >> Math.floor(Math.random()) in action


// ================== Part 2

// When creating classes, begin by searching for the simplest form your data takes. Remember, you can add specificity later by extending the classes.
// Start with a Character class, which will define generic character entities. Robin and their companions all have a name, so the Character class should definitely include name as one of its properties. At this stage, we will also make the decision that every character should have health (which we will standardize to a maximum of 100, and an inventory (even if the inventory is empty).
// 2.1 Here is what the basic Character class looks like so far, including a constructor function that allows us to create new characters with whatever name we would like:

class Character {
    constructor (name) {     //  health, inventory --> you can add specificity later by extending the classes.
    this.name = name;
    this.health = 100;
    this.inventory = [];
}

// 2.2 Every character should also be able to make rolls. Add the roll method to the Character class.

roll() {
    return Math.floor(Math.random()+1)
}
}


// 2.3 Now, we can re-create Robin using the Character class!

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
    console.log(robin.inventory)                // [ 'sword', 'potion', 'artifact' ]

robin.companion = new Character("Leo");
robin.companion.type = "Cat";
    console.log(robin.companion.type)           // Cat

robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
    console.log(robin.companion.companion)              // Frank + health 100 + his inventory + his type
    console.log(robin.companion.companion.type)         // Flea
    console.log(robin.companion.companion.inventory)    // [ 'small hat', 'sunglasses' ]