# Import necessary modules
import requests
import json
import re
from pymongo import MongoClient
import os

# Set the url
url = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming"

# Set the headers
headers = {
    "X-RapidAPI-Key": "6cdde82b28msh808e5a93e8eb5e7p1cd4c3jsn920b16a4e7f0",
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com"
}

# Get the response
match_response = requests.get(url, headers=headers)

# Get the data
match_data_raw = match_response.json()

# Get the match id
match_id = match_data_raw['typeMatches'][0]['seriesMatches'][0]['seriesAdWrapper']['matches'][0]['matchInfo']['matchId']

# Function to clean match data
def clean_match_data(match_data):
    """
    function to clean match data
    """
    # Get the match type
    match_type = match_data['typeMatches'][0]['matchType']
    # Get the match name
    match_name = match_data['typeMatches'][0]['seriesMatches'][0]['seriesAdWrapper']['seriesName']
    # Get the match id
    match_id = match_data['typeMatches'][0]['seriesMatches'][0]['seriesAdWrapper']['matches'][0]['matchInfo']['matchId']
    # Get the state
    state = match_data['typeMatches'][0]['seriesMatches'][0]['seriesAdWrapper']['matches'][0]['matchInfo']['state']
    # Get the status
    status = match_data['typeMatches'][0]['seriesMatches'][0]['seriesAdWrapper']['matches'][0]['matchInfo']['status']
    # Get the team1
    team1 = match_data['typeMatches'][0]['seriesMatches'][0]['seriesAdWrapper']['matches'][0]['matchInfo']['team1']
    # Get the team2
    team2 = match_data['typeMatches'][0]['seriesMatches'][0]['seriesAdWrapper']['matches'][0]['matchInfo']['team2']
    # Get the venue info
    venue_info = match_data['typeMatches'][0]['seriesMatches'][0]['seriesAdWrapper']['matches'][0]['matchInfo']['venueInfo']
    
    
    # Initialize empty dictionary
    data_to_write = {
        "match_type": match_type,
        "match_name": match_name,
        "match_id": match_id,
        "state": state,
        "status": status,
        "team1": team1,
        "team2": team2,
        "venue_info": venue_info
    }

    return data_to_write


# Clean the match data
match_data = clean_match_data(match_data_raw)

# Get the absolute path to the directory of the current script
dir_path = os.path.dirname(os.path.realpath(__file__))

# Use the absolute path to the 'data' directory
data_file_path = os.path.join(dir_path, '../data/upcoming_cricket_data.json')

# Save the file
with open(data_file_path, 'w') as f:
    json.dump(match_data, f)

global uri
uri = 'mongodb+srv://new-user-2:njimkobhu@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority'

# Function to insert data into mongodb
def insert_data(data):
    """
    function to insert data into mongodb
    """
    client = MongoClient(uri)

    db = client.Cricket

    collection = db['upcoming']

    # Clear the previous collection
    collection.delete_many({})

    # Insert the data into the collection
    collection.insert_one(data)

    # Close the client
    client.close()

def main():
    """
    main function
    """
    # Insert the data into mongodb
    insert_data(match_data)

if __name__ == "__main__":
    main()

