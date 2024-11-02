function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase();

  // 2단계
  new_id = new_id.replaceAll(/[^a-z0-9-_.]/g, "");

  // 3단계
  new_id = new_id.replaceAll(/[.]{2,}/g, ".");

  // 4단계
  if (new_id.startsWith(".")) new_id = new_id.slice(1);
  if (new_id.endsWith(".")) new_id = new_id.slice(0, -1);

  // 5단계
  if (new_id.length === 0) new_id = "a";

  // 6단계
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  if (new_id.endsWith(".")) new_id = new_id.slice(0, -1);

  // 7단계
  if (new_id.length <= 2) {
    while (new_id.length < 3) {
      new_id += new_id.slice(-1);
    }
  }

  return new_id;
}
