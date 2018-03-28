

    CountDownTimer('04/13/2018 10:1 AM', 'countdown');
    CountDownTimer('04/16/2018 10:1 AM', 'newcountdown');

    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = days + '&nbsp;D&nbsp;&nbsp;&nbsp; ' ;
            document.getElementById(id).innerHTML += hours +'&nbsp;H&nbsp;&nbsp;&nbsp;  ';
            document.getElementById(id).innerHTML += minutes +'&nbsp;M&nbsp;&nbsp;&nbsp;  ' ;
            document.getElementById(id).innerHTML += seconds +'&nbsp;S&nbsp;&nbsp;&nbsp;   ';
        }

        timer = setInterval(showRemaining, 1000);
    }
