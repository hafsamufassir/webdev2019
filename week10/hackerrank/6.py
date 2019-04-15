x = int(input())

if x%4==0 and x%100!=0 :
	print("True")
elif x%400==0 :
	print("True")
else :
    print("False")