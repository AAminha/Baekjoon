function solution(s) {
  let count = 0;
  let deleted = 0;

  while (s !== "1") {
    const new_s = s.replaceAll("0", "");
    deleted += s.length - new_s.length;
    count++;

    s = new_s.length.toString(2);
  }

  return [count, deleted];
}
