// 1. KAMUS TERJEMAHAN (DICTIONARY)
const translations = {
    "id": {
        // Navbar
        "nav_home": "Beranda",
        "nav_about": "Tentang Perusahaan",
        "nav_process": "Proses",
        "nav_facility": "Fasilitas",
        "nav_product": "Produk",
        "nav_contrib": "Kontribusi",
        "hero_btn": "Selengkapnya ↗",
        "hero_nav1": "KETAHANAN ENERGI LPG",
        "hero_nav2": "PERSEROAN TERKEMUKA",
        "hero_nav3": "KILANG DAN PRODUK",
        "hero_nav4": "NILAI FONDASI",

        // About Section
        "about_sub": "TENTANG PERUSAHAAN",
        "about_short": "Perusahaan pengolahan gas bumi terintegrasi yang berkomitmen mendukung ketahanan energi nasional secara berkelanjutan.",
        "about_visimisi": "VISI DAN MISI",
        "about_visi_title": "VISI",
        "about_visi_desc": "Menjadi Perseroan Terkemuka di Dunia dalam Industri LPG & Gas",
        "about_misi_title": "MISI",
        "about_misi_desc": "Memberikan nilai tambah bagi Pemegang Saham, Karyawan, dan Masyarakat Indonesia melalui efisiensi kerja dan daya saing yang tinggi.",
        "about_tujuan": "TUJUAN & MAKSUD PERSEROAN",
        "about_t1": "Ekstraksi dan pemrosesan gas alam menjadi LPG dan produk gas lainnya",
        "about_t2": "Niaga dan distribusi LPG untuk memenuhi program Public Service Obligation (PSO)",
        "about_t3": "Optimalisasi sumber daya dan fasilitas pemrosesan gas untuk layanan terbaik",
        "about_t4": "Penyediaan infrastruktur terkait sektor pemrosesan gas secara berkelanjutan",
        "about_long1": "PT Perta-Samtan Gas didirikan pada 7 Mei 2008 dengan tujuan memproduksi LPG (Liquified Petroleum Gas) guna mendukung program Pemerintah dalam rangka konversi minyak tanah ke LPG serta penyediaan energi bagi masyarakat, sekaligus mengurangi beban Pemerintah dalam subsidi BBM.",
        "about_long2": "Perseroan bergerak dalam bisnis pengolahan gas serta menyediakan layanan jasa dan infrastruktur terkait Pemrosesan Gas dengan dua kilang terintegrasi di Prabumulih dan Banyuasin, Sumatera Selatan.",
        "dir_sub": "STRUKTUR MANAJEMEN",
        "dir_title": "Dewan Direksi",
        "dir_1_pos": "Presiden Direktur",
        "dir_2_pos": "Wakil Presiden Direktur",
        "dir_1_label": "DIREKTUR",
        "dir_2_label": "WAKIL DIREKTUR",

        // Process Section
        "proc_sub": "PROSES BISNIS",
        "proc_title": "PROSES BISNIS UTAMA",
        "proc_s1_t": "Feed Gas Masuk",
        "proc_s1_d": "Gas alam dari PT Pertamina Hulu Rokan (PHR) Zona 4 diterima melalui sistem pipa bertekanan tinggi sebagai sumber utama bahan baku.",
        "proc_s1_m": "Kapasitas Feed Gas Rata-rata",
        "proc_s2_t": "Kilang Ekstraksi Prabumulih",
        "proc_s2_d": "Proses ekstraksi memisahkan komponen NGL (Natural Gas Liquids) dari gas alam menggunakan teknologi cryogenic dan refrigeration.",
        "proc_s3_t": "Pipa NGL ±90 KM",
        "proc_s3_d": "NGL dialirkan melalui pipa berdiameter 18 inci sepanjang ±90 km dari Kilang Ekstraksi Prabumulih menuju Kilang Fraksinasi Banyuasin.",
        "proc_s3_m": "Panjang Pipa NGL",
        "proc_s4_t": "Kilang Fraksinasi Banyuasin",
        "proc_s4_d": "NGL diolah melalui proses fraksinasi untuk menghasilkan produk LPG, Propane, Butane, dan Kondensat dengan standar kualitas tinggi.",
        "proc_s5_t": "Distribusi Produk LPG",
        "proc_s5_d": "LPG disalurkan ke Depot Pulau Layang & Jetty PT BIM menuju Pontianak, Bangka, dan Belitung menggunakan armada terintegrasi.",
        "proc_s5_m": "Mendukung Ketahanan Energi Nasional",

        // Fasilitas
        "fac_sub": "FASILITAS OPERASIONAL",
        "fac_title": "FASILITAS OPERASIONAL",
        "fac_1_desc": "Fasilitas ekstraksi modern untuk memisahkan komponen NGL dari gas alam dengan teknologi cryogenic dan refrigeration terintegrasi.",
        "fac_2_desc": "Fasilitas fraksinasi terintegrasi untuk menghasilkan produk LPG, Propane, Butane, dan Kondensat dengan standar kualitas tinggi.",
        "fac_1_title": "KILANG EKSTRAKSI PRABUMULIH",
        "fac_1_stat1": "KAPASITAS GAS UMPAN",
        "fac_1_stat2": "Ekstraksi NGL",
        "fac_1_stat3": "Sistem Terintegrasi",
        "fac_2_title": "KILANG FRAKSINASI BANYUASIN",
        "fac_2_stat1": "PRODUKSI LPG",
        "fac_2_stat2": "KONDENSAT", 

        // Output (Sudah Mas siapkan atributnya di HTML)
        "out_sub": "Output Produksi",
        "out_title": "Produk Utama Perusahaan",
        "out1_title": "Kapasitas Desain",
        "out1_desc": "Total Kedua Kilang",
        "out2_title": "Produksi LPG",
        "out2_desc": "Propane + Butane",
        "out3_title": "Produksi Kondensat",
        "out3_desc": "Pentane+",
        "out4_title": "Feed Gas Rata-Rata",
        "out4_desc": "Dari PHR Zona 4",

        // Nilai Perusahaan
        "val_sub": "NILAI PERUSAHAAN",
        "val_title": "Nilai-Nilai Perusahaan",
        "val_desc": "Kami membangun budaya kerja yang kuat dan berkelanjutan berlandaskan nilai-nilai yang menjadi pedoman dalam setiap langkah dan keputusan.",
        "val_1_t": "Profesional",
        "val_1_d": "Berkomitmen dalam perbaikan diri berkelanjutan dan memiliki profesionalisme tinggi dalam setiap aspek kerja.",
        "val_2_d": "Fokus pada keselamatan kerja, keselamatan proses, kesehatan, keamanan, dan lingkungan dalam setiap aktivitas operasional.",
        "val_3_t": "Tata Kelola Perusahaan",
        "val_3_d": "Menerapkan prinsip-prinsip Good Corporate Governance (GCG) yang transparan, akuntabel, dan bertanggung jawab.",
        "val_4_d": "Menghasilkan nilai ekonomi tinggi demi keberlangsungan Perseroan bagi Pemegang Saham dan Pemangku Kepentingan.",
        "val_5_t": "Kepuasan Pelanggan",
        "val_5_d": "Berkomitmen penuh terhadap kepuasan pelanggan melalui layanan prima dan produk berkualitas tinggi.",
        "val_6_t": "Budaya AKHLAK",
        "val_6_d": "Menerapkan nilai Amanah, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif dalam setiap interaksi organisasi.",

        // HSSE
        "hsse_sub": "BUDAYA KESELAMATAN",
        "hsse_desc": "Komitmen bersama untuk menciptakan lingkungan kerja yang aman, andal, dan berkelanjutan.",
        "hsse_1_t": "Patuh",
        "hsse_1_d": "Mematuhi seluruh prosedur, peraturan, dan standar keselamatan tanpa kompromi di setiap aktivitas kerja.",
        "hsse_2_t": "Peduli",
        "hsse_2_d": "Peduli terhadap keselamatan diri sendiri, rekan kerja, serta lingkungan sekitar area operasional.",
        "hsse_3_t": "Intervensi",
        "hsse_3_d": "Berani menghentikan pekerjaan yang tidak aman dan melaporkan kondisi berisiko segera.",
        "hsse_footer": "Keselamatan adalah tanggung jawab kita bersama.",

        // Milestone
        "m3_sub": "Perjalanan Kami",
        "m3_title": "Pencapaian Perseroan",
        "m3_1_st": "Pendirian Perseroan",
        "m3_1_d": "PT Perta-Samtan Gas resmi didirikan pada 7 Mei 2008. Dimiliki 66% PT Pertamina Gas Negara & 34% ST International Ltd. untuk memproduksi LPG mendukung program konversi BBM pemerintah.",
        "m3_2_st": "Fase Komersial",
        "m3_2_d": "Kilang PT Perta-Samtan Gas memasuki fase komersial mulai 1 Mei 2013. Dimulainya produksi penuh LPG dan Kondensat dari kedua kilang terintegrasi.",
        "m3_3_st": "1 Juta Ton LPG",
        "m3_3_d": "Berhasil memproduksi 1 juta ton LPG sejak masa komersial hingga tahun 2026 — tonggak bersejarah dalam perjalanan perusahaan.",
        "m3_4_st": "Diversifikasi & Pertumbuhan",
        "m3_4_d": "Eksplorasi peluang bisnis di seluruh Indonesia, penguatan kemitraan strategis dengan Pemerintah, dan pengembangan potensi bisnis yang lebih luas.",

        // Banner Operasional
        "ops_tag": "TAHUN 2013 - TAHUN 2026",
        "ops_title": "2 Juta Metrik Ton LPG Diproduksi",
        "ops_desc": "Sejak fase komersial 1 Mei 2013 hingga tahun 2026 — pencapaian bersejarah yang membuktikan kapabilitas operasional PT Perta-Samtan Gas dalam mendukung ketahanan energi nasional.",
        "ops_btn": "Hubungi Kami",

        // Keunggulan
        "adv_sub": "KEUNGGULAN",
        "adv_title": "Keunggulan Perseroan",
        "adv_desc": "Konsisten mencapai produktivitas, stabilitas, dan efisiensi tinggi dengan rekam jejak keberhasilan sejak fase komersial 1 Mei 2013.",
        "adv1_title": "Keunggulan Operasional",
        "adv1_desc": "Konsisten mencapai produktivitas, stabilitas, dan efisiensi tinggi dengan rekam jejak keberhasilan sejak fase komersial 1 Mei 2013.",
        "adv2_title": "Kondisi Keuangan Stabil",
        "adv2_desc": "Posisi keuangan kuat tanpa beban utang finansial, dengan manajemen arus kas efektif untuk peluang investasi masa depan.",
        "adv3_title": "Kemitraan Strategis",
        "adv3_desc": "Kemitraan strategis dengan Pemerintah Indonesia dalam produksi LPG domestik (PSO), memperkuat posisi dan kapabilitas Perseroan.",
        "adv4_title": "Peluang Bisnis Beragam",
        "adv4_desc": "Rekam jejak perusahaan memungkinkan eksplorasi peluang bisnis di seluruh wilayah Indonesia dengan potensi pertumbuhan luas.",

        // Awards
        "aw_title": "PENGHARGAAN",
        "aw_sub": "PENGHARGAAN & PENGAKUAN ATAS KEUNGGULAN OPERASIONAL PERSEROAN",
        "aw_1_d": "Komitmen pengelolaan lingkungan yang unggul dan berkelanjutan di seluruh area operasional.",
        "aw_2_d": "Penghargaan keselamatan kerja atas kinerja jam kerja aman yang konsisten.",
        "aw_3_d": "Sertifikasi Sistem Manajemen K3 level Gold — standar keselamatan kerja tertinggi.",
        "aw_4_d": "Penilaian kepatuhan lingkungan berkelanjutan yang diakui pemerintah.",
        "aw_5_d": "Pengakuan atas kontribusi nyata dalam ketahanan dan efisiensi energi nasional.",

        // Kontribusi
        "k_sub": "KONTRIBUSI & KEGIATAN",
        "k_title": "Kontribusi Kami",
        "k_desc": "Kami percaya bahwa energi bukan hanya tentang menggerakkan industri, tetapi juga tentang menggerakkan kehidupan dan masa depan yang lebih baik.",

        // Ecosystem
        "eco_sub": "EKOSISTEM & MITRA",
        "eco_title": "Bagian dari Ekosistem Pertamina",
        "eco_desc": "PT Perta-Samtan Gas beroperasi sebagai bagian integral rantai nilai energi nasional bersama berbagai entitas strategis.",

        // Footer
        "ft_perusahaan": "PERUSAHAAN",
        "ft_tentang": "Tentang Kami",
        "ft_visimisi": "Visi & Misi",
        "ft_nilai": "Tata Nilai (AKHLAK)",
        "ft_capai": "Pencapaian",
        "ft_karir": "Karir",
        "ft_ops": "OPERASIONAL",
        "ft_proses": "Proses Bisnis",
        "ft_fasilitas": "Fasilitas",
        "ft_pusat": "Kantor Pusat, Banyuasin",
        "ft_cabang": "Kantor Perwakilan Jakarta",
        "ft_web": "Website Resmi",
        "ft_privasi": "Kebijakan Privasi"
    },
    "en": {
        // Navbar
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_process": "Process",
        "nav_facility": "Facility",
        "nav_product": "Product",
        "nav_contrib": "Contribution",
        "hero_btn": "Explore ↗",
        "hero_nav1": "LPG ENERGY SECURITY",
        "hero_nav2": "LEADING CORPORATION",
        "hero_nav3": "REFINERIES & PRODUCTS",
        "hero_nav4": "FOUNDATION VALUES",

        // About Section
        "about_sub": "ABOUT THE COMPANY",
        "about_short": "An integrated natural gas processing company committed to sustainably supporting national energy security.",
        "about_visimisi": "VISION AND MISSION",
        "about_visi_title": "VISION",
        "about_visi_desc": "To be a World-Class Leading Company in the LPG & Gas Industry",
        "about_misi_title": "MISSION",
        "about_misi_desc": "To provide added value for Shareholders, Employees, and the Indonesian Community through high work efficiency and competitiveness.",
        "about_tujuan": "COMPANY GOALS & OBJECTIVES",
        "about_t1": "Extraction and processing of natural gas into LPG and other gas products",
        "about_t2": "Trading and distribution of LPG to fulfill the Public Service Obligation (PSO) program",
        "about_t3": "Optimization of resources and gas processing facilities for best services",
        "about_t4": "Sustainable provision of infrastructure related to the gas processing sector",
        "about_long1": "PT Perta-Samtan Gas was established on May 7, 2008, aimed at producing LPG (Liquified Petroleum Gas) to support the Government's program in converting kerosene to LPG and providing energy for the community, while reducing the Government's fuel subsidy burden.",
        "about_long2": "The company operates in the gas processing business and provides services and infrastructure related to Gas Processing with two integrated refineries in Prabumulih and Banyuasin, South Sumatra.",
        "dir_sub": "MANAGEMENT STRUCTURE",
        "dir_title": "Board of Directors",
        "dir_1_pos": "President Director",
        "dir_2_pos": "Vice President Director",
        "dir_1_label": "DIRECTOR",
        "dir_2_label": "VICE DIRECTOR",
        
        // Process Section
        "proc_sub": "BUSINESS PROCESS",
        "proc_title": "MAIN BUSINESS PROCESS",
        "proc_s1_t": "Inlet Feed Gas",
        "proc_s1_d": "Natural gas from PT Pertamina Hulu Rokan (PHR) Zone 4 is received through a high-pressure pipeline system as the main raw material source.",
        "proc_s1_m": "Average Feed Gas Capacity",
        "proc_s2_t": "Prabumulih Extraction Refinery",
        "proc_s2_d": "The extraction process separates NGL (Natural Gas Liquids) components from natural gas using integrated cryogenic and refrigeration technology.",
        "proc_s3_t": "±90 KM NGL Pipeline",
        "proc_s3_d": "NGL flows through an 18-inch diameter pipeline spanning ±90 km from the Prabumulih Extraction Refinery to the Banyuasin Fractionation Refinery.",
        "proc_s3_m": "NGL Pipeline Length",
        "proc_s4_t": "Banyuasin Fractionation Refinery",
        "proc_s4_d": "NGL is processed through fractionation to produce high-quality standard LPG, Propane, Butane, and Condensate products.",
        "proc_s5_t": "LPG Product Distribution",
        "proc_s5_d": "LPG is distributed to the Pulau Layang Depot & PT BIM Jetty heading to Pontianak, Bangka, and Belitung using an integrated fleet.",
        "proc_s5_m": "Supporting National Energy Security",

        // Fasilitas
        "fac_sub": "OPERATIONAL FACILITIES",
        "fac_title": "OPERATIONAL FACILITIES",
        "fac_1_desc": "Modern extraction facilities to separate NGL components from natural gas with integrated cryogenic and refrigeration technology.",
        "fac_2_desc": "Integrated fractionation facilities to produce high-quality standard LPG, Propane, Butane, and Condensate products.",
        "fac_1_title": "KILANG EKSTRAKSI PRABUMULIH",
        "fac_1_title": "PRABUMULIH EXTRACTION PLANT",
        "fac_1_stat1": "FEED GAS CAPACITY",
        "fac_1_stat2": "NGL Extraction",
        "fac_1_stat3": "Integrated System",
        "fac_2_title": "BANYUASIN FRACTIONATION PLANT",
        "fac_2_stat1": "LPG PRODUCTION",
        "fac_2_stat2": "CONDENSATE",

        // Output
        "out_sub": "Production Output",
        "out_title": "Main Company Products",
        "out1_title": "Design Capacity",
        "out1_desc": "Total Both Refineries",
        "out2_title": "LPG Production",
        "out2_desc": "Propane + Butane",
        "out3_title": "Condensate Production",
        "out3_desc": "Pentane+",
        "out4_title": "Average Feed Gas",
        "out4_desc": "From PHR Zone 4",

        // Nilai Perusahaan
        "val_sub": "COMPANY VALUES",
        "val_title": "Corporate Values",
        "val_desc": "We build a strong and sustainable work culture based on values that guide our every step and decision.",
        "val_1_t": "Professional",
        "val_1_d": "Committed to continuous self-improvement and possessing high professionalism in every aspect of work.",
        "val_2_d": "Focusing on occupational safety, process safety, health, security, and the environment in all operational activities.",
        "val_3_t": "Corporate Governance",
        "val_3_d": "Implementing Good Corporate Governance (GCG) principles that are transparent, accountable, and responsible.",
        "val_4_d": "Generating high economic value for the Company's sustainability for Shareholders and Stakeholders.",
        "val_5_t": "Customer Satisfaction",
        "val_5_d": "Fully committed to customer satisfaction through excellent service and high-quality products.",
        "val_6_t": "AKHLAK Culture",
        "val_6_d": "Applying the values of Trustworthy, Competent, Harmonious, Loyal, Adaptive, and Collaborative in every organizational interaction.",

        // HSSE
        "hsse_sub": "SAFETY CULTURE",
        "hsse_desc": "A joint commitment to creating a safe, reliable, and sustainable work environment.",
        "hsse_1_t": "Comply",
        "hsse_1_d": "Comply with all safety procedures, regulations, and standards without compromise in every work activity.",
        "hsse_2_t": "Care",
        "hsse_2_d": "Care for the safety of oneself, coworkers, and the surrounding environment of operational areas.",
        "hsse_3_t": "Intervene",
        "hsse_3_d": "Have the courage to stop unsafe work and report risky conditions immediately.",
        "hsse_footer": "Safety is our shared responsibility.",

        // Milestone
        "m3_sub": "Our Journey",
        "m3_title": "Company Achievements",
        "m3_1_st": "Company Establishment",
        "m3_1_d": "PT Perta-Samtan Gas was officially established on May 7, 2008. Owned 66% by PT Pertamina Gas Negara & 34% by ST International Ltd. to produce LPG supporting the government's fuel conversion program.",
        "m3_2_st": "Commercial Phase",
        "m3_2_d": "PT Perta-Samtan Gas refineries entered the commercial phase starting May 1, 2013. Full production of LPG and Condensate from both integrated refineries began.",
        "m3_3_st": "1 Million Tons of LPG",
        "m3_3_d": "Successfully produced 1 million tons of LPG since the commercial period up to 2026 — a historic milestone in the company's journey.",
        "m3_4_st": "Diversification & Growth",
        "m3_4_d": "Exploring business opportunities throughout Indonesia, strengthening strategic partnerships with the Government, and developing broader business potential.",

        // Banner Operasional
        "ops_tag": "YEAR 2013 - YEAR 2026",
        "ops_title": "2 Million Metric Tons of LPG Produced",
        "ops_desc": "Since the commercial phase on May 1, 2013, to 2026 — a historic achievement proving PT Perta-Samtan Gas's operational capability in supporting national energy security.",
        "ops_btn": "Contact Us",

        // Keunggulan
        "adv_sub": "ADVANTAGES",
        "adv_title": "Company Advantages",
        "adv_desc": "Consistently achieving high productivity, stability, and efficiency with a track record of success since the commercial phase on May 1, 2013.",
        "adv1_title": "Operational Excellence",
        "adv1_desc": "Consistently achieving high productivity, stability, and efficiency with a track record of success since the commercial phase on May 1, 2013.",
        "adv2_title": "Stable Financial Condition",
        "adv2_desc": "Strong financial position with no financial debt burden, with effective cash flow management for future investment opportunities.",
        "adv3_title": "Strategic Partnership",
        "adv3_desc": "Strategic partnership with the Indonesian Government in domestic LPG production (PSO), strengthening the Company's position and capabilities.",
        "adv4_title": "Diverse Business Opps",
        "adv4_desc": "The company's track record enables the exploration of business opportunities across all regions of Indonesia with broad growth potential.",

        // Awards
        "aw_title": "AWARDS",
        "aw_sub": "AWARDS & RECOGNITION FOR THE COMPANY'S OPERATIONAL EXCELLENCE",
        "aw_1_d": "Commitment to excellent and sustainable environmental management across all operational areas.",
        "aw_2_d": "Occupational safety award for consistent safe working hours performance.",
        "aw_3_d": "SMK3 Gold level certification — the highest occupational safety standard.",
        "aw_4_d": "Sustainable environmental compliance assessment recognized by the government.",
        "aw_5_d": "Recognition for tangible contributions to national energy security and efficiency.",

        // Kontribusi
        "k_sub": "CONTRIBUTION & ACTIVITIES",
        "k_title": "Our Contributions",
        "k_desc": "We believe that energy is not just about driving industries, but also about moving lives and a better future forward.",

        // Ecosystem
        "eco_sub": "ECOSYSTEM & PARTNERS",
        "eco_title": "Part of the Pertamina Ecosystem",
        "eco_desc": "PT Perta-Samtan Gas operates as an integral part of the national energy value chain alongside various strategic entities.",

        // Footer
        "ft_perusahaan": "COMPANY",
        "ft_tentang": "About Us",
        "ft_visimisi": "Vision & Mission",
        "ft_nilai": "Core Values",
        "ft_capai": "Achievements",
        "ft_karir": "Career",
        "ft_ops": "OPERATIONAL",
        "ft_proses": "Business Process",
        "ft_fasilitas": "Facilities",
        "ft_pusat": "Head Office, Banyuasin",
        "ft_cabang": "Jakarta Rep. Office",
        "ft_web": "Official Website",
        "ft_privasi": "Privacy Policy"
    }
};

