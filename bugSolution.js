function add(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Invalid input types. Both arguments must be numbers.');
    return null; 
  }
}

console.log(add(5, 5)); // Output: 10
console.log(add(5, '5')); // Output: Invalid input types...