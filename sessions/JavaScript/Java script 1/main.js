const email     = document.querySelector("#email");
const password  = document.querySelector("#password");
const submitBTN = document.querySelector("#SubmitBTN");
const msg       = document.querySelector("#msg");

let emailReceived = "ridvan@eduongo.com";
let passReceived  = "Fma#2024";

submitBTN.addEventListener('click', function(){
    console.log(email.value);
    if(email.value == emailReceived && password.value == passReceived ){
        msg.style.color = "green";
       msg.textContent = 'correct';
    }
    else{
        msg.style.color = "red";
         msg.textContent = 'incorrect'
    }
});




