/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  let res = [];
  let curr = [];

  function dfs(i, nums, curr, res) {
    // console.log(`Current subset: ${JSON.stringify(curr)}, Current index: ${i}`);
    if (i >= nums.length) {
      res.push([...curr]);
      return;
    }

    // Include current element
    curr.push(nums[i]);
    dfs(i + 1, nums, curr, res);
    // console.log(`Include current subset: ${JSON.stringify(curr)}, Current index: ${i}`);

      
    // Exclude current element
    curr.pop();
    dfs(i + 1, nums, curr, res);
    // console.log(`Exclude current subset: ${JSON.stringify(curr)}, Current index: ${i}`);

  }

  dfs(0, nums, curr, res);
  return res;
};

// Test the function
console.log(subsets([1,2,3])); // [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]