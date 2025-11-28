/* =========================================================================
   MAIN.JS — Optimized Navigation, Translation & Carousel
   ========================================================================= */

// Always go back to top when refreshing the page
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  /* ============================
     MOBILE MENU
     ============================ */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  /* ============================
     OFFSET SMOOTH SCROLL
     ============================ */
  const header = document.querySelector(".site-header");
  const headerOffset = header ? header.offsetHeight + 16 : 80;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const id = link.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const top = target.offsetTop - headerOffset;

      window.scrollTo({ top, behavior: "smooth" });

      if (mainNav && mainNav.classList.contains("open")) {
        mainNav.classList.remove("open");
      }
    });
  });

  /* ============================
     ACTIVE NAV LINK ON SCROLL
     ============================ */
  const sections = [...document.querySelectorAll("section")];
  const navLinks = [...document.querySelectorAll(".main-nav a")];

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(a =>
              a.classList.toggle("active", a.hash === "#" + id)
            );
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach(section => observer.observe(section));
  }

  /* ============================
     TRANSLATION SYSTEM
     ============================ */
  const langBtn = document.getElementById("langBtn");

  if (langBtn) {
    const i18nNodes = [...document.querySelectorAll("[data-i18n]")];
    const placeholderNodes = [...document.querySelectorAll("[data-i18n-placeholder]")];

    const content = {
      en: {
        brand_title: "</> Portfolio",
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        greeting: "Hello, I am",
        name: "William Lim",
        title: "IoT Engineer • Computer Vision • Embedded Systems",
        lead:
          " Hardworking, passionate, and self-motivated professional with experience in IoT systems, computer vision, embedded development, and full system integration. I build reliable, scalable, and intelligent solutions that connect hardware, software, and AI.",
        btn_contact: "Contact Me",
        btn_projects: "View Projects",

        about_title: "About Me",
        about_desc:
          "I’m an engineer specializing in IoT, computer vision, and embedded systems. I’ve built solutions ranging from human and vehicle detection to cloud-connected IoT devices. With experience in AI, system design, mobile apps, and PCB development, I enjoy creating smart and efficient technologies.",

        skills_title: "Skills",
        skills_sub: "A comprehensive skillset built through real-world experience.",

        project_title: "Featured Projects",
        project_desc:
          "A collection of projects I’ve completed or am currently working on.",

        p1_title: "PCB Flight Controller",
        p1_desc: "This project creating a custom flight controller based the CUAV series, published on GitHub. The design is made using EasyEDA for the schematics and PCB layout.",

        p2_title: "Thermal Camera Systems",
        p2_desc: "Implemented a full deployment of a dual-sensor industrial camera system (thermal + visible) used for real-time monitoring of high-voltage substation and switchgear equipment. This project covered the entire engineering lifecycle—from hardware integration to software configuration, data management, and client training.",

        p3_title: "Advertisement Human Crowd Detection",
        p3_desc: "Development of a human detection system tailored for advertisement displays in elevators to detect and count individuals in real-time. When the nearest individuals view the ads, the content changes based on the individual's age and gender with 85% confidence.",

        p4_title: "Vehicle Traffic Detection",
        p4_desc: "The detection system also serves for advertisement billboards to ascertain the number of vehicles in a certain area, and it can be remotely streamed. Moreover, the detection zone (coordinate lines) can be customized through a web interface hosted on the server, which is accessible via a secure VPN connection. This feature allows users to easily define and adjust the vehicle detection areas based on the deployment environment without direct physical access.",

        p5_title: "License Plate Recognition",
        p5_desc: "This system is designed to automatically recognize and extract vehicle license plate numbers, primarily for use in parking management services. It streamlines vehicle entry and exit processes by capturing plate information in real time, reducing the need for manual input. In addition to parking applications, the system can also be adapted for traffic monitoring, security access control, and other scenarios where automated vehicle identification is required.",

        p6_title: "QGroundControl - Translation Indonesian Version",
        p6_desc: "The project involves localizing the QGroundControl (QGC) ground station software into the Indonesian language to improve accessibility for native speakers in Indonesia. QGroundControl is an open-source UAV control and planning software used globally by drone enthusiasts and professionals.",

        contact_title: "Get In Touch",
        contact_desc: "Have a project or want to discuss an opportunity? Reach out!",

        footer: "Copyright © 2025 William Lim. All rights reserved."
      },

      jp: {
        brand_title: "</> ポートフォリオ",
        home: "ホーム",
        about: "私について",
        skills: "スキル",
        projects: "プロジェクト",
        contact: "連絡先",
        greeting: "はじめまして、私は",
        name: "ウィリアム・リム",
        title: "IoTエンジニア ・ コンピュータビジョン ・ 組み込みシステム",
        lead:
          "IoT、コンピュータビジョン、組み込みシステム統合に関する経験を持つ、情熱的で主体的なエンジニアです。ハードウェア、ソフトウェア、AI を融合させた、信頼性と拡張性に優れたインテリジェントなソリューションを提供します。",
        btn_contact: "お問い合わせ",
        btn_projects: "プロジェクトを見る",

        about_title: "私について",
        about_desc:
          "IoT、コンピュータビジョン、組み込みシステムを専門とするエンジニアです。人物・車両検出システムからクラウド接続型 IoT デバイスまで、多様なソリューションを開発してきました。AI、システム設計、モバイルアプリ、PCB 開発の経験を基に、スマートで効率的な技術の実現に取り組んでいます。",

        skills_title: "スキル",
        skills_sub: "実務経験を積み重ねて磨かれたスキルセットです。",

        project_title: "主なプロジェクト",
        project_desc: "これまでに完了した、または現在進行中のプロジェクトの一覧です。",
         
        p1_title: "PCB フライトコントローラー",
        p1_desc: "このプロジェクトでは、CUAVシリーズを基にしたカスタムフライトコントローラーを作成し、GitHubで公開しています。設計には EasyEDA を使用し、回路図とPCBレイアウトを作成しました。",
         
        p2_title: "産業用サーマルカメラシステム",
        p2_desc: "高電圧変電所およびスイッチギア設備のリアルタイム監視に使用される、サーマル＋可視光のデュアルセンサー産業用カメラシステムのフル導入を実施しました。本プロジェクトは、ハードウェア統合、ソフトウェア設定、データ管理、クライアントトレーニングまで、エンジニアリングライフサイクル全体をカバーしています。",
         
        p3_title: "広告用人の群衆検知システム",
        p3_desc: "エレベーター内の広告ディスプレイ向けに、リアルタイムで人物を検知・カウントするシステムを開発しました。最も近くにいる人物が広告を視認した際、年齢と性別を85％の信頼度で判定し、表示される広告内容を自動で切り替えます。",
         
        p4_title: "車両交通検知システム",
        p4_desc: "この検知システムは、特定エリア内の車両数を把握するため広告用ビルボードにも利用され、遠隔ストリーミングにも対応しています。また、検知エリア（座標ライン）は、サーバー上でホストされるWebインターフェイスからカスタマイズ可能で、安全なVPN接続を通じてアクセスできます。これにより、現場に直接行かなくても、設置環境に合わせて車両検知領域を柔軟に設定・調整できます。",
         
        p5_title: "ナンバープレート認識システム",
        p5_desc: "本システムは、駐車場管理サービスを主な目的として、車両のナンバープレート番号を自動で認識・抽出することを目的に設計されています。車両の入出庫処理をリアルタイムで取得し、手作業の入力を減らします。駐車場以外にも、交通監視、セキュリティアクセス管理、その他の自動車両識別が必要なシナリオに応用可能です。",
         
        p6_title: "QGroundControl – インドネシア語翻訳",
        p6_desc: "このプロジェクトは、UAVの制御とプランニングに使用されるオープンソースの地上局ソフトウェア QGroundControl（QGC）をインドネシア語化し、インドネシア国内のユーザーの利便性を向上させることを目的としています。QGroundControlは、世界中のドローン愛好家や専門家に広く使用されています。",

        contact_title: "お問い合わせ",
        contact_desc: "プロジェクトのご相談などお気軽にご連絡ください。",

        footer: "著作権 © 2025 ウィリアム・リム. 全著作権所有。"
      }
    };

    const langs = ["en", "jp"];
    let langIndex = 0;

    function updateLanguage(code) {
      langBtn.textContent = code.toUpperCase();

      i18nNodes.forEach(el => {
        const key = el.dataset.i18n;
        if (content[code][key]) el.textContent = content[code][key];
      });

      placeholderNodes.forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (content[code][key]) el.placeholder = content[code][key];
      });
    }

    langBtn.addEventListener("click", () => {
      langIndex = (langIndex + 1) % langs.length;
      updateLanguage(langs[langIndex]);
    });
  }

  /* ============================
     WENDOJ-STYLE CAROUSEL — INFINITE, NO BLANKS
     ============================ */
  const wCarousel = document.getElementById("wCarousel");
  if (!wCarousel) return;

  const slides = [...wCarousel.children];
  const total = slides.length;
  if (!total) return;

  // Start with: [card1][card2][card3] = left, center, right
  // so `current` points to card2 (index 1)
  let current = total >= 3 ? 1 : 0;

  const updatePositions = () => {
    slides.forEach(card =>
      card.classList.remove("left", "center", "right", "hidden")
    );

    if (total === 1) {
      slides[0].classList.add("center");
      return;
    }

    let centerIndex = current;
    let leftIndex = (centerIndex - 1 + total) % total;
    let rightIndex = (centerIndex + 1) % total;

    slides.forEach((card, i) => {
      if (i === leftIndex) card.classList.add("left");
      else if (i === centerIndex) card.classList.add("center");
      else if (i === rightIndex) card.classList.add("right");
      else card.classList.add("hidden");
    });
  };

  // Click: only reacts if you click left or right card
  slides.forEach((card, i) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("left") && total >= 3) {
        current = (current - 1 + total) % total;   // move left, loop
        updatePositions();
      } else if (card.classList.contains("right") && total >= 3) {
        current = (current + 1) % total;           // move right, loop
        updatePositions();
      }
    });
  });

  // Drag logic (Option B: click + drag only, no inertia)
  let isDragging = false;
  let startX = 0;
  const DRAG_THRESHOLD = 70; // px

  const startDrag = x => {
    isDragging = true;
    startX = x;
  };

  const moveDrag = x => {
    if (!isDragging || total < 3) return;

    const dx = x - startX;

    if (dx > DRAG_THRESHOLD) {
      // drag right → show previous card (move carousel left)
      current = (current - 1 + total) % total;
      isDragging = false;
      updatePositions();
    } else if (dx < -DRAG_THRESHOLD) {
      // drag left → show next card (move carousel right)
      current = (current + 1) % total;
      isDragging = false;
      updatePositions();
    }
  };

  const endDrag = () => {
    isDragging = false;
  };

  // Mouse events
  wCarousel.addEventListener("mousedown", e => startDrag(e.clientX));
  wCarousel.addEventListener("mousemove", e => moveDrag(e.clientX));
  wCarousel.addEventListener("mouseup", endDrag);
  wCarousel.addEventListener("mouseleave", endDrag);

  // Touch events
  wCarousel.addEventListener("touchstart", e => startDrag(e.touches[0].clientX));
  wCarousel.addEventListener("touchmove", e => moveDrag(e.touches[0].clientX));
  wCarousel.addEventListener("touchend", endDrag);

  // Init
  updatePositions();

  /* SAVE FORM TO TXT FILE */
  const contactForm = document.getElementById("contactForm");
  const msgSuccess = document.getElementById("msgSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);

      const response = await fetch("save.php", {
        method: "POST",
        body: formData
      });

      const result = await response.text();

      if (result.trim() === "OK") {

        // Reset form
        contactForm.reset();

        // Show popup
        msgSuccess.classList.remove("hidden");
        msgSuccess.classList.add("show");

        // Hide after 2.5 seconds
        setTimeout(() => {
          msgSuccess.classList.remove("show");
          setTimeout(() => msgSuccess.classList.add("hidden"), 300);
        }, 2500);

      } else {
        alert("Error: message not saved.");
      }
    });
  }


});
