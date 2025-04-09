function solution(n) {
    let result = 0
    const t = 10;
    while (n / t > 0) {
        result += n % t;
        n = Math.floor(n / t)
    }
    return result;
}