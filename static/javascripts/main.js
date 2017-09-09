var hamilton = new Howl({
    src: ['./audio/throughSatisfied.mp3'],
    rate: 1
});
var hamiltonArray = [1436.95, 252.80, 232.349, 1502.86133, 2047.40, 181.72, 84.12, 1523.7, 80.2, 1635.62];
var hamArrayLen = hamiltonArray.length;
var hamLength;
var timestamp;

$('#play').on('click', function () {
    hamilton.play();
});

$('#pause').on('click', function () {
    hamilton.pause();
});

$('#stop').on('click', function () {
    hamilton.stop();
});

$('#currentTime').on('click', function () {
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
    hamilton.seek(goRandHamilton());
    hamilton.play();
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
    // setInterval(function () {
    //     console.log(hamilton.seek());
    // }, 50);
});

function goRand() {
    tem = (Math.random() * hamLength);
    console.log(tem);
    return tem;
}

function goRandHamilton() {
    var ha = Math.floor(Math.random() * hamArrayLen);
    console.log(hamiltonArray[ha]);
    return hamiltonArray[ha];
}
