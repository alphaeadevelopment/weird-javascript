var obj1 = {
  name: 'obj1',
  me: function () {
    console.log(this.name);
  }
}

var obj2 = {
  name: 'obj2',
}

function printName() {
  console.log(this.name);
}

printName.bind(obj1)();
printName.bind(obj2)();

obj1.me(); // works, 'this' is bound when invoked directly on obj1

setTimeout(obj1.me, 1); // does not work, 'this' is not bound when invoked as callback
setTimeout(obj1.me.bind(obj1), 1); // works as callback only when 'this' is bound manually


console.log(obj1.me);
console.log(printName);
console.log(printName.bind(obj1));
