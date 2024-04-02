const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Filter {
	constructor(nums) {
		this.nums = Array.isArray(nums) ? nums : [];
		this.result = [];
	}

	filterNumsDeclaratively() {
		for (let i = 0; i < this.nums.length; i++) {
			if (this.nums[i] > 5) this.result.push(ths.nums[i]);
		}
		return this.result;
	}

	filterByDeclarative() {
		return this.nums.filter((num) => num > 5);
	}
}

const filter = new Filter(numbers);
console.log("result ", filter.filterByDeclarative());
