function solution(s, skip, index) {
  const skipArr = Array.from(skip, (item) => item.charCodeAt());
  let result = "";

  const shiftChar = (char, index) => {
    let newChar = char;

    while (index > 0) {
      newChar++;
      if (newChar > 122) newChar -= 26;
      if (!skipArr.includes(newChar)) index--;
    }

    return newChar;
  };

  for (const item of s) {
    const newChar = shiftChar(item.charCodeAt(), index);
    result += String.fromCharCode(newChar);
  }

  return result;
}
