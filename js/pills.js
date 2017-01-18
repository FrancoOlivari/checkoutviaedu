$(document).ready(function() {
    $(".toggle-content").hide();
    $(".toggle-title").click(function() {
        $(this).next(".toggle-content").slideToggle("normal");
        $(this).toggleClass('active');
    });
});