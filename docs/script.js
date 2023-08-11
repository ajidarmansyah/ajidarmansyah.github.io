const nav = document.getElementById('navigasi');
const navButton = document.getElementById('navbutton');
const btnHubungiSaya = document.getElementById('btn-hubungi-saya');

navButton.addEventListener('click', function () {
    nav.classList.toggle('hidden');
});

const btnHandelerHubungiSaya = () => {
    const phoneNumber = '081383614967'
    const message = 'Halo saya tertarik dengan portfolio anda!';
    
    const url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);

    window.open(url, '_blank');
};

btnHubungiSaya.addEventListener('click', btnHandelerHubungiSaya);