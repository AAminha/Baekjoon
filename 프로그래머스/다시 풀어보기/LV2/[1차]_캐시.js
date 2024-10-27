function solution(cacheSize, cities) {
  const cache = {};
  let result = 0;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();

    if (cache[city] === undefined) {
      result += 5;
      const cacheKeys = Object.keys(cache);
      if (cacheSize > 0 && cacheKeys.length === cacheSize) {
        const deletedKey = cacheKeys.reduce((deleted, current) => {
          deleted = cache[deleted] < cache[current] ? deleted : current;
          return deleted;
        }, cacheKeys[0]);
        delete cache[deletedKey];
      }
      if (cacheSize > 0) cache[city] = i;
    } else {
      result += 1;
      cache[city] = i;
    }
  }

  return result;
}
