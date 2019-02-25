


export function getTodayInWeekdayMonthDayYearFormat() {
    const now = new Date();
    const days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
    const months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
    const date = ((now.getDate()<10) ? "0" : "") + now.getDate();

    
    return days[now.getDay()] + ", " +
            months[now.getMonth()] + " " +
            date + ", " +
            _fourdigits(now.getYear());
}

export function getTimeDateInISOFormat(timeString) {
    const date = new Date(timeString);
    return date.toISOString();
}

export function getTimeDateInISOFormatForToday() {
    const date = new Date();
    return date.toISOString();
}

function _fourdigits(number)  {
    return (number < 1000) ? number + 1900 : number;
}