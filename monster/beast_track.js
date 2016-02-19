$(document).ready(function() {
    mapInit();
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    });
    $("#species").buttonset();
    sliderInit();

    $("#submit").click(function() {
        $("#info_date").html("時間:" + $("#datepicker").val());
        $("#info_type").html("種類：" + $('input[name="type"]:checked').val());
        $("#info_distance").html("距離:" + $("#distance").val());
        $("#info_weight").html("重量:" + $("#weight").val());
        $("#info_height").html("高度:" + $("#height").val());
        $("#info_latitude").html("緯度:" + $("#latitude").val());
        $("#info_longitude").html("經度:" + $("#longitude").val());
        mapSet($("#latitude").val(), $("#longitude").val());
    });


});

function sliderInit() {
    $("#slide_dist").slider({
        value: 0,
        min: 0,
        max: 500,
        step: 10,
        slide: function(event, ui) {
            $("#distance").val(ui.value);
        }
    });
    $("#slide_weight").slider({
        value: 0,
        min: 0,
        max: 200,
        step: 1,
        slide: function(event, ui) {
            $("#weight").val(ui.value);
        }
    });
    $("#slide_height").slider({
        value: 0,
        min: 0,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $("#height").val(ui.value);
        }
    });
    $("#distance, #weight, #height, #latitude, #longitude").val(0);

    $("#slide_latitude").slider({
        value: 0,
        min: -90,
        max: 90,
        step: 0.000001,
        slide: function(event, ui) {
            $("#latitude").val(ui.value);
        }
    });
    $("#slide_longitude").slider({
        value: 0,
        min: -180,
        max: 180,
        step: 0.000001,
        slide: function(event, ui) {
            $("#longitude").val(ui.value);
        }
    });
}

function mapSet(latitude, longitude) {
    var myLatlng = new google.maps.LatLng(latitude, longitude); //(緯度,經度)
    var myOptions = {
        zoom: 13,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "哈囉"
    });
}

function mapInit() {
    var myLatlng = new google.maps.LatLng(24.570000, 121.320000); //(緯度,經度)
    var myOptions = {
        zoom: 13,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "哈囉"
    });
}
