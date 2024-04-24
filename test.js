const obj1 = { a: "rat", b: "dog", c: "cat", d: "null" };
const obj2 = { a: "monkey", b: "dog", c: 2 };

const s = {};
for (const key in obj2) {
	console.log(s[key], obj1[key]);
	if (!obj2.hasOwnProperty(key) && !(typeof obj1[key] === typeof obj2[key])) {
		console.log("passed");
	}
	s[key] = obj1[key];
}
console.log("s ", s);
