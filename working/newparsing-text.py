#this file convert the file from txt to csv

# Open a file
file_without_lines = open("file_without_lines.txt", "r",)
middle_file = open("middle_file.txt", "w", )
riddle_converted = open("riddle-converted.csv", "w",)

def take_letter(string):
    return string[0:2]

def remove_letter(string):
    return string[2:]


def cut_line(string):
    return string[:string.index("מקבילה")]

def cut_torah_parasha(string):
    return string[string.index("מקבילה"):]

def cut_pitronot(string):
    return string[len("פתרונות: "):]

def remove_space(string):
    if string[0] == ' ':
        return string[1:]
    else:
        return string

def while_to_remove_newline(answers):
    while '.' not in answers:
        answers += file_without_lines.readline().rstrip('\n')
    return cut_pitronot(answers)


for lop in range(1):
    #the book name and riddles title
    first_line = file_without_lines.readline().replace(":", "").replace(",", " ")
    if "ספר" in first_line:
        bookName = first_line
        riddlesTitle = file_without_lines.readline().replace(":", "").replace(",", " ")
    else:
        riddlesTitle = first_line
    parasha = cut_line(riddlesTitle)
    torah_parasha = cut_torah_parasha(riddlesTitle)
    for lop in range(24):
        riddlestring = file_without_lines.readline()
        if "פתרונות: " in riddlestring:
            middle_file = open("middle_file.txt", "r")
            answers = while_to_remove_newline(riddlestring).rstrip('\n').split(',')
            for lop in answers:
                answer = remove_space(lop)
                allLine = middle_file.readline().rstrip('\n') + ',' + answer + '\n'
                riddle_converted.write(allLine)
            middle_file = open("middle_file.txt", "w")
            break


        riddleNumber = take_letter(riddlestring)
        riddle = remove_letter(riddlestring)
        nextLineRiddle = file_without_lines.readline()
        allRiddle = riddle.rstrip('\n') + nextLineRiddle
        lineCSV = bookName.rstrip('\n')+ ',' + parasha + ',' + torah_parasha.rstrip('\n')+ ',' + riddleNumber+ ',' + allRiddle

        middle_file.write(lineCSV)

