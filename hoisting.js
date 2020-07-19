hello();
// helloVar(); -- TypeError: helloVar is not a function - first compiler pass reads declarations and functions but not assignments

function hello() {
    console.log("Hi!");
}
var helloVar = hello;

helloVar();