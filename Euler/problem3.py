# What: What is the largest prime factor of the number 600851475143 ?

tst = int(input('Number to test: '))
gdnum = []

# Initialize a list
gdprm = []
for possiblePrime in range(2, int(tst**0.5)):
    
    # Assume number is prime until shown it is not. 
    isPrime = True
    for num in range(2, int(possiblePrime**0.5) + 1):
        if possiblePrime % num == 0:
            isPrime = False
            break
      
    if isPrime:
        gdprm.append(possiblePrime)
        print(possiblePrime)

# Test prime number for divisibility
abcd = -1

# Creating a loop to test run all primes for divisibility
while (tst % gdprm[abcd] == 0) == False:
  abcd -= 1
  
  if (tst % gdprm[abcd] == 0) == True:
    gdnum.append(gdprm[abcd])
    
print("Largest prime factor is:", *gdnum)
