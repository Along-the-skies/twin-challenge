const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Let the page arrive gently, without making the motion the main event.
const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-art, .intro-grid, .interests-heading, .interest-row, .note-card, .closing h2"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add("will-reveal");
    revealObserver.observe(item);
  });
}

// Keep the footer year current without needing an annual edit.
const footerYear = document.querySelector(".site-footer span:last-child");
if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} / DEVANJANA`;
}