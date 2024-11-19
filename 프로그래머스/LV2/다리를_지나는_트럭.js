function solution(bridge_length, weight, truck_weights) {
  const bridge = [];
  let sum_bridge = 0;
  let time = 0;
  let truck_index = 0;

  while (truck_index < truck_weights.length) {
    time++;
    // 다 건넌 트럭이 있는가
    if (bridge.length === bridge_length) {
      const complete_truck = bridge.shift();
      sum_bridge -= complete_truck;
    }

    // 트럭이 지금 건널 수 있는가
    const current_truck = truck_weights[truck_index];
    if (sum_bridge + current_truck <= weight) {
      bridge.push(current_truck);
      sum_bridge += current_truck;
      truck_index++;
    } else {
      bridge.push(0);
    }
  }

  return time + bridge_length;
}
