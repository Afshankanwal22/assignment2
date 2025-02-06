//            CHAPTER 5

// Qno:1 Write a program that take two numbers & add them in a new variable. Show the result in your browser?
// let num1 = +prompt("Enter your first number")
// let num2 = +prompt("Enter your second number")
// let add = num1+num2
// document.write ("sum of " +num1 + " and " + num2 + " is " + 8) 

// Qno:2 Repeat task1 for subtraction, multiplication, division & modulus?
//    let num1 = 3
//    let num2 = 5
//    let Subtraction = num1-num2
// document.write("Subtraction of "+num1+ " and "+num2+" is : "+ Subtraction+"<br />")

//    let num1 = 3
//    let num2 = 5
//    let Multiply =num1*num2
//    document.write("Multiply of "+num1+" and "+num2+ " is : "+ Multiply+"<br />")
  

// let num1 = 3
// let num2 = 5
// let division=num1/num2
// document.write("Division of "+num1+"and"+num2+" is : "+ division+"<br />")

// let num1 = 3
// let num2 = 5
// let percentage = num1%num2
// document.write("Percentage of "+num1+"and "+num2+"is : "+ percentage+"<br />")

// Qno:3 Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”?

// let num1;
// console.log(num1);

// document.write("Value after variable declaration is " + num1 );

// num1 = 5
// console.log(num1);

// document.write("<br/ > Inital value:" + num1)

//  num1++;

// document.write("<br /> Value after increment is: " +num1 )

// num1 +=7
// document.write("<br /> Value after addition is: " +num1)
// num1--;
// document.write("<br /> Value after decrement is: " + num1+"<br />")
// num1 = num1 % 3
// document.write("The remainder is : "+num1)


// Qno:4 Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output?
// let movieTicket = 600
// let buyTicket = 5
// let totalPrice = 600*5
// console.log(totalPrice)
// document.write("Total cost to buy " + buyTicket + " tickets to a movie is " +totalPrice +" PKR")

// Qno:5 Write a script to display multiplication table of any number in your browser?E.g
// document.write("<h2>Table of "+4+"</h2>"+"<br />")
// if(TableNumber=4)
//     for(let i=1;i<=10;i++){
// document.write("4 X "+i+"= "+4*i+"<br />")
// }

// Qno:6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// let celsius1 = 25

// let Fahrenheit = (celsius1*9/5)+32
// console.log(Fahrenheit);
// Fahrenheit = 77

// let Fahrenheit1=70
// celsius = (Fahrenheit1-32)*5/9
// console.log(celsius)
// document.write(celsius1 +"C "+"is "+ Fahrenheit1+"F "+ "<br />")
// document.write(Fahrenheit1 +"F "+"is "+ celsius)


// Qno:7 Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// ]the following in variables?
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.
// let priceItem = 650
// let quantity = 3
// let priceOfItem = 100
// let quantityOfItem = 7
// let ShippingCharge = 100
// let total = (priceItem * quantity) + (priceOfItem * quantityOfItem)+ ShippingCharge
// document.write("Price of item 1 is "+priceItem +"<br />")
// document.write("Quantity of item 1 is "+quantity+"<br />")
// document.write("Price of item 2 is "+priceOfItem+"<br />")
// document.write("Quantity of item 2 "+quantityOfItem+"<br />")
// document.write("Shipping Charges "+ShippingCharge+"<br />"+"<br />")
// document.write("Total cost of your order is "+total+"<br />")

// Qno:8 Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser?
// let totalMarks = 980
// let marksObtained = 804
// let percentage = marksObtained/totalMarks*100
// console.log(percentage)
// document.write("<h1>Marks Sheet </h1>")
// document.write("Total marks: " + 980)
// document.write("<br /> Marks obtained: " +804)
// document.write ("<br /> percentage: " + percentage)

// Qno:9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression?
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee).
// let usDolars = 10*104.80
// let saudiRiyals = 25*28
// let totalCurrency = usDolars+ saudiRiyals
// console.log(totalCurrency);
// document.write("<h1>Currency in PKR</h1>")
// document.write(" Total currency in PKR: "+totalCurrency)

// Qno:10 Write a program to initialize a variable with some number and do arithmetic in following sequence?
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.
// let addNum = 5
// addNum = (addNum*10) 
// addNum=(addNum/2)
// document.write("<h3>Arithmetic Solution</h3>")
// document.write("Output "+addNum)


// Qno:11 The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
// let currentYear = 2016
// let birthYear = 1992
// let yourAge = 24
// console.log(currentYear,birthYear,yourAge)
// document.write("<h1>Age Calculator</h1>")
// document.write("Current Year: "+currentYear)
// document.write("<br /> Birth Year: "+birthYear)
// document.write("<br /> Your Age is: "+yourAge)

// Qno:12 The Geometrizer: Calculate properties of a circle?
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142).
// let radius = 20
// document.write("<h1> The Geometrizer</h1>") 
// document.write("Radius of a Circle: "+ radius + "<br />")
// let circumference = 2*3.142 * radius
// document.write("The circumference is: "+circumference+"<br />")
// let area = 3.142 * radius * radius
// document.write("The area is: "+area)


