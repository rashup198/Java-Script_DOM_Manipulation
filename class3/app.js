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