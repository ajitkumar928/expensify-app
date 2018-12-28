const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            name:'Ajit Kumar',
            age:24
        });
       // reject('Something caught up');
    },5000);
});

console.log('before');

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error:',error);
});

console.log('after');