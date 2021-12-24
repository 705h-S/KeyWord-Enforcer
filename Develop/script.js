// Have a function if Generate btn is clicked then a prompt window asking to make a password pops up
// create three arrays. One containing the alphabit. other contatining numbers 0-9. and the third containing special characters. 
// ask user to confirm criteria. If true  move pertaing array to next step. if false array is ignored. if all false exit.
// create a variable of length minnimum of 8 characters and maximum of 128.
// create alert, alerting user to choose a valid character length if user input doesn't === >=8 or <=128
//when valid input is true propmt asking user if they'd like upper or lowercase in the password
// after all criteria has been subbmited 
// have a for loop with function that has system select random characters from true arrays with users desired length. 
// output product onto text box. 


// Assignment Code
var generateBtn = document.querySelector("#generate");
var alpab = [' a b c d e f g h i j k l m n o p q r s t u v w x y z'];
var numbs = [ 0,1,2,3,4,5,6,7,9 ];
var Spchar = [ ' ! " # $ % & ( ) * + , - . / : ; < = > ? @ [ \\ ] \' ^ `{ | } ~ '];


// Write password to the #password input
function writePassword() {
  confirm(" Would you like a reliable password?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
