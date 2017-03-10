/**
 * Created by oguzhandemiroz on 10.03.2017.
 */
var bonus = 0;
var passives = 0;
var actives = 0;
var base = 130;
var durability = 24;
var hp = 0;
//var formulas = base + durability;
$(document).ready(function () {
    $('.levelUp').click(function () {
        var level = Number($('#level').val());
        if(level >= 1 && level <= 65){
            $('.pointCount').text(level * 5);
            $('.stats table button').css("visibility", "visible");
            var charStatRate = {"Warrior": 2, "Asas": 1.5, "Mage": 1.5};
            var charStatKeys = Object.keys(charStatRate);
            var charStatCount = Object.values(charStatRate);
            for(var i = 0; i < charStatKeys.length; i++){
                var givenStat = durability * (level * charStatCount[i]);
                $('.givenUs span.' + charStatKeys[i]).text(givenStat.toFixed(0));
                $('.total span.' + charStatKeys[i]).text(givenStat.toFixed(0));
            }
        }

    });
    $('.stats table button').click(function () {
        var $this = $('.stats table button');
        $this.prop('disabled', true);-
        setTimeout(function () {
            $this.prop('disabled', false);
        }, 300);
        var c = Number($(this).attr("data-point"));
        var point = Number($('.pointCount').text());
        if(point > 0){
            $('.pointCount').text(point - 1);
            var improve = c + 1;
            $(this).attr("data-point", improve);
            $(this).parent().siblings(".totalPoint").text(c);
        }
        if(point <= 1){
            $this.css("visibility", "hidden");
            var givenUsWarr = Number($('.givenUs span.Warrior').text());
            var givenUsMage = Number($('.givenUs span.Mage').text());
            var givenUsAsas = Number($('.givenUs span.Asas').text());
            var givenStatWarr = Number($('.givenStat span.Warrior').text());
            var givenStatMage = Number($('.givenStat span.Mage').text());
            var givenStatAsas = Number($('.givenStat span.Asas').text());
            $('.total span.Warrior').text(givenStatWarr + givenUsWarr - 24);
            $('.total span.Mage').text(givenStatMage + givenUsMage - 24);
            $('.total span.Asas').text(givenStatAsas + givenUsAsas - 24);
        }
        $('[name=dur]').click(function () {
            var formulas = Number($(this).attr("data-hp"));
            var imp = formulas + durability;
            $(this).attr("data-hp", imp);
            $('.givenStat span').text(imp);
            console.log(formulas, imp, durability);
        });
    });
});
