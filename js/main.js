document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar HTML
    const loadHTML = (elementId, filePath) => {
        return fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    };

    // Carrega header e footer
    Promise.all([
        loadHTML('header-container', 'header.html'),
        loadHTML('footer-container', 'footer.html')
    ]).then(() => {
        // Ativa o link de navegação da página atual
        const currentPage = document.body.dataset.page;
        if (currentPage) {
            const navItem = document.querySelector(`.nav-item[data-page="${currentPage}"]`);
            if (navItem) {
                navItem.classList.add('active');
                const span = document.createElement('span');
                span.className = 'sr-only';
                span.textContent = '(current)';
                navItem.querySelector('a').appendChild(span);
            }
        }
    });
});