/* Chapter 1 */

    //Question 1
    alert("Welcome to your website");

    //Question 2
    alert("Error! Please enter a valid password.");

    //Question 3
    alert("Welcome to Js Land..\n Happy Coding!");

    //Question 4
    alert("Welcome to Js Land..");

    $( function() {
       $('#dialog').dialog();
    });

    //Question 5
    alert("Hello.. I can run JS through my web browser's console");

    //Question 6 in html
    //Question 7 in html

/* Chapter 2 */

    //Question 1
    var username = "Muhammad Yaseen";

    //Question 2
    var myName = username;

    //Question 3
    var titled = "Hello World";
    alert(titled);

    //Question 4
    var studentName = "Muhammad Yaseen";
    var studentAge = "26";
    var studentCourseName = "Certified Mobile Application Development";
    alert(studentName);
    alert(studentAge);
    alert(studentCourseName);

    ////Question 5
    alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

    //Question 6
    var userEmail = "yaseenmighty86@gmail.com";
    alert("My email Address is " + userEmail);

    //Question 7
    var book = "A smarter way to learn JavaScript";
    alert("I am trying to learn from the Book " + book);

    //Question 8
    document.write("Yah! I can write HTML content through JavaScript");

    //Question 9
    var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(design);

/* Chapter 3 */
    //Question 1
    var age = "26";

    //Question 2
    function nameDefined(ckie,nme) {
       var splitValues
       var i
       for (i=0;i<ckie.length;++i) {
          splitValues=ckie[i].split("=")
          if (splitValues[0]==nme) return true
       }
       return false
    }

    //Question 3
    function delBlanks(strng) {
       var result=""
       var i
       var chrn
       for (i=0;i<strng.length;++i) {
          chrn=strng.charAt(i)
          if (chrn!=" ") result += chrn
       }
       return result
    }

    //Question 4
    function getCookieValue(ckie,nme) {
       var splitValues
       var i
       for(i=0;i<ckie.length;++i) {
          splitValues=ckie[i].split("=")
          if(splitValues[0]==nme) return splitValues[1]
       }
       return ""
    }

    //Question 5
    function insertCounter() {
         readCookie()
         displayCounter()
    }

    //Question 6
    function displayCounter() {
      alert("You've visited this page " + counter+" times.")
    }

    ////Question 7
    function readCookie() {
         var cookie=document.cookie
         counter=0
         var chkdCookie=delBlanks(cookie)  //are on the client computer
         var nvpair=chkdCookie.split(";")
         if(nameDefined(nvpair,"pageCount"))
         counter=parseInt(getCookieValue(nvpair,"pageCount"))
         ++counter
         var futdate = new Date()
         var expdate = futdate.getTime()
         expdate += 3600000 * 24 *30  //expires in 1 hour
         futdate.setTime(expdate)

         var newCookie="pageCount="+counter
         newCookie += "; expires=" + futdate.toGMTString()
         window.document.cookie=newCookie
    }

    insertCounter();

    ////Question 8
    var birthYear = "23-10-1993";
    document.write("My birth year is " + birthYear + "<br>");
    document.write("Data type of my declare variable is number");


/* Chapter 4 */
   
    //Question 1
    var firstName = "Muhammad";
    var lastName = "Yaseen";
    var jobPosition = "Web Guru";

    document.write("My name is" + " " + firstName + " " +  lastName + "and I am" + " " + jobPosition + "<br>" );

    
    var firstName = "Muhammad";
    var lastName = "Yaseen";
    var jobPosition = "Web Guru";
    var Age = "26";
    var city = "karachi";

    //Question 2
    var P2_a%88$;
    var $_;
    var _jobPosition = "Web Guru";
    var A+ge = "26";
    var city% = "karachi";

    ////Question 3

    document.write("Rules for naming JS variables" + "<br>" );
    var number = "1st";
    var dollar = "$";
    var underScore =  "_";
    var combineWords = dollar+"my"+underScore+number+"Variable";

    document.write("Variable names can only contain, " + "numbers" + ", " + dollar + " and " + underScore + " . " + " For Example : " + combineWords + "<br>");

    ////Question 3b
    var dollarName = "$Yaseen";
    var underScoreName = "_Yaseen";
    var name = "Yaseen";
    document.write("Variables must begin with a" + " " + dollarName + " , " + underScoreName  + " , " +  name);

    //Question 3d 
    var variblaenames = "sensitive";
    document.write("Variable names are case" + variblaenames);

    //Question 3e
    var jsWords = "JS keywords";
    document.write("Variable names should not be JS " + jsWords);

/* Chapter 6 to 9 */

