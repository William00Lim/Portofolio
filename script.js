// Translations
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            greeting: "Hello, I'm",
            name: "William Lim",
            title: "IoT Engineer",
            description: "Passionate about building scalable solutions and innovative technologies. Specialized in cloud infrastructure, full-stack development, and system architecture.",
            getInTouch: "Get in Touch",
            viewProjects: "View Projects",
        },
        about: {
            title: "About Me",
            description: "I'm an IT Tech Engineer with a passion for solving complex technical challenges. My expertise spans across cloud computing, DevOps, and full-stack development. I thrive on creating efficient, scalable solutions that drive business value.",
            experience: "Professional Experience",
            experienceYears: "5+ Years",
            projects: "Successfully Delivered",
            projectsCount: "20+ Projects",
            certified: "AWS & Azure Professional",
            certifiedTitle: "Certified",
        },
        skills: {
            title: "Skills & Expertise",
            description: "A comprehensive set of technical skills built through years of hands-on experience",
            frontend: "Frontend Development",
            backend: "Backend Development",
            database: "Database",
            cloud: "Cloud & DevOps",
            tools: "Tools & Version Control",
            other: "Other Skills",
        },
        projects: {
            title: "Featured Projects",
            description: "A selection of projects that showcase my technical expertise and problem-solving abilities",
            project1: {
                title: "Cloud Infrastructure Platform",
                description: "Built a scalable cloud infrastructure management platform using AWS services, reducing deployment time by 60%.",
            },
            project2: {
                title: "Enterprise Web Application",
                description: "Developed a full-stack enterprise solution handling 100k+ daily users with real-time data synchronization.",
            },
            project3: {
                title: "DevOps Automation Suite",
                description: "Created automated CI/CD pipelines and monitoring solutions improving deployment frequency by 80%.",
            },
            code: "Code",
            demo: "Demo",
        },
        contact: {
            title: "Get In Touch",
            description: "Have a project in mind or want to discuss opportunities? Feel free to reach out!",
            email: "Email",
            phone: "Phone",
            location: "Location",
            locationValue: "San Francisco, CA",
            form: {
                title: "Send a Message",
                name: "Name",
                namePlaceholder: "Your name",
                email: "Email",
                emailPlaceholder: "your.email@example.com",
                subject: "Subject",
                subjectPlaceholder: "What's this about?",
                message: "Message",
                messagePlaceholder: "Your message...",
                send: "Send Message",
            },
        },
        footer: {
            copyright: "© 2024 William Lim. All rights reserved.",
        },
    },
    jp: {
        nav: {
            home: "ホーム",
            about: "私について",
            skills: "スキル",
            projects: "プロジェクト",
            contact: "お問い合わせ",
        },
        hero: {
            greeting: "こんにちは、",
            name: "ウィリアム・リム",
            title: "IoTエンジニア",
            description: "スケーラブルなソリューションと革新的な技術の構築に情熱を注いでいます。クラウドインフラ、フルスタック開発、システムアーキテクチャを専門としています。",
            getInTouch: "お問い合わせ",
            viewProjects: "プロジェクトを見る",
        },
        about: {
            title: "私について",
            description: "複雑な技術的課題を解決することに情熱を持つITエンジニアです。クラウドコンピューティング、DevOps、フルスタック開発にわたる専門知識を持ち、ビジネス価値を生み出す効率的でスケーラブルなソリューションの作成に力を注いでいます。",
            experience: "実務経験",
            experienceYears: "5年以上",
            projects: "成功したプロジェクト",
            projectsCount: "20以上のプロジェクト",
            certified: "AWS & Azure認定",
            certifiedTitle: "認定資格",
        },
        skills: {
            title: "スキルと専門知識",
            description: "長年の実践経験を通じて培われた包括的な技術スキル",
            frontend: "フロントエンド開発",
            backend: "バックエンド開発",
            database: "データベース",
            cloud: "クラウド & DevOps",
            tools: "ツール & バージョン管理",
            other: "その他のスキル",
        },
        projects: {
            title: "注目のプロジェクト",
            description: "技術的専門知識と問題解決能力を示すプロジェクトの選集",
            project1: {
                title: "クラウドインフラプラットフォーム",
                description: "AWSサービスを使用してスケーラブルなクラウドインフラ管理プラットフォームを構築し、デプロイ時間を60％削減しました。",
            },
            project2: {
                title: "エンタープライズWebアプリケーション",
                description: "リアルタイムデータ同期を備え、10万人以上の日次ユーザーを処理するフルスタックエンタープライズソリューションを開発しました。",
            },
            project3: {
                title: "DevOps自動化スイート",
                description: "自動化されたCI/CDパイプラインと監視ソリューションを作成し、デプロイ頻度を80％改善しました。",
            },
            code: "コード",
            demo: "デモ",
        },
        contact: {
            title: "お問い合わせ",
            description: "プロジェクトのアイデアや機会について話し合いたいですか？お気軽にご連絡ください！",
            email: "メール",
            phone: "電話",
            location: "所在地",
            locationValue: "サンフランシスコ、カリフォルニア",
            form: {
                title: "メッセージを送信",
                name: "お名前",
                namePlaceholder: "お名前を入力",
                email: "メールアドレス",
                emailPlaceholder: "your.email@example.com",
                subject: "件名",
                subjectPlaceholder: "用件について",
                message: "メッセージ",
                messagePlaceholder: "メッセージを入力...",
                send: "送信する",
            },
        },
        footer: {
            copyright: "© 2024 William Lim。全著作権所有。",
        },
    },
    id: {
        nav: {
            home: "Beranda",
            about: "Tentang",
            skills: "Keahlian",
            projects: "Proyek",
            contact: "Kontak",
        },
        hero: {
            greeting: "Halo, Saya",
            name: "William Lim",
            title: "Insinyur IoT",
            description: "Bersemangat dalam membangun solusi yang dapat diskalakan dan teknologi inovatif. Spesialisasi dalam infrastruktur cloud, pengembangan full-stack, dan arsitektur sistem.",
            getInTouch: "Hubungi Saya",
            viewProjects: "Lihat Proyek",
        },
        about: {
            title: "Tentang Saya",
            description: "Saya adalah Insinyur Teknologi IT dengan passion untuk menyelesaikan tantangan teknis yang kompleks. Keahlian saya mencakup komputasi awan, DevOps, dan pengembangan full-stack. Saya berkembang dalam menciptakan solusi yang efisien dan dapat diskalakan yang mendorong nilai bisnis.",
            experience: "Pengalaman Profesional",
            experienceYears: "5+ Tahun",
            projects: "Berhasil Diselesaikan",
            projectsCount: "20+ Proyek",
            certified: "Profesional AWS & Azure",
            certifiedTitle: "Bersertifikat",
        },
        skills: {
            title: "Keahlian & Kompetensi",
            description: "Kumpulan keterampilan teknis yang komprehensif yang dibangun melalui pengalaman praktis bertahun-tahun",
            frontend: "Pengembangan Frontend",
            backend: "Pengembangan Backend",
            database: "Basis Data",
            cloud: "Cloud & DevOps",
            tools: "Alat & Kontrol Versi",
            other: "Keterampilan Lainnya",
        },
        projects: {
            title: "Proyek Unggulan",
            description: "Pilihan proyek yang menampilkan keahlian teknis dan kemampuan pemecahan masalah saya",
            project1: {
                title: "Platform Infrastruktur Cloud",
                description: "Membangun platform manajemen infrastruktur cloud yang dapat diskalakan menggunakan layanan AWS, mengurangi waktu deployment sebesar 60%.",
            },
            project2: {
                title: "Aplikasi Web Enterprise",
                description: "Mengembangkan solusi enterprise full-stack yang menangani 100k+ pengguna harian dengan sinkronisasi data real-time.",
            },
            project3: {
                title: "Suite Otomasi DevOps",
                description: "Menciptakan pipeline CI/CD otomatis dan solusi monitoring yang meningkatkan frekuensi deployment sebesar 80%.",
            },
            code: "Kode",
            demo: "Demo",
        },
        contact: {
            title: "Hubungi Saya",
            description: "Punya proyek dalam pikiran atau ingin mendiskusikan peluang? Jangan ragu untuk menghubungi!",
            email: "Email",
            phone: "Telepon",
            location: "Lokasi",
            locationValue: "San Francisco, CA",
            form: {
                title: "Kirim Pesan",
                name: "Nama",
                namePlaceholder: "Nama Anda",
                email: "Email",
                emailPlaceholder: "email.anda@example.com",
                subject: "Subjek",
                subjectPlaceholder: "Tentang apa ini?",
                message: "Pesan",
                messagePlaceholder: "Pesan Anda...",
                send: "Kirim Pesan",
            },
        },
        footer: {
            copyright: "© 2024 William Lim. Hak cipta dilindungi.",
        },
    },
};

