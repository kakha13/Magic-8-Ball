function circle(simagle) {
    $('.circle').css('height', simagle + 'px');
    $('.circle').css('width', simagle + 'px');
    $('.circleInside').css('height', simagle / 2 + 'px');
    $('.circleInside').css('width', simagle / 2 + 'px');
    $('.circleInside').css('top', simagle / 4 + 'px');
    $('.img').css('top', $('.circleInside').height() / 4 + 'px');
    $('#message').css('top', $('.circleInside').height() / 3 + 'px');
    $('#message').css('width', $('.img').width() / 2 + 'px');
    causeRepaintsOn = $("#message");
}

function circletop(){
	var height = $(window).height();
	var circleHeight = $('.circle').height() +90;
	var circleTop = (height - circleHeight ) / 2; 
	$('.circle').css('top',circleTop+'px');
}

$(function() {
    var height = $(window).height();
    var width = $(window).width();
    if (height > width) var height = width;

    var simagle = height - 120;

    console.log(simagle);

    $(window).resize(function() {

        var height = $(window).height();
        var width = $(window).width();
        if (height > width) var height = width;
        var simagle = height - 120;

        circle(simagle);
		circletop();
        console.log(simagle);
    });

	
    circle(simagle);
	circletop();



    lang = 'geo';
    $('.eng').click(function() {
        $('#message').html('Click Here!');
        lang = 'eng';
        $(this).addClass('active');
        $('.geo').removeClass('active');
    });
    $('.geo').click(function() {
        $('#message').html('დააკლიკე!');
        lang = 'geo';
        $('.eng').removeClass('active');
        $(this).addClass('active');
    });
    console.log(lang);

    var isStopped = false;

    function explode() {
        $('#messageContainer').show();
		$( ".circle" ).stop(true, true);
    }

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', update, true);

    } else {
        var warning = document.getElementById('warning');
        warning.textContent = 'This browser does not support the DeviceOrientation Events :-(';
        message.textContent = 'Your browser sucks';
    }

    function update(event) {

        var message = document.getElementById('message');

        function show() {
            if (lang == 'eng') {
                var answers = [
                    'It is certain',
                    'It is decidedly so',
                    'Without a doubt',
                    'Yes, definitely',
                    'You may rely on it',
                    'As I see it, yes',
                    'Most likely',
                    'Outlook good',
                    'Yes',
                    'Signs point to yes',
                    'Reply hazy, try again',
                    'Ask again later',
                    'Better not tell you now',
                    'Cannot predict now',
                    'Concentrate and ask again',
                    'Don\'t count on it',
                    'My reply is no',
                    'My sources say no',
                    'Outlook not so good',
                    'Very doubtful'
                ];
            } else {
                var answers = [
                    'დაიკიდე',
                    'კაი ნუ გაატრაკე!',
                    'კი ძმა!',
                    'დიახ დიახ',
                    'არამგონია',
                    'შენ უფრო იცი',
                    'შედი ქალო ბუტკაში!',
                    'ეგ ღმერთმაც არ იცის!',
                    'რომიკბინოს?!',
                    'სერიოზულად?',
                    'რიავი აბა.',
                    'ორი ბერა გუდაურია?',
                    'ბატები',
                    'სამოთხეშია შენი ადგილი',
                    'მაინც ვერ გადარჩები',
                    'რა გიხარია მაინც უნდა მოკვდე',
                ];
            }

            var answer = answers[Math.floor(Math.random() * (answers.length))];
            var messageContainer = document.getElementById('messageContainer');

            if (isStopped == false) {

                answer = answers[Math.floor(Math.random() * (answers.length))];

            } else {
                message.style.opacity = 1;

            }
            message.textContent = answer;
        };

        $('.ask').click(function() {
			$( ".circle" ).effect( "shake" );
            $('#messageContainer').hide();
            show();
            setTimeout(explode, 1000);

        });

    }
	
	
	$('.instruction').click(function(){	
		$('.info').show();
	});
	$('.close').click(function(){
		$('.info').hide();
	});

});