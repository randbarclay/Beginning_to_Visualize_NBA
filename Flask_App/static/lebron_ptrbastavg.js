anychart.onDocumentLoad(function () {
    // create a data set
    var data = anychart.data.set([
      ['Atlanta',27.1,9.33,10.93],
      ['Boston',27.43,10.27,10.03],
      ['Brooklyn',30.57,8.83,9.33],
      ['Chicago',31.67,8.23,7.77],
      ['Charlotte',30.1,8.73,9.73],
      ['Dallas',22.33,8,7.67],
      ['Denver',26.27,7.6,9.23],
      ['Detroit',22.9,7.55,8.65],
      ['Golden State',22.83,10.17,4.67],
      ['Houston',24.6,7.93,6.5],
      ['Indiana',29.7,8.27,8.77],
      ['LA Clippers',24.5,9.33,6.17],
      ['LA Lakers',27.25,8.75,8.75],
      ['Memphis',23.67,8.43,9.5],
      ['Miami',29.67,10.23,6.83],
      ['Milwaukee',30.53,7.43,8.1],
      ['Minnesota',25.33,9.17,10.5],
      ['New Orleans',25.27,7.6,10.17],
      ['New York',25.1,7.43,9.17],
      ['Oklahoma City',24.5,7.5,7.5],
      ['Orlando',22.9,7,7.73],
      ['Philadelphia',26.6,10.27,9.83],
      ['Phoenix',24.9,8.27,10.27],
      ['Portland',29.23,9.83,7.6],
      ['Sacramento',23.67,9,10.33],
      ['San Antonio',29.83,8.67,8.1],
      ['Toronto',26.83,6,7.9],
      ['Utah',27.33,9.17,6.83],
      ['Washington',27.07,8.6,9.83],
      ['Cleveland',32,14,7],
      
        
      ]);

        // map the data
    var seriesData_1 = data.mapAs({x: 0, value: 3, fill: 4, stroke: 5, label: 6});
    var seriesData_2 = data.mapAs({x: 0, value: 2, fill: 4, stroke: 5, label: 6});
    var seriesData_3 = data.mapAs({x: 0, value: 1, fill: 4, stroke: 5, label: 6});
  
    // create a chart
    chart = anychart.column();

    //enable value stacking mode

    chart.yScale().stackMode("value");
    chart.pointWidth(20);
    chart.xAxis().labels().rotation(90);
  
    // create series and set the data
    var series1 = chart.column(seriesData_1);
    series1.name("Assits")
    var series2 = chart.column(seriesData_2);
    series2.name("Rebounds")
    var series3 = chart.column(seriesData_3);
    series3.name("Points")



    // set chart title
    chart.title("LeBron's Average Points, Rebounds, Assists Per Team, 2017-2019.");
    // set the container element 
    chart.container("container");
    // initiate chart display
    chart.draw();
  });


//example of
//["Peter", 13000, 16500, "#5cd65c", "#009933", null, {enabled: true}],

  
