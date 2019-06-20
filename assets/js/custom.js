$(document).ready(function() {
    // start glabel
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('select').formSelect();



});
// start show password and hide

// start show password and hide
function showPassword() {
    var prev = document.getElementById("password");
    if (prev.type === "password") {
        prev.type = "text";

    } else {
        prev.type = "password";

    }
}
// start remove or reset data input
function removeData() {
    document.getElementById("myForm").reset();
}