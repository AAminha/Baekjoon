function solution(n, w, num) {
  // 마지막 상자의 위치 찾기
  const [last_floor, last_room] = find(n, w);

  // num의 위치 찾기
  const [cur_floor, cur_room] = find(num, w);

  // 마지막 상자의 층이 홀수면 그대로
  if (last_floor % 2 !== 0) {
    if (last_room < cur_room) {
      return last_floor - cur_floor;
    } else {
      return last_floor - cur_floor + 1;
    }
  } else {
    if (last_room > cur_room) {
      return last_floor - cur_floor;
    } else {
      return last_floor - cur_floor + 1;
    }
  }
}

function find(n, w) {
  const floor = Math.floor((n - 1) / w) + 1;
  let room = n % w;
  if (room === 0) room = w;
  if (floor % 2 === 0) room = w + 1 - room;

  return [floor, room];
}
