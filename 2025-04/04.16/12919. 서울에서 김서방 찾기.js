function solution(seoul) {
    const index = seoul.findIndex(person => person === 'Kim');
    return `김서방은 ${index}에 있다`;
}