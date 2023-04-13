console.log("Hello World!");

function Global() {
  var a = 5;
  var arr = [];
  for (let i = 0; i < a; i++) {
    arr.push(i);
  }
  arr.forEach((array) => console.log(array));
}

Global();
