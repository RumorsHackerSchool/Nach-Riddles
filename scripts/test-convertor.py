import csv
import json


csvfile = open('./c1p1-En.csv', 'r')
jsonfile = open('./c1p1-En2.json', 'w')

fieldnames = ("book","portion","torha portion","riddle number","riddle answer")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')