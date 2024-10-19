function solution(progresses, speeds) {
  const progressesCount = progresses.length;
  const time = Array.from({ length: progressesCount }, () => 0);
  const result = [];

  for (let i = 0; i < progressesCount; i++) {
    time[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }

  let firstFeatureTime = 0;
  let count = 0;

  for (let i = 0; i < progressesCount; i++) {
    if (firstFeatureTime < time[i]) {
      result.push(count);
      firstFeatureTime = time[i];
      count = 1;
    } else {
      count++;
    }
  }
  result.push(count);

  return result.slice(1);
}
