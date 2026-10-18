"use strict";

const products = [
  {
    id: "lace-set",
    name: "One Set Lace V-Neck",
    kicker: "Best choice",
    price: "Rp86.088",
    oldPrice: "Rp129.500",
    rating: "5 terjual",
    link: "",
    folder: "assets/products/(BESTCHOICE) One Set Wanita. DXDHits Lace V Neck Bahan Rayon Premium. Setelan baju tidur dua potong",
    images: [
      "WhatsApp Image 2026-10-18 at 20.47.47.webp",
      "WhatsApp Image 2026-10-18 at 20.47.48.webp",
      "WhatsApp Image 2026-10-18 at 20.47.48 (1).webp",
      "WhatsApp Image 2026-10-18 at 20.47.48 (2).webp",
      "WhatsApp Image 2026-10-18 at 20.47.49.webp"
    ]
  },
  {
    id: "crop-boxy",
    name: "Crop Boxy Two-Piece Set",
    kicker: "New product",
    price: "Rp72.900",
    oldPrice: "Rp109.950",
    rating: "2 terjual",
    link: "",
    folder: "assets/products/DXDHits One Set Crop Boxy Two-Piece Set",
    images: [
      "WhatsApp Image 2026-10-18 at 19.00.56.webp",
      "WhatsApp Image 2026-10-18 at 19.00.57.webp",
      "WhatsApp Image 2026-10-18 at 19.00.57 (1).webp",
      "WhatsApp Image 2026-10-18 at 19.00.57 (2).webp",
      "WhatsApp Image 2026-10-18 at 19.00.58.webp"
    ]
  },
  {
    id: "mini-vneck",
    name: "Daster Mini Dress V-Neck",
    kicker: "Best seller",
    price: "Rp59.450",
    oldPrice: "Rp99.500",
    rating: "4.8 · 9174 terjual",
    link: "",
    folder: "assets/products/Daster Mini Dress V Neck, Premium Daily Wear - Sexy & Casual",
    images: [
      "WhatsApp Image 2026-10-18 at 19.02.21.webp",
      "WhatsApp Image 2026-10-18 at 19.02.21 (1).webp",
      "WhatsApp Image 2026-10-18 at 19.02.22.webp",
      "WhatsApp Image 2026-10-18 at 19.02.22 (1).webp",
      "WhatsApp Image 2026-10-18 at 19.02.23.webp",
      "WhatsApp Image 2026-10-18 at 19.02.23 (1).webp",
      "WhatsApp Image 2026-10-18 at 19.02.24.webp",
      "WhatsApp Image 2026-10-18 at 19.02.24 (1).webp",
      "WhatsApp Image 2026-10-18 at 19.02.24 (2).webp"
    ]
  },
  {
    id: "hayley-midnight",
    name: "Hayley Midnight Mini Dress",
    kicker: "Special article",
    price: "Rp56.635",
    oldPrice: "Rp99.500",
    rating: "4.7 · 50 terjual",
    link: "",
    folder: "assets/products/SPESIAL ARTICLE Hayley Midnight Dress Daster Mini Nyaman Krah V Neck",
    images: [
      "WhatsApp Image 2026-10-18 at 19.10.51.webp",
      "WhatsApp Image 2026-10-18 at 19.10.52.webp",
      "WhatsApp Image 2026-10-18 at 19.10.52 (1).webp",
      "WhatsApp Image 2026-10-18 at 19.10.52 (2).webp"
    ]
  },
  {
    id: "daster-tali",
    name: "Premium Daster Tali",
    kicker: "Premium homedress",
    price: "Rp53.500",
    oldPrice: "Rp89.900",
    rating: "4.9 · 1839 terjual",
    link: "",
    folder: "assets/products/PREMIUM Daster Tali Homedress Solusi Anti Pelakor, Bahan Rayon Premium. By DXD Homewear fashionnya wanita Hits",
    images: [
      "WhatsApp Image 2026-10-18 at 20.54.35.webp",
      "WhatsApp Image 2026-10-18 at 20.54.35 (1).webp",
      "WhatsApp Image 2026-10-18 at 20.54.36.webp",
      "WhatsApp Image 2026-10-18 at 20.54.36 (1).webp",
      "WhatsApp Image 2026-10-18 at 20.54.36 (2).webp",
      "WhatsApp Image 2026-10-18 at 20.54.37.webp",
      "WhatsApp Image 2026-10-18 at 20.54.37 (1).webp",
      "WhatsApp Image 2026-10-18 at 20.54.38.webp"
    ]
  },
  {
    id: "bundle-100k",
    name: "Bundling Daster Tali + V-Neck",
    kicker: "Bundling package",
    price: "Rp114.000",
    oldPrice: "Rp120.000",
    rating: "Paket isi 2",
    link: "",
    folder: "assets/products/100K Only for 2. Bundling Package Daster Tali & Daster Mini V - Neck Rayon Premium",
    images: [
      "WhatsApp Image 2026-10-18 at 20.50.51 (1).webp",
      "WhatsApp Image 2026-10-18 at 20.50.51.webp",
      "WhatsApp Image 2026-10-18 at 20.50.52.webp",
      "WhatsApp Image 2026-10-18 at 20.50.52 (1).webp",
      "WhatsApp Image 2026-10-18 at 20.50.52 (2).webp",
      "WhatsApp Image 2026-10-18 at 20.50.53.webp",
      "WhatsApp Image 2026-10-18 at 20.50.54.webp"
    ]
  }
];

