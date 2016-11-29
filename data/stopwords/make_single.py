from os import listdir
from os.path import isfile, join
import re
import json
mypath = "."
allfs = {}
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
for f in onlyfiles:
    if not f.endswith(".txt"):
        continue
    lang = re.split("\-|\.", f)[1]
    with open(f, "r") as ins:
        array = []
        for line in ins:
            if len(line.strip()) == 0:
                continue 
            if line[0] == '#':
            	continue
            array.append(line.strip())
    allfs[lang] = array

with open('all_languages.json', 'w') as outfile:
    json.dump(allfs, outfile)
