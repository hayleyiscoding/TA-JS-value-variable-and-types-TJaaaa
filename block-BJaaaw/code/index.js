// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt("Enter a number"));
if (num % 2 == 0) {
  alert("number is even")
} else {
  alert("number is odd")
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter another number"));

if (num1 > num2) {
  alert(num1)
} else {
  alert(num2)
}

// 3. Convert the above code using`?` terniary operator

num1 > num2 ? alert(num1) : alert(num2);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let house = prompt("What is the house name?");
if (house === "stark") {
  console.log("Winter is Coming")
} else if (house === "lannister") {
  console.log("A lannister always pays his debt")
} else {
  console.log("All men must die")
}

// 5. Convert the above code using`?` terniary operator

let house = prompt("What is the house name?");
house === "stark" ? console.log("Winter is Coming") : 
house === "lannister" ? console.log("A lannister always pays his debt") : console.log("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = Number(prompt("Enter a month number"));

switch(month) {
  case 1:
  case 3:
  case 5: 
  case 7: 
  case 8:
  case 10:
  case 12:
    month = 31,
      alert(31);
        break;
  case 4:
  case 6:
  case 9:
  case 11:
    month = 30;
      alert(30);
        break;
  case 2:
    month = 28;
      alert(28);
  break;
    default:
      alert("Match not found");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt("What is your salary?"));

 switch(true) {
   case (salary <= 20000):
    alert(salary - (0.1 * salary));
      break;
   case (salary <= 40000):
    alert(salary - (0.2 * salary));
      break;
    case (salary > 50000):
      alert(salary - (0.3 * salary));
    default:
      break;
 }

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("What is your mark?"));
if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks >= 80 && marks <= 100) {
  alert("Grade A");
} else if (marks >= 50 && marks < 80) {
  alert("Grade B");
} else if (marks >= 30 && marks < 50) {
  alert("Grade C");
} else if (marks >= 0) {
  alert("Grade D");
} else {
  alert("Error");
}

let marks = Number(prompt("What is your mark?"));
switch(true) {
  case (marks > 100):
    alert("Marks can't be greater than 100");
     break;
  case (marks >= 80 && marks <= 100):
    alert("Grade A");
     break;
  case (marks >= 50 && marks < 80):
    alert("Grade B");
     break;
  case (marks >= 30 && marks < 50):
    alert("Grade C");
      break;
  case (marks >= 0): 
    alert("Grade D");
      break;
  default:
      break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("What is the weather like outside?");

if (weather === "sunny") {
  alert("Wear a t-shirt");
} else if (weather === "rainy") {
  alert("Don't forget to take your raincoat");
} else if (weather === "hot") {
  alert("Get a hanky");
} else if (weather === "freezing") {
  alert("Get your sweater on");
} else {
  alert("Not a valid input");
}


let weather = prompt("What is the weather like outside?");
switch(true) {
  case (weather === "sunny"):
    alert("Wear a t-shirt");
    break;
  case (weather === "rainy"):
    alert("Don't forget to take your raincoat");
    break;
  case (weather === "hot"):
    alert("Get a hanky");
    break;
  case (weather === "freezing"):
    alert("Get your sweater on");
    break;
  default:
    alert("Not a valid input");
    break;
}