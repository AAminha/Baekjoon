function solution(skill, skill_trees) {
  let count = 0;

  skill_trees.forEach((tree) => {
    let prevIndex = -1;
    for (let i = 0; i < skill.length; i++) {
      let currentIndex = tree.indexOf(skill[i]);
      if (currentIndex === -1) currentIndex = 100;

      if (prevIndex > currentIndex) return;

      prevIndex = currentIndex;
    }

    count++;
  });

  return count;
}
