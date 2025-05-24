var programmingLanguages = ["html","javascript","python"];

console.log(programmingLanguages);

programmingLanguages.push('php');
programmingLanguages.pop();
programmingLanguages.unshift('java');
programmingLanguages.shift();

console.log(programmingLanguages)

var programmingLanguages1 = ["c#","php","javascript","python","java"];

programmingLanguages1.splice(1,1, "ruby");

console.log(programmingLanguages1)
console.log(Math.floor(Math.random()*10))

var students =["student1" , "student2"];
var [s1,s2] = students;
console.log(s1);
console.log(s2);

var qytetet=["skenderaj" , "paris" , "london" , "madrid"];
var [q1,  , q3 , q4] = qytetet;
console.log(q1);
console.log(q3);
console.log(q4);

var numbers=[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ,9 , 10];
var [first , second , ...otherNumbers]= numbers
console.log(first);
console.log(second);
console.log(otherNumbers.toString());
