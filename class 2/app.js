let t1 = performance.now();
for (let i = 0; i <=100; i++) {
    let newElement= document.createElement('p');
    newElement.textContent = 'This is para ' +i;
    
    document.body.appendChild(newElement)
}
let t2= performance.now();

console.log('this took ' + (t2-t1)+" ms");
// optimizing a bit

let t3= performance.now();

let myDiv = document.createElement('div');

for (let i = 0; i <=100; i++) {
    let Element= document.createElement('p');
    Element.textContent = 'This is para ' +i;
    
    myDiv.appendChild(Element);
}

document.body.appendChild(myDiv);

let t4= performance.now();

console.log('this took ' +(t4-t3)+" ms");
