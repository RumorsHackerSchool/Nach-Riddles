# Open a file
doc = open("html.txt", "r",)
file_without_lines = open("file_without_lines.txt", "w",)

for lop in range(8000):
    line = doc.readline()
    while line == "\n" or line ==" \n":
        line = doc.readline()
    file_without_lines.write(line)
    print('done',lop)