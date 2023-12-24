/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// let transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },

//   {
//     id: 2,
//     timestamp: 16560768010289,
//     price: 30,
//     category: "Fruites",
//     itemName: "Mango",
//   },

//   {
//     id: 4,
//     timestamp: 1656076802390,
//     price: 1100,
//     category: "Clothes",
//     itemName: "Jeans",
//   },

//   {
//     id: 3,
//     timestamp: 1656076800032,
//     price: 540,
//     category: "Food",
//     itemName: "Paneer Butter Masala with naan",
//   },

//   {
//     id: 5,
//     timestamp: 16560768489980,
//     price: 180,
//     category: "Fruites",
//     itemName: "Kiwi",
//   },

//   {
//     id: 7,
//     timestamp: 1656076806220,
//     price: 5000,
//     category: "Upskilling",
//     itemName: "Cohort 2.0",
//   },

//   {
//     id: 7,
//     timestamp: 1656076806220,
//     price: 6000,
//     category: "Upskilling",
//     itemName: "DSA Supreme batch",
//   },
// ];

function calculateTotalSpentByCategory(transactions) {
  // To store expenditure category wise in a object.
  let expenditure = {};

  for (let i=0; i<transactions.length; i++) {
    const money = transactions[i].price;
    const category = transactions[i].category;
    if (expenditure[category])
      expenditure[category] = expenditure[category] + money;
    else expenditure[category] = money;
  }

  let categoryWiseExpenditureArray = Object.entries(expenditure);
  // Object.entries(expenditure) returns an array of array that looks like below
  // [
  //   [ 'Food', 550 ],
  //   [ 'Fruites', 210 ],
  //   [ 'Clothes', 1100 ],
  //   [ 'Upskilling', 5000 ]
  // ]

  let ans = categoryWiseExpenditureArray.map((ele) => {
    return { 
      "category" : ele[0],
      "totalSpent": ele[1] 
    };
  });
  // We convert the above array in the array of objects,
  // which is our required answer
  // [
  //   { Food: 550 },
  //   { Fruites: 210 },
  //   { Clothes: 1100 },
  //   { Upskilling: 11000 }
  // ] ==> Answer.

  return ans;

  // Alternatively you can write the logic from line 91 to 110 in short from like this.
  // return Object.entries(expenditure).map((ele)=> { return {[ele[0]] : ele[1]}});
}

module.exports = calculateTotalSpentByCategory;
