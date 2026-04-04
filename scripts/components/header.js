window.renderSiteHeader = function renderSiteHeader() {
    return `
        <header class="site-header">
            <nav class="topbar" aria-label="Primary navigation">
                <a class="brand" href="#home">RE<span>LI</span></a>
                <div class="nav-links">
                    <a class="nav-link active" href="#home">Home</a>
                    <a class="nav-link" href="#work">Work</a>
                    <a class="nav-link" href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    `;
};