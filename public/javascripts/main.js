var hamilton = new Howl({
    src: ['./audio/firstSix.mp3'],
    rate: 1

});

var hamLength;

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
    var timestamp = hamilton.seek();
    $('#timestamps').append(timestamp + '<br>');
});

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




hamilton.on("load", function () {
    hamLength = hamilton.duration();
    console.log(hamLength);
});

function goRand() {
    tem = (Math.random() * hamLength);
    console.log(tem);
    return tem;
}
