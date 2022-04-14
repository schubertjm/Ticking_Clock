function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var hourCalc = Math.floor(time/3600)
    var conversionCalc = 10/6
    var minuteFraction = (time/3600) - hourCalc
    var minuteLongCalc = minuteFraction/conversionCalc
    var minuteCalc = Math.floor(minuteLongCalc * 100) /100
    var secondFraction = minuteLongCalc - minuteCalc
    var secondInitialCalc = secondFraction/conversionCalc
    var secondCalc = Math.ceil(secondInitialCalc.toFixed(4) *10000) ;
    
    console.log ("time   " + time);
    console.log ("hour   " + hourCalc)
    console.log ("minute " + Math.floor(minuteCalc * 100))
    console.log ("Second " + secondCalc)
    console.log ("-----------------------------------")

    var rotateMinSecArr = [
        180,186,192,198,204,210,216,222,228,234,
        240,246,252,258,264,270,276,282,288,294,
        300,306,312,318,324,330,336,342,348,354,
        0,6,12,18,24,30,36,42,48,54,
        60,66,72,78,84,90,96,102,108,114,
        120,126,132,138,144,150,156,162,168,174,180
    ]

    document.getElementById('seconds').style.transform = "rotate(" + rotateMinSecArr[secondCalc] + "deg)";
    document.getElementById('minutes').style.transform = "rotate(" + Math.floor(rotateMinSecArr[minuteCalc * 100]) + "deg)";

    var rotateHourArr = [
        180,210,240,270,300,330,360,30,60,90,120,150,
        180,210,240,270,300,330,360,30,60,90,120,150
    ]

    document.getElementById('hour').style.transform = "rotate(" + rotateHourArr[hourCalc] + "deg)";

}, 1000);

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds(); 
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('textDisplay').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}