$(document).ready(function(){
    $('.card').on("click", function() {
        if (!$(this).hasClass("active")) {
            $('.card').removeClass('active');
            $(this).addClass('active');
            let value = $(this).data('value');
            $('.selected-plan').text(value);
        }
    })

    $('.people-number button').on("click", function() {
        if (!$(this).hasClass("active")) {
            $('.people-number button').removeClass('active');
            $(this).addClass('active');
            let value = $(this).data('value');
            $('.selected-people').text(value);
        }
    })

    $('.drink-number button').on("click", function() {
        if (!$(this).hasClass("active")) {
            $('.drink-number button').removeClass('active');
            $(this).addClass('active');
            let value = $(this).data('value');
            $('.selected-drink').text(value);
        }
    })
});