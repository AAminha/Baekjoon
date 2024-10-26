function solution(today, terms, privacies) {
  today = new Date(today.replaceAll(".", "-"));
  const result = [];

  const termsObj = {};
  terms = terms.map((term) => {
    const data = term.split(" ");
    termsObj[data[0]] = Number(data[1]);
  });

  for (let i = 0; i < privacies.length; i++) {
    const info = privacies[i].split(" ");
    info[0] = new Date(info[0].replaceAll(".", "-"));

    info[0].setMonth(info[0].getMonth() + termsObj[info[1]]);
    info[0].setDate(info[0].getDate() - 1);

    if (today > info[0]) {
      result.push(i + 1);
    }
  }

  return result;
}
