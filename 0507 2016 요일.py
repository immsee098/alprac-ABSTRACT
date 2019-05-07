x = 5
y = 24

def solution(a, b):
  month = ({1:0, 2:31, 3:60, 4:91, 5:121, 6:152, 7:182, 8:213, 9: 244, 10: 274, 11:305, 12:335}.get(a))

  date = b

  day = (month+date)%7
  
  print({1:"FRI", 2:"SAT", 3:"SUN", 4: "MON", 5:"TUE", 6:"WED", 7:"THU"}.get(day))

solution(x,y)