//Question 1
    var number = 10;
    document.write("<p>Result</p>" + "<br>");
    document.write("The value of a is:" + "" + number + "<br>");
    document.write("<br>");
    number = ++number;
    document.write("The value of ++a is:" + "" + number + "<br>");
    document.write("Now the value of a is:" + "" + number + "<br>");
    document.write("<br>");
    number = ++number;
    document.write("The value of ++a is:" + "" + number + "<br>");
    document.write("Now the value of a is:" + "" + number + "<br>");
    document.write("<br>");
     number = --number;
    document.write("The value of --a is:" + "" + number + "<br>");
    document.write("Now the value of a is:" + "" + number + "<br>");
    document.write("<br>");
     number = --number;
    document.write("The value of --a is:" + "" + number + "<br>");
    document.write("Now the value of a is:" + "" + number + "<br>");
    document.write("<br>");

    //Question 2

    var a = 2;
    var b = 1;
    var result =  --a - --b + ++b + b--;
    document.write("a is " + " " + a + "<br>");
    document.write("b is " + " " + b + "<br>");
    document.write("result is " + " " + result + "<br>");

    //Question 3
    var person = prompt("Please enter your name");
    if (person != null) {
      alert("Greet" + " " + person);
    }

    //Question 5
    var a = prompt ("please enter a number");
    var b;
    if(a == "") {
        document.write("Table of 5 <br>")
        d = 5;  
        n = 1;
        while(d<6) {
            document.write(d+ "x" + n + "=" + d*n + "<BR>")
            if (++n == 11) {
                n = 1;
                d++;
            }
        }
    }else {
        for (var i = 1; i <= 9; i++){
            b= a*i
            document.write("" + a + "*" + i + "=", + b +"<br>");
        }
    }
    
    //Question 6
    var subject1 = prompt ("Please enter subject name");
    var subject2 = prompt ("Please enter subject name");
    var subject3 = prompt ("Please enter subject name");

    var totalMarks = 100;
    var obtainedMarks1 = prompt ("Please enter obtain marks subject number one");
    var obtainedMarks2 = prompt ("Please enter obtain marks subject number two");
    var obtainedMarks3 = prompt ("Please enter obtain marks subject number three");

    var subject1Percentage = obtainedMarks1/totalMarks*100 + "%";
    var subject2Percentage = obtainedMarks2/totalMarks*100 + "%";
    var subject3Percentage = obtainedMarks3/totalMarks*100 + "%";

    var table = '<table><tr><th>Firstname</th><th>TotalMarks</th><th>ObtainMarks</th><th>Percentage</th></tr><tr><td>'+subject1+'</td><td>'+totalMarks +'</td><td>'+obtainedMarks1+'</td><td>'+subject1Percentage+'</td></tr><tr><td>'+subject2+'</td><td>'+totalMarks +'</td><td>'+obtainedMarks2+'</td><td>'+subject2Percentage+'</td></tr><tr><td>'+subject3+'</td><td>'+totalMarks +'</td><td>'+obtainedMarks3+'</td><td>'+subject3Percentage+'</td></tr></table>';
    document.write(table);


/* chapter 9 to 11 */

