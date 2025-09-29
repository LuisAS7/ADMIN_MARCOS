// Cambiar categorías
document.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const categoria = this.getAttribute('data-categoria');
        document.querySelector('.card-body h5').textContent = `Inventario - ${capitalizeFirstLetter(categoria)}`;
        // Lógica para cargar los productos
    });
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);    
}