// 2. LOGIKA GANTI BAHASA & ANIMASI PILL
function setLanguage(lang) {
    // Simpan pilihan bahasa di browser
    localStorage.setItem('selectedLang', lang);

    // Update semua teks di HTML yang punya atribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update atribut data-description pada slider "Keunggulan" agar pas di-hover teksnya ikut bahasa Inggris
    document.querySelectorAll('.advantage-item').forEach(el => {
        const key = el.getAttribute('data-i18n-desc');
        if (translations[lang][key]) {
            el.setAttribute('data-description', translations[lang][key]);
            
            // Jika item ini sedang aktif, langsung ganti teks di layar
            if (el.classList.contains('active')) {
                document.getElementById('advantagesDescription').innerText = translations[lang][key];
            }
        }
    });

    // --- BARU: Update visual tombol (ID | EN) ---
    // Update active class on ALL buttons across all switchers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    // --- SELESAI BAGIAN BARU ---

    // Kirim sinyal (Custom Event) ke main.js bahwa bahasa sudah berubah
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
}

// 3. JALANKAN SAAT HALAMAN DIMUAT (LOAD)
document.addEventListener("DOMContentLoaded", () => {
    // Cek apakah user pernah pilih bahasa sebelumnya, kalau belum, default ke 'id'
    const savedLang = localStorage.getItem('selectedLang') || 'id';
    setLanguage(savedLang);
});