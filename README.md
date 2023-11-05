### Team Name: GPT

### Team Members:
1. Ashish Singh
2. Arin Rathore
3. Ketan Kunkalikar

### Problem Statement
Scraping Sports News Dataset

### Table of Contents
1. [Description](#description)
2. [Tech Stack](#tech-stack)
3. [Usage](#usage)

### Description
The project is about scraping sports news from various websites and storing them json format. The data is then uploaded to MongoDB. The data is then used on a dashboard to display the data. The data is also uploaded to kaggle for public use.
There is a scheduler script which runs every 5 minutes to scrape the data from the websites. 

### Tech Stack
1. Python
2. HTML
3. CSS
4. JavaScript
5. Node.js
6. Express.js
7. MongoDB

### Usage
The scraping is done using python. 
First install the requirements for python using the following command:

```pip3 install -r requirements.txt```

Then run the scripts to scrape from corresponding folders to scrape the data and push the data to MongoDB.

For every script you have to change the URI of the MongoDB database.
```diff
-- uri = 'mongodb+srv://<user>:<password>@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority'
++ uri = 'mongodb+srv://<your user>:<your password>@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority'
```
Also change the name of the database and collection in the script.

In scripts which use API, change the API key.

To run the dashboard, first install the requirements for node using the following command:

```npm install```

Then run the following command to start the server:

```node index.js```

The dashboard will be available at http://localhost:3000/

The data is also uploaded to kaggle. The link is given below:
https://www.kaggle.com/datasets/ashish51ngh/sports-news-dataset

