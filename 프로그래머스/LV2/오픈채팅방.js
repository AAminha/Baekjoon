function solution(record) {
  const user = {};
  const messages = [];

  record.forEach((element) => {
    const [action, id, nickname] = element.split(" ");
    if (nickname) user[id] = nickname;
    if (action !== "Change") messages.push([id, action]);
  });

  messages.forEach((message, index) => {
    messages[index] = `${user[message[0]]}님이 ${
      message[1] === "Enter" ? "들어왔습니다." : "나갔습니다."
    }`;
  });

  return messages;
}
