function number(start, end) {
  for (let index = start; index <= end; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      console.log("divisbleTo 5 and 3");
    } else if (index % 3 == 0) {
      console.log("divisibleTo 3");
    } else if (index % 5 == 0) {
      console.log("divisibleTo 5");
    } else {
      console.log(index);
    }
  }
}
function greatestCommon(numA, numB) {
  let largerNumber = 0;
  let result;

  //checking which one is larger
  if (numA > numB) {
    largerNumber = numA;
  } else {
    largerNumber = numB;
  }

  for (let i = 1; i <= largerNumber; i++) {
    if (numA % i == 0 && numB % i == 0) {
      console.log("found common");
      result = i;
    }
  }
  console.log(result);
}

//isPrime

function checkPrime(number) {
  for (let step = 2; step < number; step++) {
    if (number % step == 0) {
      return false;
    }
    console.log(step);
  }
  return true;
}

function currentTime() {
  // 1/1/1970 to now
  const HOUR = Date.now() / 60000 / 24;
}
function groupB() {
  let dateNow = Date.now();
  let sec = Math.floor(dateNow / 1000);
  let min = Math.floor(sec / 60);
  let hour = Math.floor(min / 60);
  let date = Math.floor(hour / 24);
  let month = Math.floor(date / 30);
  let year = Math.floor(month / 12);
  console.log({ dateNow, sec, min, hour, date, month, year });
}
groupB();
