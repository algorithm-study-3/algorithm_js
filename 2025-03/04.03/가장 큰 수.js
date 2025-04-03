function solution(numbers) {
	const compare = (a, b) => {
		const order1 = a + b;
		const order2 = b + a;
		return order2.localeCompare(order1); // 내림차순 정렬
	};

	const sorted = numbers.map(String).sort(compare);
	console.log(sorted);

	if (sorted[0] === "0") {
		return "0";
	}

	return sorted.join("");
}
