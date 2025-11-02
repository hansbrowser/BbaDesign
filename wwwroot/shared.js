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
