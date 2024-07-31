// JavaScript enables interactive and dynamic features on websites, such as animations, form validation, and content updates without refreshing the page.
function showmsg(){
    alert("Hello World");
}
showmsg();
function something(){
    var userAge=18;
    var userName="Suresh";
    console.log(userAge);
    console.log(userName);
}
/* this is a 
multi-line comment */
function fun(){
    var x=15,y=10;
    console.log("Sum = ",x+y);
    console.log("multiplication = ",x*y);
    console.log("Division = ",x/y);
    console.log("subtraction = ",x-y);
}

function fun2(){
    var s= "Sohil"
    console.log(s);
    var menuItems = ["Dosa", "Idly", "VadaPav", "Cheese"];
    console.log(menuItems);
}
function greet(x){
    return console.log("Hello ",x," Welcome to our Shop!!");
}

function temperature(x){
    if(x>30){
        return console.log("It will be hot today");
    }
    else{
        return console.log("It will not be too hot today");
    }
}

function loop(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    x=5;
    y='5';
    console.log(x==y);
    console.log(x===y);
}