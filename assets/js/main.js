function random_number(first, last) {
    return Math.floor((Math.random() * (last - first + 1))) + first;
}

$(document).ready(function(){
    $.material.init();

    /* Search (based on: https://bootsnipp.com/snippets/a6aV0) */

    $('#search-button, #reset-search-button').on('click', function(event) {
        event.preventDefault();
        $('#search-input').val('');
        $('.navbar-with-search .search-bar').toggleClass('open');
        $('#search-button').closest('li').toggleClass('active');

        if ($('.navbar-with-search .search-bar').hasClass('open')) {
            /* I think .focus doesn't like css animations, set timeout to make sure input gets focus */
            setTimeout(function() {
                $('#search-input').focus();
            }, 100);
        }
    });

    $(document).on('keyup', function(event) {
        if (event.which == 27 && $('.navbar-with-search .search-bar').hasClass('open')) {
            $('#search-button').trigger('click');
        }
    });
});
