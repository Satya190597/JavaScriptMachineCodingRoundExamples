// Array of food items that will be used to suggest based on user input.
const food = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Grapes",
  "Blueberry",
  "Pineapple",
  "Mango",
  "Watermelon",
  "Papaya",
  "Broccoli",
  "Carrot",
  "Tomato",
  "Cucumber",
  "Spinach",
  "Lettuce",
  "Kale",
  "Pumpkin",
  "Potato",
  "Sweet Potato",
  "Onion",
  "Garlic",
  "Peas",
  "Green Beans",
  "Bell Pepper",
  "Zucchini",
  "Eggplant",
  "Cauliflower",
  "Asparagus",
  "Mushroom",
  "Chicken",
  "Beef",
  "Pork",
  "Lamb",
  "Turkey",
  "Salmon",
  "Tuna",
  "Shrimp",
  "Crab",
  "Lobster",
  "Egg",
  "Milk",
  "Cheese",
  "Butter",
  "Yogurt",
  "Bread",
  "Rice",
  "Pasta",
  "Oats",
  "Quinoa",
  "Almond",
];

// Reference to the DOM element that will display the list of suggestions.
const suggestionList = document.querySelector("#suggestion-list");

// Function to handle input from the user in the input field.
function handleUserInput(event) {
  let currentValue = event.target.value;
  suggestFoodItem(currentValue);
}

// Function to filter the food array and display matching suggestions.
function suggestFoodItem(value) {
  // 1. First clear all existing suggestion items from the list.
  clearAllNodes();

  // 2. If there is no value entered, stop the function execution
  if (!value) return;

  // 3. Filter the food array to include only those items that contain the input value (case-insensitive)
  const result = food.filter((text) =>
    text.toLowerCase().includes(value.toLowerCase())
  );

  // 4. Loop through the filtered result and create a new <li> element for each food item
  for (let element of result) {
    const newListItem = document.createElement("li");
    newListItem.innerText = element;
    suggestionList.appendChild(newListItem);
  }
}

// Function to clear all child nodes (suggestions) from the suggestions list.
function clearAllNodes() {
  while (suggestionList.firstChild) {
    suggestionList.removeChild(suggestionList.firstChild);
  }
}
