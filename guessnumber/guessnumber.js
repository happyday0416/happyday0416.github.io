$(document).ready(function() {
    $("#btn_onemore").hide();
    var GaussGame = {};
    GaussGame.answer = [0, 0, 0, 0];
    GaussGame.userGuess = [0, 0, 0, 0];
    GaussGame.outcome;
    GaussGame.guessAmount = 0;
    GaussGame.setAnswer = function() {
        for (var i = 0; i < 4; i++) {
            var temp = Math.floor(Math.random() * 10);
            GaussGame.answer[i] = temp;
        }
    };
    GaussGame.setUserGuess = function() {
        var value = $("#guess").val();
        GaussGame.userGuess[0] = Math.floor(value / 1000);
        GaussGame.userGuess[1] = Math.floor(value / 100) % 10;
        GaussGame.userGuess[2] = Math.floor(value / 10) % 10;
        GaussGame.userGuess[3] = value % 10;
    };

    GaussGame.calcOutcome = function() {
        var tempAnswer = [0, 0, 0, 0];
        for (var i = 0; i < 4; i++) {
            tempAnswer[i] = GaussGame.answer[i];
        }

        var a_count = 0;
        for (var i = 0; i < 4; i++) {
            if (tempAnswer[i] === GaussGame.userGuess[i]) {
                a_count++;
                GaussGame.userGuess[i] = -1;
                tempAnswer[i] = -1;
            }
        }

        var b_count = 0;
        for (var ia = 0; ia < 4; ia++) {
            for (var ib = 0; ib < 4; ib++) {
                if (tempAnswer[ia] === -1 || GaussGame.userGuess[ib] === -1) {
                    continue;
                }
                if (tempAnswer[ia] === GaussGame.userGuess[ib]) {
                    b_count++;
                    GaussGame.userGuess[ib] = -1;
                    tempAnswer[ia] = -1
                }
            }
        }
        GaussGame.outcome = a_count + "A" + b_count + "B";
    };

    GaussGame.answer4A = function() {
        $("#outcome").html(GaussGame.outcome + "<br>" + "您猜了" + GaussGame.guessAmount + "次" + "<br>");
        $("#btn_onemore").show();
        $("#enter").hide();
    }

    GaussGame.restart = function() {
        $("#enter").show();
        GaussGame.guessAmount = 0;
        GaussGame.setAnswer();
    }

    GaussGame.processGame = function() {
        GaussGame.guessAmount++;
        GaussGame.setUserGuess();
        GaussGame.calcOutcome();
        if (GaussGame.outcome == "4A0B") {
            GaussGame.answer4A();
        } else {
            $("#outcome").html(GaussGame.outcome);
        }
    }

    GaussGame.setAnswer();

    $("#enter").click(function() {
        GaussGame.processGame();
    });

    $("#btn_onemore").click(function() {
        GaussGame.restart();
        $("#outcome").html("");
        $("#btn_onemore").hide();
        $("#guess").val("");
    });

});
