(function() {

function clock() {
    var d = new Date();
    document.getElementById('clock-div').innerHtml = d.toLocaleTimeString();
}

setInterval(clock, 1000);

    
})();