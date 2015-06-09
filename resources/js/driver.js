$("input[name='driver']").on("change", function () {
   	var driver = $("input[type='radio'][name='driver']:checked").val();
	var option = $("input[type='radio'][name='options']:checked").val();
	console.log(driver);
	console.log(option);
	drawChart(driver,option);
});

$("input[name='options']").on("change", function () {
   	var driver = $("input[type='radio'][name='driver']:checked").val();
	var option = $("input[type='radio'][name='options']:checked").val();
	console.log(driver);
	console.log(option);
	drawChart(driver,option);
});

google.load('visualization', '1.1', {packages: ['corechart']});
google.setOnLoadCallback(ScoresChart);
/*
function drawChart(driver,option) {
	
	if(driver == 'driverall') {
		switch(option) {
			case 'score': 		google.load('visualization', '1.1', {packages: ['corechart']});
								google.setOnLoadCallback(ScoresChart);
								break;
			case 'acceleration':google.load('visualization', '1.1', {packages: ['corechart']});
								google.setOnLoadCallback(AccelerationChart);
								break;
			case 'breakdowns': 	google.setOnLoadCallback(BreakChart);
								break;
			case 'turns': 		google.setOnLoadCallback(TurnChart);
								break;
			case 'crashes':		google.setOnLoadCallback(CrashChart);
								break;			
		}
	}
}
*/
function ScoresChart() {
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Day');
   var options = {
      title: 'Driver Scores',
      vAxes: {
         0: {title: 'Scores'}
      }
   };

   $.ajax({
      url: "../assets/json/data.json",
      dataType: "JSON"
   }).done(function(array) {
      $.each(array.drivers, function() {
         data.addColumn('number', this.name);
      });
      for(var j=0;j<array.drivers[0].score.length;j++) {
         var a = array.days[j];
         var b = array.drivers[0].score[j];
         var c = array.drivers[1].score[j];
         data.addRows([[a, b, c]]);
      }
      var chart = new google.visualization.LineChart(document.getElementById('charts'));
      chart.draw(data, options);
   });
}
/*
function AccelerationChart() {
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Day');
   var options = {
      title: 'Event - Acceleration',
      vAxes: {
         0: {title: 'Acceleration'}
      }
   };

   $.ajax({
      url: "../assets/json/data.json",
      dataType: "JSON"
   }).done(function(array) {
      $.each(array.drivers, function() {
         data.addColumn('number', this.name);
      });
      for(var j=0;j<array.drivers[0].score.length;j++) {
         var a = array.days[j];
         var b = array.drivers[0].acceleration[j];
         var c = array.drivers[1].acceleration[j];
         data.addRows([[a, b, c]]);
      }
      var chart = new google.visualization.LineChart(document.getElementById('charts'));
      chart.draw(data, options);
   });   
}

function BreakChart() {
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Day');
   var options = {
      title: 'Event - Break',
      vAxes: {
         0: {title: 'Break'}
      }
   };

   $.ajax({
      url: "../assets/json/data.json",
      dataType: "JSON"
   }).done(function(array) {
      $.each(array.drivers, function() {
         data.addColumn('number', this.name);
      });
      for(var j=0;j<array.drivers[0].score.length;j++) {
         var a = array.days[j];
         var b = array.drivers[0].break[j];
         var c = array.drivers[1].break[j];
         data.addRows([[a, b, c]]);
      }
      var chart = new google.visualization.LineChart(document.getElementById('charts'));
      chart.draw(data, options);
   });   
}

function TurnChart() {
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Day');
   var options = {
      title: 'Event - Sharp Turn',
      vAxes: {
         0: {title: 'Sharp Turns'}
      }
   };

   $.ajax({
      url: "../assets/json/data.json",
      dataType: "JSON"
   }).done(function(array) {
      $.each(array.drivers, function() {
         data.addColumn('number', this.name);
      });
      for(var j=0;j<array.drivers[0].score.length;j++) {
         var a = array.days[j];
         var b = array.drivers[0].turn[j];
         var c = array.drivers[1].turn[j];
         data.addRows([[a, b, c]]);
      }
      var chart = new google.visualization.LineChart(document.getElementById('charts'));
      chart.draw(data, options);
   });   
}

function CrashChart() {
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Day');
   var options = {
      title: 'Event - Crash',
      vAxes: {
         0: {title: 'Crash'}
      }
   };

   $.ajax({
      url: "../assets/json/data.json",
      dataType: "JSON"
   }).done(function(array) {
      $.each(array.drivers, function() {
         data.addColumn('number', this.name);
      });
      for(var j=0;j<array.drivers[0].score.length;j++) {
         var a = array.days[j];
         var b = array.drivers[0].crash[j];
         var c = array.drivers[1].crash[j];
         data.addRows([[a, b, c]]);
      }
      var chart = new google.visualization.LineChart(document.getElementById('charts'));
      chart.draw(data, options);
   });   
}
*/