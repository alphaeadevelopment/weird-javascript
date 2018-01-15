var Person = function (firstname, surname) {
  this.firstname = firstname;
  this.surname = surname;
  return firstname + ' ' + surname;
}

var me = new Person('Graham', 'King');

console.log(me);

var me2 = Person('Graham', 'King');
console.log(me2);
