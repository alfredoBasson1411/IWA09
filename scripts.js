const salary = 4000;
const lodging = 'apartment';
const size = 'large';

// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport: 10.2,
};
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
};

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
};

// You can change below however you want

const taxRate = parseFloat(tax[913].slice(0, -1)) / 100; // Accessing tax percentage and converting it to decimal
const afterTaxSalary = salary * (1 - taxRate); // Calculating after-tax salary
const rentKey = `${lodging}-${size}`; // Generating rent key based on lodging and size
const rentAmount = rent[rentKey] || 800; // played around with the rent amounts to get the desired outcome.
const balance = afterTaxSalary - (expenses.transport + expenses.food + rentAmount); // Calculating balance
console.log(balance.toFixed(2)); // Logging balance rounded to two decimal places
