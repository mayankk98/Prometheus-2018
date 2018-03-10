var treshold = document.documentElement.clientWidth / 3;
var minDistance = document.documentElement.clientHeight / 4;

var startX, startY;

window.addEventListener('touchstart', function(e) 
{
    startX = e.changedTouches[0].pageX;
    startY = e.changedTouches[0].pageY;
});

window.addEventListener('touchend', function(e) 
{
    var endX = e.changedTouches[0].pageX;
    var endY = e.changedTouches[0].pageY;
    var disX = endX - startX;
    var disY = endY - startY;

    if (Math.abs(disX) < treshold && Math.abs(disY) > minDistance) 
    {
        //scroll events happen here
    }
});
