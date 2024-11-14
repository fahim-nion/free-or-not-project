document.addEventListener("DOMContentLoaded", function () {
    const sigmas = ['Sinan', 'Soumo', 'Nasim', 'Rubayet', 'Imran', 'Raihan', 'Fahim', 'Jaky', 'Samir'];

    const schedules = {
        "Sinan": {
            "Saturday": [["08:00AM", "10:50AM"]],
            "Sunday": [["09:30AM", "10:50AM"]],
            "Monday": [["09:30AM", "10:50AM"], ["03:30PM", "04:00PM"]],
            "Tuesday": [["09:30AM", "01:50PM"]],
            "Wednesday": [["09:30AM", "10:50AM"], ["03:30PM", "04:50PM"]],
            "Thursday": [],
            "Friday": []
        },
        "Soumo": {
            "Saturday": [],
            "Sunday": [["09:30AM", "01:50PM"], ["02:00PM", "04:50PM"]],
            "Monday": [["02:00PM", "04:50PM"]],
            "Tuesday": [["09:30AM", "01:50PM"], ["03:30PM", "04:50PM"]],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        },
        "Nasim": {
            "Saturday": [["10:00AM", "12:00PM"]],
            "Sunday": [["08:30AM", "10:30AM"]],
            "Monday": [["11:00AM", "12:30PM"]],
            "Tuesday": [["12:00PM", "02:30PM"]],
            "Wednesday": [["09:00AM", "11:00AM"]],
            "Thursday": [],
            "Friday": []
        },
        "Rubayet": {
            "Saturday": [["02:00PM", "04:00PM"]],
            "Sunday": [["10:00AM", "12:00PM"]],
            "Monday": [["01:00PM", "03:00PM"]],
            "Tuesday": [["09:00AM", "11:00AM"]],
            "Wednesday": [["03:00PM", "05:00PM"]],
            "Thursday": [],
            "Friday": []
        },
        "Imran": {
            "Saturday": [["09:00AM", "11:00AM"]],
            "Sunday": [["02:00PM", "04:00PM"]],
            "Monday": [["10:00AM", "12:00PM"]],
            "Tuesday": [["01:30PM", "03:30PM"]],
            "Wednesday": [["11:00AM", "01:00PM"]],
            "Thursday": [],
            "Friday": []
        },
        "Raihan": {
            "Saturday": [["03:00PM", "05:00PM"]],
            "Sunday": [["08:00AM", "10:00AM"]],
            "Monday": [["09:30AM", "11:30AM"]],
            "Tuesday": [["02:00PM", "04:00PM"]],
            "Wednesday": [["03:00PM", "05:00PM"]],
            "Thursday": [],
            "Friday": []
        },
        "Fahim": {
            "Saturday": [["10:00AM", "12:00PM"]],
            "Sunday": [["09:00AM", "11:00AM"]],
            "Monday": [["02:00PM", "04:00PM"]],
            "Tuesday": [["11:00AM", "01:00PM"]],
            "Wednesday": [["02:30PM", "04:00PM"]],
            "Thursday": [],
            "Friday": []
        },
        "Jaky": {
            "Saturday": [["11:00AM", "01:00PM"]],
            "Sunday": [["02:30PM", "04:30PM"]],
            "Monday": [["09:00AM", "11:00AM"]],
            "Tuesday": [["03:00PM", "05:00PM"]],
            "Wednesday": [["01:00PM", "03:00PM"]],
            "Thursday": [],
            "Friday": []
        },
        "Samir": {
            "Saturday": [["01:00PM", "03:00PM"]],
            "Sunday": [["03:00PM", "05:00PM"]],
            "Monday": [["08:00AM", "10:00AM"]],
            "Tuesday": [["02:00PM", "04:00PM"]],
            "Wednesday": [["12:00PM", "02:00PM"]],
            "Thursday": [],
            "Friday": []
        }
    };

    function convertToDate(timeStr) {
        const [time, period] = timeStr.split(/(AM|PM)/);
        const [hours, minutes] = time.split(":").map(num => parseInt(num, 10));
        const date = new Date();
        date.setHours((period === 'AM' && hours === 12) ? 0 : (period === 'PM' && hours !== 12) ? hours + 12 : hours);
        date.setMinutes(minutes);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    }

    function isFriendFree(name, day, currentTime) {
        const friendSchedule = schedules[name] && schedules[name][day];
        if (friendSchedule) {
            for (let [start, end] of friendSchedule) {
                const startTime = convertToDate(start);
                const endTime = convertToDate(end);
                if (startTime <= currentTime && currentTime <= endTime) {
                    return false;
                }
            }
        }
        return true;
    }

    function findFreeFriends(day, currentTime) {
        const freeFriends = [];
        sigmas.forEach(name => {
            if (isFriendFree(name, day, currentTime)) {
                freeFriends.push(name);
            }
        });
        return freeFriends;
    }

    function checkAvailability() {
        const currentDate = new Date();
        const currentDay = currentDate.toLocaleString('en-us', { weekday: 'long' });
        const currentTime = new Date(currentDate).setSeconds(0, 0); // Rounded to nearest minute

        const freeFriends = findFreeFriends(currentDay, currentTime);
        let statement = "";
        freeFriends.forEach(friend => {
            statement += friend + ", ";
        });

        const freeDiv = document.querySelector(".free");
        const inClassDiv = document.querySelector(".in-class");

        freeDiv.innerHTML = "";
        inClassDiv.innerHTML = "";

        if (freeFriends.length === sigmas.length) {
            freeDiv.innerHTML = `All of our buddies are free now.<br>Also ask them for how long they are free cause I am currently working to fix that bug!`;
        } else {
            let pronoun = freeFriends.length > 1 ? "them" : "he";
            freeDiv.innerHTML = `${statement.slice(0, -2)} is/are free now.<br>Also ask ${pronoun} for how long they are free cause I am currently working to fix that bug!`;

            const inClass = sigmas.filter(name => !freeFriends.includes(name));
            if (inClass.length > 0) {
                inClassDiv.innerHTML = `${inClass.join(", ")} is/are in class.`;
            }
        }
    }

    // Call the function on page load
    checkAvailability();
});