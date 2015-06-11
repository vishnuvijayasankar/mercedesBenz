var $selectedDriver = null;

function myFunc($value) {
    console.log($value);
    $selectedDriver = $value;
    console.log($selectedDriver);
}
 

$(function () {
    $.getJSON('../assets/json/data.json', function(data) {
        drivers = data['Drivers'];
        $.each(drivers, function(id, drivers) {
            $('#drivers').append('<div class="optionsButton"><input name="driver" type="radio" id="'+drivers["id"]+'" value="'+drivers["id"]+'" onclick="myFunc(this.id)"><img src="'+drivers["image"]+'">'+drivers["name"]+'</div>');
        });
    });
    // <div  class="optionsButton"><input type="radio" name="allDriver" value="male"><img src="../assets/images/user.png">All Drivers</div>

    var driverList = $.grep(drivers, function(element, index) {
        return element;
    });

    var Days = $.grep(days, function(element, index) {
        return element;
    });

    var ScoresData = new Array();
    var AccData = new Array();
    var BrakeData = new Array();
    var TurnData = new Array();
    var CrashData = new Array();

    for(var i=0;i<driverList.length;i++) {
        
        var ScoresArg = new Object();
        var AccArg = new Object();
        var BrakeArg = new Object();
        var TurnArg = new Object();
        var CrashArg = new Object();

        ScoresArg.name = driverList[i].name;
        ScoresArg.data = driverList[i].score;
        AccArg.name = driverList[i].name;
        AccArg.data = driverList[i].acceleration;
        BrakeArg.name = driverList[i].name;
        BrakeArg.data = driverList[i].break;
        TurnArg.name = driverList[i].name;
        TurnArg.data = driverList[i].turn;
        CrashArg.name = driverList[i].name;
        CrashArg.data = driverList[i].crash;
        
        ScoresData.push(ScoresArg);
        AccData.push(AccArg);
        BrakeData.push(BrakeArg);
        TurnData.push(TurnArg);
        CrashData.push(CrashArg);
    }

    $('#charts').highcharts({
        title: {
            text: 'Driver Dashboard - Scores',
            x: -20 //center
        },
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
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: ScoresData
    });

    var $ContainerDiv = $('#content');
    $('input[type=radio][name=options]').change(function() {
        if (this.value == 'score') {
            $('#charts').highcharts({
                title: {
                    text: 'Driver Dashboard - Scores',
                    x: -20 //center
                },
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
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: ScoresData
            });
        }
        else if (this.value == 'acceleration') {
            $('#charts').highcharts({
                title: {
                    text: 'Driver Dashboard - Acceleration',
                    x: -20 //center
                }, 
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
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: AccData
            });
        }
        else if (this.value == 'breakdowns') {
            $('#charts').highcharts({
                title: {
                    text: 'Driver Dashboard - Breaks',
                    x: -20 //center
                },
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
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: BrakeData
            });
        }
        else if (this.value == 'turns') {
            $('#charts').highcharts({
                title: {
                    text: 'Driver Dashboard - Sharp Turns',
                    x: -20 //center
                }, 
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
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: TurnData
            });
        }
        else if (this.value == 'crashes') {
            $('#charts').highcharts({
                title: {
                    text: 'Driver Dashboard - Crashes',
                    x: -20 //center
                }, 
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
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: CrashData
            });
        }
    });


   
    // $('#charts').highcharts({
    //     title: {
    //         text: 'Driver Dashboard - Acceleration',
    //         x: -20 //center
    //     }, 
    //     xAxis: {
    //         categories: Days
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Acceleration'
    //         },
    //         plotLines: [{
    //             value: 0,
    //             width: 1,
    //             color: '#808080'
    //         }]
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'middle',
    //         borderWidth: 0
    //     },
    //     series: AccData
    // });
    // $('#charts').highcharts({
    //     title: {
    //         text: 'Driver Dashboard - Breaks',
    //         x: -20 //center
    //     },
    //     xAxis: {
    //         categories: Days
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Breaks'
    //         },
    //         plotLines: [{
    //             value: 0,
    //             width: 1,
    //             color: '#808080'
    //         }]
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'middle',
    //         borderWidth: 0
    //     },
    //     series: BrakeData
    // });
    // $('#container4').highcharts({
    //     title: {
    //         text: 'Driver Dashboard - Sharp Turns',
    //         x: -20 //center
    //     }, 
    //     xAxis: {
    //         categories: Days
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Sharp Turns'
    //         },
    //         plotLines: [{
    //             value: 0,
    //             width: 1,
    //             color: '#808080'
    //         }]
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'middle',
    //         borderWidth: 0
    //     },
    //     series: TurnData
    // });
    // $('#container5').highcharts({
    //     title: {
    //         text: 'Driver Dashboard - Crashes',
    //         x: -20 //center
    //     }, 
    //     xAxis: {
    //         categories: Days
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Crashes'
    //         },
    //         plotLines: [{
    //             value: 0,
    //             width: 1,
    //             color: '#808080'
    //         }]
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'middle',
    //         borderWidth: 0
    //     },
    //     series: CrashData
    // });
});