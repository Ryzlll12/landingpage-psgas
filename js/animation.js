/* ========================================= */
/* LANGUAGE SWITCHER SLIDING PILL LOGIC      */
/* ========================================= */

function moveLanguagePill() {
    // Cari container dan tombol yang sedang aktif
    const selector = document.querySelector('.lang-selector');
    
    if (!selector) return; // Keluar jika tidak ada di halaman

    const activeBtn = selector.querySelector('.lang-btn.active');
    
    if (activeBtn) {
        // Ambil ukuran dan koordinat tombol aktif vs containernya
        const btnRect = activeBtn.getBoundingClientRect();
        const selectorRect = selector.getBoundingClientRect();

        // Hitung jarak dari ujung kiri container ke tombol
        const leftPos = btnRect.left - selectorRect.left;
        const width = btnRect.width;

        // Tembakkan angkanya ke variabel CSS (--pill-left & --pill-width)
        selector.style.setProperty('--pill-left', `${leftPos}px`);
        selector.style.setProperty('--pill-width', `${width}px`);
    }
}

// 1. Jalankan saat Custom Event dari lang.js tertrigger (saat ganti bahasa)
// Beri sedikit jeda (setTimeout) agar DOM merender bendera terlebih dahulu baru pil bergeser
window.addEventListener('languageChanged', () => {
    setTimeout(moveLanguagePill, 50); 
});

// 2. Jalankan pertama kali saat website selesai dimuat (Load)
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(moveLanguagePill, 100);
});

// 3. Jalankan ulang jika ukuran layar berubah (Resize) biar pil nggak meleset
window.addEventListener('resize', moveLanguagePill);