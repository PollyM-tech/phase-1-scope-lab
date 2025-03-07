// Write your solution in this file!
// Task 1: Declare a global variable 
var customerName = 'bob';

// Task 2: Function to uppercase 
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
//Task 3: Function to declare a global variable 
function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

// Task 4: Function to overwrite the global bestCustomer 
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Task 5: Declare a constant in global scope
const leastFavoriteCustomer = 'Alice';


function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = 'Bob';
}