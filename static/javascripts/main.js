var hamilton = new Howl({
    src: ['static/audio/throughSatisfied.mp3'],
    rate: 1
});
var activeSrc = "static/images/activewave.gif";
var stillSrc = "static/images/stillwave.gif";
var waveformGif = $("<img>");
var waveClass = $(".waveformGif");
var playQuery = $("#play");
var pauseQuery = $("#pause");
var test;


var hamiltonArray = [1436.95, 252.80, 232.349, 1502.86133, 2047.40, 181.72, 84.12, 1523.7, 80.2, 1635.62];
var hamArrayLen = hamiltonArray.length;
var hamLength;
var timestamp;

playQuery.on('click', function () {
    hamilton.play();
    waveClass.attr("src", activeSrc);
    waveClass.attr("data-state", "animate");
});

pauseQuery.on('click', function () {
    hamilton.pause();
    waveClass.attr("src", stillSrc);
    waveClass.attr("data-state", "still");
});

$('#stop').on('click', function () {
    hamilton.stop();
});

$('#currentTimeI').on('click', function () {
    currentTime();
});

function currentTime() {
    var timestamp = hamilton.seek();
    console.log(timestamp);
    $('#timestamps').append(timestamp + '<br>');
    return timestamp;
}

$('#custTime').on('click', function () {
    var req = parseFloat($('#customTime').val());
    console.log(req);
    hamilton.stop();
    hamilton.seek(req);
    hamilton.play();
    $('#customTime').val("");

});

// 167.608 jump to hamilton

$('#jump').on('click', function () {
    hamilton.stop();
    var tempRand = goRand();
    console.log(tempRand)
    hamilton.seek(tempRand);
    hamilton.play();
    var progVal = (tempRand / hamLength)*100;

    $("#timeBar").val(progVal.toString());
});

$('#jumpTen').on('click', function () {
    var now = hamilton.seek();
    console.log(typeof(now));
    hamilton.stop();
    hamilton.seek(now + 10);
    hamilton.play();
});


hamilton.on("load", function () {
    hamLength = hamilton.duration();
    console.log(hamLength);
    secToMin(hamLength);
    // setInterval(function () {
    //     console.log(hamilton.seek());
    // }, 50);
});

function goRand() {
    tem = (Math.random() * hamLength);
    return tem;
}

function goRandHamilton() {
    var ha = Math.floor(Math.random() * hamArrayLen);
    console.log(hamiltonArray[ha]);
    return hamiltonArray[ha];
}

function secToMin(sec) {
    var totalSec = sec;
    var totalMin = 0;
    do {

        totalSec -= 60;
        totalMin++;
    }
    while (totalSec >= 60);
    var minExport = totalMin;
    var secExport = Math.ceil(totalSec);
    $("#totalTime").html(minExport + ":" + secExport);

}



$('#timeBar').on('click', function () {
    $(this).val("75");
});


