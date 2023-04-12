function twoSum(nums, target) {
    // Method 1: hashmap
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    const pairs = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in pairs) {
            return [pairs[nums[i]], i];
        } else {
            pairs[target - nums[i]] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));

/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/