// Question 1
    var cityName = prompt("Please enter city name").toLowerCase();
    if(cityName == "karachi") {
        alert("Welcome to city of lights");
    }else {
        alert("Type karachi");
    }

    // Question 2
    var cityName = prompt("Please enter Gender name").toLowerCase();
    if(cityName == "male") {
        alert("Good Morning Sir.");
    }else if("female") {
        alert(" Good Morning Madam.");
    }

    // Question 3
    var signalColor1 = prompt("Please enter color of road traffic signal").toLowerCase();
    var signalColor2 = prompt("Please enter color of road traffic signal").toLowerCase();
    var signalColor3 = prompt("Please enter color of road traffic signal").toLowerCase();

    var signalColorMessage1 = prompt("Please enter traffic signal message").toLowerCase();
    var signalColorMessage2 = prompt("Please enter traffic signal message").toLowerCase();
    var signalColorMessage3 = prompt("Please enter traffic signal message").toLowerCase();

    var table = '<table class="traffic-single-table"><tr><th>Signal color</th><th>Message</th></tr><tr><td>'+signalColor1+'</td><td>'+signalColorMessage1+'</td></tr><tr><td>'+signalColor2+'</td><td>'+signalColorMessage2+'</td></tr><tr><td>'+signalColor3+'</td><td>'+signalColorMessage3+'</td></tr></table>';
    document.write(table);

    // Question 4
    var fuel = prompt("Please enter fuel").toLowerCase();
    if( fuel == "0.25litres") {
        alert("Please refill the fuel in your car");
    }else {
        alert("The fuel in your car is full");
    }

    // Question 5    
    var a = 4;
    if (++a === 5){
        alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83){
        alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13){
        alert("condition 1 is true");
    }
    if (c === 13){
        alert("condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
    }
    if(c === 14){
        alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
        alert("The cost equals");
    }
    if (true){
        alert("True");
    }
    if (false){
        alert("False");
    }
    if("car" < "cat"){
        alert("car is smaller than cat");
    }

    // Question 6
    var subjects1 = parseInt( prompt("Enter first subject number") )
    var subjects2 = parseInt( prompt("Enter second subject  number") )
    var subjects3 = parseInt( prompt("Enter third subject  number") )
    var totalSubjectNumber = subjects1 + subjects2 + subjects3;
    var totalMarks = 100 * 3;
    var Finalpercentage = totalSubjectNumber / totalMarks * 100;
    console.log(Finalpercentage);

    document.write("<h2>Marks Sheet</h2>");
    
    if (Finalpercentage > 80) {
        document.write("Total Marks:", totalMarks , "<br>");
        document.write("Marks obtained:", totalSubjectNumber , "<br>");
        document.write("Percentage:", Finalpercentage , "%" , "<br>");
        document.write("Grade:", "A-one" , "<br>");
        document.write("Remarks:", "Excellent" , "<br>");
    } else if(Finalpercentage > 70) {
        document.write("Total Marks:", totalMarks , "<br>");
        document.write("Marks obtained:", totalSubjectNumber , "<br>");
        document.write("Percentage:", Finalpercentage , "%" , "<br>");
        document.write("Grade:", "A" , "<br>");
        document.write("Remarks:", "Good" , "<br>");
    }else if(Finalpercentage > 60) {
        document.write("Total Marks:", totalMarks , "<br>");
        document.write("Marks obtained:", totalSubjectNumber , "<br>");
        document.write("Percentage:", Finalpercentage , "%" , "<br>");
        document.write("Grade:", "B" , "<br>");
        document.write("Remarks:", "You need to improve" , "<br>");
    }else {
        document.write("Total Marks:", totalMarks , "<br>");
        document.write("Marks obtained:", totalSubjectNumber , "<br>");
        document.write("Percentage:", Finalpercentage , "%" , "<br>");
        document.write("Grade:", "F" , "<br>");
        document.write("Remarks:", "Sorry" , "<br>");
    }

    // Question 7

    var randomNumber = Math.floor(Math.random() * 10 ) + 1;
    var guess = prompt('I am thinking of a random number between 1 and 10. What is it?');
    if (parseInt(guess) === randomNumber ) {
        document.write('<p>Close enough to the correct answer</p>');
    }  else {
        document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
    }

    // Question 8

    var value_number = Number(prompt("Enter a Number : "));
 
    if(value_number % 3 == 0) {
        document.write("<font face='arial' size='4'> ");
        document.write("The number " +value_number+
                    " is divisible by 3. </font>");
    }
    else {
        document.write("<font face='arial' size='4'> ");
        document.write("The number " + value_number+ 
                " is not divisible by 3. </font>");
    }

    // Question 9
    var num = Number(prompt("Enter a Number : "));
    if ( num % 2 == 0) {
        document.write("<h2>Even Number</h2> ");
    }else{
        document.write("<h2>Odd Number</h2> ");
    }

    // Question 10
    var weather = parseInt( prompt("Enter first subject number") )

    if (weather > 40) {
        document.write("It is too hot outside." , "<br>");
        
    } else if(weather > 30) {
        document.write("The Weather today is Normal.", "<br>");
        
    }else if(weather > 20) {
        document.write("Today’s Weather is cool." , "<br>");
        
    }else {
        document.write("“OMG! Today’s weather is so Cool." , "<br>");
    }

    // Question 10
    var expression = "-30--20";
    match = expression.match(/^(-?\d+)([-+*/])(-?\d+)$/);

    if (match === null) {
        alert("invalid expression");
        return;
    }

    var number1 = match[1];
    var operand = match[2];
    var number2 = match[3];

    switch(operand){
        case "+" : alert(number1 + number2);  break;
        case "-" : alert(number1 - number2);  break;
        case "*" : alert(number1 * number2);  break;
        case "/" : alert(number1 / number2);  break;
        default : alert("Not a correct operation");
    }

    
    // Question 11
    function myFunction() {
      var x,y,z,oper;
      x=prompt("Type first number");
      y=prompt("Type second number");
      oper=prompt("Type an operator");
      
      if(oper=="+"){
        z=Number(x)+Number(y);
      }
      else if(oper=!null){
        z="Error"
      }
      else if(x=!null){
        z="Error"
      }
      else if(y=!null){
        z="Error"
      }
      else if(oper=="/"){
        z=Number(x)/Number(y);
      }
      else if(oper=="*"){
        z=Number(x)*Number(y);
      }
      else if(oper=="-"){
        z=Number(x)-Number(y);
      }
      
      return z;
    }
    document.getElementById("demo").innerHTML =myFunction();

/* chapter 12 to 13 */

    //Question 1
    var input = parseInt( prompt("Enter number") );
    var A = "65";
    var Z = "90";
    var a = "97";
    var z = "122";

    if ( input = "65" ) {
        document.write("Uppercase letter" , "<br>");
    }else if( input = "90" ) {
        document.write("Uppercase letter" , "<br>");
    }else {
       document.write("Lowercase letter" , "<br>"); 
    }  

    //Question 2
    var num1, num2;
    num1 = window.prompt("Input the First integer", "0");
    num2 = window.prompt("Input the second integer", "0");
                                                     
    if(parseInt(num1, 10) > parseInt(num2, 10)) 
      { 
        document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ "." , "<br>");
      }   
    else
      if(parseInt(num2, 10) > parseInt(num1, 10)) 
      {
        document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ "." , "<br>");
      }                  
    else
      {
       document.write("The values "+ num1+ " and "+num2+ " are equal." , "<br>");
      }

    //Question 3
    var theNumber = parseInt( prompt("Enter number") );

    if (theNumber < 0) {
       document.write("Postive" , "<br>");
    }
    else {
       document.write("Negative" , "<br>");
    }

    ////Question 4
    var password = "1234567";
    var input = parseInt( prompt("Enter number") );

    if (password == input) {
        document.write("Correct! The password you entered matches the original password" , "<br>");
    } else {
        document.write("Incorrect password" , "<br>");
    }

    //Question 5
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    }
    else {
        greeting = "Good evening";
    }

    //Question 6
    var inputTime = parseInt( prompt("Enter number") );
    if(inputTime >= "00:00" && inputTime < "12:00") {
        document.write("Good Morning" , "<br>");
    }else if (inputTime >= "12:00" && inputTime < "17:00") {
        document.write("Good afternoon" , "<br>");
    }else if (inputTime >= "17:00" && inputTime < "21:00") {
        document.write("Good evening" , "<br>");
    }else if (inputTime >= "21:00" && inputTime < "23:59") {
        document.write("Good night" , "<br>");
    }

