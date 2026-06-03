// Navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const isCurrentlyScrolled = navbar.classList.contains('scrolled');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        
        // Panggil fungsi kotak hijau tepat saat navbar putih muncul
        if (!isCurrentlyScrolled) {
            setTimeout(() => {
                if (typeof moveLanguagePill === 'function') moveLanguagePill();
            }, 50);
        }
    } else {
        navbar.classList.remove('scrolled');
    }
});

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
/* SLIDER ABOUT & DEWAN DIREKSI (WITH AUTO-SLIDE) */
/* ========================= */
let aboutSlideIndex = 0;
let aboutSlideTimer;

function switchAboutSlide(index) {
    const slides = document.querySelectorAll('.about-slide-item');
    const dots = document.querySelectorAll('.a-dot');
    
    if (!slides.length || !dots.length) return; // Cegah error kalau elemen nggak ketemu

    // Hapus class 'active' dari semua slide dan titik
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Tambahkan class 'active' ke elemen yang dituju
    aboutSlideIndex = index;
    slides[aboutSlideIndex].classList.add('active');
    dots[aboutSlideIndex].classList.add('active');

    // Mengakali animasi 'reveal' agar jalan ulang saat ganti slide
    const reveals = slides[aboutSlideIndex].querySelectorAll('.reveal');
    reveals.forEach(el => {
        el.classList.remove('active');
        setTimeout(() => el.classList.add('active'), 50);
    });

    // Reset timer setiap kali diklik manual agar tidak bentrok
    resetAboutSlideTimer();
}

function nextAboutSlide() {
    const slides = document.querySelectorAll('.about-slide-item');
    if (!slides.length) return;
    
    let nextIndex = aboutSlideIndex + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0; // Balik ke slide pertama
    }
    switchAboutSlide(nextIndex);
}

function resetAboutSlideTimer() {
    clearInterval(aboutSlideTimer);
    // Auto-slide per 8 detik (8000 ms)
    aboutSlideTimer = setInterval(nextAboutSlide, 5000); 
}

