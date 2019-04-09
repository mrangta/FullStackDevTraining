window.onload = function(){
    console.log("-----------------------------");
    console.log("Simple sum currying:");
    console.log(sum(2)(4));
    console.log(sum(2));
    console.log("-----------------------------");
    console.log("Synchronous Function currying:");
    console.log(timer(syncFunc)(200));
    console.log("-----------------------------");
    console.log("Asynchronous Function currying:");
    console.log(timer(asyncFunc)(400).then(response=>console.log(response)));
}
const sum = x => y => x + y

const timer = (timerfunc) => (...args) =>{
    const start = Date.now();
    const value = timerfunc(...args);
    if (value && typeof value.then === 'function'){
        return value.then(value=>
            ({timerspan: Date.now()-start, value}))
    } else {
        return ({timerspan:Date.now()-start,value})
    }
}

const syncFunc = x => x*2;
const asyncFunc = x => new Promise (resolve =>{
    setTimeout(()=>{
        console.log("Timeout done!");
        return resolve(x*2);
    },5000)
});