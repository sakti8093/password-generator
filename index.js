const numbers='1234567890'
const lowerCaseCharacter = 'abcdefghijklmbopqrstuvwxyz'
const upperCaseCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const symbols = '@!$&*'
let requireCharacter = ""
let requiredLength = document.getElementById('range').innerText;

document.getElementById('charctersLength').addEventListener('change',()=>{
    let val = document.getElementById('charctersLength').value
    document.getElementById('range').innerText = val;
    requiredLength = val;
})


let upperCase  = false;
let lowerCase = false;
let includeNumbers = false;
let includeSymbols = false;

// for changing strength color 
let box1 = document.querySelector(".box1")
console.log(box1,"vx");
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")

const arr = [upperCase,lowerCase,includeNumbers,includeSymbols];

document.getElementById('addUppercase').addEventListener('click',(e)=>{
    upperCase = e.target.checked;
})
document.getElementById('addLowercase').addEventListener('click',(e)=>{
    lowerCase = e.target.checked;
})
document.getElementById('addNumber').addEventListener('click',(e)=>{
    includeNumbers = e.target.checked;
})
document.getElementById('addSymbol').addEventListener('click',(e)=>{
    includeSymbols = e.target.checked;
})

document.getElementById('btn').addEventListener('click',(e)=>{
    let password = "";
    let count = 0;
    box1.style.backgroundColor ="#18171F"
    box2.style.backgroundColor ="#18171F"
    box3.style.backgroundColor ="#18171F"
    box4.style.backgroundColor ="#18171F"

        if(!upperCase && !lowerCase && !includeNumbers && !includeSymbols){
            alert("Atleast select one check box");
        }

        if(upperCase){
          const index =  randomIndex(upperCaseCharacter.length)
          requireCharacter = requireCharacter + upperCaseCharacter
          password = password + upperCaseCharacter[index];
          count++;
        }

        if(lowerCase){
            const index =  randomIndex(lowerCaseCharacter.length)
            requireCharacter = requireCharacter + lowerCaseCharacter
            password = password + lowerCaseCharacter[index];
            count++;
        }

        if(includeNumbers){
            const index =  randomIndex(numbers.length)
            requireCharacter = requireCharacter + numbers
            password = password + numbers[index];
            count++;
        }
        if(includeSymbols){
            const index =  randomIndex(symbols.length)
            requireCharacter = requireCharacter + symbols
            password = password + symbols[index];
            count++;
        }

        for(let i=password.length;i<requiredLength;i++){
            const index =  randomIndex(requireCharacter.length)
            password = password + requireCharacter[index];
        }

        if(count === 4 ){
            box1.style.backgroundColor ="#A4FFAF"
            box2.style.backgroundColor ="#A4FFAF"
            box3.style.backgroundColor ="#A4FFAF"
            box4.style.backgroundColor ="#A4FFAF"
        }else if(count === 3) {
            box1.style.backgroundColor ="#A4FFAF"
            box2.style.backgroundColor ="#A4FFAF"
            box3.style.backgroundColor ="#A4FFAF"
        }else if(count === 2){
            box1.style.backgroundColor ="#A4FFAF"
            box2.style.backgroundColor ="#A4FFAF"
        }else if(count===1){
            box1.style.backgroundColor ="#A4FFAF"
        }

         document.getElementById('pass').value = password
})

const randomIndex = (length )=>{
    return Math.floor(Math.random() * length);
}

