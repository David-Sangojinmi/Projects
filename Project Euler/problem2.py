# what: By considering the terms in the Fibonacci sequence whose values
# do not exceed four million, find the sum of the even-valued terms.

## Produce some fib numbers
nTerms = int(input("How many terms: "))
n1, n2 = 1, 2
count = 0
fib = []
totalSum = 0
evenSum = 0

while count < nTerms:
    while n1 < 4000000:
        # print(n1)
        fib.append(n1)
        # if n1 % 2 == 0:
        #     evenSum += n1
        # totalSum += n1
        nth = n1 + n2
        n1 = n2
        n2 = nth
        count += 1
for i in range(0, len(fib)):
    if (fib[i] % 2 == 0):
        evenSum += fib[i]
print(fib)
print("The even sum is: ", evenSum)
# print("The total sum is: ", totalSum)