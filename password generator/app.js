const lowercaseletters="abcdefghijklmnopqrstuvwxyz";
const uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="1234567890";
const Symbol="!@#$%^&*{}[]:;<>?/+=-~";

const lengthEl = document.getElementById("length");
const lowercaseEl= document.getElementById("lowercase");
const uppercaseEl= document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener("click",function()
{

    const length = lengthEl.value;
    let characters="";
    let password="";

    if (lowercaseEl.checked){
        characters += lowercaseletters;
    }
    if(uppercaseEl.checked){
        characters += uppercaseletters;
    }
    if(numbersEl.checked){
        characters += numbers;
    }
    if(symbolsEl.checked){
        characters += Symbol;
    }
    for (let i=0; i < length;i++){
        password += characters.charAt(Math.floor(Math.random()* characters.length));

    }
    passwordel.value=password;
});