$(".slider").next().html("Value: 5");

$(".slider").change(function() {
    var Value = Math.floor(($(this).val()) / 10);
    $(this).next().html("Value: " + Value);
    console.log(Value);
});

$("#calc-score").click(function() {
    var scores = [];
    $(".slider").each(function() {
        scores.push(($(this).val()) / 10);
        console.log(scores);
    });

    var total = 0;

    for (var i = 0, n = scores.length; i < n; ++i) {
        total += scores[i];
    }

    var finalscore = (total/scores.length).toFixed(2);
    console.log(finalscore);
    $("#score").html(finalscore);
});