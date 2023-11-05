# import modules
import requests
import json
from pymongo import MongoClient
import os

url = "https://cricbuzz-cricket.p.rapidapi.com/news/v1/index"

headers = {
	"X-RapidAPI-Key": "20f103c922msh6332c8888704633p176ac6jsn807983384842",
	"X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com"
}

response = requests.get(url, headers=headers)

# maintain counter fro top 3 news
count = 0

ids = []

for i in range(10):
    try:
        ids.append(response.json()['storyList'][i]['story']['id'])
        count += 1
    except:
        pass
    
    if count == 3:
        break

news_data = {}

# For each id get the news
for i in range(len(ids)):
    news_url = f"https://cricbuzz-cricket.p.rapidapi.com/news/v1/detail/{ids[i]}"

    news_response = requests.get(news_url, headers=headers)

    news_data["_"+str(i)] = news_response.json()['appIndex']

# remove " | Cricbuzz.com" from the title
for i in range(len(news_data)):
    news_data["_"+str(i)]['seoTitle'] = news_data["_"+str(i)]['seoTitle'].replace(" | Cricbuzz.com", "")

# Get the absolute path to the directory of the current script
dir_path = os.path.dirname(os.path.realpath(__file__))

# Use the absolute path to the 'data' directory
data_file_path = os.path.join(dir_path, '../data/news_data.json')

# Save the file
with open(data_file_path, 'w') as f:
    json.dump(news_data, f)

uri = 'mongodb+srv://new-user-2:njimkobhu@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority'

client = MongoClient(uri)

db = client.Cricket
collection = db['news']

# Clear the previous collection
collection.delete_many({})

# Insert the data into the collection
collection.insert_one(news_data)

# Close the client
client.close()