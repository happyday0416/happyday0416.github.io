var today;
var todayStr = "";

function getToday() {
    var myDate = new Date();
    // 現在是星期幾，日為0、一為1、二為2、三為3、四為4、五為5、六為6
    today = myDate.getDay();

    chooseTodayId();
    showMessage(today);
    document.getElementById("message").innerHTML = todayStr;
}

function chooseTodayId() {
    var todayObj = document.getElementById(today);
    todayObj.id = "id_today";
}

function showMessage(someday) {
    switch (someday) {
        case 0:
            todayStr = "NO!!! Today is Sunday";
            break;
        case 1:
            todayStr = "Today is Blue Monday!";
            break;
        case 2:
            todayStr = "Today is Tuesday!";
            break;
        case 3:
            todayStr = "Today is Wednesday!";
            break;
        case 4:
            todayStr = "Today is Thursday!";
            break;
        case 5:
            todayStr = "Today is happy Friday!";
            break;
        case 6:
            todayStr = "Today is Saturday!";
            break;
    }

}
