function solution(bandage, health, attacks) {
  let hp = health;
  let successSequence = 0;

  let time = 0;
  const finishTime = attacks[attacks.length - 1][0];

  let attackIndex = 0;

  while (time < finishTime) {
    time++;

    // 몬스터에게 공격을 당했다.
    if (time === attacks[attackIndex][0]) {
      hp -= attacks[attackIndex][1];

      // 공격을 받고 체력이 0 이하면 죽는다.
      if (hp <= 0) return -1;

      attackIndex++;
      successSequence = 0;
      continue;
    }

    // 몬스터에게 공격을 당하지 않았다면 체력 회복
    hp += bandage[1];
    successSequence++;

    // 회복을 연속으로 성공했는가
    if (successSequence === bandage[0]) {
      hp += bandage[2];
      successSequence = 0;
    }

    if (hp > health) hp = health;
  }

  return hp;
}
