function solution(num_list) {
   if (num_list.length >= 11) {
        return num_list.reduce((sum, num) => sum + num, 0);
    } else {
        return num_list.reduce((product, num) => product * num, 1);
    }
    
}