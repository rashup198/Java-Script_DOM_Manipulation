setTimeout(function() {
    console.log('third');
}, 2000);

function sync() {
 console.log('first');   
}
sync();
console.log('second');


// promise
let hi=  new Promise(function(resolve , reject){

   setTimeout(function(){
    console.log('im inside promise');
   },5000)
   reject(new Error('Bhai ji Error aaye hai'))

})

hi.then((value)=>{console.log(value)},(Error)=>{console.log('Recived an error')});


// let hi1=  new Promise(function(resolve , reject){

//     setTimeout(function(){
//      console.log('im inside promise2');
//     },3000)
//     resolve(5565);
 
//  })\

let vaada1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("set timeout 1 started");
    },2000)
    resolve(true);
})

vaada1.then(()=>{
    let vaada2= new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("set timeout 2 started");
        },3000)
        resolve('vaada2 resolved')
    })
    return vaada2;
}).then((value)=>{
    console.log(value);
})


async function abcd(){
    return 7;
}

console.log(abcd());



async function utilty(){
let delhiMausan = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Delhi me bahut garmi hai")
    }, 1000);

})

let HydMausan = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Hyderabad is cool")
    }, 5000);

})
  
let dm= delhiMausan;
let hm = HydMausan;

return [dm,hm];
}

console.log(utilty());


async function ut(){
    let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');

    let output = await content.json();
    console.log(output);
}

console.log(ut());


async function helper(){
    
    let option= {
      method: 'POST',
      body: JSON.stringify({
        title: 'Babbar',
        body: 'tagdi body',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }

    let content = await fetch('https://jsonplaceholder.typicode.com/posts', option);

    let response = content.json();
    return response;

}


async function un(){
    let ans=await helper;
    console.log(ans);
}

un();