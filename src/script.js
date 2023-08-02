const nav = document.getElementById('navigasi');
const navButton = document.getElementById('navbutton');

navButton.addEventListener('click', function () {
    nav.classList.toggle('hidden');
})