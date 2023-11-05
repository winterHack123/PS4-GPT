from bs4 import BeautifulSoup
import requests
import json
import re
import os
from pymongo import MongoClient

url = "https://sports.ndtv.com/football/live-scores"

response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

home_div = soup.findAll('div', {'class': "sp-scr_wrp vevent"})

data = {}

for i in range(6):
    summary = home_div[i].find('span', {'class': 'summary'})
    date = home_div[i].find('div', {'class': 'scr_dt-red'})
    location = home_div[i].find('span', {'class': 'location'})

    # put first 3 data in upcoming matches and next 3 in recent matches then put them in json
    data["_"+str(i)] = {
        'summary': summary.text,
        'date': date.text,
        'location': location.text
    }

# Get the absolute path to the directory of the current script
dir_path = os.path.dirname(os.path.realpath(__file__))

# Use the absolute path to the 'data' directory
data_file_path = os.path.join(dir_path, '../data/football_data.json')

# Save the file
with open(data_file_path, 'w') as f:
    json.dump(data, f)


uri = 'mongodb+srv://new-user-2:njimkobhu@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority'

client = MongoClient(uri)

db = client.Football
collection = db['score']

# Clear the previous collection
collection.delete_many({})

# Insert the data into the collection
collection.insert_one(data)

# Close the client
client.close()
