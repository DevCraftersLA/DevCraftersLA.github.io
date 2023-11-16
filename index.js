
function scrollToSection(event, sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
        // Usa el método scrollIntoView para desplazarte al elemento
        section.scrollIntoView({
            behavior: 'smooth', // Esto proporciona un desplazamiento suave
            block: 'start'       // Esto alinea el inicio del elemento con la parte superior del contenedor de desplazamiento
        });

        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();
    }
    event.preventDefault();
}
