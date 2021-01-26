
var then = "08/04/2016 17:00:00";
var ms = moment(moment(),"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
var d = moment.duration(ms);
s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
h = moment.duration(s).hours();
m = moment.duration(s).minutes();
sec = moment.duration(s).seconds();
days = moment().diff(moment("08-04-2016", "DD-MM-YYYY"), 'days');
x = Math.random().toFixed(2);
y = Math.random().toFixed(2);
z = Math.random().toFixed(2);
document.write(days +" days" + " " + h + ":" + m + ":" + sec + ", 1 user, " + "load average: " + x + ", " + y + ", " +z);

function update() {
    var then = "08/04/2016 17:00:00";
    var ms = moment(moment(),"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
    var d = moment.duration(ms);
    s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    h = moment.duration(s).hours();
    m = moment.duration(s).minutes();
    sec = moment.duration(s).seconds();
    days = moment().diff(moment("08-04-2016", "DD-MM-YYYY"), 'days');
    $('#clock').html(days +" days" + " " + h + ":" + m + ":" + sec + ", 1 user, " + "load average: " + x + ", " + y + ", " +z);
}
setInterval(update,1000);
