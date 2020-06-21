$(document).ready(hide());
function hide(){
    $("#firstContent").hide();
    $("#secondContent").hide();
    $("#thirdContent").hide();
    $("#fourthContent").hide();
}
$("#oneTest").click(function (e) {
    e.preventDefault();
    hide();
    $("#firstContent").show();
});
$("#twoTest").click(function (e) {
    e.preventDefault();
    hide();
    $("#secondContent").show();
});
$("#threeTest").click(function (e) {
    e.preventDefault();
    hide();
    $("#thirdContent").show();
});
$("#fourTest").click(function (e) {
    e.preventDefault();
    hide();
    $("#fourthContent").show();
});
$(".changeQuiz").click(function (e) {
    e.preventDefault();
    hide();
});