/* chapter 14 to 16 */

 //Queston 1
    var empytarray = [];

    // Question 2
    var arr1 = new Array();

    //Queston 3
    var studentName = ["asad", "hamza","farhan"];

    //Queston 4
    var stringArray = ["alif", "baa", "taaa"];

    //Queston 5
    var numbersArray = [1,2,3,4,5];

    //Queston 6
    var mixedArray = ["Abbas", 49];

    //Queston 7
    var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "MPhil", "PhD"];
    document.write("Qualifications");

    // Question 8
    var studentnames=['sharik','hamid','osama'];
    var studentscores=[120,130,180];
    var totalMarks=500;

    for (var i=0; i<3; i++){
        document.write("Score of "+studentnames[i]+" is "+studentscores[i]+". Percentage: "+((studentscores[i]/totalMarks)*100)+"%"+"<br>");
    }

    //Question 9
    var colorNames=['red','green','blue'];
    document.write(colorNames+"<br>");

    var user=prompt("Which color you want to add in the beginning: ");
    colorNames.unshift(user);
    document.write(colorNames+"<br>");

    var user=prompt("Which color you want to add in the last: ");
    colorNames.push(user);
    document.write(colorNames+"<br>");

    colorNames.unshift('pink','black');
    document.write(colorNames+"<br>");

    colorNames.shift();
    document.write(colorNames+"<br>");

    colorNames.pop();
    document.write(colorNames+"<br>");

    var index=+prompt("At which position you want to add : ");
    var user=prompt("Which color you want to add: ");
    colorNames.splice(index,0,user);
    document.write(colorNames);

    var index=+prompt("At which position you want to delete : ");
    var quantity=+prompt("How many colors you want to delete: ");
    colorNames.splice(index,quantity);
    document.write(colorNames);

    // Question 10
    var score = [320,230,480,120];
    var sortedScore = score.sort();

    document.write(sortedScore);

    // Question 11
    var citiesList = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
    var selected = citiesList.slice(0,3);
    var selectedCities = [selected];

    document.write(selectedCities);

    // Question 12
    var array = ['This','is','my','cat'];
    var str = array.join(' ');

    // Question 13
    var computerdevices = ['Keyboard','mouse','printer','monitor'];
    for (var i= 0; i<computerdevices.length; i++){
        document.write("Out:"+computerdevices[i]+"<br>");
    }

    // Question 14
    var devices = ['Keyboard','mouse','printer','monitor'];
    var reversedDevices = [];
    for(var i =  devices.length -1; i >= 0; i--) {
      document.write("Out:"+reversedDevices.push(devices[i])+"<br>");
    }

    // Question 15
    var callphonearr = ['Apple','Samsung','Motorola','Nokia','Sony','Haier'];
    for (var i= 0; i<callphonearr.length; i++){
        document.write(callphonearr[i]+"<br>");
    }

/* chapter 17 to 20 */

//Question 1
var array=[[],[],[]];

// Question 2
var array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0; i<3; i++){
    for (var j=0; j<4; j++){
        document.write(array[i][j]+" ");
    }
    document.write("<br>");
}

// Question 3
for (var i=1; i<11; i++){
    document.write(i+"<br>");
}

// Question 4
var number=+prompt("Enter number to show its multiplication table: ");
var length=+prompt("Enter length of multiplication table: ");

document.write("Multiplication table of "+number+"<br>");
document.write("Length "+length+"<br>"+"<br>"+"<br>");
for (var i=1; i<length+1; i++){
    document.write(number+" x "+i+" = "+(number*i)+"<br>");
}

