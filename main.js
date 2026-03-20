
// Map: secciones de la SPA
const secciones = new Map([
    ["inicio", "Inicio"],
    ["sobre-mi", "Sobre mí"],
    ["mis-datos", "Mis datos"],
    ["proyectos", "Proyectos"],
    ["contacto", "Contacto"]
]);

// Array: habilidades para mostrar en inicio
const habilidades = [
    "Python", "JavaScript", "HTML/CSS", "SQL",
    "Pandas", "Git"
];

// Set: tecnologías únicas con los duplicados eliminados
const tecnologiasUnicas = new Set([
    "Python", "JavaScript", "SQL", "Pandas", "Python"
]);

// Array de objetos: proyectos hechos
const proyectos = [
    {
        nombre: "Pipeline HMA – Bosque Seco Tropical",
        descripcion: "Análisis de hongos micorrízicos arbusculares en Atlántico. ANOVA + Tukey HSD, ML comparativo y 9 visualizaciones con Python.",
        tags: ["Python", "pandas", "scikit-learn", "statsmodels"],
        anio: 2025
    },
    {
        nombre: "Infografía Gran Caribe",
        descripcion: "Diseño de infografía académica sobre la región del Gran Caribe, iterada y exportada en PDF.",
        tags: ["Diseño", "PDF", "Investigación"],
        anio: 2025
    },
    {
        nombre: "Portafolio Personal (esta página)",
        descripcion: "SPA generada dinámicamente con JavaScript puro: Map, Set, Array, switch, if, for, while.",
        tags: ["HTML", "JavaScript"],
        anio: 2026
    }
];

// Objeto: datos personales para la tabla
const datosPersonales = {
    "Carrera": "Ingeniería de Sistemas",
    "Universidad": "Colombia",
    "Intereses": "Data, Web, Investigación",
    "Estado": "Pregrado activo"
};

// Array de descriptores de campos del formulario
const camposContacto = [
    { id: "nombre", label: "Nombre:", tipo: "text", ph: "Tu nombre", tag: "input" },
    { id: "email", label: "Correo:", tipo: "text", ph: "correo@ejemplo.com", tag: "input" },
    { id: "mensaje", label: "Mensaje:", tipo: null, ph: "Escribe aquí...", tag: "textarea" }
];

function crearElemento(tag, attrs, inner) {
    const el = document.createElement(tag);
    // for: asigna cada atributo del objeto
    if (attrs) {
        for (const [clave, valor] of Object.entries(attrs)) {
            el.setAttribute(clave, valor);
        }
    }
    if (inner !== undefined) el.innerHTML = inner;
    return el;
}

// Sección INICIO
function generarInicio() {
    const sec = crearElemento("section", { id: "sec-inicio" });

    sec.appendChild(crearElemento("h1", {}, "Hola, soy Oscar"));
    sec.appendChild(crearElemento("p", {}, "Estudiante de Ingeniería de Sistemas."));

    // Lista de habilidades con for…of sobre el Array
    sec.appendChild(crearElemento("h3", {}, "Habilidades:"));
    const ul = crearElemento("ul", {});
    for (const skill of habilidades) {
        ul.appendChild(crearElemento("li", {}, skill));
    }
    sec.appendChild(ul);

    // Set: tecnologías únicas sin duplicados
    sec.appendChild(crearElemento("p", {},
        "Tecnologías únicas (Set, sin duplicados): " + [...tecnologiasUnicas].join(", ")
    ));

    // Canción favorita como enlace (funciona en GitHub Pages)
    sec.appendChild(crearElemento("h3", {}, "Canción favorita:"));
    sec.appendChild(crearElemento("p", {}, "Out of Time - The Weeknd"));
    const link = crearElemento("a", {
        href: "https://www.youtube.com/watch?v=2fDzCWNS3ig",
        target: "_blank"
    }, "▶ Escuchar en YouTube");
    sec.appendChild(link);

    return sec;
}

// Sección sobre mi 
function generarSobreMi() {
    const sec = crearElemento("section", { id: "sec-sobre-mi" });

    sec.appendChild(crearElemento("h2", {}, "Sobre mí"));
    sec.appendChild(crearElemento("p", {}, "Aquí va una pequeña descripción personal."));

    // Imagen
    sec.appendChild(crearElemento("img", {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
        alt: "Cristiano Ronaldo",
        width: "320"
    }));
    sec.appendChild(crearElemento("p", {}, "Cristiano Ronaldo"));

    return sec;
}

// Sección mis datos de la tabla 
function generarMisDatos() {
    const sec = crearElemento("section", { id: "sec-mis-datos" });

    sec.appendChild(crearElemento("h2", {}, "Mis datos"));

    // Tabla generada con for…in sobre el objeto datosPersonales
    const tabla = crearElemento("table", { border: "1", cellpadding: "8", cellspacing: "0" });
    const thead = crearElemento("thead", {}, "<tr><th>Campo</th><th>Detalle</th></tr>");
    const tbody = crearElemento("tbody", {});

    // for…in: recorre las propiedades del objeto
    for (const campo in datosPersonales) {
        tbody.appendChild(crearElemento("tr", {},
            "<td>" + campo + "</td><td>" + datosPersonales[campo] + "</td>"
        ));
    }
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    sec.appendChild(tabla);

    return sec;
}

