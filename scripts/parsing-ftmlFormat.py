from xml.dom import minidom

htmldoc = minidom.parse('Riddles_htmlFormat.htm')
html = htmldoc.getElementsByTagName('html')[0]
body = html.getElementsByTagName('body')[0]
div = body.getElementsByTagName('div')
p = div.getElementsByTagName('p')
spans = p.getElementsByTagName('span')
print htmldoc

for lop in spans:
    riddle = lop.firstChild.data
    print riddle

