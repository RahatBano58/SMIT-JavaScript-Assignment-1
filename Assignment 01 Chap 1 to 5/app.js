//                                    Chapter 01: "Alert"

//Q1:Write a script to greet your website visitor using JS alert box

let greet = alert("Welcome to my website! We're glad to have you here.");

//Q2: Write a script to display following message on your web page:

let message_00 = alert("Error! please enter a valid number ");

//Q3: Write a script to display following message on your web
//page: (Hint : Use line break)

let messages = alert("Welcome to JS land...Happy coding!");

//Q4: Write a script to display following messages in sequence:

let msg = alert("Welcome Js land")
let msgs= alert("prevent to some additional");

//Q5: Generate the following message through browser’s developer console:

let message_1 = alert("Hello! I can run JS code.");

//Q6: Make use of alerts in your new/existing HTML & CSS project


//                            Chapter 02: "Variables for strings"

//Q1: Declare a variable called username.
let username= "My name";
console.log(username);

//Q2: Declare a variable called myName & assign to it a string that represents your Full Name.
let myName = "Rahat Bano";
console.log(myName);

//Q3: Write script to
// a) Declare a JS variable, titled message.
let message;
// b) Assign “Hello World” to variable message.
let messageTitle = "Hello World!";
// c) Display the message in alert box.
alert(messageTitle);

//Q4: Write a script to save student’s bio data in JS variables andshow the data in alert boxes.
let studentName = "Rahat Bano";
let studentAge = 25;
let course = "Web Development";

alert(studentName);
alert(studentAge);
alert(course);

//Q5: Write a script to display the following alert using one JS variable:
 
alert("PIZZA");
alert("PIZZ");
alert("PIZ");
alert("PI");
alert("P");

/* Q6: Declare a variable called email and assign to it a string that
represents your Email Address(e.g. example@example.com).
Show the blow mentioned message in an alert box.(Hint: use
string concatenation)*/

//Declare a variable and assign email address
let email = "rahatbano142@gmail.com"; 
// Display the message using string concatenation
alert("My email address is " + email); 

/*Q7: Declare a variable called book & give it the value “A
smarter way to learn JavaScript”. Display the following
message in an alert box: */

let book = "A smarter way to learn JavaScript";

alert(`I am trying to learn ${book}`);


//Q8: Write a script to display this in browser through JS

let scr = "Yah! I can write HTML content through JAVASCRIPT";

document.getElementById("message").innerHTML = scr;

/* Q9: Store following string in a variable and show in alert and
browser through JS
“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” */

// Store the string in a variable
let specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// Show the string in an alert box
alert(specialString);

//                    Chapter 02: "Variables for Numbers"

// Q1:Declare a variable called age & assign to it your age. Show your age in an alert box.

//Declare a variable and assign it your age
let age = 30

// Display the age in an alert box
alert("I am " + age + " years old");

/*Q2: Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times” */

// p = "Visited site"
//document.write(p);

// Check if the visit count is already in localStorage
//let visitCount = localStorage.getItem('visitCount');
// If not, set it to 0 
//if (!visitCount === null) {
 //        visitCount = 0;
//}

// Increment the visit count
//visitCount++;

// Store the updated visit count back to localStorage
// localStorage.setItem('visitCount', visitCount);
// Display the visit count
//alert(`You have visited this site ${visitCount} times.`);
//document.write(visitCount);

//Q3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

 // Declare a variable and assign it your birth year
 let birthYear = 1990; // Replace 1990 with your actual birth year

 // Create the message
 let birthYearMessage = "My birth year is " + birthYear;

 // Display the message in the browser inside the paragraph with id="birthYearMessage"
 document.getElementById("birthYearMessage").innerHTML = birthYearMessage; 

//Q4: A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
//a. Visitor’s name
//b. Product title
//c. Quantity i.e. how many products a visitor wants toorder
//Show the following message in your browser: “John
//Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

/// Store the information in variables
let visitorName = "John Doe"; // Replace with the visitor's name
let productTitle = "T-shirt"; // Replace with the product title
let quantity = 5; // Replace with the desired quantity

// Create the message using string concatenation
let order_Message = visitorName + " ordered " + quantity + " " + productTitle + "T-shirt";

