var hamilton = new Howl({
        src: ['./audio/firstSix.mp3'],
        rate: 1

    });

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


    function goRand(){
        tem = Math.floor(Math.random()*230 + 10);
        return tem;
    }
