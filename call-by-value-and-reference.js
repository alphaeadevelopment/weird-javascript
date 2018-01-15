(function () {

  function buildFunctionsCallByValue() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
      arr.push(
        (function (j) {
          return function () {
            console.log(j);
          }
        })(i));
    }
    return arr;
  }

  function buildFunctionsCallByReference() {
    var arr = [];
    var obj = {};
    for (var i = 0; i < 3; i++) {
      obj.val = i;
      arr.push(
        (function (o) {
          return function () {
            console.log(o.val);
          }
        })(obj));
    }
    return arr;
  }

  console.log('call by value');
  var fs = buildFunctionsCallByValue();
  fs[0]();
  fs[1]();
  fs[2]();

  console.log('call by reference');
  var fs = buildFunctionsCallByReference();
  fs[0]();
  fs[1]();
  fs[2]();

})();