//Question 5
var fruits=['apple','banana','mango','orange','strawberry'];
for (var i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>");
}
document.write("<br>");
for (var i=0; i<fruits.length; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

// Question 6
document.write("Counting:"+"<br>");
for (var i=1; i<16; i++){
    document.write(i+",");
}
document.write("<br>"+"<br>"+"<br>");

document.write("Reverse Counting:"+"<br>");
for (var i=10; i>0; i--){
    document.write(i+",");
}
document.write("<br>"+"<br>"+"<br>");

document.write("Even:"+"<br>");
for (var i=0; i<21; i++){
    if (i%2==0){
        document.write(i+",");
    }
}
document.write("<br>"+"<br>"+"<br>");

document.write("Odd:"+"<br>");
for (var i=0; i<20; i++){
    if (i%2!=0){
        document.write(i+",");
    }
}
document.write("<br>"+"<br>"+"<br>");

document.write("Series:"+"<br>");
for (var i=1; i<11; i++){
    document.write(i*2+"k"+",");
}

// Question 7
var array=['cake','apple pie','cookie','chips','patties'];
var user=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am" );
var user2=user.toLowerCase();

for (var i=0; i<array.length; i++){
    if (user2==array[i]){
        alert(array[i]+" is available at index "+i+" in our bakery");
    }
    else {
        alert("We are sorry ."+user2+" is not available in our bakery");
    }
    break;
}

// Question 8
var array=[24,53,78,91,12];
var largest=array[0];
for (var i=0; i<array.length; i++){
    if (largest<array[i]){
        largest=array[i];
    }
}
document.write("The largest number is: "+largest);

// Question 9
var array=[24,53,78,91,12];
var smallest=array[0];
for (var i=0; i<array.length; i++){
    if (smallest>array[i]){
        smallest=array[i];
    }
}
document.write("The smallest number is "+smallest);

// Question 10
for (var i=1; i<101; i++){
    if (i%5==0){
        document.write(i+",");
    }
}

/* Chapter 21 to 25 */

//Question 1
    var fName = prompt("Enter First Name");
    var lName = prompt("Enter Last Name");
    var fullName = fName + lName;
    document.write("Greet", " " , fullName , "<br>");

    //Question 2
    var favoriteMobileModel = prompt("Enter favorite Mobile Phone Model");
    document.write("My favorite phone is:", " " , favoriteMobileModel , "<br>");
    var stringLength = favoriteMobileModel.length;
    document.write("Length of string:", " " , stringLength , "<br>");

    //Question 3
    var str = 'Pakistani';
    var position = str.indexOf('n');
    document.write("String:", " " , str , "<br>");
    document.write("Index of 'n':", " " , position, "<br>");

    //Question 4
    var lastIndex = 'Hello World';
    var lastIndexposition = lastIndex.lastIndexOf('l');
    document.write("String:", " " , str , "<br>");
    document.write("Index of 'l':", " " , lastIndexposition, "<br>");

    //Question 5
    var findCharacter = 'Pakistani';
    var index = findCharacter.charAt(3);
    document.write("String:", " " , findCharacter , "<br>");
    document.write("character at index 3:", " " , index , "<br>");

    //Question 6
    var fName = prompt("Enter First Name");
    var lName = prompt("Enter Last Name");
    var fullName = fName.concat(lName);
    document.write("Greet", " " , fullName , "<br>");

    //Question 7
    var cityHyderabad = "Hyder";
    var resHyderabad = cityHyderabad.replace("Hyder", "Hyderabad");
    var cityIslamabad = "Islam";
    var resIslamabad = cityIslamabad.replace("Islam", "Islamabad");
    document.write("City", " " , resHyderabad , "<br>");
    document.write("After replacement", " " , resIslamabad , "<br>");

    //Question 8
    var message = "Ali and Sami are best friends.They play cricket and football together."
    var resMessage = message.replace(/and/g, "&");
    document.write( resMessage , "<br>");

    //Question 9
    var stringNumber = "472";
    var stringType = typeof "472";
    var convertStringNumber = parseInt(stringNumber);
    var type = typeof convertStringNumber;
    document.write( "Value:", stringNumber , "<br>");
    document.write( "Type:", stringType , "<br>");
    document.write( "Value:", convertStringNumber , "<br>");
    document.write( "Type:", type , "<br>");

    //Question 10
    var biscuitName = prompt("Enter Biscuit Name");
    document.write( "User Input:", biscuitName , "<br>");
    var biscuitNameUppcase = biscuitName.toUpperCase();
    document.write( "Upper case:", biscuitNameUppcase , "<br>");

    //Question 11
    var userInput = prompt("Enter Anything").toLowerCase();
    document.write( "Upper case:", userInput , "<br>"); 
    var userInputFirstLetterUpperCase = userInput.charAt(0).toUpperCase() + userInput.substr(1).toLowerCase();
    document.write( "Upper case:", userInputFirstLetterUpperCase, "<br>"); 

    //Question 12
    var num = "35.36";
    document.write( "Number:", num , "<br>"); 
    checkedNew = num.split('.').join("");
    document.write( "Number:", checkedNew, "<br>");

    //Question 13
    var input = prompt("Enter Name");
    for (var i = 0; i < input.length; i++)
    {   
      var checkChar = input.charCodeAt(i);
      if (checkChar >=  33)
      {
        alert ("File name has special characters !,.@ \nThese are not allowed\n");
         
      }else {
        alert("No special characters");
      }
    }

    //Question 14
    var search = prompt("Welcome to ABC bakery. What do you want to order sir/mam?").toLowerCase();
    var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
    var cookieIndex = bakery.indexOf("cookie");

    if(bakery.includes(search)){
        document.write(search," ", "is <strong>available</strong> at index", cookieIndex , " ", "our bakery" , "<br>");
    } else{
        document.write( "We are sorry", " " , search , "is <strong>not available</strong> in our bakery" , "<br>");
    }

    //Question 15
    var userPassword = prompt("Enter your password");
    var passRegex = /^[A-Za-z]\w{7,14}$/;
    if(userPassword.match(passRegex)) {
        alert("Password is correct");
    }else {
        alert("Password can not begin with a number Please Enter Valid");
    }

    //Question 16
    var ShowUserInputLastChar = prompt("Enter a name");
    document.write( "User Input", " " , ShowUserInputLastChar ,"<br>");
    var lastChar = ShowUserInputLastChar.slice(-1);
    document.write( "Last character of Input:", " " , lastChar ,"<br>");

    //Question 17
    var university = "University of Karachi";
    var ar = university.split(''); // split string on comma space
    document.write(ar);

    //Question 18
    var temp = "The quick brown fox jumps over the lazy dog";
    var count = (temp.match(/the/g) || []).length;
    console.log(count);


/* Chapter 26 to 30 */

  //Question 1
    var number = parseFloat(prompt("Enter number"));
    if( number > 0 ) {
       document.write("Number", " " , number , "<br>"); 
       var roundOff = Math.round(number);
       document.write("Number", " " , roundOff , "<br>"); 
       var floor = Math.floor(number);
       document.write("Number", " " , floor , "<br>");
       var ceil = Math.ceil(number);
       document.write("Number", " " , ceil , "<br>"); 
    }

    //Question 2
    var negativeNumber = parseFloat(prompt("Enter negativeNumber"));
    if( negativeNumber < 0 ) {
       document.write("negativeNumber", " " , negativeNumber , "<br>"); 
       var roundOff = Math.round(negativeNumber);
       document.write("negativeNumber", " " , roundOff , "<br>"); 
       var floor = Math.floor(negativeNumber);
       document.write("negativeNumber", " " , floor , "<br>");
       var ceil = Math.ceil(negativeNumber);
       document.write("Number", " " , ceil , "<br>"); 
    }
    

    //Question 3
    var absoluteNumber = parseInt(prompt("Enter absolute number"));
    var numberResult = Math.abs(absoluteNumber);
    document.write("Number", " " , numberResult , "<br>"); 

    //Question 4
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    document.write('random dice value: ' + diceRoll , "<br>");

    //Question 5
    var heads = 0;
    var tails = 0;
    var x = parseInt(prompt("Enter number"));
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        document.write('random coin value: ' + "head" , "<br>");
    }else{
        document.write('random dice value: ' + "tails" , "<br>");
    }

    //Question 6
    var randomNumber = Math.floor(Math.random() * 201) - 100;
    console.log(randomNumber);


    //Question 7
    var num = Math.ceil(Math.random() * 10);
    var gnum = prompt('Guess the number between 1 and 10 inclusive');
    if (gnum == num) {
        console.log('Matched');
    }   
    else {
        console.log('Not matched, the number was '+gnum);
    }

