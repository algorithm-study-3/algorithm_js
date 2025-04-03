function solution(sizes) {
	let answer = 0;
	sizes.forEach((v, idx) => {
		sizes[idx] = v.sort((a, b) => a - b);
	});

	const left = sizes.map((v) => v[0]);
	const right = sizes.map((v) => v[1]);
	answer = Math.max(...left) * Math.max(...right);
	return answer;
}
