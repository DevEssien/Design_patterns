const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = [];

for (let i = 0; i < nums.length; i++) {
	if (nums[i] > 5) result.push(nums[i]);
}

console.log("result ", result);
