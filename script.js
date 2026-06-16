// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção dos botões de acessibilidade
    const btnIncrease = document.getElementById('increase-text');
    const btnDecrease = document.getElementById('decrease-text');
    const btnContrast = document.getElementById('toggle-contrast');
    
    // Variável para controle do tamanho da fonte padrão
    let currentFontSize = 100; // representado em porcentagem (%)

    // Função para Aumentar o Texto
    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < 130) { // Limite máximo de aumento
            currentFontSize += 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    // Função para Diminuir o Texto
    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > 80) { // Limite mínimo de diminuição
            currentFontSize -= 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    // Função para Alternar Alto Contraste
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        
        // Salva a preferência do usuário no navegador
        if (document.body.classList.contains('high-contrast')) {
            localStorage.setItem('contrast', 'enabled');
        } else {
            localStorage.setItem('contrast', 'disabled');
        }
    });

    // Verifica se o usuário já havia deixado o alto contraste ativado antes
    if (localStorage.getItem('contrast') === 'enabled') {
        document.body.classList.add('high-contrast');
    }
});
