$(function() {
    $("dd").hide();
    $("dt a").click(function() {
        $(this).parent().next().slideToggle();
        return false;
    });
    initTable();
    drawGaugeCanvas();
    setChartTitleClickFun();
    drawChart();
    setKeyChartAndTable();
    setPayChartAndTable();
    setPlayerChartAndTable();
    setPlaytimeChartAndTable();
});

function drawGaugeCanvas() {
    //畫字
    var gauge_ctx = document.getElementById("gaugeChart").getContext("2d");
    gauge_ctx.fillStyle = "#AAA";
    gauge_ctx.font = "12px Arial";
    gauge_ctx.fillText("平均ACU", 71, 25);

    gauge_ctx.fillStyle = "#333";
    gauge_ctx.font = "bold 40px Arial";
    gauge_ctx.fillText("341", 64, 62);

    //畫並填充灰色半圓
    gauge_ctx.beginPath();
    gauge_ctx.moveTo(100, 150);
    gauge_ctx.arc(100, 150, 80, Math.PI, Math.PI * 2, false);
    gauge_ctx.closePath();
    gauge_ctx.fillStyle = "#AAA";
    gauge_ctx.fill();

    //畫並填充綠色小角度圓
    gauge_ctx.beginPath();
    gauge_ctx.moveTo(100, 150);
    gauge_ctx.arc(100, 150, 80, Math.PI, 3.8, false);
    gauge_ctx.closePath();
    gauge_ctx.fillStyle = "green";
    gauge_ctx.fill();

    //畫並填充白色小半圓
    gauge_ctx.beginPath();
    gauge_ctx.moveTo(100, 150);
    gauge_ctx.arc(100, 150, 40, Math.PI, 2 * Math.PI, false);
    gauge_ctx.closePath();
    gauge_ctx.fillStyle = 'rgba(255,255,255,1)';
    gauge_ctx.fill();

    gauge_ctx.beginPath();
    gauge_ctx.fillStyle = "#AAA";
    gauge_ctx.lineWidth = 5;
    gauge_ctx.moveTo(100, 150);
    gauge_ctx.lineTo(30, 100);
    gauge_ctx.stroke();

    gauge_ctx.fillStyle = "#AAA";
    gauge_ctx.font = "18px Arial";
    gauge_ctx.fillText("Max", 82, 170);

    gauge_ctx.fillStyle = "#333";
    gauge_ctx.font = "bold 10px Arial";
    gauge_ctx.fillText("1527", 84, 190);
}

