function foo() {
  var x = 10;
  const y = 3.14;
  //y = 3.4;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}

foo();
