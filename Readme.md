# Friend Availability Tracker

## Project Overview 📚🌐💻

Welcome to the **Friend Availability Tracker**! This project helps to determine if your friends are available to meet based on their busy schedules. With the hectic nature of university life, it's difficult to find time to meet up with friends. This tool helps you find out when your friends are free, and how long they are available for. 

It considers each friend's class schedules and determines if they are free at any given time of the day.

---

## Project Description 🍔

**"Our busy schedule of BRAC University .Me and my friends they don’t have time to meet with each other."**

Life at university can get extremely busy, and finding a common time to hang out with friends can be a challenge. Everyone is juggling their own schedules with classes, projects, and extracurricular activities. This project provides a way to quickly check when your friends are free during the day, based on their academic schedules.

---
## You are welcomed to fix the bug here and contribute ✨😍👾
---

## Features 📜

- **Track availability:** Easily check which friends are free at any given time.
- **Class schedules:** Each friend’s schedule is tracked, including start and end times for their classes.
- **Dynamic updates:** The app checks for availability based on the current time and day.
- **Friend grouping:** Displays all the friends who are free at the same time, helping to plan meet-ups.
- **Time calculations:** The app not only checks if a friend is free but also calculates how long they are free until their next class.

---

## How It Works 🙂‍↔️🙂‍↕️

1. **Schedule Setup:** You input each friend’s class schedule (start and end times for each class on each day).
2. **Current Time Check:** The app takes the current time and compares it against each friend's schedule to determine if they are free.
3. **Free Duration:** If a friend is free, the app calculates how long they are available.
4. **User-Friendly Output:** It displays the names of friends who are available, along with how long they are free for.

---

## Example 👯‍♂️

Imagine it’s **4:00 PM** on a **Monday**, and you want to check which of your friends are free to hang out. You run the program, and it shows something like:


This tells you that **Friend 1** is ```free for 1 hour and 20 minutes,``` and **Friend 2** is ```free for 3 hours and 20 minutes```. You can plan to meet them accordingly!

---

## Technologies Used 🤖

- **Python**: The main programming language used for this project.
- **Datetime Module**: For managing and comparing dates and times.

---

## Installation 💻

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/friend-availability-tracker.git
    ```
2. Navigate to the project folder:
    ```bash
    cd friend-availability-tracker
    ```
3. Install required dependencies (if any).

---

## How to Use 🪄

1. Open the Python script in your favorite editor.
2. Modify the **schedules** dictionary to include the class schedules of your friends.
3. Run the script, and it will print out the availability of each friend based on the current time.
4. You can also go here and run the code here:
```bash
 https://colab.research.google.com/drive/1WltSJ9vV9483o0iGnkG1BSgsqXdFQwLV?usp=sharing 
 ```

Example usage:

```python
from datetime import datetime

# Your schedule code here...

# Check who is free at the current time
now = datetime.now()
current_day = now.strftime("%A")
current_time = now.strftime("%I:%M%p")
free_friends_info = find_free_friends(current_day, current_time)
for name, duration in free_friends_info:
    print(f"{name} is free now at {current_time} for {hours} hours and {minutes} minutes.")
