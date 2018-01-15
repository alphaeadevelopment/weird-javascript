(function () {

  var names = ['Graham', 'Becky', 'Edward', 'Thomas', 'Charlie'];

  var sayHi = function (name) {
    console.log('Hi ' + name);
  }

  function loop(names, func) {
    if (names.length == 0) return;
    func(names[0]);
    loop(names.slice(1), func);
  }

  loop(names, sayHi);

})();
