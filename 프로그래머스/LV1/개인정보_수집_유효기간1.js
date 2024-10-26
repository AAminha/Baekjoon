function solution(today, terms, privacies) {
  const termObj = {};
  const result = [];

  today = convertDate(today.split(".").map(Number));
  terms.forEach((term) => {
    const data = term.split(" ");
    termObj[data[0]] = Number(data[1]);
  });

  for (let i = 0; i < privacies.length; i++) {
    const data = privacies[i].split(" ");
    const dateNum =
      convertDate(data[0].split(".").map(Number)) + termObj[data[1]] * 28 - 1;

    if (today > dateNum) {
      result.push(i + 1);
    }
  }

  return result;
}

function convertDate(dateArr) {
  const [year, month, date] = dateArr;
  return date + month * 28 + year * 28 * 12;
}
