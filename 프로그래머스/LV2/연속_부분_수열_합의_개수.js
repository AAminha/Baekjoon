function solution(elements) {
  const elementsSum = elements.reduce((sum, cur) => sum + cur, 0);
  const result = new Set([elementsSum]);

  for (let length = 1; length <= Math.ceil(elements.length / 2); length++) {
    for (let startIndex = 0; startIndex < elements.length; startIndex++) {
      let sum = 0;
      for (let i = 0; i < length; i++) {
        let index = startIndex + i;
        if (index >= elements.length) index -= elements.length;
        sum += elements[index];
      }
      result.add(sum);
      result.add(elementsSum - sum);
    }
  }
  return result.size;
}
