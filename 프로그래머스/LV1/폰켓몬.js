function solution(nums) {
  const select = parseInt(nums.length / 2);
  const type = [...new Set(nums)];

  if (type.length >= select) return select;

  return type.length;
}
