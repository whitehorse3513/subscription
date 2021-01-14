$(document).ready(function(){
    $('.card').on("click", function() {
        if (!$(this).hasClass("active")) {
            $('.card').removeClass('active');
            $(this).addClass('active');
            let value = $(this).data('value');
            $('.selected-plan').text(value);
            changedState();
        }
    })

    $('.people-number button').on("click", function() {
        if (!$(this).hasClass("active")) {
            $('.people-number button').removeClass('active');
            $(this).addClass('active');
            let value = $(this).data('value');
            $('.selected-people').text(value);
            changedState();
        }
    })

    $('.drink-number button').on("click", function() {
        if (!$(this).hasClass("active")) {
            $('.drink-number button').removeClass('active');
            $(this).addClass('active');
            let value = $(this).data('value');
            $('.selected-drink').text(value);
            changedState();
        }
    })
    let changedState = () => {
        let plan = $('.card.active').data('id');
        let people = $('.people-number button.active').data('value');
        
        let serving = '';
        switch (plan) {
            case 1:
                switch (people) {
                    case 1:
                        serving = '1,90'
                        break;
                    case 2:
                        serving = '1,85'
                        break;
                    case 3:
                        serving = '1,75'
                        break;
                }
                break;
            case 2:
                switch (people) {
                    case 1:
                        serving = '2,90'
                        break;
                    case 2:
                        serving = '2,85'
                        break;
                    case 3:
                        serving = '2,75'
                        break;
                }
                break;
            case 3:
                switch (people) {
                    case 1:
                        serving = '3,90'
                        break;
                    case 2:
                        serving = '3,85'
                        break;
                    case 3:
                        serving = '3,75'
                        break;
                }
                break;
            case 4:
                switch (people) {
                    case 1:
                        serving = '4,29'
                        break;
                    case 2:
                        serving = '4,19'
                        break;
                    case 3:
                        serving = '4,00'
                        break;
                }
                break;
        }

        $(".serving-price").text(serving);
    }

    changedState();
});