const chevronIcon = (direction) => `
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="${direction === "prev" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}" />
  </svg>`;

const tiktokIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M15.2 3c.4 2.2 1.7 3.5 3.8 3.8v3.1a8 8 0 0 1-3.8-1.2v6.2a6 6 0 1 1-5.2-6v3.2a2.8 2.8 0 1 0 2 2.8V3h3.2Z" />
  </svg>`;

const productGrid = document.querySelector("#product-grid");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const offerMessages = [
  { text: "Gratis ongkir untuk produk pilihan", action: "Lihat koleksi" },
  { text: "Hot Sale 50% Off", action: "Belanja sekarang" },
  { text: "Homewear rayon premium", action: "Temukan favoritmu" }
];

const topOffer = document.querySelector("[data-top-offer]");
const offerMessage = document.querySelector("[data-offer-message]");
const offerText = document.querySelector("[data-offer-text]");
const offerAction = document.querySelector("[data-offer-action]");
const offerClose = document.querySelector("[data-offer-close]");
let offerIndex = 0;
let offerTimer;

function stopOfferRotation() {
  window.clearInterval(offerTimer);
}

function showNextOffer() {
  offerMessage.classList.add("is-changing");
  window.setTimeout(() => {
    offerIndex = (offerIndex + 1) % offerMessages.length;
    offerText.textContent = offerMessages[offerIndex].text;
    offerAction.textContent = offerMessages[offerIndex].action;
    offerMessage.classList.remove("is-changing");
  }, 180);
}

function startOfferRotation() {
  if (prefersReducedMotion || topOffer.hidden) return;
  stopOfferRotation();
  offerTimer = window.setInterval(showNextOffer, 4600);
}

topOffer.addEventListener("mouseenter", stopOfferRotation);
topOffer.addEventListener("mouseleave", startOfferRotation);
topOffer.addEventListener("focusin", stopOfferRotation);
topOffer.addEventListener("focusout", startOfferRotation);
offerClose.addEventListener("click", () => {
  stopOfferRotation();
  topOffer.hidden = true;
});
startOfferRotation();

function buildProductCard(product, productIndex) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = product.id;
  card.dataset.productIndex = String(productIndex);

  const slides = product.images
    .map((image, imageIndex) => {
      const src = encodeURI(`${product.folder}/${image}`);
      return `
        <img
          class="product-slide${imageIndex === 0 ? " is-active" : ""}"
          data-src="${src}"
          alt="${product.name} — foto ${imageIndex + 1}"
          width="1080"
          height="1080"
          loading="lazy"
          decoding="async"
          aria-hidden="${imageIndex === 0 ? "false" : "true"}"
        />`;
    })
    .join("");

  const dots = product.images
    .map(
      (_, index) => `
        <button
          class="${index === 0 ? "is-active" : ""}"
          type="button"
          aria-label="Tampilkan foto ${index + 1} ${product.name}"
          ${index === 0 ? 'aria-current="true"' : ""}
        ></button>`
    )
    .join("");

  card.innerHTML = `
    <div class="product-media">
      <div class="product-slides">${slides}</div>
      <button class="product-arrow product-arrow--prev" type="button" aria-label="Foto sebelumnya ${product.name}">
        ${chevronIcon("prev")}
      </button>
      <button class="product-arrow product-arrow--next" type="button" aria-label="Foto berikutnya ${product.name}">
        ${chevronIcon("next")}
      </button>
      <div class="product-dots" aria-label="Pilih foto ${product.name}">${dots}</div>
    </div>
    <div class="product-info">
      <p class="product-kicker">${product.kicker}</p>
      <h3 class="product-title">${product.name}</h3>
      <div class="product-meta">
        <span class="shipping-tag">Gratis ongkir</span>
        <span class="stars" aria-label="Rating produk">★★★★★</span>
        <span>${product.rating}</span>
      </div>
      <div class="product-buy-row">
        <div class="product-price">
          <strong>${product.price}</strong>
          <del>${product.oldPrice}</del>
        </div>
        <button class="product-link" type="button" data-product-cta="${product.id}">
          ${tiktokIcon}
          Cek TikTok
        </button>
      </div>
    </div>`;

  return card;
}

products.forEach((product, index) => {
  productGrid.appendChild(buildProductCard(product, index));
});

function loadLazyImage(image) {
  if (!image?.dataset.src) return;
  image.src = image.dataset.src;
  image.removeAttribute("data-src");
}

function loadProductSlides(slides, currentIndex) {
  loadLazyImage(slides[currentIndex]);
  loadLazyImage(slides[(currentIndex + 1) % slides.length]);
}

const carouselTimers = new WeakMap();

function initProductCarousel(card) {
  const slides = [...card.querySelectorAll(".product-slide")];
  const dots = [...card.querySelectorAll(".product-dots button")];
  const previousButton = card.querySelector(".product-arrow--prev");
  const nextButton = card.querySelector(".product-arrow--next");
  let currentIndex = 0;

  function showSlide(nextIndex) {
    currentIndex = (nextIndex + slides.length) % slides.length;
    loadProductSlides(slides, currentIndex);
    slides.forEach((slide, index) => {
      const active = index === currentIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, index) => {
      const active = index === currentIndex;
      dot.classList.toggle("is-active", active);
      if (active) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function stopAutoplay() {
    const timer = carouselTimers.get(card);
    if (timer) window.clearInterval(timer);
    carouselTimers.delete(card);
  }

  function startAutoplay() {
    if (prefersReducedMotion || document.hidden || carouselTimers.has(card)) return;
    const delay = 3300 + Number(card.dataset.productIndex) * 260;
    carouselTimers.set(card, window.setInterval(() => showSlide(currentIndex + 1), delay));
  }

  previousButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    stopAutoplay();
    startAutoplay();
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    stopAutoplay();
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      stopAutoplay();
      startAutoplay();
    });
  });

  card.addEventListener("mouseenter", stopAutoplay);
  card.addEventListener("mouseleave", startAutoplay);
  card.addEventListener("focusin", stopAutoplay);
  card.addEventListener("focusout", startAutoplay);

  return { startAutoplay, stopAutoplay };
}

const productCarousels = new Map();
document.querySelectorAll(".product-card").forEach((card) => {
  productCarousels.set(card, initProductCarousel(card));
});

const productObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const controls = productCarousels.get(entry.target);
      if (entry.isIntersecting) {
        const slides = [...entry.target.querySelectorAll(".product-slide")];
        loadProductSlides(slides, 0);
        controls.startAutoplay();
      } else {
        controls.stopAutoplay();
      }
    });
  },
  { rootMargin: "220px 0px", threshold: 0.1 }
);

productCarousels.forEach((_, card) => productObserver.observe(card));

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSlides = [...heroSlider.querySelectorAll(".hero-slide")];
const heroDots = [...heroSlider.querySelectorAll(".hero-dots button")];
const heroPrevious = heroSlider.querySelector(".hero-arrow--prev");
const heroNext = heroSlider.querySelector(".hero-arrow--next");
let heroIndex = 0;
let heroTimer;

function showHero(nextIndex) {
  heroIndex = (nextIndex + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, index) => {
    const active = index === heroIndex;
    if (active) loadLazyImage(slide.querySelector("img[data-src]"));
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });
  heroDots.forEach((dot, index) => {
    const active = index === heroIndex;
    dot.classList.toggle("is-active", active);
    if (active) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
}

function stopHeroAutoplay() {
  window.clearInterval(heroTimer);
}

function startHeroAutoplay() {
  if (prefersReducedMotion || document.hidden) return;
  stopHeroAutoplay();
  heroTimer = window.setInterval(() => showHero(heroIndex + 1), 6200);
}

heroPrevious.addEventListener("click", () => {
  showHero(heroIndex - 1);
  startHeroAutoplay();
});

heroNext.addEventListener("click", () => {
  showHero(heroIndex + 1);
  startHeroAutoplay();
});

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showHero(index);
    startHeroAutoplay();
  });
});

heroSlider.addEventListener("mouseenter", stopHeroAutoplay);
heroSlider.addEventListener("mouseleave", startHeroAutoplay);
heroSlider.addEventListener("focusin", stopHeroAutoplay);
heroSlider.addEventListener("focusout", startHeroAutoplay);
startHeroAutoplay();

const tiktokPlayers = [...document.querySelectorAll(".video-frame iframe[data-src]")];

function sendTikTokCommand(iframe, type) {
  if (!iframe.src || !iframe.contentWindow) return;
  iframe.contentWindow.postMessage({ type, value: undefined, "x-tiktok-player": true }, "https://www.tiktok.com");
}

function loadTikTokPlayer(iframe) {
  if (!iframe.dataset.src) {
    sendTikTokCommand(iframe, "play");
    return;
  }

  iframe.addEventListener("load", () => {
    sendTikTokCommand(iframe, "mute");
    sendTikTokCommand(iframe, "play");
  }, { once: true });
  iframe.src = iframe.dataset.src;
  iframe.removeAttribute("data-src");
}

const tiktokObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const iframe = entry.target.querySelector("iframe");
      if (entry.isIntersecting) loadTikTokPlayer(iframe);
      else sendTikTokCommand(iframe, "pause");
    });
  },
  { rootMargin: "320px 180px", threshold: 0.12 }
);

tiktokPlayers.forEach((iframe) => tiktokObserver.observe(iframe.closest(".video-card")));

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBackdrop = document.querySelector("[data-menu-backdrop]");
const menuCloseButton = document.querySelector("[data-menu-close]");
let menuReturnFocus = null;

function isMenuOpen() {
  return mobileMenu.classList.contains("is-open");
}

function openMenu() {
  menuReturnFocus = document.activeElement;
  mobileMenu.classList.add("is-open");
  menuBackdrop.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Tutup menu");
  document.body.classList.add("menu-open");
  menuCloseButton.focus();
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  menuBackdrop.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Buka menu");
  document.body.classList.remove("menu-open");
  if (menuReturnFocus instanceof HTMLElement) menuReturnFocus.focus();
}

menuButton.addEventListener("click", () => {
  if (isMenuOpen()) closeMenu();
  else openMenu();
});

menuCloseButton.addEventListener("click", closeMenu);
menuBackdrop.addEventListener("click", closeMenu);
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isMenuOpen()) closeMenu();

  if (event.key === "Tab" && isMenuOpen()) {
    const focusable = [...mobileMenu.querySelectorAll("a[href], button:not([disabled])")];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820 && isMenuOpen()) closeMenu();
});

const bottomNavLinks = [...document.querySelectorAll("[data-bottom-nav]")];
const bottomNavSections = ["beranda", "koleksi", "tentang", "tiktok"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

function updateBottomNavigation() {
  const marker = window.scrollY + Math.min(window.innerHeight * 0.38, 260);
  let activeId = "beranda";

  bottomNavSections.forEach((section) => {
    if (section.offsetTop <= marker) activeId = section.id;
  });

  bottomNavLinks.forEach((link) => {
    const active = link.dataset.bottomNav === activeId;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

bottomNavLinks.forEach((link) => link.addEventListener("click", updateBottomNavigation));

const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

document.querySelectorAll("[data-product-cta]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = products.find((item) => item.id === button.dataset.productCta);
    if (product?.link) {
      window.open(product.link, "_blank", "noopener,noreferrer");
      return;
    }
    document.querySelector("#tiktok").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    showToast("Link TikTok Shop untuk produk ini siap ditambahkan setelah kamu mengirimkannya.");
  });
});

const siteHeader = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");

function updateScrollState() {
  const scrolled = window.scrollY > 18;
  siteHeader.classList.toggle("is-scrolled", scrolled);
  backToTop.classList.toggle("is-visible", window.scrollY > 700);
  updateBottomNavigation();
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopHeroAutoplay();
    productCarousels.forEach((controls) => controls.stopAutoplay());
  } else {
    startHeroAutoplay();
    document.querySelectorAll(".product-card").forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        productCarousels.get(card).startAutoplay();
      }
    });
  }
});
