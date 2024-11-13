
from datetime import datetime, timedelta
sigmas = ['Sinan', 'Soumo', 'Nasim', 'Rubayet', 'Imran', 'Raihan', 'Fahim', 'Jaky', 'Samir']

schedules = {
    "Sinan": {
        "Saturday": [("08:00AM", "10:50AM")],
        "Sunday": [("09:30AM", "10:50AM")],
        "Monday": [("09:30AM", "10:50AM"),("03:30PM", "04:00PM")],
        "Tuesday":[("09:30AM","01:50PM")],
        "Wednesday":[("09:30AM", "10:50AM"),("03:30PM", "04:50PM")],
        "Thursday":[],
        "Friday":[],
    },
    "Soumo": {
        "Saturday":[],
        "Sunday": [("09:30AM", "01:50PM"),("02:00PM", "04:50PM")],
        "Monday": [("02:00PM", "04:50PM")],
        "Tuesday":[("09:30AM", "01:50PM"),("03:30PM", "04:50PM")],
        "Wednesday":[],
        "Thursday":[],
        "Friday":[],
    },
    "Nasim": {
        "Saturday":[],
        "Sunday": [("02:00PM", "04:50PM")],
        "Monday": [("11:00AM", "01:50PM"),("03:30PM","04:50PM")],
        "Tuesday":[("02:00PM","04:50PM")],
        "Wednesday":[("11:00AM", "01:50PM"),("03:30PM","04:50PM")],
        "Thursday":[],
        "Friday":[],
    },
    "Rubayet": {
        "Saturday":[("11:00AM", "03:20PM")],
        "Sunday": [("11:00AM", "04:50PM")],
        "Monday": [("11:00AM", "12:20PM")],
        "Tuesday":[("02:00PM","04:50PM")],
        "Wednesday":[("11:00AM", "02:20PM")],
        "Thursday":[("02:00PM", "03:20PM")],
        "Friday":[],
    },
    "Imran": {
        "Saturday":[("02:00PM", "03:20PM")],
        "Sunday": [("11:00AM", "01:50PM")],
        "Monday": [("02:00AM", "04:50PM")],
        "Tuesday":[("11:00AM","01:50PM")],
        "Wednesday":[("02:00AM", "04:50PM")],
        "Thursday":[("02:00PM", "03:20PM")],
        "Friday":[],
    },
    "Raihan": {
        "Saturday":[("03:30PM","04:50PM")],
        "Sunday": [("09:30AM", "12:20PM")],
        "Monday": [("02:00PM","04:50PM")],
        "Tuesday":[("09:30AM", "12:20PM")],
        "Wednesday":[],
        "Thursday":[("03:30PM","04:50PM")],
        "Friday":[],
    },
    "Fahim": {
        "Saturday":[],
        "Sunday": [("09:30AM", "01:50PM")],
        "Monday": [("11:00AM", "01:50PM")],
        "Tuesday":[("09:30AM", "01:50PM")],
        "Wednesday":[],
        "Thursday":[],
        "Friday":[],
    },
    "Jaky": {
        "Saturday":[],
        "Sunday": [("09:30AM", "01:50PM")],
        "Monday": [("11:00AM", "01:50PM")],
        "Tuesday":[("09:30AM", "01:50PM")],
        "Wednesday":[],
        "Thursday":[],
        "Friday":[],
    },
    "Samir": {
        "Saturday":[],
        "Sunday": [("09:30AM", "01:50PM")],
        "Monday": [("11:00AM", "01:50PM")],
        "Tuesday":[("09:30AM", "01:50PM")],
        "Wednesday":[],
        "Thursday":[],
        "Friday":[],
    },
}

def is_friend_free(name, day, time):
    input_time = datetime.strptime(time, "%I:%M%p")
    
    if day in schedules.get(name, {}):
        for start, end in schedules[name][day]:
            start_time = datetime.strptime(start, "%I:%M%p")
            end_time = datetime.strptime(end, "%I:%M%p")
            if start_time <= input_time <= end_time:
                return False
    return True 

def find_free_friends(day, time):
    input_time = datetime.strptime(time, "%I:%M%p")
    free_friends_info = []
    
    for name in schedules:
        if is_friend_free(name, day, time):
            next_class_start = None
            
            for start, _ in schedules.get(name, {}).get(day, []):
                start_time = datetime.strptime(start, "%I:%M%p")
                if start_time > input_time:
                    next_class_start = start_time
                    break
            
            if next_class_start:
                free_duration = next_class_start - input_time
            else:
                end_of_day = datetime.strptime("11:59PM", "%I:%M%p")
                free_duration = end_of_day - input_time

            free_friends_info.append(name) #((name,free_duration))
    
    return free_friends_info

# Example usage
now = datetime.now()
current_day = now.strftime("%A")
current_time = now.strftime("%I:%M%p")
statement =""
free_friends_info = find_free_friends(current_day, current_time)
# for name, duration in free_friends_info:
#     # hours, remainder = divmod(duration.seconds, 3600)
#     # minutes, _ = divmod(remainder, 60)
# #     statement += name + ","
# #     print(f"{statement} is free now at {current_time} .Also ask him for how long he is free cause i am currently working to fix that bug!")

for i in free_friends_info:
    statement += i + ", "

if statement:
    statement = statement.rstrip(", ")
if len(sigmas) == len(free_friends_info):
    print(f"All of our buddies are free now at {current_time}.\nAlso ask them for how long they are free cause i am currently working to fix that bug!")
else:
    in_clss = []
    pronoun =""
    if len(free_friends_info)>1:
        pronoun = "them"
    else:
        pronoun = "he"
    for i in sigmas:
        if i not in free_friends_info:
            in_clss.append(i)
    print(f"{statement} is free now at {current_time} .\nAlso ask {pronoun} for how long he is free cause i am currently working to fix that bug!")
    print()
    in_c = ""
    for i in in_clss:
        in_c += i +", "
    if in_c:
        in_c = in_c.rstrip(", ")
    print(f"{in_c} is/are in class")