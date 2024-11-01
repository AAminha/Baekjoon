function solution(survey, choices) {
  const types = ["RT", "CF", "JM", "AN"];
  const score = {};
  let result = "";

  types.forEach((type) => {
    type.split("").forEach((type) => (score[type] = 0));
  });

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] < 4) {
      score[survey[i][0]] = score[survey[i][0]] + (4 - choices[i]);
    } else if (choices[i] > 4) {
      score[survey[i][1]] = score[survey[i][1]] + (choices[i] - 4);
    }
  }

  for (let i = 0; i < types.length; i++) {
    result +=
      score[types[i][0]] >= score[types[i][1]] ? types[i][0] : types[i][1];
  }

  return result;
}
