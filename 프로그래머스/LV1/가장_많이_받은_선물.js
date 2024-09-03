function solution(friends, gifts) {
  var answer = 0; /// var보다는 let 사용하기

  friends_count = friends.length;
  gift_history = new Array(friends_count); /// 2차원 배열로 할거면 굳이 여기서 개수 선언 안해도 됨
  gift_index = new Array(friends_count); /// 여기서 다 기록하지 말고 숫자로만 기록할 수 있음.
  result = Array.from({ length: friends_count }, () => 0); /// new Array(friends_count).fill(0)으로도 가능

  // 선물 정보 저장 준비
  for (var i = 0; i < gift_history.length; i++) {
    gift_history[i] = Array.from({ length: friends_count }, () => 0);
    gift_index[i] = Array.from({ length: 2 }, () => 0);
  }

  // 주고받은 선물 정보 정리
  for (var i = 0; i < gifts.length; i++) {
    /// for(const gift of gifts)
    friend = gifts[i].split(" "); /// const [giver, taker] = gift.split(" ")
    sender = friends.indexOf(friend[0]); /// 인덱스를 객체를 이용해서 따로 만드는 것도 방법
    receiver = friends.indexOf(friend[1]);

    gift_history[sender][receiver]++;
    gift_index[sender][0]++;
    gift_index[receiver][1]++;
  }

  // 다음달 선물 주고받기
  for (var i = 0; i < friends_count - 1; i++) {
    for (var j = i + 1; j < friends_count; j++) {
      if (gift_history[i][j] > gift_history[j][i]) {
        result[i]++;
      } else if (gift_history[i][j] < gift_history[j][i]) {
        result[j]++;
      } else {
        // 선물 지수 비교
        index1 = gift_index[i][0] - gift_index[i][1];
        index2 = gift_index[j][0] - gift_index[j][1];

        if (index1 > index2) {
          result[i]++;
        } else if (index1 < index2) {
          result[j]++;
        }
      }
    }
  }

  // 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수
  answer = Math.max(...result);

  return answer;
}
