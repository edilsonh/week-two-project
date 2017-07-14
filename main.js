// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let totalPrice = 0;
  let averagePrice = 0;
  data.forEach(function (product) {
        totalPrice += product.price;
  });
  averagePrice = (totalPrice/data.length).toFixed(2);
  console.log("The average price is $" + averagePrice);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let seen = [];
  data.forEach(function (item){
    if (13 <= item.price && item.price <= 18) {
      seen.push(item.title);
    }
  });

  seen.forEach(function (element){
    console.log(element);
  });
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gbp = [];
  data.forEach(function (value) {
    if (value.currency_code === "GBP") {
      console.log(`${value.title} costs ${value.price} pounds.`);
    }
  });
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  data.forEach(function (kind) {
    kind.materials.forEach(function (type){
      if (type === "wood") {
        console.log(`${kind.title}`);
      }
    });
  });
}




// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  data.forEach(function (moreMaterial) {
    if (moreMaterial.materials.length >= 8) {
      console.log(`${moreMaterial.title} has ${moreMaterial.materials.length} materials:`);
      moreMaterial.materials.forEach(function (list){
        console.log(`-${list}`);
      });
    }
  });
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let counter = 0;
  data.forEach(function (themself){
    if (themself.who_made === "i_did") {
      counter++;
    }
  });
  console.log(`${counter} items were made by their sellers.`);
}
