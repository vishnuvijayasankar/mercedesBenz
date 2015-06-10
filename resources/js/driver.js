$(function () {

    var driverList = $.grep(drivers, function(element, index) {
        return element;
    });

    var Days = $.grep(days, function(element, index) {
        return element;
    });

    var ScoresData = new Array();
    for(var i=0;i<driverList.length;i++) {
        var jsonArg = new Object();
        jsonArg.name = driverList[i].name;
        jsonArg.data = driverList[i].score;
        ScoresData.push(jsonArg);
    }
    
    $('#charts').highcharts({
        title: {
            text: 'Driver Dashboard - Scores',
            x: -20 //center
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com',
        //     x: -20
        // },  
        xAxis: {
            categories: Days
        },
        yAxis: {
            title: {
                text: 'Scores'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        // tooltip: {
        //     valueSuffix: '°C'
        // },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: ScoresData
    });
    $('#container2').highcharts({
        title: {
            text: 'Driver Dashboard - Acceleration',
            x: -20 //center
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com',
        //     x: -20
        // },  
        xAxis: {
            categories: Days
        },
        yAxis: {
            title: {
                text: 'Acceleration'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        // tooltip: {
        //     valueSuffix: '°C'
        // },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: driverList[0].name,
            data: driverList[0].acceleration
        }, {
            name: driverList[1].name,
            data: driverList[1].acceleration
        }]
    });
    $('#container3').highcharts({
        title: {
            text: 'Driver Dashboard - Breaks',
            x: -20 //center
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com',
        //     x: -20
        // },  
        xAxis: {
            categories: Days
        },
        yAxis: {
            title: {
                text: 'Breaks'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        // tooltip: {
        //     valueSuffix: '°C'
        // },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: driverList[0].name,
            data: driverList[0].break
        }, {
            name: driverList[1].name,
            data: driverList[1].break
        }]
    });
    $('#container4').highcharts({
        title: {
            text: 'Driver Dashboard - Sharp Turns',
            x: -20 //center
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com',
        //     x: -20
        // },  
        xAxis: {
            categories: Days
        },
        yAxis: {
            title: {
                text: 'Sharp Turns'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        // tooltip: {
        //     valueSuffix: '°C'
        // },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: driverList[0].name,
            data: driverList[0].turn
        }, {
            name: driverList[1].name,
            data: driverList[1].turn
        }]
    });
    $('#container5').highcharts({
        title: {
            text: 'Driver Dashboard - Crashes',
            x: -20 //center
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com',
        //     x: -20
        // },  
        xAxis: {
            categories: Days
        },
        yAxis: {
            title: {
                text: 'Crashes'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        // tooltip: {
        //     valueSuffix: '°C'
        // },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: driverList[0].name,
            data: driverList[0].crash
        }, {
            name: driverList[1].name,
            data: driverList[1].crash
        }]
    });
});