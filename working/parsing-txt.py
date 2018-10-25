
# Open a file
doc = open("html.txt", "r",)
test = open("test.txt", "w",)

list1=[]
newline = ''
for riddles in range(0,3):
    line = doc.readline()
    if "ספר" in line:
        #loop for he two titles
        for this_section in range(0,2):
            list1.append(line.rstrip())
            line = doc.readline()
            list1.append(line.rstrip())
            for _24riddles in range(0,24):#loop for 24 riddles in this section
                    line = doc.readline()
                if '.' in line:#this mean that riddle is in this line
                    string_for_riddle = ''
                    string_for_riddle += line.rstrip()
                    line = doc.readline()
                    string_for_riddle = string_for_riddle + ' ' + line.rstrip()
                    list1.append(string_for_riddle)
                    print (list1)
                    if "פתרונות" in line:
                        print("going to break")
                        break
            print("in for1")