// Display the message in the browser inside the paragraph with id="orderMessage"
document.getElementById("orderMessage").innerHTML = order_Message;

//                Chapter 05: "MATH EXPRESSIONS"


// QNO #01;
p = "<h2>Operations</h2>"
document.write(p);
let a = 3;
let b = 5;
// addition
let sum = `The sum of ${3} and ${5} are = ${a+b}`;
document.getElementById("sum").innerHTML = sum;
// subtraction
let sub = `The subtraction of ${3} and ${5} are = ${a-b}`;
document.getElementById("sub").innerHTML = sub;
// divide
let divide = `The division of ${3} and ${5} are = ${a/b}`;
document.getElementById("divide").innerHTML = divide;
// multiplication
let mul = `The multiplication of ${3} and ${5} are = ${a*b}`;
document.getElementById("mul").innerHTML = mul;
// modulus
let modulus = `The modulus of ${3} and ${5} are = ${a%b}`;
document.getElementById("modulus").innerHTML = modulus;

// QNO #03:
// p = "<h2>Decleration</h2>"
// document.write(p)
// a. Declare a variable
let number ;
// b. Show the value of the variable after declaration
document.write(`"Value after variable declaration is:`);

// c. Initialize the variable with some number (e.g., 5)
number = 5;

// d. Show the initial value of the variable
document.write(`"Initial value: " ${+ number} "<br>"`);

// e. Increment the variable
number++;

// f. Show the value after increment
document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable
number += 7;

// h. Show the value after addition
document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable
number--;

// j. Show the value after decrement
document.write("Value after decrement is: " + number + "<br>");

// k. Get the remainder after dividing by 3
let remainder = number % 3;

// l. Show the remainder
document.write("The remainder is: " + remainder + "<br>");

//QNO #04;
p = "<h2>Ticket Counter</h2>"
document.write(p)
let ticketPrice = 600;
document.write(`Total cost to buy 5 tickets is = ${600*5} "<br>"`);

//  QNO #05;
p = "<h2>Table</h2>"
document.write(p)
let table = "Printing the multiplication table:";
document.write(table + "<br>");

// Prompt user to enter a number
// let n = prompt("Enter a number:");
// n = parseInt(n);

// Loop to generate and display the multiplication table
// for (let i = n; i <= n * 10; i += n) {
//     document.write(i + "<br>");
// }

// QNO #06;
p = "<h2>Temperature Conversions</h2>"
document.write(p)
let temperature = "Here are temperature converters `C` to `F`";
document.write(temperature + "<br>");
let celsius = 30; // You can change this value to any Celsius temperature

        // b. Convert Celsius to Fahrenheit
        let fahrenheit = (celsius * 9/5) + 32;

        // Output "NNoC is NNoF"
        document.write(celsius +"°C is " + fahrenheit + "°F<br>");

 fahrenheit = 40;
    // convert fahrenheit into celsius
    celsius = (fahrenheit - 32) * 5/9;
    // output NNoF is NNoC
    document.write(fahrenheit + "°F is " + celsius.toFixed(2) + "°C<br> <br>");

// QNO #07
h3 = "<h2>Shopping Cart</h2> <br>"
document.write(h3)
let priceItem1 = 650;
let priceItem2 = 550;
let quantityItem1 = 3;
let quantityItem2 = 2;
let shippingCharges = 100;
document.write(`price of item 1 is : ${650} <br>`);
document.write(`price of item 2 is : ${550} <br>`);
document.write(`Quantity of item 1 is : ${3} <br>`);
document.write(`Quantity of item 2 is : ${2} <br>`);
document.write(`Shipping charges is : ${100} <br>`);
document.write(`Total cost of your order is = ${(priceItem1*quantityItem1) + (priceItem2*quantityItem2)+ 100} <br> <br>`);

// QNO 08;
h3 = "<h2>Marksheet</h2> <br>";
document.write(h3)
let totalMarks = 1100 ;
let obtainedMarks = 880;
let percentage = (obtainedMarks/totalMarks) * 100 ;
document.write(`Total marks = ${totalMarks}` + "<br>")
document.write(`obtained marks = ${obtainedMarks}` + "<br>")
document.write(`percenatge = ${percentage} %` + "<br>")
document.write(`The Grade of result is = A <br> <br>`);

