for (var i = 0; i < 3; i++) {
  var x = i;
  console.log(x);
}

console.log('final', x);

for (var i2 = 0; i2 < 3; i2++) {
  let x2 = i2;
  console.log(x);
}
console.log('final', x2); // Reference Error
