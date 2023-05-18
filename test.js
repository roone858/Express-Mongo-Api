let sayHello = (name) => {
  console.log("hello from orginal function", name);
};

const orginalFun = sayHello


sayHello = function(name){

console.log("hello from override function",name)

sayHello= orginalFun 
sayHello("mahmoud")
}