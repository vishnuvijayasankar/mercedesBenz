$(function () {
      
    var driverList = $.grep(drivers, function(element, index) {
        return element;
    });

    var Days = $.grep(days, function(element, index) {
        return element;
    });

    for(var i=0;i<driverList.length;i++) {
        $('#drivers').append('<div class="optionsButton"><input type="radio" id="'+driverList[i].id+'" name="driver" value="'+driverList[i].id+'"><img src="'+driverList[i].image+'">'+'<label for="'+driverList[i].id+'">'+driverList[i].name+'</label></div>');
    }

    var ScoresData = new Array();
    
    for(var i=0;i<driverList.length;i++) {
        var ScoresArg = new Object();
    
        ScoresArg.name = driverList[i].name;
        ScoresArg.data = driverList[i].score;
        ScoresData.push(ScoresArg);
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

    $('input[type=radio][name=driver]').change(function() {
        var Driver = $('input[type=radio][name=driver]:checked').val();
        var Parameter = $('input[type=radio][name=options]:checked').val();
        
        if(Driver == 'allDrivers') {
            var Data = new Array();
            for(var i=0;i<driverList.length;i++) {
                var ArgObject = new Object();
                ArgObject.name = driverList[i].name;
                
                switch(Parameter) {
                    case 'Scores':      ArgObject.data = driverList[i].score;
                                        break;
                    case 'Acceleration':ArgObject.data = driverList[i].acceleration;
                                        break;
                    case 'Breaks':      ArgObject.data = driverList[i].break;
                                        break;                
                    case 'Turns':       ArgObject.data = driverList[i].turn;
                                        break;
                    case 'Crashes':      ArgObject.data = driverList[i].crash;
                                        break;
                }
                Data.push(ArgObject);
            }
            console.log(Data);
            $('#charts').highcharts({
                    title: {
                        text: 'Driver Dashboard - '+Parameter,
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
                    series: Data
                });    
        } else {
            for(var i=0;i<driverList.length;i++) {
                if(driverList[i].id == Driver) {
                    var ArgObject = new Object();
                    var Data = new Array();
                    
                    ArgObject.name = driverList[i].name;
                    switch(Parameter) {
                        case 'Scores':       ArgObject.data = driverList[i].score;
                                            break;
                        case 'Acceleration':ArgObject.data = driverList[i].acceleration;
                                            break;
                        case 'Breaks':       ArgObject.data = driverList[i].break;
                                            break;                
                        case 'Turns':        ArgObject.data = driverList[i].turn;
                                            break;
                        case 'Crashes':       ArgObject.data = driverList[i].crash;
                                            break;
                    }
                   
                    Data.push(ArgObject);
                    $('#charts').highcharts({
                        title: {
                            text: 'Driver Dashboard - '+Parameter,
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
                        series: Data
                    });
                }
            }
        }
    });
    
    $('input[type=radio][name=options]').change(function() {
        var Driver = $('input[type=radio][name=driver]:checked').val();
        var Parameter = $('input[type=radio][name=options]:checked').val();
        
        if(Driver == 'allDrivers') {
            var Data = new Array();
            for(var i=0;i<driverList.length;i++) {
                var ArgObject = new Object();
                ArgObject.name = driverList[i].name;
                
                switch(Parameter) {
                    case 'Scores':      ArgObject.data = driverList[i].score;
                                        break;
                    case 'Acceleration':ArgObject.data = driverList[i].acceleration;
                                        break;
                    case 'Breaks':      ArgObject.data = driverList[i].break;
                                        break;                
                    case 'Turns':       ArgObject.data = driverList[i].turn;
                                        break;
                    case 'Crashes':     ArgObject.data = driverList[i].crash;
                                        break;
                }
                Data.push(ArgObject);
            }
            $('#charts').highcharts({
                    title: {
                        text: 'Driver Dashboard - '+Parameter,
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
                    series: Data
                });    
        } else {
            for(var i=0;i<driverList.length;i++) {
                if(driverList[i].id == Driver) {
                    var ArgObject = new Object();
                    var Data = new Array();
                    
                    ArgObject.name = driverList[i].name;
                    switch(Parameter) {
                        case 'Scores':       ArgObject.data = driverList[i].score;
                                            break;
                        case 'Acceleration':ArgObject.data = driverList[i].acceleration;
                                            break;
                        case 'Breaks':       ArgObject.data = driverList[i].break;
                                            break;                
                        case 'Turns':        ArgObject.data = driverList[i].turn;
                                            break;
                        case 'Crashes':       ArgObject.data = driverList[i].crash;
                                            break;
                    }
                   
                    Data.push(ArgObject);
                    $('#charts').highcharts({
                        title: {
                            text: 'Driver Dashboard - '+Parameter,
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
                        series: Data
                    });
                }
            }    
        }
        
    });




    var $table = $('#table_data');
    $.getJSON('../assets/json/data.json', function(data) {
        $.each(data.Drivers,function(key,value) {
            var avgScore = 0;
            var avgAcc = 0;
            var avgBrake = 0;
            var avgTurn = 0;
            var avgCrash = 0;
            for(var i=0 ; i<7 ; i++) {
                avgScore += value.score[i];
                avgAcc += value.acceleration[i];
                avgBrake += value.break[i];
                avgTurn += value.turn[i];
                avgCrash += value.crash[i]; 
            }
            avgScore = avgScore/7;
            avgAcc = avgAcc/7;
            avgBrake = avgBrake/7;
            avgTurn = avgTurn/7;
            avgCrash = avgCrash/7;

            avgScore = avgScore.toFixed(2);
            avgAcc = avgAcc.toFixed(2);
            avgBrake = avgBrake.toFixed(2);
            avgTurn = avgTurn.toFixed(2);
            avgCrash = avgCrash.toFixed(2);


            $table.append('<tr><td>'+value.name+'</td><td>'+avgScore+'</td><td>'+avgAcc+'</td><td>'+avgBrake+'</td><td>'+avgTurn+'</td><td>'+avgCrash+'</td></tr>');
        });
    });
    $('table.table-sort').tablesort(); 
});