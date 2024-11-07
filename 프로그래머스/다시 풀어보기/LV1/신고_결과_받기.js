const reportObj = {};
const result = new Array(id_list.length).fill(0);
id_list.forEach((id, index) => (reportObj[id] = { index, reporter: [] }));

report.forEach((element) => {
  const [reporter, user] = element.split(" ");
  if (!reportObj[user].reporter.includes(reporter))
    reportObj[user].reporter.push(reporter);
});

const stopArr = Object.values(reportObj).forEach((user) => {
  if (user.reporter.length >= k) {
    user.reporter.forEach((reporter) => result[reportObj[reporter].index]++);
  }
});

return result;

// 코드 진짜 마음에 안 든다.
// 다른 사람 코드 봤다가 반성만 잔뜩 하는 중
// 지금 다시 풀면 그대로 따라 할 것 같으니 잊을 때 되면 다시 풀거다.
