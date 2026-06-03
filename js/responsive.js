document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    const hamburgerIcon = hamburger.querySelector('i');

    // 1. Fungsi Klik Hamburger (Buka/Tutup Menu)
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('slide-active');
            
            // Ubah icon dari garis tiga (list) jadi tanda silang (x)
            if (navMenu.classList.contains('slide-active')) {
                hamburgerIcon.classList.remove('bi-list');
                hamburgerIcon.classList.add('bi-x');
            } else {
                hamburgerIcon.classList.remove('bi-x');
                hamburgerIcon.classList.add('bi-list');
            }
        });
    }

    // 2. Fungsi Tutup Otomatis saat Link Diklik (Khusus di HP/Tablet)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) { // <--- UBAH ANGKA 992 JADI 1024 DI SINI
                navMenu.classList.remove('slide-active');
                hamburgerIcon.classList.remove('bi-x');
                hamburgerIcon.classList.add('bi-list');
            }
        });
    });
});

// Fitur Accordion Footer Mobile
document.addEventListener('DOMContentLoaded', () => {
    const footerCols = document.querySelectorAll('.pf-col h4');
    
    footerCols.forEach(col => {
        col.addEventListener('click', () => {
            // Hanya jalan di layar HP/Tablet (lebar 768px ke bawah)
            if (window.innerWidth <= 768) {
                // Tambah/hapus class 'active' saat <h4> diklik
                col.parentElement.classList.toggle('active');
            }
        });
    });
});

/* ======================================================== */
/* MENCEGAH SLIDER ABOUT JOGET DI HP (PENCEGAT MAIN.JS)     */
/* ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Kita simpan fungsi asli yang ada di main.js
    const fungsiAsliNextSlide = window.nextAboutSlide;
    
    // 2. Kita timpa (hijack) fungsinya dari responsive.js
    if (typeof fungsiAsliNextSlide === 'function') {
        window.nextAboutSlide = function() {
            // Kalau layarnya 1024px ke bawah (HP/Tablet), STOP! Jangan geser.
            if (window.innerWidth <= 1024) {
                return;
            }
            // Kalau di Laptop, jalankan fungsi aslinya seperti biasa
            fungsiAsliNextSlide();
        };
    }
});