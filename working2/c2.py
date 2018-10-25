#this file convert the file from csv to json
import json

# Open a file
riddle_converted = open("riddle-converted-for.csv", "r",)
jsonfile = open("riddle-the-new-json.json", "w",)
dict1 = {}
list1 = []
for loop in range(1188):
    first_line = riddle_converted.readline()
    list_of_line = first_line.replace('.','').strip().split(',')
    list_of_key = ['riddle_number', 'book', 'riddle_section', 'parallel', 'riddle_letter', 'riddle', 'answer']
    print(list_of_line)
    for list_loop in range(len(list_of_line)):
        dict1[list_of_key[list_loop]] = list_of_line[list_loop]

    jsonfile.write(json.dumps(dict1, sort_keys=True, indent=2, ensure_ascii=False))
    jsonfile.write(',\n')
    #list1.append(dict1)
#print(json.dumps(list1, sort_keys=True, indent=2, ensure_ascii=False))


