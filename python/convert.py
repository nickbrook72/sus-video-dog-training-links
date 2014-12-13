import codecs
import json
import csv

rows = []
with codecs.open("../data/vlinks.csv",encoding="utf-8") as f:
     reader = csv.reader(f)
     cols = []
     for row in reader:
         rows.append(row)

jsonstr = json.dumps(rows)
with open("../data/vlinks.json","w", encoding="utf-8") as f:
    f.write(jsonstr)
