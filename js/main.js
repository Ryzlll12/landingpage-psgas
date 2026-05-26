// Navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- SLIDER HERO SECTION ---
// --- SLIDER HERO SECTION ---
const slides = [
    {
        title: { id: "Ketahanan Energi LPG", en: "LPG Energy Security" },
        desc: { 
            id: "Mendukung ketahanan energi nasional melalui integrasi rantai pasok dari hulu ke hilir untuk kesejahteraan masyarakat.", 
            en: "Supporting national energy security through upstream-to-downstream supply chain integration for the welfare of society." 
        },
        bg: "assets/images/hero/about-image.jpeg",
        color: "#ED1C24" // Merah Pertamina
    },
    {
        title: { id: "Perseroan Terkemuka", en: "Leading Corporation" },
        desc: { 
            id: "Menjadi perusahaan energi nasional yang unggul, terpercaya, dan berdaya saing tinggi melalui inovasi, profesionalisme, serta pengembangan berkelanjutan.", 
            en: "Becoming an excellent, trusted, and highly competitive national energy company through innovation, professionalism, and sustainable development." 
        },
        bg: "assets/images/hero/hero-bg.jpeg",
        color: "#8CC63F" // Hijau Pertamina
    },
    {
        title: { id: "Kilang dan Produk", en: "Refineries and Products" },
        desc: { 
            id: "Menghasilkan produk dan layanan berkualitas tinggi melalui pengelolaan kilang yang andal, efisien, aman, dan berorientasi pada kebutuhan pelanggan.", 
            en: "Producing high-quality products and services through reliable, efficient, safe, and customer-oriented refinery management." 
        },
        bg: "assets/images/hero/about-image.png",
        color: "#00A2E9" // Biru Muda Pertamina
    },
    {
        title: { id: "Nilai Fondasi", en: "Foundation Values" },
        desc: { 
            id: "Menerapkan nilai Profesional, HSSE, Tata Kelola Perusahaan, Achieve Profit, Kepuasan Pelanggan, serta Budaya AKHLAK dalam seluruh aktivitas perusahaan.", 
            en: "Applying the values of Professionalism, HSSE, Corporate Governance, Achieve Profit, Customer Satisfaction, and AKHLAK Culture in all company activities." 
        },
        bg: "assets/images/hero/hero-bg.jpeg",
        color: "#00529B" // Biru Tua Pertamina
    }
];

// Ubah jadi 0 agar saat halaman dimuat, mulai dari "Integrasi Bisnis Hilir"
let currentSlideIndex = 0; 
let slideInterval;

const heroSection = document.getElementById('home');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const navItems = document.querySelectorAll('.nav-item');

function changeSlide(index) {
    currentSlideIndex = index;
    
    // Ganti Gambar Background
    heroSection.style.backgroundImage = `url('${slides[index].bg}')`;
    
    // Ganti Teks dengan efek kedip halus
    heroTitle.style.opacity = 0;
    heroDesc.style.opacity = 0;
    setTimeout(() => {
        const currentLang = localStorage.getItem('selectedLang') || 'id';
        heroTitle.innerText = slides[index].title[currentLang];
        heroDesc.innerText = slides[index].desc[currentLang];
        heroTitle.style.opacity = 1;
        heroDesc.style.opacity = 1;
    }, 300);

    // Reset dan aktifkan animasi progress bar
    navItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            // Suntikkan warna khusus dari array ke CSS berdasarkan item yang aktif
            item.style.setProperty('--line-color', slides[index].color);
            
            // Trik JS untuk me-restart animasi CSS
            void item.offsetWidth; 
            item.classList.add('active');
        }
    });

    // Ulangi timer 5 detik dari awal
    resetInterval();
}

function autoSlide() {
    let nextIndex = currentSlideIndex + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }
    changeSlide(nextIndex);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 5000); // 5 detik
}

