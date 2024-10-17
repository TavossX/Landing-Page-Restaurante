document.addEventListener('DOMContentLoaded', function() {
    var mobileBtn = document.getElementById('mobile_btn');
    var mobileMenu = document.getElementById('mobile_menu');
    var icon = mobileBtn.querySelector('i');

    mobileBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        icon.classList.toggle('fa-x');
    });
});
