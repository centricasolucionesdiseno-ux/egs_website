<div align="center">

# EGS SAS · Sitio Web Corporativo

**Consultoría archivística, custodia, digitalización, preservación digital y desarrollo tecnológico bajo norma AGN, desde Bogotá para Colombia.**

![React](https://img.shields.io/badge/React-18%2B-149eca?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6%2B-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-ca4245?logo=reactrouter&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-100%25-2ea44f)

[Resumen](#-resumen-ejecutivo) ·
[Qué incluye](#-qué-incluye) ·
[Arquitectura](#-arquitectura-del-proyecto) ·
[Tokens & Estilos](#-sistema-de-diseño) ·
[Componentes UI](#-kit-de-componentes-compartidos) ·
[Empezar](#-puesta-en-marcha) ·
[Pruebas e Integración](#-estado-del-desarrollo-y-pruebas)

</div>

---

## 📊 Resumen ejecutivo

**Estado:** Fase inicial y base estructural completada. El repositorio cuenta con el setup base, sistema de tokens globales en Tailwind CSS v4, enrutamiento dinámico, kit de componentes UI modularizados y pruebas de integración de las páginas principales.

| Indicador | Estado / Resultado |
| --- | --- |
| **Arquitectura de UI** | SPA React 18+ con Vite 6 y React Router v6 |
| **Sistema de Diseño** | Tailwind CSS v4 centralizado mediante `@theme` |
| **Responsividad** | 100% adaptable (360px, 768px, 1024px, 1366px, 1920px) |
| **Calidad de Código** | 0 errores y 0 advertencias bloqueantes en consola |
| **Enrutamiento** | Carga diferida con `React.lazy` / `Suspense` y vista 404 personalizada |
| **Cumplimiento Normativo** | Enfoque institucional ajustado a lineamientos del Archivo General de la Nación (AGN) |

---

## ✨ Qué incluye

Desarrollamos el frontend corporativo para **EGS Soluciones Integrales S.A.S.** como una aplicación de página única (SPA) modular, rápida y de alto rendimiento.

| | Área | Qué hace |
| :-: | --- | --- |
| 🌐 | **Rutas & Navegación** | 5 vistas principales (Inicio, Acerca de, Servicios, Proyectos, Contacto) y ruta 404. Incluye `ScrollToTop` automático al cambiar de vista. |
| 🎨 | **Tailwind v4** | Configuración nativa del motor de estilos mediante `@theme` en CSS sin requerir `tailwind.config.js`. |
| 🧩 | **Kit UI Reutilizable** | Tarjetas de servicios con badges, bloques de casos de éxito con métricas, banners institucionales y testimonios. |
| 🛡️ | **Error Boundary** | Captura global de errores en tiempo de renderizado para evitar caídas completas de la aplicación. |
| 📱 | **Diseño Responsivo** | Menú de navegación adaptable con versión hamburguesa para dispositivos móviles y cuadrículas dinámicas. |

---

## 🗺️ Arquitectura del Proyecto

```text
egs-website/
├── index.html
├── package.json
├── vite.config.js          # Configuración del plugin @tailwindcss/vite
├── .vscode/
│   └── settings.json       # Asociación de sintaxis para Tailwind CSS v4
└── src/
    ├── assets/             # Logotipos, imágenes y recursos gráficos
    ├── components/
    │   ├── layout/         # Componentes estructurales (Header, Footer, Layout, ScrollToTop)
    │   └── ui/             # Componentes de UI reutilizables (Button, ServiceCard, CaseBlock, etc.)
    ├── pages/              # Páginas principales (Home, About, Services, Projects, Contact, NotFound)
    ├── routes/             # Enrutador principal con React Router (AppRouter)
    ├── styles/             # Estilos globales y tokens del sistema (@theme)
    ├── App.jsx             # Contenedor raíz con Error Boundary
    └── main.jsx            # Punto de entrada de la aplicación React
```

---

## 🎨 Sistema de Diseño (Tokens con `@theme`)

Utilizamos la directiva `@theme` de **Tailwind CSS v4** dentro de `src/styles/index.css` para definir centralizadamente la paleta institucional, tipografías y sombras:

```css
@import "tailwindcss";
@import '@fortawesome/fontawesome-free/css/all.min.css';

@theme {
  --color-azul-profundo: #0d2b5e;
  --color-azul-medio: #173f8a;
  --color-cyan-acento: #00a8cc;
  --color-gris-oscuro: #333333;
  --color-gris-bg: #f8fafc;

  --font-sans: 'Inter', system-ui, sans-serif;
  --font-heading: 'Poppins', sans-serif;

  --radius-card: 12px;
  --shadow-card: 0 4px 20px rgba(13, 43, 94, 0.08);
  --shadow-hover: 0 12px 28px rgba(13, 43, 94, 0.15);
}
```

---

## 🧩 Kit de Componentes Compartidos (`src/components/ui/`)

El desarrollo modular del proyecto se centraliza en componentes desacoplados y altamente reutilizables:

* **`Button.jsx`**: Soporta variantes (`primary`, `secondary`, `outline`), iconos de FontAwesome y renderizado inteligente como botón HTML, enlace interno (`<Link>`) o externo (`<a>`).
* **`ServiceCard.jsx`**: Tarjeta con acentos de color, badges opcionales, listado de características con checks y enlace de acción.
* **`CaseBlock.jsx`**: Bloque para la presentación de casos de éxito con métricas destacadas, testimonios del cliente y layout extensible.
* **`NebulaCard.jsx`**: Banner institucional que destaca el software de preservación digital **Nebula Vault** (estándar OAIS).
* **`SectionHeader.jsx`**: Encabezado estandarizado para mantener la consistencia temática y tipográfica en todas las secciones.
* **`TestimonialCard.jsx`**: Tarjeta con avatar con iniciales, cita textual y datos de la entidad cliente.

---

## 🚀 Puesta en marcha

Sigue estos pasos para clonar e iniciar el entorno de desarrollo local:

### 1. Requisitos Previos
* **Node.js**: versión `18.0.0` o superior.
* **npm**: versión `9.0.0` o superior.

### 2. Instalación
```bash
# Clonar el repositorio
git clone https://github.com/centricasolucionesdiseno-ux/egs-website.git

# Entrar al directorio
cd egs-website

# Instalar dependencias
npm install
```

### 3. Comandos de Desarrollo

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo local de Vite en `http://localhost:5173/` |
| `npm run build` | Compila y optimiza el proyecto para producción en la carpeta `dist/` |
| `npm run preview` | Sirve localmente los archivos compilados en `dist/` |

---

## 🧪 Estado del Desarrollo y Pruebas

Hasta la fecha se han ejecutado y validado los siguientes hitos técnicos:

- [x] **Setup y Migración a Tailwind v4:** Eliminación de dependencias obsoletas (`tailwind.config.js`) e integración del plugin `@tailwindcss/vite`.
- [x] **Configuración de Linter en VS Code:** Creación de `.vscode/settings.json` para omitir advertencias fútiles sobre `@theme`.
- [x] **Layout & Rutas:** Verificación del flujo de navegación entre vistas (`/`, `/acerca-de`, `/servicios`, `/proyectos`, `/contacto`) y captura de rutas no encontradas (`*`).
- [x] **Pruebas de Integración de Componentes Base:** Ensamblaje exitoso del kit UI en las páginas `Home.jsx` y `Services.jsx` sin arrojar advertencias en consola.

---

<div align="center">

© 2026 EGS S.A.S. Todos los derechos reservados.

</div>
