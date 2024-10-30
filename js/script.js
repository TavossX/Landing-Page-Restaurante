class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.closeMenuOnClickOutside = this.closeMenuOnClickOutside.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

    if (this.navList.classList.contains(this.activeClass)) {
      document.addEventListener("click", this.closeMenuOnClickOutside);
    } else {
      document.removeEventListener("click", this.closeMenuOnClickOutside);
    }
  }

  closeMenuOnClickOutside(event) {
    const target = event.target;
    if (!this.navList.contains(target) && !this.mobileMenu.contains(target)) {
      this.navList.classList.remove(this.activeClass);
      this.mobileMenu.classList.remove(this.activeClass);
      this.animateLinks();
      document.removeEventListener("click", this.closeMenuOnClickOutside);
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
        this.animateLinks();
        document.removeEventListener("click", this.closeMenuOnClickOutside);
      });
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

// Inicializa o menu mobile
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();


document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");
  const header = document.querySelector("header");

  window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY - header.offsetHeight;
    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.style.boxShadow = "none";
    } else {
      header.style.boxShadow = "5px 1px 5px rgba(0, 0, 0, 0.1)";
    }

    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop - 110;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return;
      }
    });

    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    navItems[activeSectionIndex].classList.add("active");
  });

  ScrollReveal({
    reset: true,
    distance: "10px",
    duration: 2000,
    delay: 100,
  });

  ScrollReveal().reveal("#cta", { origin: "left" });
  ScrollReveal().reveal("#banner", { origin: "right" });
  ScrollReveal().reveal(".dish", { origin: "right" });
  ScrollReveal().reveal("#testimonials_content", { origin: "right" });
  ScrollReveal().reveal("#testimonial_chef", { origin: "left" });
});
