/* ========================================= */
/* LANGUAGE SWITCHER SLIDING PILL LOGIC      */
/* ========================================= */

function moveLanguagePill() {
    // Cari SEMUA container bahasa (di hero dan di navbar scroll)
    const selectors = document.querySelectorAll('.lang-selector');
    
    selectors.forEach(selector => {
        const activeBtn = selector.querySelector('.lang-btn.active');
        
        if (activeBtn) {
            // Ambil ukuran dan koordinat tombol aktif vs containernya
            const btnRect = activeBtn.getBoundingClientRect();
            const selectorRect = selector.getBoundingClientRect();

            // Cek apakah elemen sedang tampil di layar (lebar lebih dari 0)
            if (selectorRect.width > 0) {
                // Hitung jarak dari ujung kiri container ke tombol
                const leftPos = btnRect.left - selectorRect.left;
                const width = btnRect.width;

                // Tembakkan angkanya ke variabel CSS (--pill-left & --pill-width)
                selector.style.setProperty('--pill-left', `${leftPos}px`);
                selector.style.setProperty('--pill-width', `${width}px`);
            }
        }
    });
}

// 1. Jalankan saat Custom Event dari lang.js tertrigger (saat ganti bahasa)
window.addEventListener('languageChanged', () => {
    setTimeout(moveLanguagePill, 50); 
});

// 2. Jalankan pertama kali saat website selesai dimuat (Load)
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(moveLanguagePill, 100);
});

// 3. Jalankan ulang jika ukuran layar berubah (Resize)
window.addEventListener('resize', moveLanguagePill);


/* ========================================= */
/* SCROLL REVEAL OBSERVER                    */
/* ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    // Pengaturan jarak kapan animasi mulai trigger
    const revealOptions = {
        threshold: 0.15, // Animasi mulai saat 15% elemen sudah masuk layar
        rootMargin: "0px 0px -50px 0px" // Trigger sedikit lebih cepat sebelum elemen benar-benar terlihat
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class active jika masuk layar
                entry.target.classList.add("active");
                
                // Opsional: Unobserve agar animasi hanya jalan 1x (tidak mengulang saat di-scroll naik lagi)
                // revealObserver.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    // Cari semua elemen dengan class 'reveal' dan pantau
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});