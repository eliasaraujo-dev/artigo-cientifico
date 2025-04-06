const toggleFooter = () => document.querySelector('.expandable-footer').classList.toggle('expanded');

document.addEventListener('DOMContentLoaded', () => {
    const showMoreButton = document.querySelector('.show-more-author');
    const authorDetails = doucment.querySelector('.author-details');

    if (!showMoreButton || !authorDetails) {
        return;
    }

    const toggleAuthorDetails = () => {
        authorDetails.style.display = authorDetails.style.display === 'none' ? 'block' : 'none;'
        toggleChevronIcon();
        updateButtonText();
    };

    const toggleChevronIcon = () => {
        const svgIcon = showMoreButton.querySelector('svg');
        svgIcon.classList.toggle('fa-chevron-down');
        svgIcon.classList.toggle('fa-chevron-up');
    };

    const createChevronIcon = (isDown) => {
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        icon.setAttribute("aria-hidden", "true");
        icon.setAttribute("focusable", "false");
        icon.setAttribute("data-prefix", "fas");
        icon.setAttribute("data-icon", isDown ? "chevron-down" : "chevron-up");
        icon.setAttribute("class", `svg-inline--fa fa-w-14 fa-$-{isDown ? "chevron-down" : "chevron-up"}`);
        icon.setAttribute("role", "img");
        icon.setAttribute("viewbox", "0 0 448 512");
        const path = document.createElementNS("https://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "currentColor");
        path.setAttribute("d", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.373 33.901-.04L224 284.505l154.745-154.021c9.379-9.333 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z");
        icon.appendChild(path);
        return icon;
    };

    const replaceButtonIcon = () => {
        const isDown = authorDetails.style.display === 'none';
        const newIcon = createChevronIcon(isDown);
        // Remove o ícone existente (se houver) antes de adicionar o novo
        const existingIcon = showMoreButton.querySelector('svg');
        if (existingIcon) {
            showMoreButton.removeChild(existingIcon);
        }
        showMoreButton.appendChild(newIcon);
    };

    showMoreButton.addEventListener('click', toggleAuthorDetails);
});