function setChartTitleClickFun() {
    $("#change1").click(function() {
        $("#playval_1").html("");
        $("#playval_1").html("<h5>SUM 设备 | 账户：</h5><h4>55411</h4> | <h4>65543</h4>&nbsp;&nbsp;&nbsp;&nbsp; <h5>AVG 设备 | 账户：</h5><h4>6926</h4> | <h4>8193</h4>");
        $(".panel_2").removeClass("choosed_1");
        $(".panel_2").removeClass("choosed_2");
        $(".panel_2").removeClass("choosed_3");
        $(".panel_2").removeClass("choosed_4");
        $(".panel_2").addClass("choosed_1");

        if ($(".panel_2").hasClass("choosed_table")) {
            $("#keyChar_1").hide();
            $("#keyChar_2").hide();
            $("#keyChar_3").hide();
            $("#keyChar_4").hide();
        }

        $("#keyCharttable1").hide();
        $("#keyCharttable2").hide();
        $("#keyCharttable3").hide();
        $("#keyCharttable4").hide();

        if ($(".panel_2").hasClass("choosed_table")) {
            if ($(".panel_2").hasClass("choosed_1")) {
                $("#keyCharttable1").show();
            } else if ($(".panel_2").hasClass("choosed_2")) {
                $("#keyCharttable2").show();
            } else if ($(".panel_2").hasClass("choosed_3")) {
                $("#keyCharttable3").show();
            } else if ($(".panel_2").hasClass("choosed_4")) {
                $("#keyCharttable4").show();
            }
        }
    });

    $("#change2").click(function() {
        $("#playval_1").html("");
        $("#playval_1").html("<h5>AVG ：</h5><h4>27151</h4>");
        $(".panel_2").removeClass("choosed_1");
        $(".panel_2").removeClass("choosed_2");
        $(".panel_2").removeClass("choosed_3");
        $(".panel_2").removeClass("choosed_4");
        $(".panel_2").addClass("choosed_2");

        if ($(".panel_2").hasClass("choosed_table")) {
            $("#keyChar_1").hide();
            $("#keyChar_2").hide();
            $("#keyChar_3").hide();
            $("#keyChar_4").hide();
        }

        $("#keyCharttable1").hide();
        $("#keyCharttable2").hide();
        $("#keyCharttable3").hide();
        $("#keyCharttable4").hide();

        if ($(".panel_2").hasClass("choosed_table")) {
            if ($(".panel_2").hasClass("choosed_1")) {
                $("#keyCharttable1").show();
            } else if ($(".panel_2").hasClass("choosed_2")) {
                $("#keyCharttable2").show();
            } else if ($(".panel_2").hasClass("choosed_3")) {
                $("#keyCharttable3").show();
            } else if ($(".panel_2").hasClass("choosed_4")) {
                $("#keyCharttable4").show();
            }
        }
    });
    $("#change3").click(function() {
        $("#playval_1").html("");
        $("#playval_1").html("<h5>AVG ：</h5><h4>242</h4>");
        $(".panel_2").removeClass("choosed_1");
        $(".panel_2").removeClass("choosed_2");
        $(".panel_2").removeClass("choosed_3");
        $(".panel_2").removeClass("choosed_4");
        $(".panel_2").addClass("choosed_3");

        if ($(".panel_2").hasClass("choosed_table")) {
            $("#keyChar_1").hide();
            $("#keyChar_2").hide();
            $("#keyChar_3").hide();
            $("#keyChar_4").hide();
        }

        $("#keyCharttable1").hide();
        $("#keyCharttable2").hide();
        $("#keyCharttable3").hide();
        $("#keyCharttable4").hide();

        if ($(".panel_2").hasClass("choosed_table")) {
            if ($(".panel_2").hasClass("choosed_1")) {
                $("#keyCharttable1").show();
            } else if ($(".panel_2").hasClass("choosed_2")) {
                $("#keyCharttable2").show();
            } else if ($(".panel_2").hasClass("choosed_3")) {
                $("#keyCharttable3").show();
            } else if ($(".panel_2").hasClass("choosed_4")) {
                $("#keyCharttable4").show();
            }
        }
    });
    $("#change4").click(function() {
        $("#playval_1").html("");
        $("#playval_1").html("<h5>SUM ：</h5><h4>908.16</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <h5>AVG ：</h5><h4>113.52</h4> ");
        $(".panel_2").removeClass("choosed_1");
        $(".panel_2").removeClass("choosed_2");
        $(".panel_2").removeClass("choosed_3");
        $(".panel_2").removeClass("choosed_4");
        $(".panel_2").addClass("choosed_4");

        if ($(".panel_2").hasClass("choosed_table")) {
            $("#keyChar_1").hide();
            $("#keyChar_2").hide();
            $("#keyChar_3").hide();
            $("#keyChar_4").hide();
        }

        $("#keyCharttable1").hide();
        $("#keyCharttable2").hide();
        $("#keyCharttable3").hide();
        $("#keyCharttable4").hide();

        if ($(".panel_2").hasClass("choosed_table")) {
            if ($(".panel_2").hasClass("choosed_1")) {
                $("#keyCharttable1").show();
            } else if ($(".panel_2").hasClass("choosed_2")) {
                $("#keyCharttable2").show();
            } else if ($(".panel_2").hasClass("choosed_3")) {
                $("#keyCharttable3").show();
            } else if ($(".panel_2").hasClass("choosed_4")) {
                $("#keyCharttable4").show();
            }
        }
    });
    $("#payChange1").click(function() {
        $("#payVal").html("");
        $("#payVal").html("<h5>AVG：</h5><h4>1%</h4>");

        $(".panel_3").removeClass("choosed_1");
        $(".panel_3").removeClass("choosed_2");
        $(".panel_3").removeClass("choosed_3");
        $(".panel_3").addClass("choosed_1");
        if ($(".panel_3").hasClass("choosed_table")) {
            $("#payChar_1").hide();
            $("#payChar_2").hide();
            $("#payChar_3").hide();
        }

        $("#payCharttable1").hide();
        $("#payCharttable2").hide();
        $("#payCharttable3").hide();

        if ($(".panel_3").hasClass("choosed_table")) {
            if ($(".panel_3").hasClass("choosed_1")) {
                $("#payCharttable1").show();
            } else if ($(".panel_3").hasClass("choosed_2")) {
                $("#payCharttable2").show();
            } else if ($(".panel_3").hasClass("choosed_3")) {
                $("#payCharttable3").show();
            }
        }
    });
    $("#payChange2").click(function() {
        $("#payVal").html("");
        $("#payVal").html("<h5>AVG：</h5><h4>&yen;0.00</h4>");

        $(".panel_3").removeClass("choosed_1");
        $(".panel_3").removeClass("choosed_2");
        $(".panel_3").removeClass("choosed_3");
        $(".panel_3").addClass("choosed_2");

        if ($(".panel_3").hasClass("choosed_table")) {
            $("#payChar_1").hide();
            $("#payChar_2").hide();
            $("#payChar_3").hide();
        }

        $("#payCharttable1").hide();
        $("#payCharttable2").hide();
        $("#payCharttable3").hide();

        if ($(".panel_3").hasClass("choosed_table")) {
            if ($(".panel_3").hasClass("choosed_1")) {
                $("#payCharttable1").show();
            } else if ($(".panel_3").hasClass("choosed_2")) {
                $("#payCharttable2").show();
            } else if ($(".panel_3").hasClass("choosed_3")) {
                $("#payCharttable3").show();
            }
        }
    });
    $("#payChange3").click(function() {
        $("#payVal").html("");
        $("#payVal").html("<h5>AVG：</h5><h4>&yen;0.47</h4>");

        $(".panel_3").removeClass("choosed_1");
        $(".panel_3").removeClass("choosed_2");
        $(".panel_3").removeClass("choosed_3");
        $(".panel_3").addClass("choosed_3");

        if ($(".panel_3").hasClass("choosed_table")) {
            $("#payChar_1").hide();
            $("#payChar_2").hide();
            $("#payChar_3").hide();
        }

        $("#payCharttable1").hide();
        $("#payCharttable2").hide();
        $("#payCharttable3").hide();

        if ($(".panel_3").hasClass("choosed_table")) {
            if ($(".panel_3").hasClass("choosed_1")) {
                $("#payCharttable1").show();
            } else if ($(".panel_3").hasClass("choosed_2")) {
                $("#payCharttable2").show();
            } else if ($(".panel_3").hasClass("choosed_3")) {
                $("#payCharttable3").show();
            }
        }
    });
    /*-------------------*/
    $("#playChange1").click(function() {
        $("#playerVal").html("");
        $("#playerVal").html("<h5>AVG：次日</h5><h4>15%</h4> <h5> | </h5> <h5>7日</h5> <h4> 6% </h4> <h5> | </h5>  <h5>30日</h5> <h4> 2%</h4>");

        $(".panel_4").removeClass("choosed_1");
        $(".panel_4").removeClass("choosed_2");
        $(".panel_4").addClass("choosed_1");

        if ($(".panel_4").hasClass("choosed_table")) {
            $("#playerChar_1").hide();
            $("#playerChar_2").hide();
        }

        $("#playerCharttable1").hide();
        $("#playerCharttable2").hide();

        if ($(".panel_4").hasClass("choosed_table")) {
            if ($(".panel_4").hasClass("choosed_1")) {
                $("#playerCharttable1").show();
            } else if ($(".panel_4").hasClass("choosed_2")) {
                $("#playerCharttable2").show();
            }
        }

    });
    $("#playChange2").click(function() {
        $("#playerVal").html("");
        $("#playerVal").html("<h5>AVG：</h5><h4>&yen;0.47</h4>");


        $(".panel_4").removeClass("choosed_1");
        $(".panel_4").removeClass("choosed_2");
        $(".panel_4").addClass("choosed_2");

        if ($(".panel_4").hasClass("choosed_table")) {
            $("#playerChar_1").hide();
            $("#playerChar_2").hide();
        }

        $("#playerCharttable1").hide();
        $("#playerCharttable2").hide();

        if ($(".panel_4").hasClass("choosed_table")) {
            if ($(".panel_4").hasClass("choosed_1")) {
                $("#playerCharttable1").show();
            } else if ($(".panel_4").hasClass("choosed_2")) {
                $("#playerCharttable2").show();
            }
        }
    });
}

