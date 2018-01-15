(function () {

  // demonstrating that callbacks aren't asynchronous - they are invoked only when the event queue is empty
  var sayHi = function () {
    console.log('Hi');
  }

  var countToFive = function () {
    // wait 1sec x 5
    for (var i = 1; i <= 5; i++) {
      var ms = 1000 + new Date().getTime();
      console.clear();
      console.log(i);
      while (new Date() < ms) { }
    }
  }

  console.log('say Hi after 3s')
  setTimeout(sayHi, 3000);
  console.log('count to 5');
  countToFive();

})();
