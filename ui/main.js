function clock() {
    document.getElementById('clock-div').innerHtml = Date.now();
}

setInterval(clock, 1000);