// Persiapan awal
document.addEventListener("DOMContentLoaded", () => {
    heroTitle.style.transition = "opacity 0.3s ease";
    heroDesc.style.transition = "opacity 0.3s ease";
    
    // Panggil fungsi dengan index 0
    changeSlide(currentSlideIndex);
});

/* ========================= */
/* OUTPUT HOVER */
/* ========================= */

const outputItems = document.querySelectorAll('.output-item');

outputItems.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        outputItems.forEach((el) => {
            el.classList.remove('active');
        });

        item.classList.add('active');

    });

});

/* ========================= */
/* AUTO-PLAY MILESTONE V3 */
/* ========================= */
let currentMilestone = 0;
const milestoneItems = document.querySelectorAll('.m3-nav-item');
const milestoneSlides = document.querySelectorAll('.m3-slide');
const milestoneCount = milestoneItems.length;

function showMilestone(index) {
    // Reset All
    milestoneItems.forEach(item => item.classList.remove('active'));
    milestoneSlides.forEach(slide => slide.classList.remove('active'));

    // Set Active
    milestoneItems[index].classList.add('active');
    milestoneSlides[index].classList.add('active');
}

// Fitur Klik Manual
milestoneItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentMilestone = index;
        showMilestone(currentMilestone);
        resetMilestoneTimer(); // Reset waktu kalau diklik
    });
});

// Fitur Auto Play 5 Detik
let milestoneTimer = setInterval(() => {
    currentMilestone = (currentMilestone + 1) % milestoneCount;
    showMilestone(currentMilestone);
}, 5000);

function resetMilestoneTimer() {
    clearInterval(milestoneTimer);
    milestoneTimer = setInterval(() => {
        currentMilestone = (currentMilestone + 1) % milestoneCount;
        showMilestone(currentMilestone);
    }, 5000);
}

/* ========================= */
/* ADVANTAGES IMAGE & TEXT SWITCH */
/* ========================= */
const advantageItems = document.querySelectorAll('.advantage-item');
const advantagesImage = document.getElementById('advantagesImage');
const advantagesDescription = document.getElementById('advantagesDescription');

advantageItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        // Hapus class active dari semua item
        advantageItems.forEach((el) => {
            el.classList.remove('active');
        });

        // Tambah class active ke item yang di-hover
        item.classList.add('active');

        // Ganti Background Image
        const newImage = item.getAttribute('data-image');
        advantagesImage.src = newImage;

        // Ambil Deskripsi Baru
        const newDescription = item.getAttribute('data-description');

        // Mainkan Animasi Fade
        advantagesDescription.classList.remove('fade-in');
        advantagesDescription.classList.add('fade-out');

        // Ganti Teks Pas Transisi Gelap (Delay 180ms)
        setTimeout(() => {
            advantagesDescription.textContent = newDescription;
            advantagesDescription.classList.remove('fade-out');
            advantagesDescription.classList.add('fade-in');
        }, 180);
    });
});

/* ========================= */
/* AWARDS SECTION LOGIC */
/* ========================= */
const awardRows = document.querySelectorAll('.aw-row');
const awardImage = document.getElementById('awardImage');
const awardGlow = document.getElementById('awardGlow');

awardRows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
        // 1. Hapus class active dari semua
        awardRows.forEach((el) => {
            el.classList.remove('active');
        });

        // 2. Tambah class active ke yang disentuh
        row.classList.add('active');

        // 3. Animasi Gambar ngilang bentar
        awardImage.style.opacity = '0';
        awardImage.style.transform = 'translate(-50%, -50%) scale(0.95)';

        setTimeout(() => {
            // Ganti Source Gambar
            awardImage.src = row.getAttribute('data-image');
            
            // Ganti Warna Cahaya Background
            const newGlow = row.getAttribute('data-glow');
            awardGlow.style.background = `radial-gradient(circle, ${newGlow} 0%, transparent 70%)`;

            // Munculin lagi gambarnya
            awardImage.style.opacity = '1';
            awardImage.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 300); // Delay dikit biar smooth
    });
});

/* ========================= */
/* KONTRIBUSI LOGIC */
/* ========================= */

