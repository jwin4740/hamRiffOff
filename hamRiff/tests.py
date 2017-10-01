from django.test import TestCase

# Create your tests here.

import sys
# Let us consider string S. You are required to count the frequency
# of all the characters in this string.

# create a hash table with length 26
# assign each letter of the alphabet to a numerical index filled with zero as placeholders
# iterate over string S and put the frequency of each letter into the hash table
s = "ababcd"

# without hashing
def countFreq(numBuckets):
    myTable = []
    for i in range(numBuckets):
        freq = 0
        for j in range(len(s)):
            if s[j] == chr(97 + i):
                freq = freq + 1
        myTable.append([freq])
    return myTable

# print(countFreq(26))

# with hashing
buckets = 26
myHashTable = []
def createHash(input):
    for k in range(buckets):
        myHashTable.append(0)


def myHashFun(chara):
    ind = ord(chara) - ord('a')
    return ind

def countFre(s):
    createHash(s)
    for i in range(len(s)):
        index = myHashFun(s[i])
        myHashTable[index] = myHashTable[index] + 1
    return myHashTable


def rehashFun(ind):
    chara = chr(ind + 97)
    return chara

res = countFre("hello")
print(res)


print(rehashFun(5))




