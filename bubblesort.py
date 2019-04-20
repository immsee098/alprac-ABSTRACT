def bubble_sort(li):
    n=len(li)
    for i in range(n-1):
            for j in range(n-1-i):
                if li[j]>li[j+1]:
                    li[j+1], li[j] = li[j], li[j+1]


if __name__ =="__main__":
    li=[6,2,1,4]
    bubble_sort(li)
    print(li)