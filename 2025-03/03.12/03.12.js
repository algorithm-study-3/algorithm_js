function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));

  let order = 0;

  const process = queue.find((q) => q.index === location);
  while (queue.length > 0) {
    let current = queue.shift();
    const priorProcess = queue.some((q) => q.priority > current.priority);
    if (priorProcess) {
      queue.push(current);
    } else {
      order++;
      if (current.index === location) {
        return order;
      }
    }
  }
}
