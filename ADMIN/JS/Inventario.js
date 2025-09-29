// Cambiar categorías
        document.querySelectorAll('.categoria-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const categoria = this.getAttribute('data-categoria');
                document.querySelector('.card-body h5').textContent = `Inventario - ${capitalizeFirstLetter(categoria)}`;
                
                // Aquí iría la lógica para cargar productos de la categoría seleccionada
            });
        });
        
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            setCurrentDate();
        });