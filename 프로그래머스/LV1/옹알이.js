function solution(babbling) {
  let count = 0;
  const baby = new Set(["aya", "ye", "woo", "ma"]);

  for (const ba of babbling) {
    let sub = "";
    const check = [];

    for (let i = 0; i < ba.length; i++) {
      sub += ba[i];
      if (!baby.has(sub)) continue;
      if (check[check.length - 1] === sub) break;

      check.push(sub);
      sub = "";
    }

    if (sub === "") {
      count++;
    }
  }

  return count;
}
