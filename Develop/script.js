// Assignment Code
var generateBtn = document.querySelector("#generate");

var options = ["A", "B", "c"]

// Write password to the #password input
function generatePassword (){
  var passwordLength = prompt("Please Choose Length");
  var speicalCharacters = prompt("Do you want to add special characters")
  var uppercase = prompt("do you want uppercase letters?")
  console.log (passwordLength)
  console.log (speicalCharacters, uppercase)
}
function writePassword() {
  var password = generatePassword();
  password = function(){
    "ashdgahsgdajgfajs"
  }, "asasdasdasda"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log ("test")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log ("James Assignment")