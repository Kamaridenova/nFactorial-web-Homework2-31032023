// 1 task
const restaurant = {
    name: "Big Deal",
    numbersTables: 7,
    isAsianFood: false,
    isEuropeanFood: true,
    sexVisitors: undefined,
    maxVisitors: null,
}
console.log(restaurant);

// 2 task

let vehicle = {};
vehicle.brandName = 'BMW';
vehicle.model = 'X5';
console.log(vehicle);
vehicle.model = 'M1';
console.log(vehicle);
delete vehicle.model;
console.log(vehicle);

// 3 task
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}


for(let k in salaries){
    console.log('name:', k, ' = ', salaries[k])
}
//console.log(`Total salaries = ${salaries.Aroo + salaries.Dalida + salaries.Samat}`);  
let totalSalaries = 0;
for(let k in salaries){
    // totalSalaries = salaries[k];
    
    k = k+1;
    
    totalSalaries = totalSalaries + salaries[k];
    // console.log(`Total salaries = ${salaries[k] + salaries[k] + salaries[k]}`);  
    //console.log(`Total salaries = ` + totalSalaries);
}
//console.log(`Total salaries = ${salaries.Aroo + salaries.Dalida + salaries.Samat}`);  
console.log(`Total salaries 1111= ` + totalSalaries);