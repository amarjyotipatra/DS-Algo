function runProgram(input) {
  var palindrome = "";
  for (i = input.length - 1; i >= 0; i--) {
    palindrome += input[i];
  }
  var isPalindrome = false;
  for (var j = 0; j < palindrome.length; j++) {
    if (palindrome[j] == input[j]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }
  if (isPalindrome == true) console.log("Yes");
  else console.log("No");
}

if (process.env.USERNAME === "user") {
  runProgram(`1221`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}