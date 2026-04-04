(function initPortfolioPage() {
    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");

    if (headerTarget && typeof window.renderSiteHeader === "function") {
        headerTarget.innerHTML = window.renderSiteHeader();
    }

    if (footerTarget && typeof window.renderSiteFooter === "function") {
        footerTarget.innerHTML = window.renderSiteFooter();
    }

    const topbar = document.querySelector(".topbar");
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const sections = Array.from(document.querySelectorAll("main section[id], footer[id]"));

    const syncTopbarState = function syncTopbarState() {
        if (!topbar) {
            return;
        }

        topbar.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    const syncActiveLink = function syncActiveLink() {
        const currentSection = sections.findLast((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 160;
        });

        if (!currentSection) {
            return;
        }

        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${currentSection.id}`;
            link.classList.toggle("active", isActive);
        });
    };

    syncTopbarState();
    syncActiveLink();

    window.addEventListener("scroll", function onScroll() {
        syncTopbarState();
        syncActiveLink();
    });
})();