function fetchData(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=>{
            console.log(response)
            resolve(response.json()) 
        })
 });
}
fetchData()
  .then(data=>console.log(data))
  .catch(error=>console.error(error));
  
  const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const condition=math.radom()<0.8
        if(condition){
            resolve("Success!");
        }
        else{
            reject("Error: Something went wrong!")
        }
    },2000);
});
console.log("START")
myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('END')
});

function fetchData(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=>{
            console.log(response)
            resolve(response.json()) 
        })
 });
}
fetchData()
  .then(data=>console.log(data))
  .catch(error=>console.error(error));
  