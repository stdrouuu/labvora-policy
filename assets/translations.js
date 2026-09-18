// Labvora Translation Dictionary (Indonesian <-> English)
const labvoraTranslations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_privacy: "Privacy Policy",
    nav_delete: "Delete account",
    nav_contact: "Contact Us",
    lang_label: "Language",

    // index.html - Hero
    hero_title_prefix: "Schedule easily with ",
    hero_desc: "Choose services, schedule visits, track order progress, and access documents all in one app.",
    hero_btn_workflow: "See how it works",
    hero_btn_contact: "Contact us",
    hero_device_label: "Labvōra app preview on Android phone",
    hero_badge_aria: "Find on Google Play",
    hero_store_note: "Available for Android devices",
    hero_scroll_label: "Continue to how it works",

    // index.html - Mockup 1 (Hero Device)
    mock_greeting: "Good morning,",
    mock_search_placeholder: "Search services or packages",
    mock_next_schedule: "Next schedule · Tomorrow",
    mock_package_a: "Service Package A",
    mock_partner_place: "09:30 AM · Official Partner Location",
    mock_what_today: "What would you like to do today?",
    mock_btn_search: "Search",
    mock_btn_book: "Make appointment",
    mock_btn_docs: "View documents",
    mock_order_process: "Order progress",
    mock_order_processing: "Order is being processed",
    mock_nav_home: "Home",
    mock_nav_orders: "Orders",
    mock_nav_docs: "Documents",
    mock_nav_profile: "Profile",

    // index.html - Benefits Section
    benefits_title: "All essential features in one app",
    benefits_sub: "Labvōra helps you manage schedules and reservations conveniently, clearly, and securely.",
    benefit_1_title: "Explore Services",
    benefit_1_desc: "Choose the service you need with clear, easy-to-understand information and preparation guidelines.",
    benefit_2_title: "Set Schedules",
    benefit_2_desc: "Select partner locations as well as the visit date and time that suit you best.",
    benefit_3_title: "Track Status",
    benefit_3_desc: "Monitor your order status in real-time, from reservation until completion.",
    benefit_4_title: "History & Documents",
    benefit_4_desc: "Access your summaries and documents securely stored in your account history.",

    // index.html - Workflow Section
    workflow_collage_label: "Collection of Labvōra app screens",
    workflow_title: "How Labvōra works",
    workflow_sub: "Four integrated steps from reservation to document storage.",
    step_1_title: "Select service",
    step_1_desc: "Determine the service needed prior to scheduling your visit.",
    step_2_title: "Set location & schedule",
    step_2_desc: "Choose the nearest partner location as well as the visit date and time.",
    step_3_title: "Track order progress",
    step_3_desc: "Follow order updates in real-time, from order placement to completion.",
    step_4_title: "Access documents & history",
    step_4_desc: "Open and download documents directly within the Labvōra app. Everything is safely archived in your account history.",

    // index.html - Mockup Mini Devices
    mock_choose_service: "Select service",
    mock_services: "Services",
    mock_search_service: "Search service",
    mock_pkg_available: "Available package",
    mock_pkg_a_items: "14 items",
    mock_other_options: "Other choices",
    mock_order_no: "Order number",
    mock_latest_status: "Latest status",
    mock_processing_now: "In process",
    mock_today_time: "Today · 10:18",
    mock_order_journey: "Order journey",
    mock_status_journey: "Created → Processing",
    mock_status_tab: "Status",
    mock_details_tab: "Details",
    mock_help_tab: "Help",
    mock_latest_doc: "Latest document",
    mock_doc_available: "Document ready",
    mock_summary_label: "Summary",
    mock_download_tab: "Download",
    mock_share_tab: "Share",

    // index.html - CTA Section
    cta_title: "Ready to organize your schedule today?",
    cta_sub: "Enjoy the ease of booking and schedule management with Labvōra !",
    cta_badge_aria: "Find on Google Play",
    cta_store_note: "Available for Android devices",
    cta_quick_access: "Quick access",
    mock_appt: "Appointment",

    // Footer (Both index & privacy policy)
    footer_copy_index: "Choose services, schedule visits, track order progress, and access documents all in one app.",
    footer_copy_policy: "Labvōra by Labvora Informatics Engineering educational project, all registration data is fictitious (dummy) data, never shared with third parties.",
    footer_copyright: "© 2026 Labvōra Labvora Informatics Engineering. All rights reserved.",
    footer_last_updated: "Last updated: September 17, 2026",

    // privacy-policy.html Specific
    pp_meta_title: "Labvōra Privacy Policy",
    pp_skip_link: "Skip to content",
    pp_header_title: "Labvōra Privacy Policy",
    pp_header_updated: "Developer: Labvora Informatics Engineering • Last updated: September 17, 2026",
    pp_bc_home: "Home",
    pp_bc_current: "Privacy Policy",
    pp_toc_title: "Contents",

    // TOC Items
    toc_1: "1. Introduction and Educational Purpose",
    toc_2: "2. Fictitious (dummy) Data Collected",
    toc_2_1: "2.1. Identity and Personal Data",
    toc_2_2: "2.2. Account and Activity Data",
    toc_3: "3. Purposes of Information Use",
    toc_4: "4. Data Storage and Security",
    toc_5: "5. No Data Shared",
    toc_6: "6. User Rights and Account Deletion",
    toc_6_1: "6.1. How to Delete Your Account",
    toc_6_2: "6.2. Data That Will Be Deleted",
    toc_6_3: "6.3. Retention and Backups",
    toc_6_4: "6.4. Support",
    toc_7: "7. Policy Acceptance",

    // Policy Content Sections
    pp_intro_heading: "Privacy Policy",
    pp_notice_title: "Important Notice Educational Purpose",
    pp_notice_desc: "The Labvōra application was developed by Labvora Informatics Engineering as an academic project for learning and demonstration purposes. All data contained in the application, including names, addresses, phone numbers, emails, schedules, and transaction history, is fictitious (dummy) data for simulation and testing. This application does not process real transactions or connect to any official service systems.",
    pp_intro_desc_edu: "Labvōra was developed by Labvora Informatics Engineering. This policy explains that registration data (name, phone number, address, email, password) you enter is treated as fictitious (dummy) project data, stored in the project database to simulate application functions, and never shared with third parties.",

    pp_sec1_heading: "1. Introduction and Educational Purpose",
    pp_sec1_body: "Welcome to Labvōra. This application was built as a student project to demonstrate Android development (registration, scheduling, and reservations). All data inside user accounts, profiles, schedules is fictitious (dummy) data for demo and testing, not real data. We do not request or require your genuine personal data to use the application.",

    pp_sec2_heading: "2. Fictitious (dummy) Data Collected",
    pp_sec2_body: "To simulate registration and booking functions, the application allows you to enter the following data. All of it is treated as fictitious project data and stored in the project database to demonstrate how the application works:",
    pp_sec2_li1: "Full Name, Phone Number, Full Address, Email, and Password (from the Registration Form) fictitious (dummy), for account simulation.",
    pp_sec2_li2: "Account and activity data: demo credentials, reservation history / simulated schedules you create in the application.",
    pp_sec2_li3: "No collection of real time location, contacts, personal photos, or other sensitive data beyond what you type as dummy.",

    pp_sec2_1_heading: "2.1. Identity and Personal Data (Dummy)",
    pp_sec2_1_body: "The Full Name, Phone Number, Full Address, and Email fields in the registration form are for demo only. Please use fictitious data only. Data you enter is stored in the project database as part of the simulation and is not used for any other purpose outside this project demo.",

    pp_sec2_2_heading: "2.2. Account and Activity Data (Dummy)",
    pp_sec2_2_body: "Demo passwords, session tokens, and simulated reservation / schedule history are stored in the project database to demonstrate login, booking, and history functions. All of it is simulation data and does not process real transactions.",

    pp_sec3_heading: "3. Purposes of Fictitious (dummy) Data Use",
    pp_sec3_body: "Fictitious (dummy) data is used only for:",
    pp_sec3_li1: "Demonstrating simulated account registration and login.",
    pp_sec3_li2: "Demonstrating creation, storage, and display of demo schedules / reservations.",
    pp_sec3_li3: "Testing and evaluation of the educational project. Not for advertising, commercial analytics, or real services.",

    pp_sec4_heading: "4. Data Storage and Security",
    pp_sec4_body: "Fictitious (dummy) data is stored in the project backend database for simulation. We apply restricted access for project purposes. Because this is an educational project, do not enter real personal data data that has already been entered can be deleted by deleting your account / application data or contacting us. Uninstalling or clearing application data will delete local data on your device.",

    pp_sec5_heading: "5. No Data Shared with Third Parties",
    pp_sec5_body: "Fictitious (dummy) project data is never shared, sold, or rented to any other company or organization for advertising or commercial purposes. Data is only used within the scope of this application demo.",

    pp_sec6_heading: "6. User Rights and Account Deletion Policy",
    pp_sec6_body: "Control over your demo account and fictitious (dummy) data is our priority. You can delete your account and demo data at any time:",
    pp_sec6_1_heading: "6.1. How to Delete Your Account in the App",
    pp_sec6_1_note: "You can permanently delete your account directly through the Profile menu in the Labvōra application by following these steps:",
    pp_sec6_1_step1_1: "Open the Labvōra application and sign in to your account.",
    pp_sec6_1_step2_1: "Go to the ",
    pp_sec6_1_step2_2: "Profile",
    pp_sec6_1_step2_3: " menu.",
    pp_sec6_1_step3_1: "Scroll down and tap the ",
    pp_sec6_1_step3_2: "DELETE ACCOUNT",
    pp_sec6_1_step3_3: " button.",
    pp_sec6_1_step4_1: "Tap ",
    pp_sec6_1_step4_2: "Continue",
    pp_sec6_1_step4_3: " on the first warning dialog.",
    pp_sec6_1_step5_1: "Tap ",
    pp_sec6_1_step5_2: "Yes, Delete Account",
    pp_sec6_1_step5_3: " on the final confirmation dialog.",

    pp_sec6_2_heading: "6.2. Data That Will Be Deleted",
    pp_sec6_2_body: "Your demo name, phone number, address, email, password, and simulated schedule / reservation history will be deleted from the project database and cannot be restored.",

    pp_sec6_3_heading: "6.3. Temporary Storage and Retention",
    pp_sec6_3_body: "Fictitious (dummy) data is only stored for the duration of the demo project and is not used for commercial purposes. There is no long term retention beyond demonstration needs.",

    pp_sec6_4_heading: "6.4. Confirmation and Support",
    pp_sec6_4_body_1: "For questions or data deletion requests, contact the developer Labvora Informatics Engineering via email at ",
    pp_sec6_4_body_2: ".",

    pp_sec7_heading: "7. Policy Acceptance and Changes",
    pp_sec7_body: "By registering with fictitious (dummy) data and using the application, you agree to this Privacy Policy. This application is purely an educational simulation it does not process real transactions or connect to real service systems. If the project scope changes, this policy will be updated."
  },

  id: {
    // Navigation
    nav_home: "Beranda",
    nav_privacy: "Kebijakan Privasi",
    nav_delete: "Hapus akun",
    nav_contact: "Hubungi Kami",
    lang_label: "Bahasa",

    // index.html - Hero
    hero_title_prefix: "Atur jadwal dengan ",
    hero_desc: "Pilih layanan, jadwalkan kunjungan, pantau progres, dan akses dokumen dalam satu aplikasi.",
    hero_btn_workflow: "Lihat cara kerja",
    hero_btn_contact: "Hubungi kami",
    hero_device_label: "Pratinjau aplikasi Labvōra pada ponsel Android",
    hero_badge_aria: "Temukan di Google Play",
    hero_store_note: "Tersedia untuk perangkat Android",
    hero_scroll_label: "Lanjut ke cara kerja",

    // index.html - Mockup 1 (Hero Device)
    mock_greeting: "Selamat pagi,",
    mock_search_placeholder: "Cari layanan atau paket",
    mock_next_schedule: "Jadwal berikutnya · Besok",
    mock_package_a: "Paket layanan A",
    mock_partner_place: "09.30 WIB · Tempat Mitra Resmi",
    mock_what_today: "Mau apa hari ini?",
    mock_btn_search: "Cari",
    mock_btn_book: "Buat janji",
    mock_btn_docs: "Lihat dokumen",
    mock_order_process: "Proses pesanan",
    mock_order_processing: "Pesanan sedang diproses",
    mock_nav_home: "Beranda",
    mock_nav_orders: "Pesanan",
    mock_nav_docs: "Dokumen",
    mock_nav_profile: "Profil",

    // index.html - Benefits Section
    benefits_title: "Semua fitur penting dalam satu aplikasi",
    benefits_sub: "Labvōra membantu Anda mengelola jadwal dan reservasi dengan lebih praktis, jelas, dan aman.",
    benefit_1_title: "Jelajahi Layanan",
    benefit_1_desc: "Pilih layanan yang Anda butuhkan dengan informasi dan persiapan yang mudah dipahami.",
    benefit_2_title: "Tentukan Jadwal",
    benefit_2_desc: "Pilih tempat mitra serta tanggal dan waktu kunjungan yang paling sesuai untuk Anda.",
    benefit_3_title: "Pantau Status",
    benefit_3_desc: "Pantau status pesanan Anda secara real-time, dari pemesanan hingga selesai.",
    benefit_4_title: "Riwayat & Dokumen",
    benefit_4_desc: "Akses ringkasan dan dokumen Anda yang tersimpan dengan aman dalam riwayat akun Anda.",

    // index.html - Workflow Section
    workflow_collage_label: "Kumpulan layar aplikasi Labvōra",
    workflow_title: "Cara Labvōra bekerja",
    workflow_sub: "Empat alur terintegrasi dari pemesanan hingga dokumen tersimpan.",
    step_1_title: "Pilih layanan",
    step_1_desc: "Tentukan layanan yang dibutuhkan sebelum jadwal kunjungan.",
    step_2_title: "Tentukan tempat & jadwal",
    step_2_desc: "Pilih lokasi mitra terdekat serta tanggal dan jam kunjungan.",
    step_3_title: "Pantau progres pesanan",
    step_3_desc: "Ikuti status pesanan secara real-time, dari pembuatan hingga selesai.",
    step_4_title: "Akses dokumen & riwayat",
    step_4_desc: "Buka dan unduh dokumen di dalam aplikasi Labvōra. Semua akan tersimpan dengan aman dalam riwayat akun Anda",

    // index.html - Mockup Mini Devices
    mock_choose_service: "Pilih layanan",
    mock_services: "Layanan",
    mock_search_service: "Cari layanan",
    mock_pkg_available: "Paket tersedia",
    mock_pkg_a_items: "14 item",
    mock_other_options: "Pilihan lain",
    mock_order_no: "Nomor pesanan",
    mock_latest_status: "Status terbaru",
    mock_processing_now: "Sedang diproses",
    mock_today_time: "Hari ini · 10.18",
    mock_order_journey: "Perjalanan pesanan",
    mock_status_journey: "Dibuat → Diproses",
    mock_status_tab: "Status",
    mock_details_tab: "Detail",
    mock_help_tab: "Bantuan",
    mock_latest_doc: "Dokumen terbaru",
    mock_doc_available: "Dokumen tersedia",
    mock_summary_label: "Ringkasan",
    mock_download_tab: "Unduh",
    mock_share_tab: "Bagikan",

    // index.html - CTA Section
    cta_title: "Siap mengatur jadwal Anda hari ini?",
    cta_sub: "Nikmati kemudahan pemesanan dan pengelolaan jadwal bersama Labvōra !",
    cta_badge_aria: "Temukan di Google Play",
    cta_store_note: "Tersedia untuk perangkat Android",
    cta_quick_access: "Akses cepat",
    mock_appt: "Janji",

    // Footer (Both index & privacy policy)
    footer_copy_index: "Pilih layanan, jadwalkan kunjungan, pantau progres, dan akses dokumen dalam satu aplikasi.",
    footer_copy_policy: "Labvōra proyek edukasi oleh Labvora Teknik Informatika, seluruh data registrasi adalah data fiktif (dummy), dan tidak pernah dibagikan kepada pihak ketiga.",
    footer_copyright: "© 2026 Labvōra Labvora Teknik Informatika. Seluruh hak cipta dilindungi undang-undang.",
    footer_last_updated: "Terakhir diperbarui: 17 September 2026",

    // privacy-policy.html Specific
    pp_meta_title: "Kebijakan Privasi Labvōra",
    pp_skip_link: "Lewati ke konten",
    pp_header_title: "Kebijakan Privasi Labvōra",
    pp_header_updated: "Pengembang: Labvora Teknik Informatika • Terakhir diperbarui: 17 September 2026",
    pp_bc_home: "Beranda",
    pp_bc_current: "Kebijakan Privasi",
    pp_toc_title: "Daftar isi",

    // TOC Items
    toc_1: "1. Pendahuluan dan Tujuan Edukasi",
    toc_2: "2. Data Fiktif (Dummy) yang Dikumpulkan",
    toc_2_1: "2.1. Identitas & Data Diri",
    toc_2_2: "2.2. Data Akun & Aktivitas",
    toc_3: "3. Tujuan Penggunaan Informasi",
    toc_4: "4. Penyimpanan & Keamanan Data",
    toc_5: "5. Tidak Ada Pembagian Data",
    toc_6: "6. Hak Pengguna & Penghapusan Akun",
    toc_6_1: "6.1. Cara Menghapus Akun",
    toc_6_2: "6.2. Data yang Dihapus",
    toc_6_3: "6.3. Retensi & Cadangan",
    toc_6_4: "6.4. Bantuan Support",
    toc_7: "7. Persetujuan Kebijakan",

    // Policy Content Sections
    pp_intro_heading: "Kebijakan Privasi",
    pp_notice_title: "Pemberitahuan Penting: Tujuan Edukasi",
    pp_notice_desc: "Aplikasi Labvōra dikembangkan oleh Labvora Teknik Informatika sebagai proyek akademik untuk keperluan pembelajaran dan demonstrasi. Seluruh data yang terdapat dalam aplikasi, termasuk nama, alamat, nomor telepon, email, jadwal, dan riwayat transaksi adalah data fiktif (dummy) untuk simulasi dan pengujian semata. Aplikasi ini tidak memproses transaksi nyata atau terhubung ke sistem layanan resmi mana pun.",
    pp_intro_desc_edu: "Labvōra dikembangkan oleh Labvora Teknik Informatika. Kebijakan ini menjelaskan bahwa data pendaftaran (nama, nomor telepon, alamat, email, kata sandi) yang Anda masukkan diperlakukan sebagai data proyek fiktif (dummy), disimpan dalam basis data proyek untuk mensimulasikan fungsi aplikasi, dan tidak pernah dibagikan kepada pihak ketiga.",

    pp_sec1_heading: "1. Pendahuluan dan Tujuan Edukasi",
    pp_sec1_body: "Selamat datang di Labvōra. Aplikasi ini dibangun sebagai proyek mahasiswa untuk mendemonstrasikan pengembangan aplikasi Android (pendaftaran, penjadwalan, dan reservasi). Seluruh data dalam akun pengguna, profil, dan jadwal adalah data fiktif (dummy) untuk demo dan pengujian, bukan data nyata. Kami tidak meminta atau mewajibkan data pribadi asli Anda untuk menggunakan aplikasi ini.",

    pp_sec2_heading: "2. Data Fiktif (Dummy) yang Dikumpulkan",
    pp_sec2_body: "Untuk mensimulasikan fungsi pendaftaran dan pemesanan, aplikasi memungkinkan Anda memasukkan data berikut. Seluruhnya diperlakukan sebagai data proyek fiktif dan disimpan dalam basis data proyek untuk menunjukkan cara kerja aplikasi:",
    pp_sec2_li1: "Nama Lengkap, Nomor Telepon, Alamat Lengkap, Email, dan Kata Sandi (dari Formulir Pendaftaran) bersifat fiktif (dummy), untuk simulasi akun.",
    pp_sec2_li2: "Data akun dan aktivitas: kredensial demo, riwayat reservasi / jadwal simulasi yang Anda buat di aplikasi.",
    pp_sec2_li3: "Tidak ada pengumpulan lokasi real-time, kontak, foto pribadi, atau data sensitif lainnya di luar apa yang Anda ketikkan sebagai data dummy.",

    pp_sec2_1_heading: "2.1. Identitas & Data Diri (Dummy)",
    pp_sec2_1_body: "Kolom Nama Lengkap, Nomor Telepon, Alamat Lengkap, dan Email pada formulir pendaftaran hanya untuk demonstrasi. Harap gunakan data fiktif saja. Data yang Anda masukkan disimpan di basis data proyek sebagai bagian dari simulasi dan tidak digunakan untuk tujuan lain di luar demo proyek ini.",

    pp_sec2_2_heading: "2.2. Data Akun & Aktivitas (Dummy)",
    pp_sec2_2_body: "Kata sandi demo, token sesi, dan riwayat reservasi / jadwal simulasi disimpan dalam basis data proyek untuk mendemonstrasikan fungsi login, pemesanan, dan riwayat. Seluruhnya merupakan data simulasi dan tidak memproses transaksi riil.",

    pp_sec3_heading: "3. Tujuan Penggunaan Data Fiktif (Dummy)",
    pp_sec3_body: "Data fiktif (dummy) hanya digunakan untuk:",
    pp_sec3_li1: "Mendemonstrasikan simulasi pendaftaran dan login akun.",
    pp_sec3_li2: "Mendemonstrasikan pembuatan, penyimpanan, dan penampilan jadwal / reservasi demo.",
    pp_sec3_li3: "Pengujian dan evaluasi proyek edukasi. Bukan untuk periklanan, analitik komersial, atau layanan nyata.",

    pp_sec4_heading: "4. Penyimpanan & Keamanan Data",
    pp_sec4_body: "Data fiktif (dummy) disimpan dalam basis data backend proyek untuk simulasi. Kami menerapkan akses terbatas untuk keperluan proyek. Karena ini adalah proyek edukasi, jangan masukkan data pribadi asli. Data yang telah dimasukkan dapat dihapus dengan menghapus akun / data aplikasi atau menghubungi kami. Mencopot pemasangan (uninstall) atau menghapus data aplikasi akan menghapus data lokal di perangkat Anda.",

    pp_sec5_heading: "5. Tidak Ada Pembagian Data ke Pihak Ketiga",
    pp_sec5_body: "Data proyek fiktif (dummy) tidak pernah dibagikan, dijual, atau disewakan kepada perusahaan atau organisasi lain mana pun untuk tujuan periklanan maupun komersial. Data hanya digunakan dalam ruang lingkup demo aplikasi ini.",

    pp_sec6_heading: "6. Hak Pengguna & Kebijakan Penghapusan Akun",
    pp_sec6_body: "Kendali atas akun demo dan data fiktif (dummy) Anda adalah prioritas kami. Anda dapat menghapus akun dan data demo Anda kapan saja:",
    pp_sec6_1_heading: "6.1. Cara Menghapus Akun di Aplikasi",
    pp_sec6_1_note: "Anda dapat menghapus akun secara permanen langsung melalui menu Profil di aplikasi Labvōra dengan langkah-langkah berikut:",
    pp_sec6_1_step1_1: "Buka aplikasi Labvōra dan masuk ke akun Anda.",
    pp_sec6_1_step2_1: "Masuk ke menu ",
    pp_sec6_1_step2_2: "Profil",
    pp_sec6_1_step2_3: ".",
    pp_sec6_1_step3_1: "Gulir ke bawah dan tekan tombol ",
    pp_sec6_1_step3_2: "HAPUS AKUN",
    pp_sec6_1_step3_3: ".",
    pp_sec6_1_step4_1: "Tekan ",
    pp_sec6_1_step4_2: "Lanjutkan",
    pp_sec6_1_step4_3: " pada dialog peringatan pertama.",
    pp_sec6_1_step5_1: "Tekan ",
    pp_sec6_1_step5_2: "Ya, Hapus Akun",
    pp_sec6_1_step5_3: " pada dialog konfirmasi terakhir.",

    pp_sec6_2_heading: "6.2. Data yang Akan Dihapus",
    pp_sec6_2_body: "Nama demo, nomor telepon, alamat, email, kata sandi, dan riwayat jadwal / reservasi simulasi Anda akan dihapus dari basis data proyek dan tidak dapat dipulihkan.",

    pp_sec6_3_heading: "6.3. Penyimpanan Sementara & Retensi",
    pp_sec6_3_body: "Data fiktif (dummy) hanya disimpan selama durasi proyek demo dan tidak digunakan untuk kepentingan komersial. Tidak ada retensi jangka panjang di luar kebutuhan demonstrasi.",

    pp_sec6_4_heading: "6.4. Konfirmasi Penghapusan & Bantuan",
    pp_sec6_4_body_1: "Untuk pertanyaan atau permintaan penghapusan data, hubungi pengembang Labvora Teknik Informatika melalui email di ",
    pp_sec6_4_body_2: ".",

    pp_sec7_heading: "7. Persetujuan & Perubahan Kebijakan",
    pp_sec7_body: "Dengan mendaftar menggunakan data fiktif (dummy) dan menggunakan aplikasi, Anda menyetujui Kebijakan Privasi ini. Aplikasi ini murni simulasi edukasi dan tidak memproses transaksi riil atau terhubung ke sistem layanan nyata. Jika cakupan proyek berubah, kebijakan ini akan diperbarui."
  }
};

// Global language switcher function
function initLabvoraLanguage() {
  function getSavedLang() {
    try {
      return localStorage.getItem("preferred_lang") || "id";
    } catch (e) {
      return "id";
    }
  }

  function setLanguage(lang) {
    if (!labvoraTranslations[lang]) lang = "id";
    document.documentElement.lang = lang;

    var dict = labvoraTranslations[lang];

    // Update text elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update placeholders with data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Update titles / aria-labels with data-i18n-aria
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    // Update select dropdowns
    document.querySelectorAll(".lang-select").forEach(function (sel) {
      sel.value = lang;
    });

    try {
      localStorage.setItem("preferred_lang", lang);
    } catch (e) {}

    // Dispatch event for any custom page callbacks
    window.dispatchEvent(new CustomEvent("labvora:langchange", { detail: { lang: lang } }));
  }

  // Bind change listeners to any lang select
  document.querySelectorAll(".lang-select").forEach(function (sel) {
    sel.addEventListener("change", function () {
      setLanguage(this.value);
    });
  });

  // Apply initial language
  var initial = getSavedLang();
  setLanguage(initial);
}
