def hanoi(n, _from, _by, _to):
    #base case
    if n==1:
        print(f'{n}번째 쟁반을 {_from}에서 {_to}로 이동')
        return
    
    hanoi(n-1, _from, _to, _by)
    print(f'{n}번째 쟁반을 {_from}에서 {_to}로 이동')
    hanoi(n-1, _by, _from, _to)



    h(3,a,b,c)일 경우
        h(2,a,c,b)
            h(1,a,c,b)
                1번째 쟁반을 a에서 b로 이동
            2번째 쟁반을 a에서 b로 이동
        3번째 쟁반을 a에서 c로 이동
        h(2,b,a,c)
            h(1,c,b,a)
                1번째 쟁반을 ~
            2번째 쟁반을 b에서 c로 이동
            

