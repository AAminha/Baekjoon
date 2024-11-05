function solution(topping) {
  let count = 0;
  const person1 = new Map();
  const person2 = new Map();

  topping.forEach((num) => person1.set(num, (person1.get(num) || 0) + 1));

  let isFind = false;
  for (let i = 0; i < topping.length; i++) {
    person1.set(topping[i], person1.get(topping[i]) - 1);
    person2.set(topping[i], (person2.get(topping[i]) || 0) + 1);
    if (person1.get(topping[i]) === 0) person1.delete(topping[i]);

    if (person1.size === person2.size) {
      count++;
      isFind = true;
    } else if (isFind && person1.size != person2.size) {
      break;
    }
  }

  return count;
}
