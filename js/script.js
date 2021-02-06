alert('Hello');

$(document).ready(function() {
    $('.icon-menu').click(function(event) {
        $('.menu-icon, .menu__body').toggleClass('_active');
        $('body').toggleClass('lock');
    });
});