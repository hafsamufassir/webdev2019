# list1 = [] 

# num = int(input()) 
  
# for i in range(1, num + 1): 
#     el = int(input()) 
#     list1.append(el) 
  
# print(sorted(list1)[-2]) 



# n = int(input())
# arr = []
# arr2 = []
# maxx2 = 0

# for i in range(n):
#     num = int(input())
#     arr.append(num)
# arr.sort()
# maxx = arr[len(arr) - 1]

# for i in range(len(arr)):
#     if(arr[i] != maxx):
#         arr2.append(arr[i])

# for i in range(len(arr2)):
#     maxx2 = arr2[len(arr2) - 1]

# print(maxx2)

arr = []
arr2 = []

n = int(input())
arr = [int(x) for x in input().split()]
arr.sort() 
max = arr[len(arr) - 1]
for x in range (n): 
    if (arr[x] != max):
        arr2.append(arr [x])

arr2.sort() 
max2 = arr2[len(arr2) - 1]