// Sección proyectos 
function generarProyectos() {
    const sec = crearElemento("section", { id: "sec-proyectos" });
    sec.appendChild(crearElemento("h2", {}, "Proyectos"));

    // for clásico con índice sobre el Array de proyectos
    for (let i = 0; i < proyectos.length; i++) {
        const p = proyectos[i];

        // switch: elige un prefijo según el índice
        let prefijo;
        switch (i % 3) {
            case 0: prefijo = "★"; break;
            case 1: prefijo = "◆"; break;
            default: prefijo = "●";
        }

        sec.appendChild(crearElemento("h3", {}, prefijo + " " + p.nombre + " (" + p.anio + ")"));
        sec.appendChild(crearElemento("p", {}, p.descripcion));

        const tagsTxt = [];
        for (const tag of p.tags) {
            tagsTxt.push("[" + tag + "]");
        }
        sec.appendChild(crearElemento("p", {}, tagsTxt.join(" ")));
        sec.appendChild(crearElemento("hr", {}));
    }

    return sec;
}

// Sección contacto 
function generarContacto() {
    const sec = crearElemento("section", { id: "sec-contacto" });
    sec.appendChild(crearElemento("h2", {}, "Contacto"));

    const form = crearElemento("form", { id: "form-contacto" });

    // for  sobre el Array de descriptores de campos
    for (const campo of camposContacto) {
        form.appendChild(crearElemento("label", { for: campo.id }, campo.label));
        form.appendChild(crearElemento("br", {}));

        // if: distingue entre input y textarea
        if (campo.tag === "textarea") {
            form.appendChild(crearElemento("textarea", {
                id: campo.id, name: campo.id,
                rows: "4", cols: "40",
                placeholder: campo.ph,
                required: ""
            }));
        } else {
            form.appendChild(crearElemento("input", {
                id: campo.id, name: campo.id,
                type: campo.tipo,
                placeholder: campo.ph,
                required: ""
            }));
        }
        form.appendChild(crearElemento("br", {}));
        form.appendChild(crearElemento("br", {}));
    }

    form.appendChild(crearElemento("button", { type: "submit" }, "Enviar"));

    // Validación con mensajes en rojo o verde según resultado
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Limpiar mensaje anterior si existe
        const msgAnterior = document.getElementById("form-msg");
        if (msgAnterior) msgAnterior.remove();

        const msg = crearElemento("p", { id: "form-msg" });

        // if: nombre vacío error en rojo
        if (!nombre) {
            msg.style.color = "red";
            msg.innerHTML = "❌ El nombre no puede estar vacío.";
            form.appendChild(msg);
            return;
        }

        // if: email inválido o vacío 
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!email || !emailValido) {
            msg.style.color = "red";
            msg.innerHTML = "❌ Ingresa un correo válido (ejemplo@correo.com).";
            form.appendChild(msg);
            return;
        }

        // if: mensaje vacío error en rojo
        if (!mensaje) {
            msg.style.color = "red";
            msg.innerHTML = "❌ El mensaje no puede estar vacío.";
            form.appendChild(msg);
            return;
        }

        // Todo correcto  éxito en verde
        msg.style.color = "green";
        msg.innerHTML = "✅ Mensaje enviado correctamente, " + nombre + "!";
        form.appendChild(msg);
        form.reset();
    });

    sec.appendChild(form);
    return sec;
}

function navegarA(id) {
    // Ocultar todas las secciones con for…of sobre NodeList
    const todas = document.querySelectorAll("#app section");
    for (const sec of todas) {
        sec.style.display = "none";
    }

    // Mostrar la sección seleccionada
    const target = document.getElementById("sec-" + id);
    if (target) target.style.display = "block";

    // Actualizar enlaces del nav con while
    const enlaces = document.querySelectorAll("#nav-root a");
    let i = 0;
    while (i < enlaces.length) {
        // if: negrita al enlace activo
        if (enlaces[i].dataset.id === id) {
            enlaces[i].style.fontWeight = "bold";
        } else {
            enlaces[i].style.fontWeight = "normal";
        }
        i++;
    }
}


function init() {
    // 1. Construir nav desde el Map
    const nav = document.getElementById("nav-root");
    for (const [id, etiqueta] of secciones) {
        const a = crearElemento("a", { href: "#", "data-id": id }, etiqueta);
        a.addEventListener("click", function (e) {
            e.preventDefault();
            navegarA(id);
        });
        nav.appendChild(a);
        nav.appendChild(document.createTextNode(" | "));
    }

    // 2. Generar secciones con switch
    const app = document.getElementById("app");
    for (const [id] of secciones) {
        let seccion;
        switch (id) {
            case "inicio": seccion = generarInicio(); break;
            case "sobre-mi": seccion = generarSobreMi(); break;
            case "mis-datos": seccion = generarMisDatos(); break;
            case "proyectos": seccion = generarProyectos(); break;
            case "contacto": seccion = generarContacto(); break;
            default: seccion = crearElemento("section", {}, "<p>Sección " + id + "</p>");
        }
        seccion.style.display = "none";
        app.appendChild(seccion);
    }

    // 3. Footer con el año actual
    const year = new Date().getFullYear();
    document.getElementById("footer-root").appendChild(
        crearElemento("p", {}, "&copy; " + year + " Oscar")
    );

    // 4. Mostrar inicio por defecto
    navegarA("inicio");
}

document.addEventListener("DOMContentLoaded", init);