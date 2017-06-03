var clock = function() {
    var d = new Date();
    document.getElementById('clock-div').innerHtml = d.toLocalTimeString();
}

setInterval(clock, 1000);