// Data untuk section Kontribusi
const kontribusiData = [
    {
        title: { id: "Santunan Anak Yatim", en: "Orphan Assistance" },
        desc: { 
            id: "Program sosial berupa pemberian bantuan dan perhatian kepada anak yatim sebagai bentuk kepedulian perusahaan terhadap kesejahteraan masyarakat.", 
            en: "A social program providing aid and care to orphans as a form of the company's concern for community welfare." 
        },
        img: "assets/images/csr/csr-1.png"
    },
    {
        title: { id: "Hunian Sementara", en: "Temporary Shelter" },
        desc: { 
            id: "Penyediaan tempat tinggal sementara yang layak dan aman bagi masyarakat terdampak bencana atau kondisi darurat.", 
            en: "Provision of proper and safe temporary housing for communities affected by disasters or emergency situations." 
        },
        img: "assets/images/csr/csr-2.png"
    },
    {
        title: { id: "Renovasi RLTH", en: "Livable House Renovation" },
        desc: { 
            id: "Program renovasi Rumah Layak Tinggal Huni (RLTH) guna meningkatkan kualitas tempat tinggal masyarakat agar lebih nyaman, sehat, dan aman.", 
            en: "A renovation program for livable houses aimed at improving the quality of community housing to make it more comfortable, healthy, and safe." 
        },
        img: "assets/images/csr/csr-3.png"
    },
    {
        title: { id: "Pencegahan Banjir", en: "Flood Prevention" },
        desc: { 
            id: "Upaya mitigasi bencana melalui pembangunan dan perbaikan fasilitas pendukung untuk mengurangi risiko serta dampak banjir di lingkungan masyarakat.", 
            en: "Disaster mitigation efforts through the construction and improvement of supporting facilities to reduce the risk and impact of flooding in communities." 
        },
        img: "assets/images/csr/csr-4.png"
    },
    {
        title: { id: "Program Safari Ramadan", en: "Ramadan Safari Program" },
        desc: { 
            id: "Kegiatan sosial dan keagamaan yang dilaksanakan selama bulan Ramadan untuk mempererat silaturahmi serta berbagi manfaat kepada masyarakat.", 
            en: "Social and religious activities carried out during the month of Ramadan to strengthen relationships and share benefits with the community." 
        },
        img: "assets/images/csr/csr-5.png"
    },
    {
        title: { id: "Perkebunan Sido Mukti", en: "Sido Mukti Plantation" },
        desc: { 
            id: "Program pemberdayaan masyarakat melalui pengembangan sektor perkebunan guna meningkatkan produktivitas dan kesejahteraan ekonomi warga setempat.", 
            en: "A community empowerment program through the development of the plantation sector to improve productivity and the economic welfare of local residents." 
        },
        img: "assets/images/csr/csr-6.png"
    }
];

let currentKIndex = 0;
let kontribusiTimer; // Variabel baru untuk menampung timer auto-play

// Elemen yang akan diubah
const kMainImg = document.getElementById('k-main-img');
const kMainTitle = document.getElementById('k-main-title');
const kMainDesc = document.getElementById('k-main-desc');
const kCurrentNum = document.getElementById('k-current');
const kThumbs = document.querySelectorAll('.k-thumb');

