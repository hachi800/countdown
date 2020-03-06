window.onload = firstscript;
setInterval('time()',1000);

function firstscript(){
    time();
}

function time(){
    var now = new Date();
    var point = new Date('2020-03-20T19:00:00');
    var limit = new Date();
    var limitSec = (Math.floor(point.getTime() / 1000))-(Math.floor(now.getTime() / 1000));
    var h = Math.floor(limitSec / 3600);
    var m = Math.floor((limitSec % 3600) / 60);
    var s = ((limitSec % 3600) % 60);

    document.getElementById("limit").innerHTML = (h-9) + ":" + ('00'+m).slice(-2) + ":" + ('00'+s).slice(-2);
}   

function twitterMyAccount(){
    window.location.href = "https://twitter.com/HACHIGUILE";
}
