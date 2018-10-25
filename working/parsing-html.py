#!/usr/bin/python3
from xml.dom import minidom

htmldoc = minidom.parse('cut_riddles_file6.html')
body = htmldoc.getElementsByTagName('body')[0]
spans_all = body.getElementsByTagName('span')
print (spans_all)

# Open a file
test = open("test.txt", "w",)
print ("Name of the file: ", test.name)


to_the_file = []
for lop in spans_all:
    try:
        spans = lop.firstChild.data
    except AttributeError:
        continue
    to_the_file.append(spans)


print (to_the_file)
test.write(to_the_file)
# Close opend file
test.close()
print (to_the_file)