// Qno:13 The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
// let favoriteSnack = "chocolate chip"
// let currentAge = 15
// let estimatedMax = 65
// let amountPerDay = 3
// let chocolateChip = 150
// let oldAge = 65
// console.log(favoriteSnack,currentAge,estimatedMax,amountPerDay,chocolateChip,oldAge)
// let totalRest = estimatedMax- currentAge
// console.log(totalRest)
// document.write("<h1> The Lifetime Supply Calculator</h1>")
// document.write("Favourite Snack: "+favoriteSnack)
// document.write("<br /> Current Age: "+currentAge)
// document.write("<br />Estimated Maximum Age: "+estimatedMax)
// document.write("<br />Amount of snack per day: "+amountPerDay)
// document.write("<br />You will need "+chocolateChip + "chocolate chip to last you until the ripe old age of "+oldAge)

//                                   CHAPTER  6 TO 9

// Qno:1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your
// browser?
// let a = +prompt("Input a number");
// document.write("Result:  " + "<br />")
// document.write("The value of a is: " + a + "<br />")
// document.write(".............................................."+"<br />")
// document.write("<br />")

// // pre-Increment
// document.write("The value of ++a is: " + ++a +"<br />")
// document.write("Now the value of a is: "+ a + "<br />")
// document.write("<br />")
// document.write("<br />")

// // post-Increment
// document.write("The value of a++ is: "+ a++ + "<br />")
// document.write("Now the value of a is: "+ a )
// document.write("<br />")
// document.write("<br />")

// // pre-decrement
// document.write("The value of --a is: "+ --a + "<br />")
// document.write("Now the value of a is: " + a)
// document.write("<br />")
// document.write("<br />")

// // post-decrement
// document.write("The value of a-- is: " + a-- +"<br />")
// document.write("Now the value of a is: " + a)

// Qno:2 What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// document.write("<h2>Solving Complex Equation</h2>")
// let a = 2;
// let b = 1;
// document.write("The value of a is : "+ a +"<br />"  )
// document.write("The value of b is : "+b+"<br />")
// let result = --a - --b + ++b + b--;
// document.write("The value of is : " + result +"<br />")
// document.write("<h3>Solution</h3>"+"<br />"+"<br />")
// document.write("a=2, b=1"+"<br />")
// document.write("--a - --b + ++b + b--"+"<br />")
// document.write("--2 - --1 + ++1 + 1--"+"<br />")
// document.write("1 - 0 + 1 + 1" + "<br />")
// document.write("1+1+1"+"<br />")
// document.write("The result is 3")


// Qno:3 Write a program that takes input a name from user & greet the user?
// let userName = +prompt("Enter Your Name")
// alert("Hello " + userName)

// Qno:5 Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default?
// let tableNum = +prompt("Enter a Number")
// if(tableNum==1){
//     for(let i=1;i<=10;i++)
//     {
//         document.write(5+ "x" +i+"=" +5*i+"<br />")
//     }
    
// }
// else{
//     for(let i=1;i<=10;i++)
//     {
//         document.write(tableNum+ "x "+i+"= " +5*i+"<br />")
//     }
// }

// Qno:6 Take?
// document.write("<h2>MarkSheet</h2>")
// a) Take three subjects name from user and store them in 3 different variables.
    //    let subject1 = prompt("Enter Your Subject Name") 
    //    let subject2 = prompt("Enter Your Subject Name") 
    //    let subject3 = prompt("Enter Your Subject Name")  

// b) Total marks for each subject is 100, store it in another variable.
    // let totalMarks = 300

// c) Take obtained marks for first subject from user and stored it in different variable.
// let obtainedSubject1 = +prompt("Enter Your First Subject Marks")

// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// let obtainedSubject2 = +prompt("Enter Your Second Subject Marks")
// let obtainedSubject3 =  +prompt("Enter Your Third Subject Marks")

// // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// let obtainedMarks =  obtainedSubject1+obtainedSubject2+obtainedSubject3
// let percentage= (obtainedMarks/totalMarks)*100
// percentage = percentage.toFixed(2)
// let percentage1=(obtainedSubject1/100)*100
// percentage1=percentage1.toFixed(2)
// let percentage2=(obtainedSubject2/100)*100
// percentage2=percentage2.toFixed(2)
// let percentage3=(obtainedSubject3/100)*100
// percentage3=percentage3.toFixed(2)

// document.write("<Table>")
// document.write("<tr>")
// document.write("<th>"+"Subject"+"</th>")
// document.write("<th>"+"Total Marks"+"</th>")
// document.write("<th>"+"Obtained Marks"+"</th>")
// document.write("<th>"+"Percentage"+"</th>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>"+subject1+"</td>")
// document.write("<td>"+100+"</td>")
// document.write("<td>"+obtainedSubject1+"</td>")
// document.write("<td>"+percentage1+"%"+"</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>"+subject2 + "</td>")
// document.write("<td>"+100+"</td>")
// document.write("<td>"+obtainedSubject2+"</td>")
// document.write("<td>"+percentage2+ "%"+"</td>")
// document.write("</tr>")


// document.write("<tr>")
// document.write("<td>"+subject3 + "</td>")
// document.write("<td>"+100+"</td>")
// document.write("<td>"+obtainedSubject3+"</td>")
// document.write("<td>"+percentage3+"%"+"</td>")
// document.write("</tr>")

// document.write("<tr>");
// document.write("<th>" + "</th>");
// document.write("<th>"+100+"</th>");
// document.write("<th>"+obtainedMarks+"</th>");
// document.write("<th>"+percentage+"%"+"</th>");
// document.write("</tr>");
// document.write("</Table>")

// --------------END OF THE CHAPTER----------------
 




 














   
   