function setKontribusi(index) {
    // Hindari index yang salah
    if (index < 0) index = kontribusiData.length - 1;
    if (index >= kontribusiData.length) index = 0;
    
    currentKIndex = index;
    const data = kontribusiData[currentKIndex];

    // Animasi fade sederhana
    kMainImg.style.opacity = 0;
    
    setTimeout(() => {
        // Ganti Data
        kMainImg.src = data.img;
        const currentLang = localStorage.getItem('selectedLang') || 'id';
        kMainTitle.innerText = data.title[currentLang];
        kMainDesc.innerText = data.desc[currentLang];
        
        // Update Nomor (Format 01, 02, dst)
        kCurrentNum.innerText = (currentKIndex + 1).toString().padStart(2, '0');
        
        kMainImg.style.opacity = 1;
    }, 250);

    // Update Thumbnail Active State
    kThumbs.forEach((thumb, i) => {
        if (i === currentKIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });

    // PENTING: Reset timer setiap kali ganti slide (biar gak bentrok saat diklik manual)
    resetKontribusiTimer();
}

function nextKontribusi() {
    setKontribusi(currentKIndex + 1);
}

function prevKontribusi() {
    setKontribusi(currentKIndex - 1);
}

// Fungsi khusus untuk menjalankan auto-play tiap 5 detik
function resetKontribusiTimer() {
    clearInterval(kontribusiTimer); // Hapus timer sebelumnya
    kontribusiTimer = setInterval(() => {
        // Otomatis pindah ke slide berikutnya setelah 5 detik (5000 ms)
        nextKontribusi();
    }, 5000);
}

// Set Inisialisasi awal saat web dimuat
document.addEventListener("DOMContentLoaded", () => {
    // Pastikan elemennya ada baru jalankan fungsi
    if(document.getElementById('kontribusi')) {
        setKontribusi(0); // Pemanggilan pertama ini akan otomatis mengaktifkan auto-play
    }
});

// ========================================= //
// SCRIPT CAROUSEL EKOSISTEM (AUTO & DRAG)   //
// ========================================= //
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('ecoContainer');
    const track = document.getElementById('ecoTrack');
    
    if(!container || !track) return;

    // 1. Gandakan elemen (Clone) agar bisa infinite loop (tanpa putus)
    const cards = Array.from(track.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let isDown = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;

    // Kecepatan auto bergeser (Makin besar makin cepat)
    const scrollSpeed = 1; 

    // Fungsi jalan otomatis
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            // Kalau sudah tergulung setengah (sampai batas clone), kembalikan diam-diam ke awal 
            if (container.scrollLeft >= (track.scrollWidth / 2)) {
                container.scrollLeft = 0;
            }
            container.scrollLeft += scrollSpeed;
        }, 20); // Bergeser setiap 20ms
    }

    // Fungsi berhenti otomatis
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Mulai jalan sendiri saat web dibuka
    startAutoScroll();

    // 2. Fungsi Geser/Drag pakai Kursor (Mouse)
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        stopAutoScroll(); // Stop jalan otomatis saat dipegang
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        if(isDown) {
            isDown = false;
            startAutoScroll(); // Lanjut jalan otomatis kalau mouse keluar jalur
        }
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        startAutoScroll(); // Lanjut jalan otomatis kalau klik dilepas
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Angka 2 ini kecepatan tarikan kursor (Sensitivitas)
        container.scrollLeft = scrollLeft - walk;
    });

    // Opsional: Tetap bisa digeser pakai jari di HP
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        stopAutoScroll();
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchend', () => {
        isDown = false;
        startAutoScroll();
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
});

window.addEventListener('languageChanged', (e) => {
    // Render ulang slider hero dan kontribusi dengan bahasa baru
    changeSlide(currentSlideIndex);
    if(document.getElementById('kontribusi')) {
        setKontribusi(currentKIndex);
    }
});

/* ========================= */
/* DARK / LIGHT THEME TOGGLE */
/* ========================= */
document.addEventListener("DOMContentLoaded", () => {
    // Ambil SEMUA tombol dan icon theme (Desktop & Mobile)
    const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
    const themeIcons = document.querySelectorAll(".theme-icon");
    
    // Cek localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        themeIcons.forEach(icon => icon.classList.replace("bi-moon-fill", "bi-sun-fill"));
    }

    // Pasang fungsi klik ke semua tombol
    themeToggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const isLight = document.body.classList.contains("light-mode");
            
            // Ganti semua icon secara bersamaan
            themeIcons.forEach(icon => {
                if (isLight) {
                    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
                } else {
                    icon.classList.replace("bi-sun-fill", "bi-moon-fill");
                }
            });
            
            localStorage.setItem("theme", isLight ? "light" : "dark");
        });
    });
});