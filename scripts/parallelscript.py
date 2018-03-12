'''
file = open("../app/NachRiddles/app/database/parasha.json", "r")
output = open("../app/NachRiddles/app/database/parasha2.json", "w")

read = file.read()
read2 = read.rstrip()
read3 = read.replace('\n',' ').replace('111','{ "parasha":"').replace('222','" },')
print (read3,"check")
output.write(read3)
'''
output = open("../app/NachRiddles/app/database/parasha2.json", "r")
reader = output.read()
print(reader[74244:74266])