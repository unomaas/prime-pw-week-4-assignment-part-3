console.log('***** Cart Functions *****');

// Make sure to test all functions here in the JS file! We want to see how you are testing your code!!!
// ## Required Features
// Update the `cart.js` file to do the following:
// - #1.) Create a global variable named `basket` and set it to an empty array.
console.log("--- Question #1. ---");
const basket = [];
console.log(`Showing the contents of the empty array, 'basket', are: `, basket); // Outputs: [].
console.log("\n"); // My console is getting a little verbose, so I'm adding line breaks for readability's sake.


// - #2.) Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`.
//   - return `true` indicating the item was added
console.log("--- Question #2. ---");
const addItem = item => {
  basket.push(item); // This is 'basket' specific code.  Would it be better practice to make it globally usable, e.g., add an 'array' input and then using 'apple' AND 'basket' in the tests below?
  return true;
};
console.log(`Adding an 'apple' to the 'basket' array, with function 'addItem("apple")'.  Expect 'true': `, addItem("apple"));
console.log(`Showing the contents of 'basket' are now: `, basket); // Outputs: ["apple"].
console.log("\n");


// - #3.) Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
console.log("--- Question #3. ---");
const listItems = array => {
  for (let i = 0; i < array.length; i++) { // Setting the loop to iterate through the array.
    console.log(array[i]); // Outputs all elements of 'array' to the console.
  }
};
console.log(`To give function 'listItems' more elements to list, I'm adding a 'pear' to the 'basket' array.  Expect 'true': `, addItem("pear"));
console.log(`Running function 'listItems(basket)'.  Expect 'apple' and 'pear' on separate rows, below: `);
listItems(basket);
console.log(`The contents of 'basket' are now: `, basket); // Outputs: ["apple", "pear"].
console.log("\n");


// - #4.) Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
console.log("--- Question #4. ---");
const empty = array => {
  array.length = 0; // Sets the length property of 'array' to zero, essentially making it empty.
};
console.log(`Testing the function 'empty' on the 'basket' array.  Expect 'undefined': `, empty(basket));
console.log(`After running the function 'empty', the contents of the 'basket' array are now: `, basket);
console.log("\n");


// > __IMPORTANT__
// - #5.) Make sure that you are writing code *in the file* to test every function that you write! For example, to test `addItem`:
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now ${basket}`);
console.log("--- Question #5. ---");
console.log("I've been testing the code at each step, but to double-check my work, I'm going to add Question #5's console.log checks to the output as well. :)");
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log(`Adding 'apples' to 'basket' (expect 'true'): `, addItem('apples'));
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log(`Removing all items from 'basket' (expect 'undefined'): `, empty(basket));
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log("\n");


// ### Stretch Goals
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.
// __Using functions in other functions!__
// #S1. Add a global `const` named `maxItems` and set it to 5.
console.log("--- Stretch Goals #1. ---");
const maxItems = 5;
console.log(`Showing the value of const 'maxItems' is: `, maxItems);
console.log("\n");



// #S2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
console.log("--- Stretch Goals #2. ---");
const isFull = array => {
  if (array.length < maxItems) { // If the 'array' has less elements than value of 'maxItems' (5):
    return false; // Return false, it is NOT full.
  } else { // Otherwise:
    return true; // Return true, it IS full.
  }
};
console.log(`Testing the function 'isFull', below.`);
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log(`Adding a 'watermelon' to 'basket'.  Expect 'true': `, addItem("watermelon"));
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log(`Running function 'isFull' on 'basket'.  Expect 'false': `, isFull(basket));
console.log(`Adding more items to 'basket' to test when full.  Expect 'true' five times: `, addItem("apple"), addItem("pear"), addItem("grapefruit"), addItem("banana"), addItem("orange"));
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log(`Running function 'isFull' on 'basket'.  Expect 'true': `, isFull(basket));
console.log("\n");



// #S3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
console.log("--- Stretch Goals #3. ---");
const newAddItem = item => { // Question: We can't rename/"update" functions, can we?  Even if I had used "let" instead of "const" when declaring the "addItem" function above?
  if (isFull(basket) == false) { // If 'basket' is NOT full:
    basket.push(item); // Add 'item' to the end of 'basket'.
    return true; // And return 'true', showing it was done.
  } else { // Otherwise:
    return false; // Return 'false', showing it was not done.
  }
};
console.log(`Testing the function 'newAddItem', below.`);
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log(`Running 'newAddItem("mansion")'.  Expect 'false': `, newAddItem("mansion"));
console.log(`Emptying 'basket' with function 'empty', to test the adding feature.  Expect 'undefined': `, empty(basket));
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log(`Running 'newAddItem("mansion")'.  Expect 'true': `, newAddItem("mansion"));
console.log(`Showing the contents of 'basket' are now: `, basket);
console.log("\n");


// __Using Array built-in functions!__
// #S4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf] to find the index of the first matching item in the basket.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//   - Use [Array.splice] to remove the first matching item from the basket.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//   - Return the item removed or `null` if the item was not found
console.log("--- Stretch Goals #4. ---");
console.log(`Adding more items to 'basket' to test function 'removeItem'.  Expect 'true' four times: `, addItem("apple"), addItem("pear"), addItem("grapefruit"), addItem("banana"));
console.log(`Showing the contents of 'basket' are now: `, basket);
const removeItem = item => {
  if (basket.indexOf(item) > -1) { // If you find 'item' in 'basket' array:
    return basket.splice(basket.indexOf(item), 1); // Return and remove JUST the spliced item of index of item.
  } else { // Otherwise, if 'item' was not found in 'basket' array:
    return null; // Return null.
  }
};
console.log(`Running function 'removeItem("mansion")'.  Expect 'mansion': `, removeItem("mansion"));
console.log(`Running function 'removeItem("rocket")'.  Expect 'null': `, removeItem("rocket"));
console.log(`Showing the contents of 'basket' are now: `, basket);



console.log("\n");
console.log("Thanks for reviewing my code!  I hope that the console formatting helped make it easier to read. :)  Have a good day!");
