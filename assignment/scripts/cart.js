console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file! We want to see how you are testing your code!!!

// ## Required Features
// Update the `cart.js` file to do the following:
// - #1.) Create a global variable named `basket` and set it to an empty array.
console.log("--- Question #1. ---");
const basket = [];
console.log(`The contents of the empty array, called 'basket', are: `, basket); // Outputs: [].



// - #2.) Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`.
//   - return `true` indicating the item was added
console.log("--- Question #2. ---");
const addItem = item => {
  basket.push(item);
  return true;
};
console.log(`Adding an 'apple' to the 'basket' array, with function 'addItem'.  Expect 'true': `, addItem("apple"));
console.log(`The contents of the 'basket' array are now: `, basket); // Outputs: ["apple"].



// - #3.) Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
console.log("--- Question #3. ---");
const listItems = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
console.log(`To give function 'listItems' more items to list, I'm adding a 'pear' to the 'basket' array.  Expect 'true': `, addItem("pear"));
console.log(`Running function 'listItems' on the 'basket' array.  Expect 'apple' & 'pear' on separate rows, below:`);
listItems(basket);
console.log(`The contents of the 'basket' array are now: `, basket); // Outputs: ["apple", "pear"].



// - #4.) Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
console.log("--- Question #4. ---");
const empty = array => {
  array.length = 0;
};
console.log(`Testing the function 'empty' on the 'basket' array.  Expect 'undefined': `, empty(basket));
console.log(`After running the function 'empty', the contents of the 'basket' array are now: `, basket); // Should output an empty array, however, it's outputting: ["pear"].



// > __IMPORTANT__
// - #5.) Make sure that you are writing code *in the file* to test every function that you write!
// For example, to test `addItem`:
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now ${basket}`);
console.log("--- Question #5. ---");
console.log("I've been testing the code at each step, but to double-check my work, I'm going to add #5's console.log checks to the output as well. :)");
console.log(`Basket is currently: `, basket);
console.log(`Adding apples to 'basket' (expect true): `, addItem('apples'));
console.log(`Basket is currently: `, basket);
console.log(`Removing all items from 'basket' (expect undefined): `, empty(basket));
console.log(`Basket is currently: `, basket);



// ### Stretch Goals
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.
//
// __Using functions in other functions!__
//
// #S1. Add a global `const` named `maxItems` and set it to 5.
//
// #S2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
//
// #S3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
//
// __Using Array built-in functions!__
//
// #S4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found
