/* DATE */
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export const getStrByDate = (date) => {
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    let dayOfWeek = dayNames[date.getDay()];

    const current = new Date();

    if (
        current.getFullYear() === date.getFullYear() &&
        current.getMonth() === date.getMonth()
    ) {
        if (current.getDate() === date.getDate()) {
            dayOfWeek = 'Today';
        }
        if (current.getDate() + 1 === date.getDate()) {
            dayOfWeek = 'Tomorrow';
        }
    }

    return dayOfWeek + ', ' + month + ' ' + day;
}

/* TIME */
export const objToTime = (time) => {
    const hour = ('0' + time.hour).slice(-2);
    const minute = ('0' + time.minute).slice(-2);

    return hour + ':' + minute;
}

/* SORT ARRAY OF OBJECTS*/
export const compareById = (first, second) => {
    if (first.id < second.id) {
        return -1;
    } else if (first.id > second.id) {
        return 1;
    } else {
        return 0;
    }
}