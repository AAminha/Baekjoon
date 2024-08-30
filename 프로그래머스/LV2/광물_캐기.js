function solution(picks, minerals) {
  const mineralType = ["diamond", "iron", "stone"];
  const fatigue = {
    diamond: [1, 1, 1],
    iron: [5, 1, 1],
    stone: [25, 5, 1],
  };

  // 곡괭이 배열 만들기
  const pickArray = [];
  picks.forEach((count, index) => {
    for (let i = 0; i < count; i++) {
      pickArray.push(mineralType[index]);
    }
  });

  // 광물 5개씩 쪼개서 정렬
  let splitMinerals = [];
  for (let i = 0; i < minerals.length; i += 5) {
    const array = minerals.slice(i, i + 5);
    let count = [0, 0, 0];

    array.forEach((item) => {
      for (let j = 0; j < mineralType.length; j++) {
        if (item == mineralType[j]) {
          count[j]++;
          return;
        }
      }
    });

    splitMinerals.push(count);
  }

  splitMinerals = splitMinerals.slice(0, pickArray.length);
  splitMinerals.sort().reverse();

  // 피로도 계산
  let result = 0;
  const min = Math.min(pickArray.length, splitMinerals.length);
  for (let i = 0; i < min; i++) {
    for (let j = 0; j < splitMinerals[i].length; j++) {
      result += fatigue[pickArray[i]][j] * splitMinerals[i][j];
    }
  }

  return result;
}
