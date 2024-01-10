const userInputString = prompt(
  "Please submit your order of Froyo Flavors separated by commas"
);

const processOrder = (orderArray) => {
  const order = {};
  for (let i = 0; i < orderArray.length; i++) {
    if (!order[orderArray[i]]) {
      order[orderArray[i]] = 1;
    } else {
      order[orderArray[i]]++;
    }
  }
  return order;
};
const froyoFlavors = userInputString.toLowerCase().split(", ");
const customerOrder = processOrder(froyoFlavors);
console.table(customerOrder);
