function solution(order) {
  let container = 1;
  const subContainer = [];

  let currentIndex = 0;
  let result = 0;

  while (currentIndex < order.length) {
    if (container <= order[currentIndex]) {
      // 컨테이너에 상자가 있을 경우
      while (container < order[currentIndex]) {
        subContainer.push(container);
        container++;
      }

      currentIndex++;
      container++;
      result++;
    } else {
      const box = subContainer.pop();

      if (box === order[currentIndex]) {
        // 보조 컨테이너에서 꺼낼 수 있는 경우
        currentIndex++;
        result++;
      } else {
        // 보조 컨테이너에서 꺼낼 수 없는 경우
        return result;
      }
    }
  }

  return result;
}
