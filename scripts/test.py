#!/usr/bin/python3
# -*- coding: utf-8 -*-

# Open a file
fo = open("test2.txt", "r",)
print ("Name of the file: ", fo.name)

read = fo.readline()
read2 = 'מתחיל'
type(read2)
print (read[0])
print (read2[0])
read[0] == read2[0]

if str(read) == str('מתחיל'):
    print ("this is this")
print (read)
print ('מתחיל')


#fo.write('\nThis is a test\n')
# Close opend file
fo.close()