/*Chapter 31 to 34 */

 //Question 1
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    document.write("Date Time", " " , datetime , "<br>");

    //Question 2
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var n = month[d.getMonth()];
    document.write("Current month", " " , n , "<br>");

    //Question 3
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    var firtThreeLetter = dayName.substring(0,3);
    document.write("Today is", " " , firtThreeLetter , "<br>");

    //Question 4   
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayNames = days[d.getDay()];
    if( dayNames == "Saturday" || dayNames == "Sunday") {
       document.write("Today is fun day", " " , "<br>"); 
    } else {
        document.write("Today is working day", " " , "<br>");
    }

    //Question 5
    var currentdate = new Date(); 
    var date = currentdate.getDate()
    if(date < 15) {
        document.write("First fifteen days", " " , "<br>");
    }else {
        document.write("Last fifteen days", " " , "<br>");
    }

    //Question 6
    var startTime = new Date(); // at process start
    var endTime = new Date(); // at process end
    console.log('Process executed in ' + (endTime - startTime) + ' ms'); // at process end

    //Question 7
    var hours = new Date();
    var mid='am';
    if(hours==0){ //At 00 hours we need to show 12 am
        document.write("It's AM", " " , "<br>");
    }
    else if(hours>12)
    {
        document.write("It's PM", " " , "<br>");
    }

    //Question 8
    var d = new Date();
    d.setMonth(4);
   
    //Question 11
    var DOB = "oct 23, 1993";
    var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
    var millisecondsBetweenNowAnd1970 = Date.now();
    var ageInMilliseconds = millisecondsBetweenNowAnd1970-millisecondsBetweenDOBAnd1970;
      var milliseconds = ageInMilliseconds;
      var second = 1000;
      var minute = second*60;
      var hour = minute*60;
      var day = hour*24;
      var month = day*30; 
      var year = day*365;
      var years = Math.round(milliseconds/year);

    //Question 13
    function printResults(){
        var message = "Your Age is: "+years+
         "</br>" + "Your date of birth is: 1993";
       document.write(message);
    }

    window.onload = printResults;

    //Question 14
    var customerName = prompt("Enter Customer name");
    var currentMonth = prompt("Enter Current Month");
    var numberOfUnits = parseInt(prompt("Enter number of units"));
    var chargesPerUnit = parseInt(prompt("Enter charges per unit"));
    var netAmount = numberOfUnits * chargesPerUnit;
    var latePayment = 250;
    var grossPayment = netAmount + latePayment;
    document.write("<h2>K-Electric Bill</h2>", "<br>");
    document.write("<p>Customer Name</p>", customerName , "<br>");
    document.write("<p>Month</p>", currentMonth, "<br>");
    document.write("<p>Number of Units</p>", numberOfUnits, "<br>");
    document.write("<br>");
    document.write("<p>Net Amount Payable (within Due Date)</p>", netAmount, "<br>");
    document.write("<p>Gross Amount Payable (After Due Date)</p>", grossPayment, "<br>");

/*Chapter 35 to 38 */

//Question 1
    function dateTime() {
        var dateTime = new Date();
        document.write("Current Date", " " ,  dateTime , "<br>");
    }
    dateTime();

    //Question 2
    function userName() {
        var userFirstName = prompt("Enter first name");
        var userLastName = prompt("Enter Last name");
        var userName = userFirstName + userLastName;
        document.write("Greets", " " ,  userName , "<br>");

    }
    userName();

    //Question 3
    function sumTwoNumbers() {
        var firstNumber = parseInt(prompt("Enter 1st Number"));
        var secondNumber = parseInt(prompt("Enter 2nd Number"));
        var sumOfNumber = firstNumber + secondNumber;
        document.write("Sum of Two Numbers", " " ,  sumOfNumber , "<br>");

    }
    sumTwoNumbers();

    //Question 4
    function calculator() {
        var firstNumber = parseInt(prompt("Enter 1st Number"));
        var secondNumber = parseInt(prompt("Enter 2nd Number"));
        var operator = prompt("Enter operator");
        // var sumOfNumber = firstNumber + secondNumber;
        // document.write("Sum of Two Numbers", " " ,  sumOfNumber , "<br>");
        if (operator == "+") {
            var sumOfNumber = firstNumber + secondNumber;
            document.write("Sum of Two Numbers", " " ,  sumOfNumber , "<br>");
        }
        else if (operator == "-") {
            var minsuOfNumber = firstNumber - secondNumber;
            document.write("Minus of Two Numbers", " " ,  minsuOfNumber , "<br>");
        }
        else if (operator == "*") {
            var multiplicationOfNumber = firstNumber * secondNumber;
            document.write("Multiplication of Two Numbers", " " ,  multiplicationOfNumber , "<br>");
        }else if (operator == "/") {
            var divisionOfNumber = firstNumber / secondNumber;
            document.write("Division of Two Numbers", " " ,  divisionOfNumber , "<br>");
        }else {
            document.write("No operator found", " " , "<br>");
        }

    }
    calculator();

    //Question 5
    function square(square) {
        document.write("Argument", " ", square , "<br>");
        return square;
    }
    square("hello world");

    //Question 6
    function factorialize(num) {
      // If num = 0 OR num = 1, the factorial will return 1
      if (num === 0 || num === 1)
        return 1;
      for (var i = num - 1; i >= 1; i--) {
        // We store the value of num at each iteration
        num = num * i; // or num *= i;
      }
      document.write("factorialize of number 5:", " ", num , "<br>");
      return num; //120
    }
    factorialize(5);

    //Question 7
    function myCount() {
        var num1 = prompt("Please enter Number1");
        var num2 = prompt("Please enter Number2");

        var text = "";
        var i;
        for (i = num1; i <= num2; i++) {
            text += "The number is " + i + "<br>";
        }
        document.write(text, "<br>");
    }
    myCount();

    //Question 8 
    function calHypo() {
        var a = prompt("Please Enter Base Of Triangle:");
        var b = prompt("Please Enter Perpendicular Of Triangle:");
        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        document.write("Hypotenuse2 = Base2 + Perpendicular2 <br/> <br /> The Hypoth is: " + a + "cm + " + b + "cm = " + c + "cm" , "<br>");
    }    
    calHypo();

    //Question 9
    function areaOfTriangle() {
        var width = prompt("Please Enter Width Of Rectangle:", "Value");
        var height = prompt("Please Enter Height Of Rectangle: ", "Variable");
        var a = width * height;
        document.write(" Formula: A = width * height <br/> <br /> The Area Of A Rectangle is: " " , " a , "<br>");
    }
    areaOfTriangle();

    //Question 10
    function palindrome(str) {
        var re = /[^A-Za-z0-9]/g;
        str = str.toLowerCase().replace(re, '');
        var len = str.length;
            for (var i = 0; i < len/2; i++) {
                if (str[i] !== str[len - 1 - i]) {
                    document.write("Entry is not a palindrome.", "<br>");
                    return false;
                }
            }
        document.write("The entry is a palindrome." , "<br>");          
        return true;
    }
    palindrome('madam');
    palindrome('parrot');

    //Question 11
    function uppercaseString(str) {
      var string = str.split(' ');
      var newarray = [];
      for(var x = 0; x < string.length; x++){
          newarray.push(string[x].charAt(0).toUpperCase()+string[x].slice(1));
      }
      return newarray.join(' ');
    }
    document.write(uppercaseString("the quick brown fox", "<br>"));

    //Question 12
    function longestWord(string) {
      var stringArray = string.match(/\w[a-z]{0,}/gi);
      var result = stringArray[0];

      for(var i = 1 ; i < stringArray.length ; i++) {
        if(result.length < stringArray[i].length) {
            result = stringArray[i];
        } 
      }
      return result;
    }
    document.write(longestWord('Web Development Tutorial' , "<br>"));

    //Question 13
    function char_count(str, letter) {
     var letter_Count = 0;
        for (var position = 0; position < str.length; position++) {
            if (str.charAt(position) == letter) {
                letter_Count += 1;
            }
        }
        return letter_Count;
    }

    document.write(char_count('JSResourceS.com', 'o'));

    //Question 14
    function calcCircumferenceOfCircle() {
        var area = 2;
        var pi = 3.14159265359;
        var radius = prompt("Please Enter Radius Of Circle:");
        var circumference = area  * pi * radius;
        document.write("The Circumference of circle is: " , circumference , "<br>" );
    }

    function calcArea() {
        var pi = 3.14159265359;
        var Arearadius = prompt("Please Enter Radius Of Circle:", "Radius ");
        var circle = pi * Math.pow(Arearadius, 2);

        document.write("The Area of circle is:" + circle);
    }

