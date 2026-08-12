function twoSum(nums: number[], target: number): number[] {
  for (let index1 = 0; index1 < nums.length; index1++) {
    for (let index2 = 0; index2 < nums.length; index2++) {
      if (nums[index1] + nums[index2] == target && index1 != index2)
        return [index1, index2];
    }
  }
  return [];
}
