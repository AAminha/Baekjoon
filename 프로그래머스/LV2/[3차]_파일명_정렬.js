function solution(files) {
  const splitFiles = files.map(splitPart);
  splitFiles.sort((a, b) => {
    const headA = a[0].toLowerCase();
    const headB = b[0].toLowerCase();
    if (headA !== headB) return headA.localeCompare(headB);

    const numberA = Number(a[1]);
    const numberB = Number(b[1]);
    if (numberA !== numberB) return numberA - numberB;

    return 1;
  });

  return splitFiles.map((file) => file.join(""));
}

function splitPart(file) {
  const result = [];
  let index = 0;

  for (let i = 0; i < file.length; i++) {
    if (!isNaN(Number(file[i])) && file[i] !== " ") {
      result.push(file.slice(0, i));
      index = i;
      break;
    }
  }

  for (let i = index; i < file.length; i++) {
    if (isNaN(Number(file[i])) || file[i] === " ") {
      result.push(file.slice(index, i));
      index = i;
      break;
    }
  }

  result.push(file.slice(index));
  return result;
}