/*Chapter 38 to 42 */

//Question 1
function myFunction() {
  a = 4;
  b = 3;
  document.getElementById("result").innerHTML = Math.pow(a, b); 
}

//Question 2
function isLeapYear() { 
  var year = document.getElementById("year").value; 
  document.getElementById("GFG").innerHTML = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
}

//Question 3
function triangleValues(a,b,c) {
  var a = 11; 
  var b = 9;
  var c = 9;
  var s = (a+b+c)/2;
  var a = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  return a;
}
triangleValues(11,9,9);

function triangleArea() {
  var triagleValue = triangleValues(); 
  document.getElementById("traingle-area").innerHTML = triagleValue;
}
triangleArea();

//Question 4
var  obtainedMarks1 = +prompt("enter englis marks");
var  obtainedMarks2 = +prompt("enter maths marks");
var  obtainedMarks3 = +prompt("enter urdu marks");
var  obtTotal = obtainedMarks1 +  obtainedMarks2 + obtainedMarks3;
var  total_marks = 300;

function mainFunction() {
  percentage();
  average();
}

function percentage(obtainedMarks1 , obtainedMarks2 ,obtainedMarks3) {
  var result = (obtTotal/total_marks) * 100;
  return result ;
}
document.write(percentage(obtainedMarks1 , obtainedMarks2 ,obtainedMarks3))

function average() {
  var avg = obtTotal / 3 ; 
  return avg; 
}

document.getElementById("avg").innerHTML = percentage();

//Question 5
function myFunction() {
  var str = "Hello world, welcome to the universe.";
  var n = str.indexOf("welcome");
  document.getElementById("demo").innerHTML = n;
}

//Question 6
function deleteVowels() {
  var strings = ["bongo drums guitar flute double bass xylophone piano"];                          
  string = strings.map(x=>x.replace( /[aeiou]/g, '' )); 
  return string;             
}
document.getElementById("remove_vowel").innerHTML = deleteVowels();


//Question 7
function findOccurrences() {
  var str = "Pleases read this application and give me gratuity";
  var count = 0;
  let haveSeenVowel = false;

  for (const letter of str.toLowerCase()) {
    switch (letter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        {
          if (haveSeenVowel) {
            count++;
            haveSeenVowel = false;
          } else {
            haveSeenVowel = true;
          }
          break;
        }
      default:
        haveSeenVowel = false
    }
  }

  return count
}

document.getElementById("occurrences_number").innerHTML = findOccurrences();

//Question 8
  var a=+prompt("Enter distance between two cities in km");
  var meter;
  var centimeter;
  var cm;
  var ft;
  var f;
  var inh;
  var inch;

  function meter(){
    meter=a*1000;
    document.write("<br>"+"The distance in meter is "+ meter);
    return meter;
  }

  function centi(){
    cm = meter();
    centimeter =cm * 100;
    document.write("<br>"+"The distance in centimeter is "+ centimeter);
    return centimeter;
  }

  function feet(){
    ft = centi();
    f = ft/30.48;
    document.write("<br>"+"The distance in feet is "+ f);
    return f;
  }

  function inches(){
    inh = centi();
    inch = inh*12;
    document.write("<br>"+"The distance in inches is "+ inch);
    return inch;
  }
  inches()