// QNO 09;
p = "<h2>Conversion</h2> <br>";
document.write(p)
 // Given amounts
 let usd = 10; // US dollars
 let sar = 25; // Saudi Riyals

 // Exchange rates
 let usdToPkr = 104.80; // 1 US Dollar to Pakistani Rupee
 let sarToPkr = 28;     // 1 Saudi Riyal to Pakistani Rupee

 // Calculate total in Pakistani Rupees in a single expression
 let totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

 // Display the total amount in Pakistani Rupees
 document.write("Total amount in Pakistani Rupees: " + totalPkr.toFixed(2) + " PKR <br> <br>");

 // QNO 10;
 p = "<h2>Arithematic Operation</h2>"
 document.write(p)
 let variable = 20;
 let result = `${((variable + 5) *10) / 2} `
 document.write(`The all operation perfomed and result is = ${result}<br> <br>`);

 // QNO 11;
 p = "<h2>Age Calculator</h2>"
 document.write(p);
 let currentYear = 2024;
 let birth_Year = 2000;
 document.write(`"Current Year" = ${ currentYear }  "<br>"`)
 document.write(`"Birth Year" = ${ birth_Year }  "<br>"`)
 document.write(`Your age is = ${currentYear - birth_Year}`)
// let birthY =1981
// let currentY = 2024
// let ageCa = AgeCalc(birthY, currentY); 
// document.write("birthYear" = "Current Year: " + currentY);
// document.write("currentYear" = "Birth Year: " + birthY);
// document.write("AgeResult"= "Your Age is: " + age);
// document.write(currentY-birthY)

// function AgeCalc(birthYear, currYear) {
//   return currYear - birthYear;   
// }  

// QNO 12;
p = "<h2>Radius of Circumtances</h2>"
document.write(p)
let radius = 20;
let cal = `${2*3.142*radius}`
document.write(`The radius of circle is ${cal} <br> <br>`)

//QNO 13;
p = "<h2> Life time supply calculator</h2>"
document.write(p)
// a. Store your favorite snack into a variable
let favoriteSnack = "Chips"; // Change this to your favorite snack

// b. Store your current age into a variable
let currentAge = 15; // Change this to your current age

// c. Store a maximum age into a variable
let maxAge = 65; // Change this to your desired maximum age

// d. Store an estimated amount per day (as a number)
let estimatedAmountPerDay = 2; // Change this to the estimated amount you consume per day

// e. Calculate how many would you eat total for the rest of your life
let yearsLeft = maxAge - currentAge; // Calculate the remaining years
let totalAmountNeeded = yearsLeft * 365 * estimatedAmountPerDay; // Calculate total amount needed

// Output the result
document.write("You will need " + totalAmountNeeded + " " + favoriteSnack + "(s) to last you until the ripe old age of " + maxAge + ". <br> <br>")



//  

//                      Chapter 04: VARIABLE NAMES: LEGAL & ILLEGALa = "Legal & Illegal"

p = "<h1>CH______ #04:Legal & Illegal</h1>"
document.write(p)
// Q1: Declare 3 variables in one statement

let firstName = "John ", lastName = "Doe", person_age =  30;
document.write(firstName, lastName, person_age);
 
//Q2: Declare 5 legal & 5 illegal variable names.
//legal variable names
let legal = `<br><br>userName, totalAmount, item_123, _privateVariable<br><br>`;
// illegal variable names
let illegal = `123user, total$amnt, first name, @username<br><br>`;
document.write(legal, illegal)


/*Q3: 3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______,
//______ and ______.
//For example $my_1stVariable
//c) Variables must begin with a ______, ______ or
//_____. For example $name, _name or name
//d) Variable names are case _________
//e) Variable names should not be JS _________*/

document.write(`A variables can contain : letters, $, ____, numbers <br> <br> `)
document.write(`variables must begin : letters, $, __. For example $name, _name or name <br><br>`)
document.write(`Variable names are case sensitive <br><br>`)
document.write(`Variable names should not be JS keywords <br><br>`)