def solution(sizes):
    # 각 명함을 회전해서 [긴쪽, 짧은쪽]으로 정렬
    rotated = [[max(w, h), min(w, h)] for w, h in sizes]
    
    # 긴쪽들 중 최댓값, 짧은쪽들 중 최댓값 구하기
    max_w = max([w for w, h in rotated])
    max_h = max([h for w, h in rotated])
    
    return max_w * max_h
