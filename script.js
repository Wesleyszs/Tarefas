function atualizarContador() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const contagem = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    document.getElementById('contador').innerText = `Tarefas Concluídas: ${contagem}`;
}

function salvarEstado() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
}

function carregarEstado() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        const estado = localStorage.getItem(checkbox.id);
        if (estado !== null) {
            checkbox.checked = estado === 'true';
        }
    });
}

window.onload = () => {
    carregarEstado();
    atualizarContador();
};

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        salvarEstado();
        atualizarContador();
    });
});
