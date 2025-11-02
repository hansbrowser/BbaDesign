// BBA.Web.Shared - Generic JavaScript utilities

window.blurElement = function () {
    const activeElement = document.activeElement;
    if (activeElement) {
        activeElement.blur();
    }
};

window.setSearchShortcut = function (searchInputId) {
    document.addEventListener("keydown", function (event) {
        if ((event.ctrlKey && event.key === "k") || (event.ctrlKey && event.key === "/")) {
            event.preventDefault();
            document.getElementById(searchInputId)?.focus();
        }
    });
};

// Load HTML components into the page
window.loadComponents = function () {
    const components = document.querySelectorAll('[data-component]');
    components.forEach(element => {
        const componentPath = element.getAttribute('data-component');
        fetch(componentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load component: ${componentPath}`);
                }
                return response.text();
            })
            .then(html => {
                element.innerHTML = html;
            })
            .catch(error => {
                console.error(error);
            });
    });
};

// Auto-load components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.loadComponents);
} else {
    window.loadComponents();
}
