function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) return number + 1;

    let bit = number.toString(2);
    const index = bit.lastIndexOf("0");
    if (index < 0) {
      bit = bit.replace("1", "10");
    } else {
      bit = bit.slice(0, index) + "10" + bit.slice(index + 2);
    }
    return parseInt(bit, 2);
  });
}
