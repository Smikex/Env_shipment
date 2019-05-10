$(document).ready(function() {
    $("input[name$='radioStep']").click(function() {
        var test = $(this).val();
        $("div.desc").hide();
        $(".radio" + test).show();
    });
});