// Language State
let currentLanguage = 'id'; // Start with Indonesian
const languageOrder = ['id', 'en', 'jp']; // Cycle order: ID -> EN -> JP -> ID

// Helper function to get nested value from object using dot notation
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Update all text content based on current language
function updateContent() {
    const currentTranslations = translations[currentLanguage];
    
    // Update all elements with data-text attribute
    document.querySelectorAll('[data-text]').forEach(element => {
        const key = element.getAttribute('data-text');
        const value = getNestedValue(currentTranslations, key);
        if (value) {
            element.textContent = value;
        }
    });
    
    // Update all elements with data-placeholder attribute
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        const value = getNestedValue(currentTranslations, key);
        if (value) {
            element.placeholder = value;
        }
    });
    
    // Update navigation links
    document.querySelectorAll('[data-nav]').forEach(element => {
        const key = element.getAttribute('data-nav');
        const value = currentTranslations.nav[key];
        if (value) {
            element.textContent = value;
        }
    });
    
    // Update footer with HTML support (for bold text in Indonesian)
    const footerText = document.getElementById('footerText');
    if (footerText) {
        footerText.innerHTML = currentTranslations.footer.copyright;
    }
    
    // Update language button display
    const langMap = { 'id': 'ID', 'en': 'EN', 'jp': 'JP' };
    document.getElementById('currentLang').textContent = langMap[currentLanguage];
    document.getElementById('currentLangMobile').textContent = langMap[currentLanguage];
}

// Switch to next language in cycle
function switchLanguage() {
    const currentIndex = languageOrder.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageOrder.length;
    currentLanguage = languageOrder[nextIndex];
    updateContent();
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize content
    updateContent();
    
    // Language switcher buttons
    document.getElementById('languageBtn').addEventListener('click', switchLanguage);
    document.getElementById('languageBtnMobile').addEventListener('click', switchLanguage);
    
    // Mobile menu
    document.getElementById('menuBtn').addEventListener('click', toggleMobileMenu);
    document.getElementById('mobileMenuOverlay').addEventListener('click', closeMobileMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submission is a demo. In production, this would send your message.');
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
