// const number = [1, 2, 3, 4, 5, 6, 7]

// const result = number.find(found => found >6)

// console.log(result);

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  const result = inventory.find( ({ name }) => name === 'bananas' );
  
  console.log(result)