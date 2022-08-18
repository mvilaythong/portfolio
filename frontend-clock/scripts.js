// new Date object and function to display time in 12 hour clock
function displayTime() {
    let dateTime = new Date(); // new Date object
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hours >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if (hours > 12){
        hours = hours - 12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(displayTime, 10);

// array of colors and function change color every second
let backgroundArray = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1']
let changeColor = document.getElementById('changeColor');
let i = 0;
 
setInterval(function() {
    changeColor.style.backgroundColor = backgroundArray[i];
    i++;
    if (i == backgroundArray.length) {
        i = 0; // restarts to [0] of backgroundArray
    }
}, 1000);