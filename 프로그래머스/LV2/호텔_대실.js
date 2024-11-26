function solution(book_time) {
  const rooms = [];

  book_time = book_time.map((booking) => {
    const [start_h, start_m] = booking[0].split(":").map(Number);
    const [end_h, end_m] = booking[1].split(":").map(Number);

    return [start_h * 60 + start_m, end_h * 60 + end_m];
  });

  book_time.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];

    return a[0] - b[0];
  });

  book_time.forEach((booking) => {
    let index = -1;
    for (let i = 0; i < rooms.length; i++) {
      let diff = rooms[i][1] - booking[0];

      if (diff > 0) continue;

      if (diff <= 0) {
        index = i;
        break;
      }
    }

    booking[1] += 10;
    if (index === -1) rooms.push(booking);
    else rooms[index] = booking;
  });

  return rooms.length;
}
