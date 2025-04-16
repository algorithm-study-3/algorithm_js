function solution(phone_number) {
    const hideNumbers = '*'.repeat(phone_number.length - 4)
    const backNumbers = phone_number.slice(-4)
    return `${hideNumbers}${backNumbers}`;
}