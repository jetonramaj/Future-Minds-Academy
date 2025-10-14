

const spring = document.querySelector("#spring");
const summer = document.querySelector("#summer");
const autumn = document.querySelector("#autumn");
const winter = document.querySelector("#winter");



const photoCont = document.querySelector("#photoCont");

spring.addEventListener('click', function(){
    photoCont.innerHTML = '<img src="images/spring.png" alt="">';
});
summer.addEventListener('click', function(){
    photoCont.innerHTML = '<img src="images/summer.png" alt="">';
});
autumn.addEventListener('click', function(){
    photoCont.innerHTML = '<img src="images/autumn.png" alt="">';
});
winter.addEventListener('click', function(){
    photoCont.innerHTML = '<img src="images/winter.png" alt="">';
});

photoCont.addEventListener('click', function(){
    photoCont.innerHTML = `<h1>Please choose an option</h1>`
})