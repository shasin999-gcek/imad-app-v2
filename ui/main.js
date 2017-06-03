var clock = function() {
    var d = new Date();
    document.getElementById('clock-div').innerHtml = d.toLocalTimeString();
}

setInterwell(clock, 1000);
