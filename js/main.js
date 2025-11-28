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
          "A curated selection of projects that demonstrate my engineering experience.",

        p1_title: "Cloud Infrastructure Platform",
        p1_desc:
          "Built a scalable infrastructure platform on AWS.",

        p2_title: "Enterprise Web Application",
        p2_desc:
          "Developed an enterprise full-stack web application with real-time sync.",

        p3_title: "DevOps Automation Suite",
        p3_desc:
          "Created CI/CD pipelines and monitoring tools for efficient delivery.",

        contact_title: "Get In Touch",
        contact_desc:
          "Have a project or want to discuss an opportunity? Reach out!",

        form_title: "Send a Message",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_send: "Send Message",

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

        project_title: "注目のプロジェクト",
        project_desc:
          "技術力と問題解決能力を示すプロジェクトのリストです。",

        p1_title: "クラウドインフラ管理プラットフォーム",
        p1_desc:
          "AWSを利用したスケーラブルなインフラ管理システムを構築。",

        p2_title: "エンタープライズWebアプリ",
        p2_desc:
          "数千人規模のユーザーをリアルタイムで処理するアプリを開発。",

        p3_title: "DevOps自動化スイート",
        p3_desc:
          "CI/CD自動化パイプラインとモニタリングシステムを構築。",

        contact_title: "お問い合わせ",
        contact_desc:
          "プロジェクトのご相談などお気軽にご連絡ください。",

        form_title: "メッセージを送る",
        form_name: "お名前",
        form_email: "メール",
        form_subject: "件名",
        form_message: "メッセージ",
        form_send: "送信",

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
