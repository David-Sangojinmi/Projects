# Author: David Sangojinmi                                                 #
#==========================================================================#
# This algorithm can be used to find a peak in a given set of numbers      #
# which are inputted. A number is a peak if it is greater than or equal    #
# to the numbers which come before and after it. For example in the input  #
# of [3, 5, 7, 6, 4] the peak would be 7 as it is greater than or equal to #
# both 5 and 6.                                                            #

list = [int(num) for num in input("Enter a list of numbers: ").split()]
foundPeak = True

def findPeak(array):
    global foundPeak
    for x in range(1, (len(list)-1)):
        ## Compare the values before and after
        if (list[x] >= list[x-1] and list[x] >= list[x+1]):
            peakPlace = x
            foundPeak = True
            break
        else:
            foundPeak = False
    if (foundPeak == True):
        print("The peak is: ", list[peakPlace], ".")
    elif (foundPeak == False):
        print("There are no peaks!")

findPeak(list)