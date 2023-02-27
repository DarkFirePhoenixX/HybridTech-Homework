// Task 1

function sum3Numbers(arr){
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);
    let result = num1 + num2 + num3;
    console.log(result);
}

sum3Numbers(['1','2','3']);

// Task 2

function calculateVat(arr){
    let sum = 0;
    for(let price of arr){
        sum += Number(price);
        console.log("sum: " + sum);
        console.log("vat: " + sum*0.2);
        console.log("total: " + sum*1.2);
    }

}

calculateVat(['2','1.5','2.2']);
calculateVat(['4.4','2.7','1.8','2.2']);

// Task 3

function countOccurencies(arr){
    let string = String(arr[0]);
    let check = String(arr[1]);
    var count = (string.match(new RegExp(check, "g")) || []).length;
    console.log(count);
}

countOccurencies(['123213','2']);

// Task 4

function squares(w,H,h,W){
    let sum = (w*2 + h*2 + H*2 + W*2) - w*(h-H) - H*(W-w);
    console.log(sum);
}

squares(2,3,4,5)

// Task 5

function leapYear(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log("Yes");
    }
    else console.log("No");

}

leapYear(2024);

// Task 6

function printNumbers(n){
    for(var i = 1;i < n+1;i++){
        console.log(i);
    } 

}

printNumbers(2);

// Task 7

function dotLenght(arr){
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    let result = Math.sqrt((x2 - x1)^2+(y2-y1)^2);
    console.log(result);
}

dotLenght('3','2','4','3');

// Task 8

function bottlesAndBoxes(bottles,capacity){
    var result = Math.ceil(bottles / capacity);
    console.log(result);
}

bottlesAndBoxes(20,5);
bottlesAndBoxes(15,7);
bottlesAndBoxes(5,10);

// Task 9

function triangleSquare(a,b,c){
    let p = (a + b + c)/2;
    let square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(square.toFixed(2));
}

triangleSquare(3,3,3);

// Task 10

function coneCircumference(arr){
    let r = Number(arr[0]);
    let h = Number(arr[1]);
    let s = Math.sqrt(r^2+h^2);
    let L = Math.PI*r*s;
    let B = Math.PI*(r^2);
    let A = L + B;
    let V = (1/3)*Math.PI*r^2*h;
    console.log(V);
    console.log(A); 

}

coneCircumference('3','4');

// Task 11

function OddOrEven(number){
    if(number % 1 !== 0){
        console.log("Invalid")
    }
    else if(number % 2 == 0){
        console.log("Even")
    }
    else if(number % 2 != 0){
        console.log("Odd")
    }
}

OddOrEven(3.2);

// Task 12

function checkPrime(number)
{

  if (number===1)
  {
    return false;
  }
  else if(number === 2)
  {
    return true;
  }
  else
  {
    for(var divisor = 2; divisor < number; divisor++)
    {
      if(number % divisor === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(checkPrime(37));

// Task 13

function distance(arr){
    let V1 = Number(arr[0])/3.6;
    let V2 = Number(arr[1])/3.6;
    let T = Number(arr[2]);
    let S1 = V1*T;
    let S2 = V2*T;
    if(S1 > S2) console.log(S1 - S2);
    else console.log((S2 - S1).toFixed(2));
}

distance(['12','23','14'])

// Task 14

const createObject = (arr) => {
    let object = {};
    let value = "";

    for (let i = 0; i < arr.length; i++) {
        if(i % 2 != 0 && i > 0) {
            property = arr[i - 1];
            value = arr[i];
            object[property] = value;
        }
    }
    return object;
}
console.log(createObject(['name', 'Pesho', 'age', '23', 'gender', 'male']));

// Task 15

function largestNumber(arr){
    let a = Number(arr[0]);
    let b = Number(arr[1]);
    let c = Number(arr[2]);
    if(a>b && a>c) console.log(a+" is the greatest");
    else if(c>a && c>b) console.log(c+" is the greatest");
    else console.log(b+" is the greatest");
}

largestNumber(['1','2','3']);

// Task 16

function calculator(arr){
    let number1 = Number(arr[0]);
    let number2 = Number(arr[1]);
    let operator = String(arr[2]);

if (operator == '+') {
    console.log(number1 + number2);
}
else if (operator == '-') {
    console.log(number1 - number2);
}
else if (operator == '*') {
    console.log(number1 * number2);
}
else if (operator == '/'){
    console.log(number1 / number2);
}
else{
    console.log("Invalid operation");
}
}

calculator(['18', '-1', '*'])

// Task 17
    function splitter(str){

    let stringArray = String(str.toUpperCase().split(/[ ,?]+/).filter( e => e.trim().length > 0))

    console.log(stringArray);
    }

splitter('Hi, how are you?')