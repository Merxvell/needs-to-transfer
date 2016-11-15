var today = new Date(); //get todays date
var year = today.getFullYear(); //get todays year

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';

//date object eifference

var est = new Date('Apr 16, 1996 15:45:55'); //input a specific date
//format is YYYY, MM, DD, HH, MM, SS or MMM DD, YYYY HH:MM:SS
// 1996, 03, 16, 15, 45, 55 AKA 3:45:55pm on april 16 1996
var difference = today.getTime() - est.getTime(); //get time
//to get the difference in days/weeks/years you divide this number by
//the number of miliseconds in a day/week/year
difference = (difference / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' year difference';
