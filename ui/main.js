var clock = function() {
    document.getElementById('clock-div').innerHtml = Date.now();
}

setInterval(clock, 1000);
