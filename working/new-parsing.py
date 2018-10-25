from html.parser import HTMLParser
from html.entities import name2codepoint

htmldoc = open("html-html.html", 'r')
htmldoc = htmldoc.read()
class MyHTMLParser(HTMLParser):
    def handle_data(self, data):
        print("Data     :", data)

parser = MyHTMLParser()
parser.feed(htmldoc)

