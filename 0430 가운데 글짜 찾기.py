s='abcde'
def solution(s):
  return s[(len(s)-1)//2 : (len(s)+2)//2]
print(solution(s))