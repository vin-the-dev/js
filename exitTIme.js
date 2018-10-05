// Here You can type your custom JavaScript...

var tbl = document.getElementsByTagName('table')[1];
var row = tbl.rows[tbl.rows.length - 2];
var inTime = row.cells[row.cells.length - 1].innerText;

var splitStr = inTime.split(":");
var inTime = new Date();

inTime.setHours(splitStr[0],splitStr[1],splitStr[2]);

var endTime = new Date();
endTime.setHours(8,0,0,0);

var eTime = moment(endTime);
var iTime = moment(inTime);

var dur = moment.duration(eTime.diff(iTime));

var now = moment(new Date());
now = now.add(dur);

var div = document.createElement('div');

div.className = 'row';

div.innerHTML = '<div style="font-size: 30px;"> You can leave at ' 
    + now.format("hh:mm:SS A") 
    + ' (' + dur.hours() + ' h and ' + dur.minutes() + ' m ) yahoo ' 
    + ' <div>';

var ele = document.getElementsByClassName('footerInner')[0];
ele.appendChild(div);

