n = int(input())
array = [n]
k = 0

for i in range(n):
    num = int(input())
    # array.append(num)
    if(num > 0) : 
        k+=1
print(k)