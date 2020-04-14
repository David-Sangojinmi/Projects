# What: Find the sum of all the multiples of 3 or 5 below 1000.

maxNum = 1000

def findMultiples(maxNum):
    global multipleSum
    multipleSum = 0

    for i in range(1, maxNum):
        if (i % 3 == 0):
            multipleSum += i
        elif (i % 5 == 0):
            multipleSum += i
        else:
            pass
    print("Sum is: ", multipleSum)

findMultiples(maxNum)