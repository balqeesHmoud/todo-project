
function userName() {
     
    return prompt("please enter your name", "exampil:balqees");
}
function userGender() {
    return prompt("please enter your gender", "male or female");

}

function userAge() {
    let userAge = prompt("please enter your age", "exampil:25")
    if (userAge <= 0) {
        alert("age is less than or equal to zero.")
    }
    return userAge;
}



function welcomingMessage() {
    let welcoming = confirm("skip the welcoming message.")
    if (welcoming==false) {
         if (enteredUserGender == "male") {
            alert("Heloo Mr " + enteredUserName)

        }
        else if (enteredUserGender == "female") {
            alert("Heloo Ms " + enteredUserName)

        }
        else {
            alert("Hello " + enteredUserName)
        }
    }
}


function drinkCoffeAnswer(drinkCoffe){
      drinkCoffe = prompt("Do you drink coffee at morning?", "yes/no")
        if (drinkCoffe === null || drinkCoffe == "") {
            drinkCoffe = "invalid";
        }

     
    return drinkCoffe;
}

function scienceFictionAnswe(scienceFiction){
     scienceFiction = prompt("Do you watching science fiction movies?", "yes/no")      
            if (scienceFiction == null || scienceFiction == "") {
                scienceFiction = "invalid";
            
             }
        

     
    return scienceFiction;
}


function loveCatsAnswe(loveCats){
     loveCats = prompt("Do you love cats?", "yes/no")
        if (loveCats == null || loveCats == "") {
     loveCats = "invalid";

 }
 return loveCats;


}
let enteredUserName = userName();
let enteredUserGender = userGender();
let enteredUserAge = userAge();
welcomingMessage()

let enteredDrinkCoffeAnswer = drinkCoffeAnswer();
let enteredScienceFictionAnswe = scienceFictionAnswe();
let enteredLoveCatsAnswe = loveCatsAnswe();


function userAnswar(){
    
      let userArr =  [enteredDrinkCoffeAnswer, enteredScienceFictionAnswe, enteredLoveCatsAnswe]; 
      let userAnswar=[];
    for(let i=0; i<userArr.length; i++){
        userAnswar.push(userArr[i]);
}
return console.log("user answars: "+userAnswar);

}




userAnswar();




