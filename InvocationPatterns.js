//THE METHOD INVOCATION PATTERN

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.increment();
console.log(myObject.value); // 1



// THE FUNCTION INVOCATION PATTERN
// When a function is not the property of an object, then it is invoked as a function
// this is bound to the global object

myObject.double = function () {
    var that = this; // Workaround.
    var helper = function () {
        that.value = add(that.value, that.value);
    };
    helper(); // Invoke helper as a function.
};

function add(left, right) {
    console.log(`add method invoked with ` + arguments.length + ` args`)
    if (typeof left !== 'number' || typeof right !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return left + right;
}
// Invoke double as a method.
myObject.double();
console.log(myObject.value);



// THE CONSTRUCTOR INVOCATION PATTERN
// If a function is invoked with the new prefix, then a new object will be created with a
// hidden link to the value of the function’s prototype member, and this will be bound
// to that new object.

// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function (string) {
    this.status = string;
};
// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function () {
    return this.status;
};
// Make an instance of Quo.
var myQuo = new Quo("confused");
console.log(myQuo.get_status()); // confused



// THE Apply Invocation PATTERN
// The apply method takes two parameters. The first is the value that should be bound to this. 
// The second is an array of parameters.

var array = [3, 4, 5];
var sum = add.apply(null, array); // sum is 7
console.log(sum);
// Make an object with a status member.
var statusObject = {
    status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
var status = Quo.prototype.get_status.apply(statusObject);
// status is 'A-OK'
console.log(status);