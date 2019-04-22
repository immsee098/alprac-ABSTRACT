li=[5,4,3,1,2,10,25]
li2=sorted(li)
li2
target=1
mid=int((len(li2)-1)/2)
li2[mid]
def binary_search(li2, target):
    if target<li2[mid]:
        for idy in range(0,mid):
            if li2[idy] == target:
                return idy
    elif target>li2[mid]:
        for idy in range(mid, len(li2)):
            if li2[idy] == target:
                return idy
    elif target==li2[mid]:
        return mid
    
    else:
        return None

def main():
    a= binary_search(li2, target)
    print(a)