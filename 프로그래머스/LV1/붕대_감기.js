function solution(bandage, health, attacks) {
  const attacks_length = attacks.length;
  let time = 1;
  let current_health = health;
  let next_attack_index = 0;
  let bandage_sequence = 0;

  while (current_health > 0 && next_attack_index < attacks_length) {
    if (time === attacks[next_attack_index][0]) {
      current_health -= attacks[next_attack_index][1];
      bandage_sequence = 0;
      next_attack_index++;
    } else {
      current_health += bandage[1];
      bandage_sequence++;

      if (bandage_sequence === bandage[0]) {
        current_health += bandage[2];
        bandage_sequence = 0;
      }

      if (current_health > health) current_health = health;
    }
    time++;
  }

  return current_health > 0 ? current_health : -1;
}
