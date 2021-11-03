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

    var runnersData = [
        {
            "NAME": "Karthik Anand",
            "BIB": "B42SE028",
            "DURATION": "3:59:28",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Bhanumoorthy",
            "BIB": "B42SE010",
            "DURATION": "4:15:31",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Paras",
            "BIB": "B42SE040",
            "DURATION": "4:28:04",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Suneel Kumar Koyi",
            "BIB": "B42SE061",
            "DURATION": "4:32:04",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Chandrakanth m",
            "BIB": "B42SE013",
            "DURATION": "4:36:52",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Vinay Krishnamurthy",
            "BIB": "B42SE074",
            "DURATION": "4:37:33",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Sameer Joshi",
            "BIB": "B42SE048",
            "DURATION": "4:39:58",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Vandana Arora",
            "BIB": "B42SE078",
            "DURATION": "4:42:24",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Kuljeet Singh",
            "BIB": "B42SE032",
            "DURATION": "4:44:00",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Jay Moodley",
            "BIB": "B42SE025",
            "DURATION": "4:49:45",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Ambuj Kumar",
            "BIB": "B42SE002",
            "DURATION": "4:59:37",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Ashwini G",
            "BIB": "B42SE009",
            "DURATION": "5:04:37",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Shital Mogane",
            "BIB": "B42SE055",
            "DURATION": "5:05:44",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Uttam Kumar Shetty",
            "BIB": "B42SE066",
            "DURATION": "5:08:57",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Sushil Kannan",
            "BIB": "B42SE062",
            "DURATION": "5:17:06",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Prakash Arumugam",
            "BIB": "B42SE042",
            "DURATION": "5:24:19",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Taher Merchant",
            "BIB": "B42SE064",
            "DURATION": "5:26:25",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Rajesh Mylavarapu",
            "BIB": "B42SE045",
            "DURATION": "5:26:29",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Sanjeev",
            "BIB": "B42SE049",
            "DURATION": "5:35:21",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Dhananjaya G",
            "BIB": "B42SE019",
            "DURATION": "5:43:45",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Naveen Kumar Ramasamy",
            "BIB": "B42SE036",
            "DURATION": "5:44:49",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Raju Alluri",
            "BIB": "B42SE047",
            "DURATION": "5:48:00",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Karthik Ramamurthy",
            "BIB": "B42SE029",
            "DURATION": "5:49:04",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Krishna",
            "BIB": "B42SE031",
            "DURATION": "5:53:20",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Venugopal Hanumanthaiah",
            "BIB": "B42SE069",
            "DURATION": "5:53:50",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Deepa Bhat",
            "BIB": "B42SE016",
            "DURATION": "6:06:18",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Suchitra P",
            "BIB": "B42SE059",
            "DURATION": "6:07:48",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Nisha Millet",
            "BIB": "B42SE038",
            "DURATION": "6:16:06",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Patrick Pitchappa",
            "BIB": "B42SE041",
            "DURATION": "6:16:38",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Joyjeet Bose",
            "BIB": "B42SE026",
            "DURATION": "6:21:50",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Satish VT",
            "BIB": "B42SE077",
            "DURATION": "6:21:56",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Guruprasad Krishnamurthy",
            "BIB": "B42SE023",
            "DURATION": "6:22:04",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Uttara Aiyer",
            "BIB": "B42SE067",
            "DURATION": "6:29:12",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Santhosh Shivaram",
            "BIB": "B42SE050",
            "DURATION": "6:32:23",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Lavanya Tekumalla",
            "BIB": "B42SE033",
            "DURATION": "6:33:38",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Chaitra P",
            "BIB": "B42SE012",
            "DURATION": "6:33:42",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Rajesh Punnoose",
            "BIB": "B42SE046",
            "DURATION": "6:33:47",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Ashok S",
            "BIB": "B42SE007",
            "DURATION": "6:34:37",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Vinay Bhat",
            "BIB": "B42SE073",
            "DURATION": "6:37:18",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Vidyashankar Prasad",
            "BIB": "B42SE071",
            "DURATION": "6:43:51",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Manmohan K R",
            "BIB": "B42SE035",
            "DURATION": "6:45:32",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Shamala Manmohan",
            "BIB": "B42SE052",
            "DURATION": "6:45:32",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Chiran Babu Appajaiah",
            "BIB": "B42SE015",
            "DURATION": "6:47:11",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Bhuvan Surya Purushothama B N",
            "BIB": "B42SE011",
            "DURATION": "6:48:49",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Naveen Wali",
            "BIB": "B42SE037",
            "DURATION": "6:52:17",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Vijay Sriram",
            "BIB": "B42SE076",
            "DURATION": "6:52:22",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Kaleem pasha",
            "BIB": "B42SE027",
            "DURATION": "6:52:40",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Giridhar LV",
            "BIB": "B42SE020",
            "DURATION": "6:57:24",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Priya BR",
            "BIB": "B42SE044",
            "DURATION": "7:08:30",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Mahesh Naik",
            "BIB": "B42SE034",
            "DURATION": "7:08:56",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Sreedevi",
            "BIB": "B42SE057",
            "DURATION": "7:19:43",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Abhinav Suresh",
            "BIB": "B42SE001",
            "DURATION": "7:19:45",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Anant Mathur",
            "BIB": "B42SE004",
            "DURATION": "7:28:04",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Prashant Bhujang",
            "BIB": "B42SE043",
            "DURATION": "7:29:02",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Shankara Babu",
            "BIB": "B42SE054",
            "DURATION": "7:34:09",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Gopikrishnan M",
            "BIB": "B42SE021",
            "DURATION": "7:34:21",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Sukesh R Nayak",
            "BIB": "B42SE060",
            "DURATION": "7:46:28",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Vetrivel",
            "BIB": "B42SE070",
            "DURATION": "7:46:28",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Anand Katta",
            "BIB": "B42SE003",
            "DURATION": "7:49:29",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Vindhya Joseph",
            "BIB": "B42SE075",
            "DURATION": "7:50:25",
            "CERTIFICATE": ""
        },
        {
            "NAME": "Anikethan V",
            "BIB": "B42SE005",
            "DURATION": "7:56:14"
        }
    ];
    
    function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
      data.forEach((d, i) => {
        var tr = nl.insertRow(i);
        Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
          var cell = tr.insertCell(j);
          cell.innerHTML = d[k]; // Assign object values to cells   
        });
        nl.appendChild(tr);
      })
    }
    var resultTable = document.querySelector("#results");
    addDataToTbody(resultTable, runnersData);
    
})();
