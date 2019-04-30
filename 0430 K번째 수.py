array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	

def solution(array, commands):
    answer=[]
    for p in range(0, len(commands)):
      i = commands[p][0]-1
      j = commands[p][1]-1
      k = commands[p][2]-1
      # print(i,j,k)
      cut_list = array[i:j+1]
      cut_sorted = sorted(cut_list)
      # print(cut_sorted)
      a = cut_sorted[k]
      # print(a)
      answer.append(a)
    
    return(answer)



      

print(solution(array, commands))
