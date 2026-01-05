// Toggle menu untuk mobile
const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');

menuOpenButton.addEventListener('click', () => {
    navMenu.classList.add('active');
});

menuCloseButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Smooth scroll untuk link navbar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetSection.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        navMenu.classList.remove('active');
    });
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Mencegah reload halaman

  // Kirim email menggunakan EmailJS
  emailjs.sendForm('service_ym6ej1t', 'template_r6k75as', this)
    .then(function() {
      alert('Pesan berhasil dikirim!');  // Notifikasi sukses
      contactForm.reset();  // Reset form setelah kirim
    }, function(error) {
      alert('Gagal mengirim pesan. Coba lagi.');  // Notifikasi error
      console.log('FAILED...', error);
    });

});