//Question 9
function overtime() {
  var time_worked = document.getElementById("time_work").value; 
  var over_time; 
  var overtime_pay = 0;
    if (time_worked > 40)
    {
      over_time = time_worked - 40;
      overtime_pay = overtime_pay + (12 * over_time);
      console.log(overtime_pay);
      document.getElementById("overtimepayment").innerHTML = overtime_pay;
      document.getElementById("workhours").innerHTML = time_worked;
    }else {
      alert("Your work hours is less than 41 hours");
    }
}

////Question 10
$("#btn").click(function() {
    makeChange($("#amt").val());
});

function makeChange(total) {
    var hundred, fifty, ten;
    var changeArray = [hundred, fifty, ten];
    var amtArray = [100, 50, 10];

    $(".curreny").each(function(i) {
      var currentText = $(this).text();
      //if (total / amtArray[i] != 0) {
          //Set the span
          $(this).text(currentText + parseInt(total / amtArray[i]));
          //Get the new total
          total = total % amtArray[i];
      //}
    });
}

/*Chapter 43 to 48 */

//Quesiton 1 and 2
$(".img-col").click(function($this) {
  alert("Thankyou for purchasing this mobile");
});

//Quesiton 3
var rows = [{
    name: "John",
    class: 2,
}, {
    name: "Jack",
    class: 5,
}, {
    name: "DSon",
    class: 8,
},
  {
    name: "Dack",
    class: 2,
}];
let index = document.querySelectorAll('.usertable tr td:nth-child(1)');
let name = document.querySelectorAll('.usertable tr td:nth-child(2)');
let studenClass = document.querySelectorAll('.usertable tr td:nth-child(3)');
for (let i = 0; i < name.length; ++i) {
  index[i].innerHTML = i;
  name[i].innerHTML = rows[i].name;
  studenClass[i].innerHTML = rows[i].class;
}
$('.delete').click(function(e){
   $(this).closest('tr').remove()
})

//Quesiton 4
function setNewImage() {
  document.getElementById("img-1").src = "assets/img/mobile-3.png";
}
function setOldImage() {
  document.getElementById("img-1").src = "assets/img/mobile-1.jpg";
}

//Quesiton 5
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number2').value = value;
}

/*Chapter 49 to 52 */

//Question 1
function singupForm() {
// Storing Field Values In Variables
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
 
  //alert();
  document.getElementById("registername").innerHTML = name;
  document.getElementById("registeremail").innerHTML = email;  
}

//Question 2
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

//Question 3
$('.edit').click(function(e){
  $(".edittable").attr("style","display: block");
})

/*Chapter 53 to 58 */

//Question 1
var modal = document.getElementById("myModal");
function onClosedImagModal() {

}
setTimeout(()=>{ modal.style.display = "none"; }, 550)

//Question 2
var imgArray = ['assets/img/1.jpg', 'assets/img/2.jpg', 'assets/img/3.jpg', 'assets/img/4.png',
'assets/img/5.jpg', 'assets/img/6.jpg', 'assets/img/7.png', 'assets/img/8.jpg', 'assets/img/9.jpg',
'assets/img/10.jpg', 'assets/img/11.jpg', 'assets/img/12.jpg', 'assets/img/13.jpg','assets/img/14.png',
'assets/img/15.jpg'];

//Question 3
var imgs = ['assets/img/1.jpg', 'assets/img/2.jpg', 'assets/img/3.jpg', 'assets/img/4.png',
'assets/img/5.jpg', 'assets/img/6.jpg', 'assets/img/7.png', 'assets/img/8.jpg', 'assets/img/9.jpg',
'assets/img/10.jpg', 'assets/img/11.jpg', 'assets/img/12.jpg', 'assets/img/13.jpg','assets/img/14.png',
'assets/img/15.jpg'];
var container = document.getElementById('imageContainer');
var docFrag = document.createDocumentFragment();

imgs.forEach(function(cur, index, arr) {
    var img = document.createElement('img');
    img.src = cur;
    docFrag.appendChild(img);
});

container.appendChild(docFrag);

//Question 4
$("#imageContainer").click(function($this) {
  alert("Click on natural beauty");
});

//Question 5 and 6

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*---------------------------------------------------------*/

/*Chapter 58 to 67 */

//Question 1
    var nodes = document.getElementById('main-content').childNodes;
    for(var i=0; i<nodes.length; i++) {
      domData = nodes[i];
      console.log(domData);
      document.getElementById("domdata").innerHTML = domData;
    }

    var x = document.getElementsByClassName("render");
    for(var i=0; i<x.length; i++) {
      renderData = x[i];
      console.log(renderData);
    }
    document.getElementById("renderclassdata").innerHTML = x;

    var firstName = document.getElementById("first-name");
    firstName.value = "ahmed";
    var lastName = document.getElementById("last-name");
    lastName.value = "ali";
    var email = document.getElementById("email");
    email.value = "ahmedali@gmail.com";

    var nodetype = document.getElementById("form-content").nodeType;
    console.log(nodetype)

    var lastNameNodeType = document.getElementById("lastName").nodeType;
    var childNodeType = lastNameNodeType.childNodes;
    console.log(childNodeType)

    var mainContentFirstChild = document.getElementById("main-content").firstChild.innerHTML;
    var mainContentLastChild = document.getElementById("main-content").lastChild.innerHTML;
    console.log(mainContentFirstChild)
    console.log(mainContentLastChild)

    var item = document.querySelector('#lastName');
    var prev = item.previousElementSibling;
    var next = item.nextElementSibling;
    console.log(prev)
    console.log(next)


    var emailParentNode = document.getElementById("email").parentNode.nodeType;
    console.log(emailParentNode)