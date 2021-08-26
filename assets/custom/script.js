(function () {
    'use strict';


    // function([string1, string2],target id,[color1,color2])    
    consoleText(
        [
            'Ran a marathon, so what?',
            'Run Beyond 42.195!',
            'Marathoner & 50 years this year?',
            'Run 50km @ 50 to celebrate!',
            'Ho, hum! Ran 42.195, now what?',
            'Run 50km to achieve your next challenge!',
            'Ultra runner & wanting to stretch your legs?',
            'Run Beyond 42.195',
            'Run Beyond 42.195 just coz you can!!'
        ], 'text',
        ['DarkRed', 'rebeccapurple', 'crimson', 'brown', 'DarkMagenta', 'DarkSlateGrey', 'ForestGreen', 'Indigo', 'Maroon']);

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 60)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'

                visible = true;
            }
        }, 400)
    }



})();