function drawChart() {
    //在线趋势
    var lineChartData = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "ACU",

            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍

            data: [306, 382, 364, 373, 327, 328, 325, 319]
        }, {
            label: "PCU",
            fillColor: "rgba(151,187,205,0.10)",
            strokeColor: "rgba(54,232,32,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "rgba(54,232,32,1)",
            pointHighlightFill: "#FFFFFF",
            pointHighlightStroke: "rgba(54,232,32,1)",
            data: [1527, 1492, 1478, 1487, 1477, 1496, 1519, 1470]
        }]
    };
    //关键指标-新增激活和账户
    var keylineChartData1 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "新增玩家",

            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍

            data: [7745, 8043, 8741, 8614, 7896, 7323, 8130, 9051]
        }, {
            label: "设备激活",
            fillColor: "rgba(151,187,205,0.10)",
            strokeColor: "rgba(54,232,32,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "rgba(54,232,32,1)",
            pointHighlightFill: "#FFFFFF",
            pointHighlightStroke: "rgba(54,232,32,1)",
            data: [6505, 6789, 7217, 7146, 6732, 6201, 6882, 7939]
        }]
    };
    //活跃玩家
    var keylineChartData2 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "ACU",

            fillColor: "rgba(205,205,205,0.1)", //底邊OK
            strokeColor: "#A6A6A6", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍

            data: [19550, 19505, 20587, 21332, 18094, 18481, 17613, 16503]
        }, {
            label: "PCU",
            fillColor: "rgba(0,0,255,0.1)",
            strokeColor: "#439EE0",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "rgba(54,232,32,1)",
            pointHighlightFill: "#FFFFFF",
            pointHighlightStroke: "rgba(54,232,32,1)",
            data: [27295, 27548, 29328, 29946, 25990, 25804, 25743, 25554]
        }]
    };
    //付费玩家
    var keylineChartData3 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "ACU",

            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍

            data: [61, 50, 67, 69, 41, 57, 46, 50]
        }, {
            label: "PCU",
            fillColor: "rgba(151,187,205,0.10)",
            strokeColor: "rgba(54,232,32,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "rgba(54,232,32,1)",
            pointHighlightFill: "#FFFFFF",
            pointHighlightStroke: "rgba(54,232,32,1)",
            data: [264, 247, 246, 258, 212, 234, 251, 224]
        }]
    };
    //收入
    var keylineChartData4 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "收入",

            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍

            data: [144.48, 101.92, 112.08, 112.4, 92.32, 103.86, 105.28, 116]
        }]
    };
    //--------------------
    var paylineChartData1 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "收入",
            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍
            data: [0.97, 0.9, 0.84, 0.86, 0.82, 0.91, 0.98, 0.88]
        }]
    };
    var paylineChartData2 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "收入",
            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍
            data: [0.01, 0, 0, 0, 0, 0, 0, 0]
        }]
    };
    var paylineChartData3 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "收入",
            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍
            data: [0.55, 0.41, 0.5, 0.47, 0.44, 0.44, 0.42, 0.52]
        }]
    };
    //------
    var playerlineChartData1 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "次日留存率",
            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍
            data: [11.6, 15.4, 14.5, 11.4, 15.7, 11.9, 15.1, 23.4]
        }, {
            label: "7日留存率",
            fillColor: "rgba(151,187,205,0.10)",
            strokeColor: "rgba(54,232,32,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "rgba(54,232,32,1)",
            pointHighlightFill: "#FFFFFF",
            pointHighlightStroke: "rgba(54,232,32,1)",
            data: [3.3, 5.9, 5.9, 6.5, 6.4, 5.6, 7.2, 8.6]
        }, {
            label: "30日留存率",
            fillColor: "rgba(151,187,205,0.10)",
            strokeColor: "rgba(54,232,32,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "rgba(54,232,32,1)",
            pointHighlightFill: "#FFFFFF",
            pointHighlightStroke: "rgba(54,232,32,1)",
            data: [2, 2.4, 2.3, 2.3, 2.4, 2.1, 2.7, 3.4]
        }]
    };
    var playerlineChartData2 = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "次日留存率",
            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍
            data: [12.5, 16.5, 15.4, 11.9, 16.7, 12.5, 14.9, 25.2]
        }, {
            label: "7日留存率",
            fillColor: "rgba(151,187,205,0.10)",
            strokeColor: "rgba(54,232,32,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "rgba(54,232,32,1)",
            pointHighlightFill: "#FFFFFF",
            pointHighlightStroke: "rgba(54,232,32,1)",
            data: [3.5, 6.5, 6.3, 6.9, 6.7, 5.9, 7.5, 9.2]
        }, {
            label: "30日留存率",
            fillColor: "rgba(151,187,205,0.10)",
            strokeColor: "rgba(54,232,32,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "rgba(54,232,32,1)",
            pointHighlightFill: "#FFFFFF",
            pointHighlightStroke: "rgba(54,232,32,1)",
            data: [2.1, 2.7, 2.4, 2.6, 2.6, 2.2, 2.9, 3.8]
        }]
    };
    var playtimeChartData = {
        labels: ["8/24", "8/25", "8/26", "8/27", "8/28", "8/29", "8/30", "8/31"],
        datasets: [{
            label: "次數",
            fillColor: "rgba(205,205,255,0.5)", //底邊OK
            strokeColor: "#49B8E4", //底邊線OK
            pointColor: "rgba(255,255,255,1)", //底邊線圓圈內層顏色、tooltip內部顏色
            pointStrokeColor: "rgba(79,198,210,1)", //底邊線圓圈外層顏色
            pointHighlightFill: "#FFFFFF", //移近時小圓圈裡面
            pointHighlightStroke: "rgba(79,198,210,1)", //移近時小圓圈外圍
            data: [3.1, 3.1, 3, 3, 3, 3, 3, 3.1]
        }]
    };

    var myChart_ctx = document.getElementById("myChart").getContext("2d");
    window.myLine = new Chart(myChart_ctx).Line(lineChartData, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 2,
        scaleStepWidth: 1000,
        bezierCurve: false,
        multiTooltipTemplate: "<%= datasetLabel %>           <%= value %> 帳戶"

    });
    var keyChart1_ctx = document.getElementById("keyChart1").getContext("2d");
    window.myLine = new Chart(keyChart1_ctx).Line(keylineChartData1, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 4,
        scaleStepWidth: 2500,
        bezierCurve: false,
        multiTooltipTemplate: "<%= datasetLabel %>           <%= value %> 帳戶"
    });

    var keyChart2_ctx = document.getElementById("keyChart2").getContext("2d");
    window.myLine = new Chart(keyChart2_ctx).Line(keylineChartData2, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 4,
        scaleStepWidth: 10000,
        bezierCurve: false,
        multiTooltipTemplate: "<%= datasetLabel %>           <%= value %> 帳戶"
    });

    var keyChart3_ctx = document.getElementById("keyChart3").getContext("2d");
    window.myLine = new Chart(keyChart3_ctx).Line(keylineChartData3, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 3,
        scaleStepWidth: 100,
        bezierCurve: false,
        multiTooltipTemplate: "<%= datasetLabel %>           <%= value %> 帳戶"
    });
    var keyChart4_ctx = document.getElementById("keyChart4").getContext("2d");
    window.myLine = new Chart(keyChart4_ctx).Line(keylineChartData4, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 5,
        scaleStepWidth: 50,
        bezierCurve: false,
        tooltipTemplate: "<%= datasetLabel %>           <%= value %>"
    });

    //付费渗透
    var payChart1_ctx = document.getElementById("payChart1").getContext("2d");
    window.myLine = new Chart(payChart1_ctx).Line(paylineChartData1, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 5,
        scaleStepWidth: 0.25,
        bezierCurve: false,
        tooltipTemplate: "<%= datasetLabel %>           <%= value %>"
    });
    var payChart2_ctx = document.getElementById("payChart2").getContext("2d");
    window.myLine = new Chart(payChart2_ctx).Line(paylineChartData2, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 5,
        scaleStepWidth: 0.0025,
        bezierCurve: false,
        tooltipTemplate: "<%= datasetLabel %>           <%= value %>"
    });
    var payChart3_ctx = document.getElementById("payChart3").getContext("2d");
    window.myLine = new Chart(payChart3_ctx).Line(paylineChartData3, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 3,
        scaleStepWidth: 0.2,
        bezierCurve: false,
        tooltipTemplate: "<%= datasetLabel %>           <%= value %>"
    });
    //----//
    var playerChar1_ctx = document.getElementById("playerChar1").getContext("2d");
    window.myLine = new Chart(playerChar1_ctx).Line(playerlineChartData1, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 5,
        scaleStepWidth: 5,
        bezierCurve: false,
        tooltipTemplate: "<%= datasetLabel %>           <%= value %>"
    });
    var playerChar2_ctx = document.getElementById("playerChar2").getContext("2d");
    window.myLine = new Chart(playerChar2_ctx).Line(playerlineChartData2, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 3,
        scaleStepWidth: 10,
        bezierCurve: false,
        tooltipTemplate: "<%= datasetLabel %>           <%= value %>"
    });

    //---//
    var playtimeChar1_ctx = document.getElementById("playtimeChar1").getContext("2d");
    window.myLine = new Chart(playtimeChar1_ctx).Bar(playtimeChartData, {
        scaleOverride: true,
        responsive: false,
        scaleSteps: 5,
        scaleStepWidth: 1,
        barValueSpacing: 32,
        tooltipTemplate: "<%= datasetLabel %>           <%= value %>"
    });
}

