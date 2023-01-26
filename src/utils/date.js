// Example: Date Conversion in Different Formats

// var date = new Date('2015-02-10T10:12:50.5000z');

// date; 'Default format:'

// date.toDateString();'Tue Feb 10 2015'

// date.toLocaleDateString();'2/10/2015'

// date.toGMTString(); 'GMT format'

// date.toISOString(); '2015-02-10T10:12:50.500Z'

// date.toLocaleString();'Local date Format '

// date.toLocaleTimeString(); 'Locale time format '

// date.toString('YYYY-MM-dd'); 'Tue Feb 10 2015 15:42:50'

// date.toTimeString(); '15:42:50'

// toGMTString gives you Wed, 23 Jan 2019 09:23:42 GMT

//toUTCString gives you Wed, 23 Jan 2019 09:23:42 GMT

///////////////////////////////////////////////////////////////////
// let objectDate = new Date();

// let day = objectDate.getDate();
// console.log(day); // 23

// let month = objectDate.getMonth();
// console.log(month + 1); // 8

// let year = objectDate.getFullYear();
// console.log(year); // 2022

// objectDate.toLocaleString(undefined, {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     weekday: 'long',
//     hour: '2-digit',
//     hour12: true,
//     minute: '2-digit',
//     second: '2-digit',
//   })

// date = [
//     objectDate.getFullYear(),
//     ('0' + (objectDate.getMonth() + 1)).slice(-2),
//     ('0' + objectDate.getDate()).slice(-2)
//   ].join('-');

////////////////////////////////////////////////////////////////////
