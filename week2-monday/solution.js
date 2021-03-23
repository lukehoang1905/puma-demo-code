//Assignment 1

function assignment1() {
  console.log("Area of cirle");
  var pi = 3.14;
  console.log(typeof pi);
  var radius = 5;
  console.log(typeof radius);
  var area = radius ** 2 * pi;
  var resultString = `This is the pi: ${pi} , radius: ${radius} (m), area: ${area}`;
  console.log(resultString);
  return;
}
// assignment1()

//assignment 2
function assignment2() {
  console.log(typeof 1);
  var test = typeof (1 + "a");

  console.log(test);
}
// assignment2();

//assignment4

// parameter, argument
function posOrNeg(input) {
  console.log(input);
  if (input == 0) {
    console.log("input is zero");
  } else if (input < 0) {
    console.log("input is Neg");
  } else {
    console.log("input is Pos");
  }
  return;
}
// posOrNeg(312124432543556);

function bigOrSmall(a, b, c) {
  if (a == b || a == c || b == c) {
    console.log("number hava to be unique");
    return;
  }
  if (a <= b && a <= c) {
    console.log("a is smallest number");
  } else if (b < a && b < c) {
    console.log("b is the smallest number");
  } else if (c < a && c < b) {
    console.log("c is the smallest number");
  }
  if (a >= b && a >= c) {
    console.log("a is biggest number");
  } else if (b > a && b > c) {
    console.log("b is the biggest number");
  } else if (c > a && c > b) {
    console.log("c is the biggest number");
  }
}
// bigOrSmall(0, 0, 6);

//Assignment 4
function assignment5(start, end) {
  console.log(start);
  console.log(end);
  for (var step = start; step < end; step++) {
    console.log(step);
  }
}
// assignment5(123, 400);

function assignment6(start, end) {
  var result = 0;
  console.log("before", result);

  for (var step = start; step < end; step++) {
    result += step;
    console.log("during", result);
  }
  console.log("after", result);
}
// assignment6(100, 110);

function assignment7(number) {
  var result = 0;
  while (number) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  console.log(result);
}
// assignment7(1040);

//functions name as asrgunemtn
function assignment8(name) {
  console.log("the first solution is" + name + "somehting else");
  console.log(`the second solution is ${name} something else`);
}
// assignment8("tuan");

//
// var a = 111;
// var b = 999;
// var temp;

// // temp = a;
// // a = b;
// // b = temp;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("a", a, "b", b);

// print out random number betwwen 0 - 1

var res = Math.floor(Math.random() * 10);
console.log(res);
