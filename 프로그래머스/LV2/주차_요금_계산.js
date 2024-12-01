function solution(fees, records) {
  // 기본시간(분), 기본요금(원), 단위시간(분), 단위요금(원)
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  // 출입기록 정리하기
  const car = {};
  records.forEach((record) => {
    const [time, number, type] = record.split(" ");
    if (!car[number]) car[number] = [];
    car[number].push(changeToMin(time));
  });

  for (const number in car) {
    if (car[number].length % 2 !== 0) car[number].push(changeToMin("23:59"));
    let time = 0;

    // 각 차량의 주차 시간 계산하기
    while (car[number].length > 0) {
      const recordIn = car[number].shift();
      const recordOut = car[number].shift();
      time += recordOut - recordIn;
    }

    // 각 차량의 요금 계산하기
    let sum = 0;
    if (time <= defaultTime) sum = defaultFee;
    else
      sum = defaultFee + Math.ceil((time - defaultTime) / unitTime) * unitFee;
    car[number] = sum;
  }

  // 결과
  return Object.keys(car)
    .sort()
    .map((number) => car[number]);
}

function changeToMin(time) {
  const [hour, min] = time.split(":").map(Number);
  return hour * 60 + min;
}
