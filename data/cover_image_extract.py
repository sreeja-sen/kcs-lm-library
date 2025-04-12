import csv
import os
import re
import time

import requests


filename = "books.csv"
with open(filename, "r", encoding="utf-8", newline="") as file:
  
  reader = csv.DictReader(file)
  regex = re.compile("^.*\/(.*\/.*\.(png|jpg))$")

  out_dir = "./covers/"
  if not os.path.exists(out_dir):
    os.mkdir(out_dir)
    print(f"Created output directory {out_dir!r}")

  headers = { "User-Agent": "student project - kcm library" }
  for book in reader:
    cover_img_url = book["coverImg"]

    resp = requests.get(cover_img_url, headers=headers)
    if not resp.ok:
      print(f"Download {cover_img_url} failed")
      continue
    
    print(cover_img_url)
    matches = regex.search(cover_img_url)

    file_name = matches.groups()[0]
    file_name = file_name.replace("/", "")
  
    file_path = os.path.join(out_dir, file_name)
    print(f"Writing to output {file_path}")
    with open(file_path, "wb") as file_out:
      file_out.write(resp.content)
