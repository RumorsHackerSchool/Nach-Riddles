import os
from xml.etree import ElementTree

file_name = '/home/guy/Gits/Prophet-Riddles-App/working/cut_riddles_file2.xml'
full_file = os.path.join('data', file_name)
print(full_file)

dom = ElementTree.parse(full_file)
print(dom)

data = dom.findall('root/txt')

for t in data:
   print('ye')
   print(t.text)