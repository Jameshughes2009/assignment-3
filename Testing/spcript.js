
const passwordBox = document.getElementById("password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";

const symbol = "@#!$%^&*())_{}[]-+=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    var passwordLength = prompt("You password will be as least 8 character")
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * upperCase.length)];
  password += number[Math.floor(Math.random() * upperCase.length)];
  password += symbol[Math.floor(Math.random() * upperCase.length)]
  console.log(passwordLength)
  console.log(allChars)

  while(length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password; 
  console.log(password)
}
