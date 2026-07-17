window.renderSiteHeader = function renderSiteHeader() {
    const isProjectsPage = window.location.pathname.endsWith("projects.html");
    const homeHref = isProjectsPage ? "index.html#home" : "#home";
    const workHref = isProjectsPage ? "index.html#work" : "#work";
    const contactHref = isProjectsPage ? "index.html#contact" : "#contact";

    return `
        <header class="site-header">
            <nav class="topbar" aria-label="Primary navigation">
                <a class="brand" href="${homeHref}">RE<span>LI</span></a>
                <div class="nav-links">
                    <a class="nav-link${isProjectsPage ? "" : " active"}" href="${homeHref}">Home</a>
                    <a class="nav-link" href="${workHref}">Work</a>
                    <a class="nav-link${isProjectsPage ? " active" : ""}" href="projects.html">Projects</a>
                    <a class="nav-link" href="${contactHref}">Contact</a>
                </div>
            </nav>
        </header>
    `;
};
