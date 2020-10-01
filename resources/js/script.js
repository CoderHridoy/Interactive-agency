// HAMBURGER MENU //
function openMenu() {
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu() {
    document.getElementById('navbar').style.height = 0;
}

// SMOOTH SCROLL //
$(function () {
    $('.main-nav a').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});