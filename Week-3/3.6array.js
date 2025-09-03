//listend hiih argachluud
console.log("Grocery shopping list");
//list hiih sawaa beldsen 
const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");
//push hiij listend apples nemsen
shoppingList.push("Apples");
//arr gedeg ni listend neg negeer nemj hashad tusalna
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");
//unshift ni listnii hamgiin ehend tuhain zuiliig oruulna
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");
//pop gedger hamgiin suuld oruulsn utgiig hasna
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));