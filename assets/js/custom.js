$(document).ready(function() {
    // start glabel
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('select').formSelect();
    $('#datatable').DataTable();

    // upload image
    $(document).on("change", ".uploadFile", function() {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return;
        if (/^image/.test(files[0].type)) {
            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            le
            reader.onloadend = function() {
                uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
            }
        }
    });

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