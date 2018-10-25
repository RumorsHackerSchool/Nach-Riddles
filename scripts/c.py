#!/usr/bin/python3
import json
from pprint import pprint

##the _name_ is equal to _main_ only if this file is load
## if we load other file and called from the other file "import c"
##it will load only func and def but not if statment becouse "_name_" is equal
## to the name of file and not "_main_" becouse it not load directly

if __name__ == '__main__':

    ##this file can run only in python3 (python2 can load 'encoding' argument in function
    with open('./c1p1-En.csv', encoding='utf8') as f:
        ##make dictionary
        d = {}
        next(f) # Skip the first line
        for l in f: #line by line go through f to l
            (book,
             parasha,
             torah_parasha,
             riddle_number,
             riddle,
             answer) = l.strip().split(',')

            ##make the dictionary etc. this is dictionary inside dictionary
            if book not in d:
                d[book] = {}
            if parasha not in d[book]:
                d[book][parasha] = {}
            if 'riddles' not in d[book][parasha]:
                d[book][parasha]['riddles'] = []

            d[book][parasha]['torah_parasha'] = torah_parasha
            d[book][parasha]['riddles'].append({ riddle_number: {'riddle': riddle, 'answer': answer} })
        print(json.dumps(d, sort_keys=True, indent=2, ensure_ascii=False))
    