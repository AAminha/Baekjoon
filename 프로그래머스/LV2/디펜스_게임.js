function solution(n, k, enemy) {
  const pass = []; // 무적권으로 넘길 라운드의 적의 수
  let count = 0; // 직접 처리해야 하는 적의 수

  for (let i = 0; i < enemy.length; i++) {
    // 이번 라운드 적의 수를 pass에 넣기
    append(pass, enemy[i]);

    // pass의 길이가 k를 넘어가면 제일 작은 적의 수 반환 + count에 더하기
    if (pass.length > k) {
      const en = pop(pass);
      count += en;
    }

    if (count > n) return i;
  }

  return enemy.length;
}

// pass의 제일 앞은 제일 작슨 수가 위치해야 함 (최소 이진 트리)
function append(array, num) {
  // 제일 꼬리칸에 숫자 추가. 부모보다 크거나 같을 때까지 계속 비교 & 이동
  array.push(num);

  let currentIndex = array.length - 1;
  while (currentIndex > 0) {
    const parentIndex = Math.floor((currentIndex - 1) / 2);
    if (array[currentIndex] >= array[parentIndex]) return;

    const temp = array[currentIndex];
    array[currentIndex] = array[parentIndex];
    array[parentIndex] = temp;

    currentIndex = parentIndex;
  }
  return;
}

function pop(array) {
  // 제일 앞 자리 반환
  const result = array.shift();

  // 제일 마지막 요소를 pop하여 앞에 추가 & 정렬
  if (array.length > 1) {
    const last = array.pop();
    array.unshift(last);

    let currentIndex = 0;
    while (currentIndex < array.length) {
      const rightIndex = (currentIndex + 1) * 2;
      const leftIndex = rightIndex - 1;

      if (leftIndex >= array.length) break;

      const node = [array[currentIndex], -1];
      // 왼쪽과 비교
      if (node[0] > array[leftIndex]) {
        node[0] = array[leftIndex];
        node[1] = leftIndex;
      }

      // 오른쪽과 비교
      if (rightIndex < array.length && node[0] > array[rightIndex]) {
        node[0] = array[rightIndex];
        node[1] = rightIndex;
      }

      // 자식이 작으면 제일 작은 자식과 위치 변경
      if (node[0] !== array[currentIndex]) {
        const temp = array[currentIndex];
        array[currentIndex] = array[node[1]];
        array[node[1]] = temp;
        currentIndex = node[1];
      } else {
        break;
      }
    }
  }

  return result;
}
