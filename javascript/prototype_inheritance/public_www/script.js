window.onload=function(){
    let HelloWorld = function(){
        this.name = "World";
        this.message = "Hello";
    }

    let helloInstance = new HelloWorld();

    HelloWorld.prototype.name ="Jaska";
    HelloWorld.prototype.message2 ="Goodbye";

    console.log(helloInstance.name);
    console.log(helloInstance.message);
    console.log("HelloInstance does not have message2 variable in the prototype, but HelloWorld does.");
    console.log(helloInstance.message2);
    console.log(helloInstance);

    console.log("Now for some function inheritance");
    let functionTest ={
        myVar:10,
        myFunction: function(){
            return this.myVar + 10;
        }
    }

    console.log("Let's see the function in action. The variable this refers to current object");
    console.log(functionTest.myFunction());

    let inheritanceObject = Object.create(functionTest);
    let anotherObject = Object.create(functionTest);
    inheritanceObject.myVar = 15;
    anotherObject.myVar = 100;
    console.log("We created a new object based on functionTest-object so we");
    console.log(inheritanceObject.myFunction())
    console.log(anotherObject.myFunction());
    console.log(inheritanceObject);
    console.log(anotherObject);
    functionTest.myVar = 50;
    console.log("Look at the differences in protoypes. As there are none the");
    console.log(inheritanceObject);
    console.log(anotherObject);
    console.log(inheritanceObject.myFunction())
    console.log(anotherObject.myFunction());

    console.log("on Function prototypes");

    function doSomething(){};
    console.log("Here is the prototype chain of doSomething()");
    console.log(doSomething.prototype);

    console.log("Let's add to the function prototype!");
    doSomething.prototype.myVar = "This is my function prototype variable";
    console.log("Here is the prototype chain of doSomething() again");
    console.log(doSomething.prototype);

    console.log("Let's instance another function from doSomething()");
    var doMore = new doSomething();
    doMore.prop="Let's variable again."
    console.log("Here is the prototype chain of doMore()");
    console.log(doMore);
    console.log(doMore.prop);
    console.log(doMore.myVar);
    doSomething.prototype.myVar="changed my var";
    console.log(doMore.myVar);
}

class MyClass{
    constructor(){
        this.myVar = 10;
    }
    myFunction(){
        return this.myVar;
    }
}