function setPayChartAndTable() {
    $("#payChartShow").click(function() {
        $(".panel_3").addClass("choosed_chart");
        $(".panel_3").removeClass("choosed_table");
        $("#payCharttable1").hide();
        $("#payCharttable2").hide();
        $("#payCharttable3").hide();

        if ($(".panel_3").hasClass("choosed_1")) {
            $("#payChar_1").show();
        } else if ($(".panel_3").hasClass("choosed_2")) {
            $("#payChar_2").show();
        } else if ($(".panel_3").hasClass("choosed_3")) {
            $("#payChar_3").show();
        }
    });

    $("#payTableShow").click(function() {
        $(".panel_3").addClass("choosed_table");
        $(".panel_3").removeClass("choosed_chart");
        $("#payChar_1").hide();
        $("#payChar_2").hide();
        $("#payChar_3").hide();
        if ($(".panel_3").hasClass("choosed_1")) {
            $("#payCharttable1").show();
        } else if ($(".panel_3").hasClass("choosed_2")) {
            $("#payCharttable2").show();
        } else if ($(".panel_3").hasClass("choosed_3")) {
            $("#payCharttable3").show();
        }
    });
}

function setPlayerChartAndTable() {
    $("#playerChartShow").click(function() {
        $(".panel_4").addClass("choosed_chart");
        $(".panel_4").removeClass("choosed_table");
        $("#playerCharttable1").hide();
        $("#playerCharttable2").hide();

        if ($(".panel_4").hasClass("choosed_1")) {
            $("#playerChar_1").show();
        } else if ($(".panel_4").hasClass("choosed_2")) {
            $("#playerChar_2").show();
        }
    });

    $("#playerTableShow").click(function() {
        $(".panel_4").addClass("choosed_table");
        $(".panel_4").removeClass("choosed_chart");
        $("#playerChar_1").hide();
        $("#playerChar_2").hide();
        if ($(".panel_4").hasClass("choosed_1")) {

            $("#playerCharttable1").show();
        } else if ($(".panel_4").hasClass("choosed_2")) {
            $("#playerCharttable2").show();
        }
    });
}

