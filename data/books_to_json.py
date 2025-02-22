import csv
import json

filename = "books.csv"
with open(filename, "r", encoding="utf-8") as csv_file:
    reader = csv.DictReader(csv_file)

    json_data = []
    for item in reader:
        print(item["title"])
        json_data.append(item)
    
    print(f"Processed {len(json_data)} books")

    with open("books.json", "w", encoding="utf-8") as json_file:
        json.dump(json_data, json_file)
    
    print("Wrote json to disk")
