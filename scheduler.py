import schedule
import time
import subprocess

def job():
    # calling scripts
    subprocess.run(["python", r"D:\PS4-GPT\scraping scripts\cricket\script\live_cricket.py"])
    subprocess.run(["python", r"D:\PS4-GPT\scraping scripts\cricket\script\recent_cricket.py"])
    subprocess.run(["python", r"D:\PS4-GPT\scraping scripts\cricket\script\upcoming_cricket.py"])
    subprocess.run(["python", r"D:\PS4-GPT\scraping scripts\football\script\score_football.py"])
    subprocess.run(["python", r"D:\PS4-GPT\scraping scripts\football\script\news.py"])
    subprocess.run(["python", r"D:\PS4-GPT\scraping scripts\tennis\script\news.py"])

# Schedule the job every 1 minute
schedule.every(1).minutes.do(job)

while True:
    schedule.run_pending()
    time.sleep(2)