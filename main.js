(function($){
    const track_list = [
        {
            name: "It's Not Living",
            artist: "The 1975",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/A_Brief_Inquiry_into_Online_Relationships.png/800px-A_Brief_Inquiry_into_Online_Relationships.png",
            path: "INL.mp3"
        },
        {
            name: "Mary On A Cross",
            artist: "Ghost",
            image: "https://cdns-images.dzcdn.net/images/cover/dde66ec3d6cb5d4d6355b1b6ead83a46/500x500.jpg",
            path: "MOAC.mp3"
        },
        {
            name: "Endlessly",
            artist: "The Cab",
            image: "https://e.snmc.io/i/1200/s/8bc986ce86eda9c8a111ffd7408aee0e/3844947",
            path: "Endlessly.mp3"
        }
    ];

    $(document).ready(function() {
        var x = 0;
        var y = "";
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', track_list[x].path);

        audioElement.addEventListener('ended', function() {
            this.play();
        }, false);
        
        audioElement.addEventListener("canplay", function(){
            $("#length").text("Duration:" + audioElement.duration + " seconds");
            $("#source").text("Source:" + audioElement.src);
            $("#status").text("Status: Ready to play").css("color","green");
        });
        
        audioElement.addEventListener("timeupdate", function(){
            y = "0";
            var Amin = Math.floor(audioElement.currentTime/60);
            var Dmin = Math.floor(audioElement.duration/60);
            var Asec = Math.floor(audioElement.currentTime - Amin * 60);
            var Dsec = Math.floor(audioElement.duration - Dmin * 60);
            if(Asec < 10){
                Asec = "0" + Asec;
            }

            if(Amin > 10){
                y="";
            }

            if(Dsec < 10){
                Dsec = "0" + Dsec;
            }

            if(Dmin > 10){
                y="";
            }

            $(".current_time").text(y+Amin+":"+Asec);

            $(".total_duration").text(y+Dmin+":"+Dsec);

            if( isNaN(Dmin) || isNaN(Dsec)) {
                $(".total_duration").text("00:00");
            }
        });


        $('#song').text(x+1);
        $('#singer').text(track_list.length);
        $('.track-art').css('background-image', 'url(' + track_list[x].image + ')');
        $('.track-name').text(track_list[x].name);
        $('.track-artist').text(track_list[x].artist);

        $('.fa-pause').click(function() {
            $('.fa-pause').hide();
            $('.fa-play-circle').show();
            audioElement.pause();
        });

        $('.fa-play-circle').click(function() {
            $('.fa-pause').show();
            $('.fa-play-circle').hide();
            audioElement.play();
        });

        $('.fa-step-forward').click(function() {
            x+=1;

            if( x == track_list.length ) {
                x = 0;
                $('#song').text(x+1);
                $('#singer').text(track_list.length);
                audioElement.setAttribute('src', track_list[x].path);
                $('.fa-pause').hide();
                $('.fa-play-circle').show();
                $('.track-art').css('background-image', 'url(' + track_list[x].image + ')');
                $('.track-name').text(track_list[x].name);
                $('.track-artist').text(track_list[x].artist);
            } else {
                $('#song').text(x+1);
                $('#singer').text(track_list.length);
                audioElement.setAttribute('src', track_list[x].path);
                $('.fa-pause').hide();
                $('.fa-play-circle').show();
                $('.track-art').css('background-image', 'url(' + track_list[x].image + ')');
                $('.track-name').text(track_list[x].name);
                $('.track-artist').text(track_list[x].artist);
            }
        });

        $('.fa-step-backward').click(function() {
            x-=1;

            if( x == -1 ) {
                x = track_list.length - 1;
                $('#song').text(x+1);
                $('#singer').text(track_list.length);
                audioElement.setAttribute('src', track_list[x].path);
                $('.fa-pause').hide();
                $('.fa-play-circle').show();
                $('.track-art').css('background-image', 'url(' + track_list[x].image + ')');
                $('.track-name').text(track_list[x].name);
                $('.track-artist').text(track_list[x].artist);
            } else {
                $('#song').text(x+1);
                $('#singer').text(track_list.length);
                audioElement.setAttribute('src', track_list[x].path);
                $('.fa-pause').hide();
                $('.fa-play-circle').show();
                $('.track-art').css('background-image', 'url(' + track_list[x].image + ')');
                $('.track-name').text(track_list[x].name);
                $('.track-artist').text(track_list[x].artist);
            }
        });
    });
})(jQuery);