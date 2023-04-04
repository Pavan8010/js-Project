setInterval(()=>{
    const time = document.querySelector('#time');
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
        day_night = "PM";
        hours = hours-12;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }
    time.textContent = hours+":"+min+":"+sec +" " + day_night;
});