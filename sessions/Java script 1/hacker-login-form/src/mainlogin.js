const email     = document.querySelector("#email");
const password  = document.querySelector("#password");
const submitBTN = document.querySelector("#SubmitBTN");


let emailReceived = "jramaj20@gmail.com";
let passReceived  = "123";

submitBTN.addEventListener('click', function(){
   
    if(email.value == emailReceived && password.value == passReceived ){
     alert('CORRECT')
    }
    else{
        alert('INCORRECT')
    }
});