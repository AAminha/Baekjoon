function solution(queue1, queue2) {
  let queue1_start = 0;
  let queue2_start = 0;

  let queue1_sum = 0;
  let queue2_sum = 0;

  const limit = queue1.length + queue2.length;
  let count = 0;

  // 각 큐의 합 구하기
  for (let i = 0; i < queue1.length; i++) {
    queue1_sum += queue1[i];
  }
  for (let i = 0; i < queue2.length; i++) {
    queue2_sum += queue2[i];
  }

  while (queue1_sum != queue2_sum) {
    if (queue1_start > limit || queue2_start > limit) {
      count = -1;
      break;
    }

    count++;

    if (queue1_sum < queue2_sum) {
      queue1.push(queue2[queue2_start]);
      queue1_sum += queue2[queue2_start];
      queue2_sum -= queue2[queue2_start];
      queue2_start++;
    } else {
      queue2.push(queue1[queue1_start]);
      queue2_sum += queue1[queue1_start];
      queue1_sum -= queue1[queue1_start];
      queue1_start++;
    }
  }

  return count;
}
