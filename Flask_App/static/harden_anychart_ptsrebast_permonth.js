
    //unpack data via d3
d3.csv('/static/HardenAVG_bymonth_final.csv').then(function(response){
    
    var months =[];
    var TotPtsRebAst2019 =[];
    var TotPtsRebAst2018 =[];
    var TotPtsRebAst2017 =[];

    for (var i=0; i < response.length; i++){
        var mths = response[i].Month;
        var ptsrebast2019 = +response[i].TotPtsRebAst_2019;
        var ptsrebast2018 = +response[i].TotPtsRebAst_2018;
        var ptsrebast2017 = +response[i].TotPtsRebAst_2017;

        months.push(mths);
        TotPtsRebAst2019.push(ptsrebast2019);
        TotPtsRebAst2018.push(ptsrebast2018);
        TotPtsRebAst2017.push(ptsrebast2017);
        
    }


    // create data set on our data
    var data = anychart.data.set([
        [months[0], TotPtsRebAst2019[0],TotPtsRebAst2018[0],TotPtsRebAst2017[0]],
        [months[1], TotPtsRebAst2019[1],TotPtsRebAst2018[1],TotPtsRebAst2017[1]],
        [months[2], TotPtsRebAst2019[2],TotPtsRebAst2018[2],TotPtsRebAst2017[2]],
        [months[3], TotPtsRebAst2019[3],TotPtsRebAst2018[3],TotPtsRebAst2017[3]],
        [months[4], TotPtsRebAst2019[4],TotPtsRebAst2018[4],TotPtsRebAst2017[4]],
        [months[5], TotPtsRebAst2019[5],TotPtsRebAst2018[5],TotPtsRebAst2017[5]],
        [months[6], TotPtsRebAst2019[6],TotPtsRebAst2018[6],TotPtsRebAst2017[6]]  
    ]);

    // map the data
    var seriesData_1 = data.mapAs({x: 0, value: 1});
    var seriesData_2 = data.mapAs({x: 0, value: 2});
    var seriesData_3 = data.mapAs({x: 0, value: 3});
    

    chart = anychart.line();

    // set the interactivity mode
    chart.interactivity().hoverMode("single");

    var series1 = chart.line(seriesData_1);
    series1.name("2019")

    // configure the visual settings of the first series
    series1.normal().stroke("#00cc99", 1, "10 5", "round");
    series1.hovered().stroke("#00cc99", 2, "10 5", "round");
    series1.selected().stroke("#00cc99", 4, "10 5", "round");

    // create the second series
    var series2 = chart.line(seriesData_2);
    series2.name("2018")

    // configure the visual settings of the second series
    series2.normal().stroke("#0066cc");
    series2.hovered().stroke("#0066cc", 2);
    series2.selected().stroke("#0066cc", 4);

    //create the third series
    var series3 = chart.line(seriesData_3);
    series3.name("2017")

    // configure the visual settings of the second series
    series3.normal().stroke("#FF0000");
    series3.hovered().stroke("#FF0000", 2);
    series3.selected().stroke("#FF0000", 4);
    
    //chart title
    chart.title("Monthly Pts+Reb+Ast Averages, 2017-2019 (averaged Pts+Reb+Ast for each month of a particular year)");

    //set titles of the axes
    chart.xAxis().title("Month");
    chart.yAxis().title("Pts+Reb+Ast");

    chart.container("container");

    chart.draw();

});

