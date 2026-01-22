document.addEventListener("DOMContentLoaded", () => {
    const bienvenida = document.getElementById("bienvenida");
    const cerrar = document.getElementById("cerrar");
    setTimeout(() => {
        bienvenida.classList.add("mostrar");
    }, 500);
    cerrar.addEventListener("click", () => {
        bienvenida.classList.remove("mostrar");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cuadros = document.querySelectorAll(".cuadros");

    cuadros.forEach((cuadro, index) => {
        setTimeout(() => {
            cuadro.classList.add("visible");
        }, index * 500);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cuadros = document.querySelectorAll(".cuadros1");

    cuadros.forEach((cuadro, index) => {
        setTimeout(() => {
            cuadro.classList.add("visible");
        }, index * 500);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cuadros = document.querySelectorAll(".cuadros2");

    cuadros.forEach((cuadro, index) => {
        setTimeout(() => {
            cuadro.classList.add("visible");
        }, index * 500);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cuadros = document.querySelectorAll(".cuadros3");

    cuadros.forEach((cuadro, index) => {
        setTimeout(() => {
            cuadro.classList.add("visible");
        }, index * 500);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cuadros = document.querySelectorAll(".cuadros4");

    cuadros.forEach((cuadro, index) => {
        setTimeout(() => {
            cuadro.classList.add("visible");
        }, index * 500);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista-complementos");
    const ejemplo = document.getElementById("ejemplo-complemento");
    const items = lista.querySelectorAll("li");
    const ejemplos = {
        "CD": "Ejemplo CD: Juan leyó un libro.",
        "CI": "Ejemplo CI: Marta dio un regalo a su amigo.",
        "CC": "Ejemplo C.Circunstancial: Llegamos temprano a la escuela (CCT).",
        "CR": "Ejemplo C.Régimen: Confío en tu palabra.",
        "CA": "Ejemplo C.Agente.: El libro fue escrito por Gabriel García Márquez.",
        "CP": "Ejemplo C.Predicativo: Considero a Ana inteligente.",
        "Atrib": "Ejemplo Atributo: Ella es feliz."
    };
    items.forEach(item => {
        item.addEventListener("click", () => {
            items.forEach(i => i.classList.remove("activo"));
            item.classList.add("activo");
            const tipo = item.dataset.complemento;
            ejemplo.textContent = ejemplos[tipo];
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const frases = document.querySelectorAll("#ejercicio-se li");
    const resultado = document.getElementById("resultado");

    frases.forEach(frase => {
        frase.addEventListener("click", () => {
            const tipo = frase.dataset.tipo;

            resultado.textContent = `✔ Tipo de se ${tipo}`;
            frase.classList.add("correcto");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const filas = document.querySelectorAll("table tr[data-tipo]");
    const resultado = document.createElement("p");

    resultado.style.fontWeight = "bold";
    resultado.style.marginTop = "10px";
    document.querySelector("table").after(resultado);

    const tiposSe = {
        "Pronominal": 1,
        "Reflexivo": 2,
        "Dativo": 3,
        "Recíproco": 4,
        "Se en lugar de le o les": 5,
        "Impersonal": 6,
        "Marca pasiva refleja": 7
    };
filas.forEach(fila => {
        fila.addEventListener("click", () => {
            filas.forEach(f => f.classList.remove("seleccionado"));
            fila.classList.add("seleccionado");

            const tipo = fila.dataset.tipo;
            const numero = tiposSe[tipo];

            resultado.textContent = `➡ Tipo ${numero}: ${tipo}`;
        });
    });
});