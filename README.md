# 🚀 Portafolio Digital Profesional

Portafolio moderno y profesional diseñado para destacar tus proyectos y habilidades como desarrollador.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Modo Claro/Oscuro**: Toggle para cambiar entre temas
- **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- **Navegación Inteligente**: Smooth scroll y menú hamburguesa en móvil
- **Secciones Completas**:
  - Hero con presentación impactante
  - Sobre Mí con enfoque en tu proceso de pensamiento
  - Proyectos con detalles técnicos profundos
  - Experiencia con timeline visual
  - Blog técnico
  - Formulario de contacto

## 🎨 Paletas de Colores

### Modo Claro (Profesional)
- Fondo: Blanco (#ffffff)
- Texto: Gris oscuro (#1a1a1a)
- Acentos: Azul petróleo (#0891b2) + Cyan (#06b6d4)

### Modo Oscuro (Tech Moderno)
- Fondo: Negro profundo (#0d0d0d)
- Texto: Blanco (#ffffff)
- Acentos: Cyan neón (#22d3ee) + Cyan (#06b6d4)

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html              # Página principal
├── pages/                  # Páginas adicionales (blog posts)
├── static/
│   ├── css/
│   │   └── styles.css     # Estilos completos
│   ├── js/
│   │   └── main.js        # JavaScript interactivo
│   └── images/            # Imágenes del portafolio
│       ├── profile.jpg    # Tu foto profesional
│       ├── project1.jpg   # Imagen proyecto 1
│       ├── project2.jpg   # Imagen proyecto 2
│       └── project3.jpg   # Imagen proyecto 3
└── README.md              # Este archivo
```

## 🛠️ Personalización

### 1. Información Personal

Edita `index.html` y reemplaza:
- `[Tu Nombre]` - Tu nombre completo
- `[Tu edad]` - Tu edad
- `[Tu ciudad]` - Tu ubicación
- `TU_LOGO` - Tu logo o iniciales
- Enlaces de redes sociales (LinkedIn, GitHub, Telegram)
- Email de contacto

### 2. Proyectos

Para cada proyecto, completa:
- Título y descripción
- Estado (Completado / En Desarrollo)
- Problema que resuelve
- Stack tecnológico
- Tu rol específico
- Código destacado
- Aprendizajes clave
- Enlaces a demo y GitHub

### 3. Imágenes

Agrega tus imágenes en `static/images/`:
- `profile.jpg` - Foto profesional (recomendado: 400x400px)
- `project1.jpg`, `project2.jpg`, etc. - Screenshots de proyectos (recomendado: 1200x600px)

### 4. Colores (Opcional)

Si quieres cambiar la paleta de colores, edita las variables CSS en `static/css/styles.css`:

```css
:root {
    --accent-primary: #TU_COLOR;
    --accent-secondary: #TU_COLOR_SECUNDARIO;
}
```

### 5. Blog Posts

Crea archivos HTML en la carpeta `pages/` para tus posts:
- `blog-post-1.html`
- `blog-post-2.html`
- etc.

## 🚀 Cómo Usar

### Desarrollo Local

1. Abre `index.html` directamente en tu navegador
2. O usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

3. Visita `http://localhost:8000`

### Despliegue

Puedes desplegar tu portafolio en:

- **GitHub Pages**: Gratis y fácil
  1. Sube tu código a un repositorio
  2. Ve a Settings > Pages
  3. Selecciona la rama main
  4. Tu sitio estará en `https://tu-usuario.github.io/repositorio`

- **Netlify**: Drag & drop
  1. Arrastra la carpeta a netlify.com/drop
  2. Listo

- **Vercel**: Integración con Git
  1. Conecta tu repositorio
  2. Deploy automático

## 📝 Checklist de Personalización

- [ ] Reemplazar nombre y datos personales
- [ ] Agregar foto profesional
- [ ] Completar sección "Sobre Mí"
- [ ] Agregar al menos 3 proyectos con detalles
- [ ] Actualizar experiencia y timeline
- [ ] Escribir 2-3 posts de blog
- [ ] Configurar enlaces de redes sociales
- [ ] Agregar CV descargable
- [ ] Probar en móvil y desktop
- [ ] Verificar modo claro/oscuro
- [ ] Optimizar imágenes (comprimir)

## 🎯 Consejos para Destacar

1. **Proyectos**: No solo muestres qué hiciste, explica POR QUÉ tomaste cada decisión técnica
2. **Código**: Incluye snippets que demuestren tu lógica y pensamiento
3. **Aprendizajes**: Sé honesto sobre lo que aprendiste y los desafíos
4. **Blog**: Escribe sobre decisiones técnicas, no tutoriales genéricos
5. **Autenticidad**: Tu enfoque con IA es una fortaleza, no lo ocultes

## 🔧 Funcionalidades JavaScript

- Cambio de tema (localStorage)
- Navegación móvil responsive
- Smooth scroll
- Animaciones de entrada
- Highlight de sección activa
- Lazy loading de imágenes
- Validación de formulario

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

## 🌐 Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Opera (últimas 2 versiones)

## 📄 Licencia

Este portafolio es tuyo. Úsalo, modifícalo y hazlo brillar.

---

**¿Necesitas ayuda?** Revisa el código, está comentado para que entiendas cada parte.

**¡Éxito con tu portafolio!** 🚀
