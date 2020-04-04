anychart.onDocumentLoad(function () {
    // create a data set
    var data = anychart.data.set([
        ['Atlanta', 29.5, 7.17, 9.83],
        ['Boston',35.67,6,8.17],
        ['Brooklyn',41.17,9,7.83],
        ['Chicago',29,6.5,9],
        ['Charlotte',29.33,8.17,9],
        ['Cleveland',35.5,8,12.17],
        ['Dallas',27.1,6.23,9.43],
        ['Denver',31,7,9.67],
        ['Detroit',29.83,7,8.33],
        ['Golden State',26.53,6.77,10.03],
        ['Indiana',27.17,6,10],
        ['LA Clippers',29.2,5.73,8.7],
        ['LA Lakers',34.57,6.47,9.7],
        ['Memphis',33.63,6.6,9.3],
        ['Miami',40,7.17,9.17],
        ['Milwaukee',31,7.67,7.33],
        ['Minnesota',28.53,4.9,10.03],
        ['New Orleans',29.43,7.6,10.43],
        ['New York',39.67,8.83,10.5],
        ['Oklahoma City',27.27,6.5,9.2],
        ['Orlando',39.5,8.67,10.5],
        ['Philadelphia',34.67,7.17,8.67],
        ['Phoenix',35.2,7.33,9.43],
        ['Portland',34.27,5.67,6.83],
        ['Sacramento',29.1,7.17,9.37],
        ['San Antonio',31.37,6.5,8.53],
        ['Toronto',36.17,4.5,8.5],
        ['Utah',32.83,5.97,6.43],
        ['Washington',33.67,6.17,10]   
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
    chart.title("Harden's Average Points, Rebounds, Assists Per Team, 2017-2019.");
    // set the container element 
    chart.container("container");
    // initiate chart display
    chart.draw();
  });


//example of
//["Peter", 13000, 16500, "#5cd65c", "#009933", null, {enabled: true}],

  
