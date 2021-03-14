$(document).ready(() => {

    $('.navbar-toggler').on('click', () => {
        let iconName = $('.hamburger').html();
        iconName === 'menu' ? $('.hamburger').html('close').css('color', '#e73c75') : $('.hamburger').html('menu').css('color', '#48C9B0');
    })
})