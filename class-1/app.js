
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}

let a = document.querySelectorAll('a');
let thirdLink= a[2];

thirdLink.addEventListener('click', function(event){
        event.preventDefault();
        console.log('maza tho bahut aaya');
});

let myDiv = document.createElement('div');
function para(event){
    console.log(' para' +event.target.textContent);
};
myDiv.addEventListener('click', para);

for (let i = 0; i <100; i++) {
    let newElement= document.createElement('p');
    newElement.textContent='This is para' + i;
    
    

    myDiv.appendChild(newElement)
}
document.body.appendChild(myDiv)