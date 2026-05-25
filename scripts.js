document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Dinamismo del Año en el Footer ---
    document.getElementById("year").textContent = new Date().getFullYear();

    // --- 2. Interacción con el DOM: Menú de Pupusas (Dropdown) ---
    const btnPupusa = document.getElementById("btn-pupusa-menu");
    const pupusaDropdown = document.getElementById("pupusa-dropdown");

    btnPupusa.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que se cierre inmediatamente al hacer click
        pupusaDropdown.classList.toggle("hidden");
    });

    // Cerrar el menú si se hace click fuera de él
    document.addEventListener("click", () => {
        if (!pupusaDropdown.classList.contains("hidden")) {
            pupusaDropdown.classList.add("hidden");
        }
    });


    // --- 3. Validación del Formulario con JavaScript ---
    const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("success-msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Detener el envío por defecto

        // Elementos de entrada
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Contenedores de error
        const errorNombre = document.getElementById("error-nombre");
        const errorEmail = document.getElementById("error-email");
        const errorMensaje = document.getElementById("error-mensaje");

        // Inicializar errores limpios
        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorMensaje.textContent = "";
        let isValid = true;

        // Validación de Nombre
        if (nombre === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
            isValid = false;
        } else if (nombre.length < 3) {
            errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
            isValid = false;
        }

        // Validación de Email (Regex básica)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errorEmail.textContent = "El correo electrónico es obligatorio.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errorEmail.textContent = "Por favor, introduce un correo electrónico válido.";
            isValid = false;
        }

        // Validación del Mensaje
        if (mensaje === "") {
            errorMensaje.textContent = "Por favor, escribe tu pedido o mensaje.";
            isValid = false;
        }

        // Si todo es válido
        if (isValid) {
            successMsg.classList.remove("hidden");
            form.reset(); // Limpia los campos del formulario
            
            // Ocultar el mensaje de éxito tras 5 segundos
            setTimeout(() => {
                successMsg.classList.add("hidden");
            }, 5000);
        }
    });
});