// Jalankan timer saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('about-track')) {
        resetAboutSlideTimer();
    }
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
/* AWARDS SLIDER (VIDEO STYLE) */
/* ========================= */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Data 11 Penghargaan (Lengkap dengan ID & EN)
    const awardsData = [
        {
            title: { id: "Program Kampung Iklim Sumatera Selatan", en: "South Sumatra Climate Village Program" },
            desc: { id: "Penghargaan Program Kampung Iklim sebagai pengakuan kontribusi pengelolaan lingkungan dan iklim.", en: "Climate Village Program award in recognition of contributions to environmental and climate management." },
            cardImg: "assets/images/penghargaan/certificate-1.jpeg",
            bgImg: "assets/images/penghargaan/bg-1.png"
        },
        {
            title: { id: "Bantuan Angkutan Sampah", en: "Waste Transport Assistance" },
            desc: { id: "Sertifikat penghargaan atas program bantuan angkutan sampah di sekitar area operasional.", en: "Certificate of appreciation for the waste transport assistance program around the operational area." },
            cardImg: "assets/images/penghargaan/certificate-2.jpeg",
            bgImg: "assets/images/penghargaan/bg-2.png"
        },
        {
            title: { id: "Community Development", en: "Community Development" },
            desc: { id: "Sertifikat pengakuan kegiatan pengembangan masyarakat dan tanggung jawab sosial perusahaan.", en: "Certificate of recognition for community development activities and corporate social responsibility." },
            cardImg: "assets/images/penghargaan/certificate-3.jpeg",
            bgImg: "assets/images/penghargaan/bg-3.png"
        },
        {
            title: { id: "Ecosystem Protection", en: "Ecosystem Protection" },
            desc: { id: "Sertifikat atas komitmen perlindungan ekosistem dan lingkungan di wilayah operasi.", en: "Certificate for the commitment to ecosystem and environmental protection in the operational area." },
            cardImg: "assets/images/penghargaan/certificate-4.jpeg",
            bgImg: "assets/images/penghargaan/bg-4.png"
        },
        {
            title: { id: "Hari Peduli Sampah", en: "National Waste Awareness Day" },
            desc: { id: "Sertifikat keikutsertaan dan dukungan program Hari Peduli Sampah Nasional.", en: "Certificate of participation and support for the National Waste Awareness Day program." },
            cardImg: "assets/images/penghargaan/certificate-5.jpeg",
            bgImg: "assets/images/penghargaan/bg-5.png"
        },
        {
            title: { id: "Keselamatan Minyak dan Gas Bumi", en: "Oil and Gas Safety" },
            desc: { id: "Sertifikat keselamatan operasi minyak dan gas bumi di fasilitas pengolahan gas.", en: "Certificate of oil and gas operational safety at the gas processing facility." },
            cardImg: "assets/images/penghargaan/certificate-6.jpeg",
            bgImg: "assets/images/penghargaan/bg-6.png"
        },
        {
            title: { id: "ISO 9001", en: "ISO 9001" },
            desc: { id: "Sertifikasi ISO 9001 — sistem manajemen mutu terstandar internasional.", en: "ISO 9001 Certification — internationally standardized quality management system." },
            cardImg: "assets/images/penghargaan/certificate-7.jpg",
            bgImg: "assets/images/penghargaan/bg-7.png"
        },
        {
            title: { id: "ISO 14001", en: "ISO 14001" },
            desc: { id: "Sertifikasi ISO 14001 — sistem manajemen lingkungan berkelanjutan.", en: "ISO 14001 Certification — sustainable environmental management system." },
            cardImg: "assets/images/penghargaan/certificate-8.jpg",
            bgImg: "assets/images/penghargaan/bg-8.png"
        },
        {
            title: { id: "ISO 45001", en: "ISO 45001" },
            desc: { id: "Sertifikasi sistem manajemen keselamatan dan kesehatan kerja (K3).", en: "Certification of occupational health and safety (OHS) management system." },
            cardImg: "assets/images/penghargaan/certificate-9.jpeg",
            bgImg: "assets/images/penghargaan/bg-9.png"
        },
        {
            title: { id: "Akreditasi", en: "Accreditation" },
            desc: { id: "Sertifikat akreditasi atas standar operasional dan pengelolaan fasilitas perusahaan.", en: "Accreditation certificate for the company's operational and facility management standards." },
            cardImg: "assets/images/penghargaan/certificate-10.jpeg",
            bgImg: "assets/images/penghargaan/bg-10.png"
        },
        {
            title: { id: "Sistem Manajemen Kesehatan Kerja", en: "Occupational Health Management System" },
            desc: { id: "Sertifikat sistem manajemen dan kesehatan kerja di lingkungan operasional Perseroan.", en: "Certificate of occupational health and management system in the Company's operational environment." },
            cardImg: "assets/images/penghargaan/certificate-11.jpeg",
            bgImg: "assets/images/penghargaan/bg-11.png"
        }
    ];

    // Simpan ke variabel window biar bisa dipanggil saat tombol bahasa diklik
    window.awardsDataGlobal = awardsData;
    window.currentAwardIndex = 0;

    const track = document.getElementById('as-track');
    const bgImg = document.getElementById('as-bg-img');
    const titleEl = document.getElementById('as-title');
    const descEl = document.getElementById('as-desc');
    const counterEl = document.getElementById('as-counter');
    const scrollArea = document.getElementById('as-scroll-area');
    
    if(!track) return;

    // 2. Generate Kotak (Cards) ke dalam HTML
    awardsData.forEach((award, index) => {
        const curLang = localStorage.getItem('selectedLang') || 'id';
        const card = document.createElement('div');
        card.className = `as-card ${index === 0 ? 'active' : ''}`;
        card.setAttribute('data-index', index);
        card.innerHTML = `
            <img src="${award.cardImg}" alt="Certificate">
            <div class="as-card-overlay"></div>
            <div class="as-card-text">
                <h4 class="card-award-title">${award.title[curLang]}</h4>
            </div>
        `;
        
        card.addEventListener('click', () => {
            updateAwardDisplay(index);
        });

        track.appendChild(card);
    });

    const cards = document.querySelectorAll('.as-card');

    // 3. Fungsi Update Tampilan
    window.updateAwardDisplay = function(index) {
        if(index < 0) {
            index = awardsData.length - 1;
        } else if(index >= awardsData.length) {
            index = 0;
        }
        
        window.currentAwardIndex = index;
        const data = awardsData[window.currentAwardIndex];
        const curLang = localStorage.getItem('selectedLang') || 'id';

        bgImg.style.opacity = 0;
        titleEl.style.opacity = 0;
        descEl.style.opacity = 0;

        setTimeout(() => {
            bgImg.src = data.bgImg;
            titleEl.innerText = data.title[curLang]; // Ambil data bahasa
            descEl.innerText = data.desc[curLang]; // Ambil data bahasa
            counterEl.innerText = (window.currentAwardIndex + 1).toString().padStart(2, '0');
            
            bgImg.style.opacity = 1;
            titleEl.style.opacity = 1;
            descEl.style.opacity = 1;
        }, 300);

        cards.forEach((c, i) => {
            c.classList.toggle('active', i === window.currentAwardIndex);
        });

        const activeCard = cards[window.currentAwardIndex];
        const offsetKiriTrack = track.getBoundingClientRect().left;
        const offsetKiriKartu = activeCard.getBoundingClientRect().left;
        const scrollTarget = (offsetKiriKartu - offsetKiriTrack) - 30; 
        
        scrollArea.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    };

    window.nextAward = function() { updateAwardDisplay(window.currentAwardIndex + 1); };
    window.prevAward = function() { updateAwardDisplay(window.currentAwardIndex - 1); };

    updateAwardDisplay(0);

    // 4. Drag/Geser Mouse
    let isDown = false;
    let startX, scrollLeft;

    scrollArea.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - scrollArea.offsetLeft;
        scrollLeft = scrollArea.scrollLeft;
    });
    scrollArea.addEventListener('mouseleave', () => isDown = false);
    scrollArea.addEventListener('mouseup', () => isDown = false);
    scrollArea.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollArea.offsetLeft;
        const walk = (x - startX) * 2;
        scrollArea.scrollLeft = scrollLeft - walk;
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
    // Render ulang slider hero dengan bahasa baru
    changeSlide(currentSlideIndex);
    
    // Render ulang section Kontribusi
    if(document.getElementById('kontribusi')) {
        // 1. Update teks besar yang sedang aktif
        setKontribusi(currentKIndex);
        
        // 2. KUNCI SAKTI: Update semua teks thumbnail kecil di bawah
        const curLang = localStorage.getItem('selectedLang') || 'id';
        const thumbTitles = document.querySelectorAll('.k-thumb h4');
        
        thumbTitles.forEach((h4, idx) => {
            // Cocokkan urutan thumbnail dengan data array kontribusiData
            if(kontribusiData[idx]) {
                h4.innerText = kontribusiData[idx].title[curLang];
            }
        });
    }
    
    // Render ulang teks Awards (Penghargaan)
    if(document.getElementById('as-track') && window.awardsDataGlobal) {
        const curLang = localStorage.getItem('selectedLang') || 'id';
        
        // 1. Update judul & deskripsi besar
        updateAwardDisplay(window.currentAwardIndex);
        
        // 2. Update semua judul di dalam kotak-kotak (Cards)
        document.querySelectorAll('.card-award-title').forEach((h4, idx) => {
            if(window.awardsDataGlobal[idx]) {
                h4.innerText = window.awardsDataGlobal[idx].title[curLang];
            }
        });
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