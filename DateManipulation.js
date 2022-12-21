function add12Hours(dateString) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

    const month = months.indexOf(dateString.match(/^[A-Za-z]+/)[0]);
    const day = parseInt(dateString.match(/\s\d+\s/)[0].trim());
    const year = parseInt(dateString.match(/\d{4}/)[0]);
    const hours = parseInt(dateString.match(/\d{4}\s*\d+/)[0].slice(-2).trim()) + (dateString.match(/am|pm/)[0] === 'pm' ? 12 : 0);
    const minutes = parseInt(dateString.match(/[:]\d{2}/)[0].slice(1, 3));
    
    const inputDate = new Date(year, month, day, hours, minutes);

    inputDate.setHours(inputDate.getHours() + 12);
    const newHrs = inputDate.getHours();

    return months[inputDate.getMonth()] + ' ' 
        + inputDate.getDate() + ' '
        + inputDate.getFullYear() + ' '
        + (newHrs > 12 ? newHrs % 12 : newHrs) + ':'
        + inputDate.getMinutes() + (newHrs >= 12 ? 'pm' : 'am') + ' ' + 'EST';
};

console.log(add12Hours("February 29 2004 9:15pm EST"));