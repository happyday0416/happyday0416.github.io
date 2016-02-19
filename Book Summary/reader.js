$(document).ready(function() {
    $('.article').click(function() {
        $('.description').hide();
        $('.article').removeClass('current');
        $(this).children('.description').show();
        $(this).addClass('current');
    });
    $(document).keypress(function(event) {
        if (event.which === 111) {
            //111=>按小寫o鍵
            $('.current').children('.description').toggle();
        } else if (event.which === 224) {
            //40=>按小寫n鍵
            var currentArticle = $('.current');
            currentArticle.removeClass('current');
            $('.description').hide();

            var nextArticle = currentArticle.next();
            if (nextArticle.length == 0) {
                nextArticle = $('.article').first();
            }
            nextArticle.addClass('current');
            nextArticle.children('.description').show();
        }
    });
});
