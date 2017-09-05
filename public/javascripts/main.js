var hamilton = new Howl({
    src: ['./audio/throughSatisfied.mp3'],
    rate: 1
});
var hamiltonArray = [80.37866666666667,
    84.17066666666666, 167.66933333333333,
    169.73866666666666,
    181.90933333333334,
    183.70933333333332, 232.34933333333333];
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
    hamilton.seek(goRand());
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
});

function goRand() {
    tem = (Math.random() * hamLength);
    console.log(tem);
    return tem;
}
