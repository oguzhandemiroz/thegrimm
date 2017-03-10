/**
 * Created by oguzhandemiroz on 21.02.2017.
 */

function startAttack() {
    var crit = 0;
    var myInterval = setInterval(function() {
        hp = Number($(".healtRate1").text());
        rnd = Math.floor((Math.random() * 80) + 10);
        crit_rate = Math.floor((Math.random() * 3) + 1);
        if(crit_rate == 1){
           crit = rnd * 2;
        }
        formula = parseFloat(((rnd * 100) / hp).toFixed(2));
        width = parseFloat($(".healtRate1").css('width'));
        v = (formula * width) / 100;
        $(".healtRate1").text(hp - rnd - crit);
        $(".healtRate1").css('width', width - v);
        hp2 = Number($(".healtRate2").text());
        rnd = Math.floor((Math.random() * 80) + 10);
        formula = parseFloat(((rnd * 100) / hp2).toFixed(2));
        width = parseFloat($(".healtRate2").css('width'));
        v = (formula * width) / 100;
        $(".healtRate2").text(hp2 - rnd -  crit);
        $(".healtRate2").css('width', width - v);
        console.log(hp);
        if (hp < 0 || hp2 < 0) {
            $(".healtRate1").text("0");
            $(".healtRate2").text("0");
            clearInterval(myInterval);
        }
    }, 500);
}