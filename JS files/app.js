var userName=prompt("please enter your name","exampil:balqees")
var userGender=prompt("please enter your gender","male or female")
var userAge=prompt("please enter your age","exampil:25")
if(userAge<=0){
    alert("age is less than or equal to zero.")
}
var welcoming=confirm("skip the welcoming message.")
if(welcoming==true){

}
else{
    if (userGender == "male"){
        alert("Heloo Mr "+userName)

    }
   else if (userGender == "female"){
    alert("Heloo Ms "+userName)

    }
    else{
        alert("Hello "+userName)
    }
}