function setPlaytimeChartAndTable() {
    $("#playtimeChartShow").click(function() {
        $(".panel_5").addClass("choosed_chart");
        $(".panel_5").removeClass("choosed_table");
        $("#playtimeCharttable1").hide();
        $("#playtimeChar_1").show();
    });

    $("#playtimeTableShow").click(function() {
        $(".panel_5").addClass("choosed_table");
        $(".panel_5").removeClass("choosed_chart");
        $("#playtimeChar_1").hide();
        $("#playtimeCharttable1").show();
    });
}

function setKeyChartAndTable() {
    $("#keyChartShow").click(function() {
        $(".panel_2").addClass("choosed_chart");
        $(".panel_2").removeClass("choosed_table");
        $("#keyCharttable1").hide();
        $("#keyCharttable2").hide();
        $("#keyCharttable3").hide();
        $("#keyCharttable4").hide();

        if ($(".panel_2").hasClass("choosed_1")) {
            $("#keyChar_1").show();
        } else if ($(".panel_2").hasClass("choosed_2")) {
            $("#keyChar_2").show();
        } else if ($(".panel_2").hasClass("choosed_3")) {
            $("#keyChar_3").show();
        } else if ($(".panel_2").hasClass("choosed_4")) {
            $("#keyChar_4").show();
        }
    });

    $("#keyTableShow").click(function() {
        $(".panel_2").addClass("choosed_table");
        $(".panel_2").removeClass("choosed_chart");
        $("#keyChar_1").hide();
        $("#keyChar_2").hide();
        $("#keyChar_3").hide();
        $("#keyChar_4").hide();
        if ($(".panel_2").hasClass("choosed_1")) {
            $("#keyCharttable1").show();
        } else if ($(".panel_2").hasClass("choosed_2")) {
            $("#keyCharttable2").show();
        } else if ($(".panel_2").hasClass("choosed_3")) {
            $("#keyCharttable3").show();
        } else if ($(".panel_2").hasClass("choosed_4")) {
            $("#keyCharttable4").show();
        }
    });
}

function initTable() {
    $("#keyCharttable1").hide();
    $("#keyCharttable2").hide();
    $("#keyCharttable3").hide();
    $("#keyCharttable4").hide();
    $("#payCharttable1").hide();
    $("#payCharttable2").hide();
    $("#payCharttable3").hide();
    $("#playerCharttable1").hide();
    $("#playerCharttable2").hide();
    $("#playtimeCharttable1").hide();
}
