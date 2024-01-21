// Assignment Code
var generateBtn = document.querySelector("#generate");
const length = 12;

// Write password to the #password input
function generatePassword (){
  var passwordLength = prompt("Please choose a length of at least  8")
  if (!passwordLength < 0) {
    return;
  }
  var speicalCharacters = prompt("Do you want to add special characters")
  var uppercase = prompt("do you want uppercase letters232?")
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