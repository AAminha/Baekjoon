function solution(s) {
  const array = s.split("");
  const stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if ("[({".includes(array[j])) {
        stack.push(array[j]);
      } else if (stack.length == 0) {
        stack.push(".");
        break;
      } else if (array[j] == "]" && stack.pop() != "[") {
        stack.push(".");
        break;
      } else if (array[j] == ")" && stack.pop() != "(") {
        stack.push(".");
        break;
      } else if (array[j] == "}" && stack.pop() != "{") {
        stack.push(".");
        break;
      }
      //console.log(stack)
    }

    if (stack.length == 0) {
      count++;
    } else {
      stack.length = 0;
    }

    array.push(array.shift());
  }

  return count;
}
