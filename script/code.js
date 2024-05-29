let data = ['Erin', 4, 6, 9, 11, 'Williams']

// Question 1 
console.log(`Q1:${data.concat(19)}`);
// Question 2
console.log(`Q2: ${data.concat(19).join(', ')}`);
// Question 3
let numbers = data.filter(data => typeof data === 'number')
console.log(`Q3: ${numbers}`);
// Question 4
let value = data.find(data => typeof data === 'string');
console.log(`Q4: ${value}`);
// Question 5
console.log(`Q5: ${data.indexOf('Erin')}`);
// Qustion 6 

// Question 7
// Concat 
// Question 8
console.log(`Q8: ${data.slice(1, 4)}`);
