from bs4 import BeautifulSoup
import os
import requests
import json
from pymongo import MongoClient

url = "https://firstsportz.com/category/foo"

response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

news_div = soup.findAll('div', {'class': 'jeg_postblock_content'})[:3]

news_data = {}

for i in range(len(news_div)):
    news_data["_"+str(i)] = {
        "title": news_div[i].find('a').text,
        "link": news_div[i].find('a')['href']
    }

# Get the absolute path to the directory of the current script
dir_path = os.path.dirname(os.path.realpath(__file__))

# Use the absolute path to the 'data' directory
data_file_path = os.path.join(dir_path, '../data/news_data.json')

# Save the file
with open(data_file_path, 'w') as f:
    json.dump(news_data, f)


uri = 'mongodb+srv://new-user-2:njimkobhu@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority'

client = MongoClient(uri)

db = client.Football
collection = db['news']

# Clear the previous collection
collection.delete_many({})

# Insert the data into the collection
collection.insert_one(news_data)

# Close the client
client.close()
