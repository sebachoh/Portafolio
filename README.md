# Portafolio — sebastianruiz.me

Portafolio personal de Sebastian Ruiz. Sitio estático (HTML + CSS + JavaScript vanilla)
desplegado en GitHub Pages con dominio propio.

## Estructura

```
index.html                  Página única con todas las secciones
assets/
  css/
    style.css               Estilos propios (fuentes, animaciones, componentes)
    tailwind-input.css       Entrada de Tailwind
    tailwind.css            Generado — no editar a mano
  js/script.js              Datos de proyectos, carrusel, modal, globo, menú
  fonts/                    .woff2 servidos + .otf originales
  img/                      Imágenes en .webp + originales
  CV/                       CV en PDF
robots.txt · sitemap.xml    SEO
```

## Desarrollo

```bash
npm install        # sólo la primera vez
npm run watch:css  # recompila Tailwind al vuelo
npm run serve      # http://localhost:8000
```

**Importante:** `assets/css/tailwind.css` se genera. Si añades clases de Tailwind
nuevas en `index.html` o `script.js`, recompila antes de subir:

```bash
npm run build:css
```

Sin ese paso las clases nuevas no existirán en producción.

## Notas de mantenimiento

- **Imágenes.** Se sirven en `.webp` redimensionadas al tamaño real de uso. Los
  originales siguen en el repo por si hacen falta, pero no se sirven. Para añadir
  una imagen nueva, genera su `.webp` (`cwebp -q 80`) y referencia esa.
- **Fuentes.** Se sirven en `.woff2` con subconjunto latino (96 KB en total, frente
  a 404 KB de los `.otf`). Los `.otf` se conservan como fuente de verdad.
- **Proyectos.** Se editan en el array `projectsData` al principio de
  `assets/js/script.js`; el carrusel y el modal se generan a partir de ahí.
- **CV.** `assets/CV/CV-Sebastian-Ruiz-Ingenieur.pdf`. El botón de descarga apunta
  directamente a ese archivo: al reemplazarlo, mantén el mismo nombre.
- **Imagen de previsualización.** `assets/img/og-image.jpg` (1200×630) es lo que se
  ve al compartir el enlace en LinkedIn o WhatsApp. Si cambian el titular o el rol,
  conviene regenerarla.
