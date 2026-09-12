document.addEventListener("DOMContentLoaded", function () {

    const imagenesProyecto = [
        {
            id: "imagenAlkeWallet",
            titulo: "Diagrama entidad-relación · AlkeWallet"
        },
        {
            id: "imagenBiblioteca",
            titulo: "Mantenedor de libros · Biblioteca Digital UNTEC"
        },
        {
            id: "imagenSpring",
            titulo: "Panel de administración · SpringEduManager"
        }
    ];


    imagenesProyecto.forEach(function (proyecto) {

        const imagen = document.getElementById(proyecto.id);

        if (imagen) {

            imagen.addEventListener("click", function () {

                abrirModal(imagen, proyecto.titulo);

            });

        }

    });


    function abrirModal(imagen, titulo) {

        const modal = document.createElement("div");

        modal.className = "modal-imagen";

        modal.innerHTML = `
            <div class="modal-contenido">

                <button
                    class="cerrar-modal"
                    aria-label="Cerrar imagen"
                >
                    &times;
                </button>

                <img
                    src="${imagen.src}"
                    alt="${imagen.alt}"
                >

                <p>${titulo}</p>

            </div>
        `;

        document.body.appendChild(modal);

        document.body.classList.add("modal-abierto");


        const botonCerrar = modal.querySelector(".cerrar-modal");

        botonCerrar.addEventListener("click", function () {

            cerrarModal(modal);

        });


        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                cerrarModal(modal);

            }

        });

    }


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const modal = document.querySelector(".modal-imagen");

            if (modal) {

                cerrarModal(modal);

            }

        }

    });


    function cerrarModal(modal) {

        modal.remove();

        document.body.classList.remove("modal-abierto");

    }

});