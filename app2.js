// chapter 21 to 25

// task no 1 

// var firstName = prompt("Enter Your First Name","Mohtashim");
// var lastName = prompt("Enter Your Last Name","Muhammad Shoaib");
// var fullName = firstName+""+lastName ;
// alert("Welcome"+fullName);


// task no. 2

// var mobile = prompt("Enter Your Favourite Phone"," Samsung Galaxy S6 Edge Plue ");
// var lenght = mobile.length;
// document.write("My favourite phone is : "+mobile+" Lenght Of String : "+lenght);

// task no. 3

// var nationality = prompt("Enter Your Nationality","Pakistani");
// var index = nationality.length; 
// document.write("string : "+ nationality +"<br>"+ "Index Of 'n' : " + index );



// task no. 4


// var world = "Hello World";
// var last = world.length -1;
// document.write(world+last);


// task no. 5

// let string = "Pakistani";

// document.write("String:"+""+string+"<br>"+"Character at index 3: "+''+string.slice(3,4));


// task no. 6


// let name = prompt("Enter Your  First Name","Mohtashim");
// let last =  prompt("Enter Your Last Name"," Muhammad Shoaib");
// let concat = name.concat(last);
// document.write("<br>"+"Good Morning " + concat);

// task no. 7

// let c = "Hyderabad";
// let d = "Islam";
// let e = c.replace("Hyder","Islam");
// document.write("City : "+c+"<br>"+"After replacement : "+e);






// task no. 8 

// var message = "Ali and Sami are best friends. ";
// var message1 = "They play cricket and football together";
// var replace = message.replace("and","&");
// var replace1 = message1.replace("and","&");
// alert(replace+replace1);






// task no. 9

// var value = 472;
// console.log(value,(typeof value));
// let value1 = String(472);
// console.log(value1,(typeof value1));


// Task no. 10

// let input = prompt("Please Enter Peanuts","Peanunts");
// document.write("User Input : "+(input.toLowerCase()))
// document.write("<br>"+"Upper case : "+(input.toUpperCase()))

// task no. 11    (Error!!!!!!!!!!!!!!!!!!!************)


// let input1 = prompt("Please Enter Java","Java");
// document.write("<br>"+"Title case : "+(input.toTitleCase()))


// task no. 12

// num = 35.36;
// num = num.toString();
// newNum = num.split('.').join("");
// document.write("Number: "+num);
// document.write("<br>");
// document.write("Result: "+newNum);


// task no. 13






// task no. 14

// var a = ["cake","apple pie","cookie","chips","patties"];
// var b = prompt("Enter:",a);





// task no. 15





// task no. 16

// var university = "University of Karachi " ;
// var arrayConvert = university.split('');
// console.log(arrayConvert);







// chapter 26 - 30


// task no. 1 

// let interger = prompt("Enter Positive Integer","3.1425");

// document.write("number : "+interger+"<br>");

// let a = parseFloat(prompt("Enter","3.1425")); 
// document.write("Round Off Value : "+(a.toFixed(0)));
// document.write("<br>"+"Floor Value : "+(a.toFixed(0)));
// document.write("<br>"+"Ceil Value : "+(a.toFixed(0)));



// task no. 2


// let interger = prompt("Enter Positive Integer","-3.1425");

// document.write("number : "+interger+"<br>");

// let a = parseFloat(prompt("Enter","3.1425")); 
// document.write("Round Off Value : "+(a.toFixed(0)));
// document.write("<br>"+"Floor Value : "+(a.toFixed(0)));
// document.write("<br>"+"Ceil Value : "+(a.toFixed(0)));



// task no. 3







// task no. 4









// task no. 5






// task no. 6


// var a = Math.floor(Math.random() * 100);     
// alert = (a);


// task no. 7

// var kg = prompt("Enter Your Weight in Kilogram","50Kgs");
// document.write("The Weight of your is"+ kg);


// task no. 8

// var no = prompt("Enter Number between 1 to 10");
// if (no === "5") {
//     alert("Hurry ! You Win ")
// }
// else{
//     alert("Try Again!");
// }




// chapter 31-34



// task no. 1

// var date = new Date();
// document.write(date);

// task no. 2

// var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var now       = new Date();
// var thisMonth = months[now.getMonth()];
// console.log(thisMonth);


// task no. 3

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tue";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";

// var n = weekday[d.getDay()];

// alert("Today is "+n);



// task no. 4


// var ds = prompt("Which Date  is Today?","Saturaday");
// if (ds === "Saturaday") {
// alert("It is fun today");
// }
// else if(ds === "Sunday"){
//     alert("It is fun today");
// }
// else{
//     alert("It's a busy day");
// }


// task no. 5

// var enter = prompt("Enter","15");
// if (enter <= "15"  ) {
//     alert("First Fifteen Days Of the Month")
// }
// else{
//     alert("Last Fifteen Days Of the Month")
// }


// task no. 6                 not done

// var date = new Date();
// document.write("Current Date : "+date+"<br>");






// task no. 7

// var today = new Date()
// var curHr = today.getHours()

// if (curHr < 12) {
//   console.log('It is AM');
// }
//  else if (curHr > 12) {
//   console.log('It is PM');
// } else {
//   console.log('Error');
// }



// task no. 8











// task no. 9









// task no. 10







// task no. 11

// var datetime = new Date("Sat Dec 05 2015 23:08:16 GMT+0500 (PKT)");
// alert("Before: "+ datetime);
// datetime.setHours(datetime.getHours()+1); 
// alert("1 Hour age, it was "+ datetime);



// task no. 12

// var date = new Date();
// alert("Current Date : "+ date);

// var Date = new Date(new Date().setFullYear(new Date().getFullYear() - 105 ))
// alert("100 years back, it was "+Date);


// task no. 13







// task no. 14

// document.write("K-Electric Bill"+"<br><br><br>")

// var a = prompt("Customer No.","ABC Customers");
// document.write("Customer No. : ABC Customers"+"<br>");

// var b = prompt("Month","Feburary");
// document.write("Current Month : "+ b +"<br>");

// var c = prompt("No. of units","410");
// document.write("Number of units : "+c + "<br>");

// var d = prompt("charges per units","16");
// document.write("Charges per Unit : " + d + "<br><br><br>");

// var e = c*d
// document.write("Net Amount Payable (within Due Date) : " + e + "<br>");

// var f = 350 ;
// document.write("Late Payment Surcharge : " + f + "<br>");

// var g = e + f ;
// document.write(" Gross Amount Payable (after Due Date) : " + g );





// Assignment # 35-38

// task no. 1

// var date1 = new Date();
// document.write(date1);



// task no. 2

// var name3 = prompt("Enter First Name", "Mohtashim");
// var name4 = prompt("Enter Father Name", "Shoaib");
// var name5 = name3 + "" + name4;
// document.write("Greeting Mr/Ms " + name5);


// task no. 3

// var add1 = prompt("Enter 1st Number","2");
// var add2 = prompt("Enter 2nd Number","2");
// var add3 = add1 + add2 ;
// document.write(add3);



// task no. 4

// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }



// task no. 5


