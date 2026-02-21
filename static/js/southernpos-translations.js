// Translations for SouthernPOS Project Page
const southernposTranslations = {
    en: {
        // Navigation
        'nav.back': 'Back to Portfolio',
        
        // Hero
        'hero.label': 'Commercial SaaS Platform',
        'hero.title': 'SouthernPOS',
        'hero.subtitle': 'Cloud-Based Point of Sale for Modern Businesses',
        'hero.tagline': 'A modular, multi-tenant POS system built with Django and PostgreSQL, designed for restaurants and retail stores seeking real-time control over sales, inventory, and financial data.',
        'hero.status': 'MVP+ Stage - Active Development',
        'hero.commercial': 'Commercial Product',
        'hero.timeline': 'Early 2024 - Present',
        'hero.demo': 'Try Live Demo',
        'hero.architecture': 'View Architecture',
        
        // Showcase Features
        'showcase.dualmode': 'Dual-Mode Operation',
        'showcase.dualmode.desc': 'Restaurant and Retail interfaces optimized for different workflows',
        'showcase.multitenant': 'Multi-Tenant Architecture',
        'showcase.multitenant.desc': 'Complete data isolation per business with per-tenant configuration',
        'showcase.tax': 'Tax Compliance',
        'showcase.tax.desc': 'SRI export and invoice generation for Ecuadorian regulations',
        
        // Business Problem
        'problem.title': 'The Business Problem',
        'problem.intro': 'Small businesses face significant barriers when adopting point-of-sale technology:',
        'problem.1': 'Traditional POS systems require expensive upfront hardware investment',
        'problem.2': 'Lack of mobility prevents owners from monitoring their business remotely',
        'problem.3': 'Fragmented systems for sales, inventory, and accounting create data silos',
        'problem.4': 'Poor inventory management leads to stockouts and overstock',
        'problem.5': 'Complex tax compliance (SRI in Ecuador) requires manual processes',
        'problem.solution': 'SouthernPOS eliminates these barriers with a cloud-based, all-in-one solution accessible from any device with a monthly subscription model.',
        
        // Product Vision
        'vision.title': 'Product Vision',
        'vision.p1': 'SouthernPOS was designed as a modular, scalable SaaS platform with multi-tenant isolation, financial traceability, and extensibility for future integrations such as electronic invoicing and payment gateways.',
        'vision.p2': 'The system is built with production architecture from day one, considering data integrity, security, and scalability constraints that commercial software requires.',
        
        // Multi-Tenant Design
        'multitenant.title': 'Multi-Tenant System Design',
        'multitenant.intro': 'SouthernPOS implements true multi-tenancy with logical data isolation, allowing multiple businesses to operate independently on the same infrastructure while maintaining complete data separation and security.',
        'multitenant.isolation': 'Data Isolation',
        'multitenant.isolation.desc': 'Every record is automatically filtered by usuario_creador, ensuring businesses only access their own data. No shared tables, no cross-contamination.',
        'multitenant.invoices': 'Sequential Invoice IDs',
        'multitenant.invoices.desc': 'Each tenant maintains independent invoice numbering sequences, critical for tax compliance and financial auditing.',
        'multitenant.config': 'Per-Tenant Configuration',
        'multitenant.config.desc': 'Business-specific settings including branding, tax rates, invoice formats, and operational modes (Restaurant/Retail).',
        'multitenant.filtering': 'Automatic Filtering',
        'multitenant.filtering.desc': 'Django ORM-level filtering ensures data isolation is enforced at the query level, not just the application layer.',
        
        // Financial Consistency
        'financial.title': 'Financial Consistency & Traceability',
        'financial.intro': 'Handling real money requires architectural decisions that prioritize data integrity, auditability, and compliance with tax regulations.',
        'financial.immutability': 'Transaction Immutability',
        'financial.immutability.desc': 'Once a sale is completed, transaction records cannot be modified—only voided with full audit trail.',
        'financial.stock': 'Automatic Stock Updates',
        'financial.stock.desc': 'Inventory adjustments are atomic with transaction completion, preventing stock inconsistencies.',
        'financial.vat': 'VAT Calculation',
        'financial.vat.desc': 'IVA (Ecuador\'s VAT) is calculated per business configuration, with proper tax breakdown in invoices.',
        'financial.sri': 'SRI Export Compliance',
        'financial.sri.desc': 'XML export structure aligned with Ecuadorian tax authority (SRI) requirements for electronic invoicing.',
        
        // System Architecture
        'arch.title': 'System Architecture',
        'arch.intro': 'SouthernPOS is built with a layered architecture that separates concerns and enables independent scaling of different system components.',
        'arch.presentation': 'Presentation Layer',
        'arch.business': 'Business Logic Layer',
        'arch.financial': 'Financial Engine',
        'arch.data': 'Data Layer',
        'arch.external': 'External Services',
        'arch.tech': 'Core Technologies',
        
        // Security
        'security.title': 'Security & Production Configuration',
        'security.intro': 'Production-grade security measures implemented from day one, not as an afterthought.',
        'security.csrf': 'CSRF Protection',
        'security.csrf.desc': 'Django\'s built-in CSRF middleware enabled on all state-changing operations.',
        'security.https': 'HTTPS Enforcement',
        'security.https.desc': 'Secure connections enforced in production with HSTS headers.',
        'security.cookies': 'Secure Cookies',
        'security.cookies.desc': 'Session cookies marked as secure and httponly to prevent XSS attacks.',
        'security.env': 'Environment Secrets',
        'security.env.desc': 'All sensitive credentials stored in environment variables, never in code.',
        'security.xframe': 'X-Frame-Options',
        'security.xframe.desc': 'Clickjacking protection enabled to prevent iframe embedding attacks.',
        'security.content': 'Content-Type Sniffing',
        'security.content.desc': 'X-Content-Type-Options header prevents MIME type confusion attacks.',
        
        // Engineering Decisions
        'decisions.title': 'Engineering Decisions',
        'decisions.intro': 'Every technology choice was made with specific trade-offs in mind. Here\'s the reasoning behind key decisions.',
        'decisions.postgres': 'Why PostgreSQL instead of SQLite?',
        'decisions.postgres.desc': 'Multi-tenant systems require robust concurrent access, complex queries, and production-grade reliability. PostgreSQL provides ACID compliance, better indexing, and horizontal scaling potential.',
        'decisions.cloudinary': 'Why Cloudinary for media persistence?',
        'decisions.cloudinary.desc': 'Free-tier hosting on Render doesn\'t guarantee file persistence across deployments. Cloudinary provides reliable CDN-backed storage for product images and business logos.',
        'decisions.reportlab': 'Why ReportLab for invoice generation?',
        'decisions.reportlab.desc': 'Thermal printer compatibility (80mm format) and precise PDF control for tax-compliant invoices. HTML-to-PDF solutions lack the precision needed for receipt formatting.',
        'decisions.neon': 'Why Neon DB for cloud database?',
        'decisions.neon.desc': 'Serverless PostgreSQL with automatic scaling and generous free tier. Separates database from application hosting, enabling independent scaling.',
        'decisions.render': 'Why Render for MVP stage?',
        'decisions.render.desc': 'Zero-cost hosting for MVP validation with easy migration path to paid tiers. Automatic deployments from Git and built-in SSL certificates.',
        
        // Limitations
        'limits.title': 'Current Limitations & Trade-offs',
        'limits.intro': 'Honest assessment of current constraints and architectural decisions that prioritize speed-to-market over premature optimization.',
        'limits.coldstart': 'Cold Start Latency',
        'limits.coldstart.desc': 'Free-tier hosting causes 30-60 second cold starts after inactivity. Acceptable for MVP, will require paid tier for production.',
        'limits.scaling': 'No Horizontal Scaling',
        'limits.scaling.desc': 'Current architecture is single-instance. Database is ready for scaling, but application layer needs load balancer configuration.',
        'limits.roles': 'Basic Role Management',
        'limits.roles.desc': 'User permissions are functional but not granular. Full RBAC (Role-Based Access Control) system is in roadmap.',
        'limits.sri': 'SRI Certification Pending',
        'limits.sri.desc': 'Electronic invoicing structure is ready, but official SRI certification process is pending for legal compliance.',
        'limits.note': 'These limitations are documented and prioritized in the development roadmap. They represent conscious trade-offs between speed-to-market and feature completeness.',
        
        // Roadmap
        'roadmap.title': 'Development Roadmap',
        'roadmap.implemented': 'Implemented',
        'roadmap.impl.1': 'Multi-tenant architecture with data isolation',
        'roadmap.impl.2': 'Dual-mode operation (Restaurant/Retail)',
        'roadmap.impl.3': 'Product catalog with image management',
        'roadmap.impl.4': 'Real-time inventory tracking',
        'roadmap.impl.5': 'Sales transaction processing',
        'roadmap.impl.6': 'PDF invoice generation (80mm thermal)',
        'roadmap.impl.7': 'Customer management system',
        'roadmap.impl.8': 'Sales analytics and reporting',
        'roadmap.impl.9': 'User configuration and branding',
        'roadmap.impl.10': 'SRI XML export structure',
        'roadmap.progress': 'In Progress',
        'roadmap.prog.1': 'Retail mode refinement (bug fixes)',
        'roadmap.prog.2': 'Electronic invoicing (SRI certification)',
        'roadmap.prog.3': 'Advanced analytics dashboard',
        'roadmap.prog.4': 'Mobile-responsive improvements',
        'roadmap.planned': 'Planned',
        'roadmap.plan.1': 'Payment gateway integration',
        'roadmap.plan.2': 'Multi-branch support',
        'roadmap.plan.3': 'Offline mode (PWA)',
        'roadmap.plan.4': 'Granular role-based permissions',
        'roadmap.plan.5': 'API for third-party integrations',
        'roadmap.plan.6': 'Automated backup system',
        'roadmap.plan.7': 'Advanced inventory forecasting',
        
        // Why I Built This
        'why.title': 'Why I Built This',
        'why.p1': 'SouthernPOS was started as an attempt to design a commercially viable SaaS product with real financial responsibility. Unlike academic systems, this project required thinking about tax compliance, invoice traceability, multi-tenant isolation, and scalability constraints from day one.',
        'why.p2': 'The goal wasn\'t just to build a POS system—it was to understand what it takes to create production-grade software that handles real money, serves real businesses, and complies with real regulations. Every architectural decision was made with commercial viability in mind, not just technical elegance.',
        'why.p3': 'This project taught me that building commercial software is fundamentally different from building academic projects. It\'s not about using the latest framework or the most complex architecture—it\'s about making pragmatic decisions that balance technical debt, time-to-market, and long-term maintainability.',
        
        // CTA
        'cta.title': 'Explore SouthernPOS',
        'cta.subtitle': 'Experience the platform in action or review the technical implementation.',
        'cta.demo': 'View Live Demo',
        'cta.back': 'Back to Projects',
        'cta.note': 'Note: Demo is hosted on free tier and may take 30-60 seconds to wake up from cold start.',
        
        // Next Project
        'next.title': 'Next Project',
        'next.plugsite': 'Plugsite',
        'next.plugsite.desc': 'Multi-tenant SaaS platform for Minecraft server stores with PayPal integration and vendor withdrawal system.',
        'next.view': 'View Project',
        
        // Footer
        'footer.copyright': '© 2026 Justin Ocaña. Building scalable SaaS platforms.',
    },
    es: {
        // Navigation
        'nav.back': 'Volver al Portafolio',
        
        // Hero
        'hero.label': 'Plataforma SaaS Comercial',
        'hero.title': 'SouthernPOS',
        'hero.subtitle': 'Punto de Venta en la Nube para Negocios Modernos',
        'hero.tagline': 'Un sistema POS modular y multi-tenant construido con Django y PostgreSQL, diseñado para restaurantes y tiendas minoristas que buscan control en tiempo real sobre ventas, inventario y datos financieros.',
        'hero.status': 'Etapa MVP+ - Desarrollo Activo',
        'hero.commercial': 'Producto Comercial',
        'hero.timeline': 'Principios de 2024 - Presente',
        'hero.demo': 'Probar Demo en Vivo',
        'hero.architecture': 'Ver Arquitectura',
        
        // Showcase Features
        'showcase.dualmode': 'Operación Dual',
        'showcase.dualmode.desc': 'Interfaces de Restaurante y Retail optimizadas para diferentes flujos de trabajo',
        'showcase.multitenant': 'Arquitectura Multi-Tenant',
        'showcase.multitenant.desc': 'Aislamiento completo de datos por negocio con configuración por tenant',
        'showcase.tax': 'Cumplimiento Tributario',
        'showcase.tax.desc': 'Exportación SRI y generación de facturas para regulaciones ecuatorianas',
        
        // Business Problem
        'problem.title': 'El Problema del Negocio',
        'problem.intro': 'Las pequeñas empresas enfrentan barreras significativas al adoptar tecnología de punto de venta:',
        'problem.1': 'Los sistemas POS tradicionales requieren inversión inicial costosa en hardware',
        'problem.2': 'La falta de movilidad impide a los propietarios monitorear su negocio remotamente',
        'problem.3': 'Sistemas fragmentados para ventas, inventario y contabilidad crean silos de datos',
        'problem.4': 'La mala gestión de inventario conduce a desabastecimiento y exceso de stock',
        'problem.5': 'El cumplimiento tributario complejo (SRI en Ecuador) requiere procesos manuales',
        'problem.solution': 'SouthernPOS elimina estas barreras con una solución todo-en-uno basada en la nube, accesible desde cualquier dispositivo con un modelo de suscripción mensual.',
        
        // Product Vision
        'vision.title': 'Visión del Producto',
        'vision.p1': 'SouthernPOS fue diseñado como una plataforma SaaS modular y escalable con aislamiento multi-tenant, trazabilidad financiera y extensibilidad para futuras integraciones como facturación electrónica y pasarelas de pago.',
        'vision.p2': 'El sistema está construido con arquitectura de producción desde el primer día, considerando integridad de datos, seguridad y restricciones de escalabilidad que requiere el software comercial.',
        
        // Multi-Tenant Design
        'multitenant.title': 'Diseño del Sistema Multi-Tenant',
        'multitenant.intro': 'SouthernPOS implementa verdadero multi-tenancy con aislamiento lógico de datos, permitiendo que múltiples negocios operen independientemente en la misma infraestructura mientras mantienen separación completa de datos y seguridad.',
        'multitenant.isolation': 'Aislamiento de Datos',
        'multitenant.isolation.desc': 'Cada registro se filtra automáticamente por usuario_creador, asegurando que los negocios solo accedan a sus propios datos. Sin tablas compartidas, sin contaminación cruzada.',
        'multitenant.invoices': 'IDs de Factura Secuenciales',
        'multitenant.invoices.desc': 'Cada tenant mantiene secuencias de numeración de facturas independientes, crítico para cumplimiento tributario y auditoría financiera.',
        'multitenant.config': 'Configuración por Tenant',
        'multitenant.config.desc': 'Configuraciones específicas del negocio incluyendo marca, tasas de impuestos, formatos de factura y modos operacionales (Restaurante/Retail).',
        'multitenant.filtering': 'Filtrado Automático',
        'multitenant.filtering.desc': 'El filtrado a nivel de Django ORM asegura que el aislamiento de datos se aplique a nivel de consulta, no solo en la capa de aplicación.',
        
        // Financial Consistency
        'financial.title': 'Consistencia Financiera y Trazabilidad',
        'financial.intro': 'Manejar dinero real requiere decisiones arquitectónicas que priorizan integridad de datos, auditabilidad y cumplimiento con regulaciones tributarias.',
        'financial.immutability': 'Inmutabilidad de Transacciones',
        'financial.immutability.desc': 'Una vez completada una venta, los registros de transacción no pueden modificarse—solo anularse con rastro de auditoría completo.',
        'financial.stock': 'Actualizaciones Automáticas de Stock',
        'financial.stock.desc': 'Los ajustes de inventario son atómicos con la finalización de transacciones, previniendo inconsistencias de stock.',
        'financial.vat': 'Cálculo de IVA',
        'financial.vat.desc': 'El IVA (Impuesto al Valor Agregado de Ecuador) se calcula según configuración del negocio, con desglose apropiado de impuestos en facturas.',
        'financial.sri': 'Cumplimiento de Exportación SRI',
        'financial.sri.desc': 'Estructura de exportación XML alineada con requisitos de la autoridad tributaria ecuatoriana (SRI) para facturación electrónica.',
        
        // System Architecture
        'arch.title': 'Arquitectura del Sistema',
        'arch.intro': 'SouthernPOS está construido con una arquitectura en capas que separa responsabilidades y permite escalado independiente de diferentes componentes del sistema.',
        'arch.presentation': 'Capa de Presentación',
        'arch.business': 'Capa de Lógica de Negocio',
        'arch.financial': 'Motor Financiero',
        'arch.data': 'Capa de Datos',
        'arch.external': 'Servicios Externos',
        'arch.tech': 'Tecnologías Core',
        
        // Security
        'security.title': 'Seguridad y Configuración de Producción',
        'security.intro': 'Medidas de seguridad de grado producción implementadas desde el primer día, no como una idea tardía.',
        'security.csrf': 'Protección CSRF',
        'security.csrf.desc': 'Middleware CSRF integrado de Django habilitado en todas las operaciones que cambian estado.',
        'security.https': 'Aplicación de HTTPS',
        'security.https.desc': 'Conexiones seguras aplicadas en producción con encabezados HSTS.',
        'security.cookies': 'Cookies Seguras',
        'security.cookies.desc': 'Cookies de sesión marcadas como seguras y httponly para prevenir ataques XSS.',
        'security.env': 'Secretos de Entorno',
        'security.env.desc': 'Todas las credenciales sensibles almacenadas en variables de entorno, nunca en código.',
        'security.xframe': 'X-Frame-Options',
        'security.xframe.desc': 'Protección contra clickjacking habilitada para prevenir ataques de incrustación en iframe.',
        'security.content': 'Sniffing de Content-Type',
        'security.content.desc': 'Encabezado X-Content-Type-Options previene ataques de confusión de tipo MIME.',
        
        // Engineering Decisions
        'decisions.title': 'Decisiones de Ingeniería',
        'decisions.intro': 'Cada elección tecnológica se hizo con compromisos específicos en mente. Aquí está el razonamiento detrás de decisiones clave.',
        'decisions.postgres': '¿Por qué PostgreSQL en lugar de SQLite?',
        'decisions.postgres.desc': 'Los sistemas multi-tenant requieren acceso concurrente robusto, consultas complejas y confiabilidad de grado producción. PostgreSQL proporciona cumplimiento ACID, mejor indexación y potencial de escalado horizontal.',
        'decisions.cloudinary': '¿Por qué Cloudinary para persistencia de medios?',
        'decisions.cloudinary.desc': 'El hosting de nivel gratuito en Render no garantiza persistencia de archivos entre despliegues. Cloudinary proporciona almacenamiento confiable respaldado por CDN para imágenes de productos y logos de negocios.',
        'decisions.reportlab': '¿Por qué ReportLab para generación de facturas?',
        'decisions.reportlab.desc': 'Compatibilidad con impresoras térmicas (formato 80mm) y control preciso de PDF para facturas conformes con impuestos. Las soluciones HTML-a-PDF carecen de la precisión necesaria para formateo de recibos.',
        'decisions.neon': '¿Por qué Neon DB para base de datos en la nube?',
        'decisions.neon.desc': 'PostgreSQL serverless con escalado automático y nivel gratuito generoso. Separa la base de datos del hosting de aplicación, permitiendo escalado independiente.',
        'decisions.render': '¿Por qué Render para etapa MVP?',
        'decisions.render.desc': 'Hosting sin costo para validación de MVP con ruta de migración fácil a niveles pagos. Despliegues automáticos desde Git y certificados SSL integrados.',
        
        // Limitations
        'limits.title': 'Limitaciones Actuales y Compromisos',
        'limits.intro': 'Evaluación honesta de restricciones actuales y decisiones arquitectónicas que priorizan velocidad al mercado sobre optimización prematura.',
        'limits.coldstart': 'Latencia de Arranque en Frío',
        'limits.coldstart.desc': 'El hosting de nivel gratuito causa arranques en frío de 30-60 segundos después de inactividad. Aceptable para MVP, requerirá nivel pago para producción.',
        'limits.scaling': 'Sin Escalado Horizontal',
        'limits.scaling.desc': 'La arquitectura actual es de instancia única. La base de datos está lista para escalar, pero la capa de aplicación necesita configuración de balanceador de carga.',
        'limits.roles': 'Gestión Básica de Roles',
        'limits.roles.desc': 'Los permisos de usuario son funcionales pero no granulares. El sistema completo RBAC (Control de Acceso Basado en Roles) está en la hoja de ruta.',
        'limits.sri': 'Certificación SRI Pendiente',
        'limits.sri.desc': 'La estructura de facturación electrónica está lista, pero el proceso oficial de certificación SRI está pendiente para cumplimiento legal.',
        'limits.note': 'Estas limitaciones están documentadas y priorizadas en la hoja de ruta de desarrollo. Representan compromisos conscientes entre velocidad al mercado y completitud de características.',
        
        // Roadmap
        'roadmap.title': 'Hoja de Ruta de Desarrollo',
        'roadmap.implemented': 'Implementado',
        'roadmap.impl.1': 'Arquitectura multi-tenant con aislamiento de datos',
        'roadmap.impl.2': 'Operación de modo dual (Restaurante/Retail)',
        'roadmap.impl.3': 'Catálogo de productos con gestión de imágenes',
        'roadmap.impl.4': 'Seguimiento de inventario en tiempo real',
        'roadmap.impl.5': 'Procesamiento de transacciones de venta',
        'roadmap.impl.6': 'Generación de facturas PDF (térmica 80mm)',
        'roadmap.impl.7': 'Sistema de gestión de clientes',
        'roadmap.impl.8': 'Análisis de ventas y reportes',
        'roadmap.impl.9': 'Configuración de usuario y marca',
        'roadmap.impl.10': 'Estructura de exportación XML SRI',
        'roadmap.progress': 'En Progreso',
        'roadmap.prog.1': 'Refinamiento de modo Retail (corrección de bugs)',
        'roadmap.prog.2': 'Facturación electrónica (certificación SRI)',
        'roadmap.prog.3': 'Dashboard de análisis avanzado',
        'roadmap.prog.4': 'Mejoras de respuesta móvil',
        'roadmap.planned': 'Planificado',
        'roadmap.plan.1': 'Integración de pasarela de pago',
        'roadmap.plan.2': 'Soporte multi-sucursal',
        'roadmap.plan.3': 'Modo offline (PWA)',
        'roadmap.plan.4': 'Permisos granulares basados en roles',
        'roadmap.plan.5': 'API para integraciones de terceros',
        'roadmap.plan.6': 'Sistema de respaldo automatizado',
        'roadmap.plan.7': 'Pronóstico avanzado de inventario',
        
        // Why I Built This
        'why.title': 'Por Qué Construí Esto',
        'why.p1': 'SouthernPOS comenzó como un intento de diseñar un producto SaaS comercialmente viable con responsabilidad financiera real. A diferencia de los sistemas académicos, este proyecto requirió pensar en cumplimiento tributario, trazabilidad de facturas, aislamiento multi-tenant y restricciones de escalabilidad desde el primer día.',
        'why.p2': 'El objetivo no era solo construir un sistema POS—era entender lo que se necesita para crear software de grado producción que maneja dinero real, sirve a negocios reales y cumple con regulaciones reales. Cada decisión arquitectónica se tomó con viabilidad comercial en mente, no solo elegancia técnica.',
        'why.p3': 'Este proyecto me enseñó que construir software comercial es fundamentalmente diferente de construir proyectos académicos. No se trata de usar el framework más reciente o la arquitectura más compleja—se trata de tomar decisiones pragmáticas que equilibran deuda técnica, tiempo al mercado y mantenibilidad a largo plazo.',
        
        // CTA
        'cta.title': 'Explora SouthernPOS',
        'cta.subtitle': 'Experimenta la plataforma en acción o revisa la implementación técnica.',
        'cta.demo': 'Ver Demo en Vivo',
        'cta.back': 'Volver a Proyectos',
        'cta.note': 'Nota: La demo está alojada en nivel gratuito y puede tardar 30-60 segundos en despertar del arranque en frío.',
        
        // Next Project
        'next.title': 'Siguiente Proyecto',
        'next.plugsite': 'Plugsite',
        'next.plugsite.desc': 'Plataforma SaaS multi-tenant para tiendas de servidores Minecraft con integración de PayPal y sistema de retiros para vendedores.',
        'next.view': 'Ver Proyecto',
        
        // Footer
        'footer.copyright': '© 2026 Justin Ocaña. Construyendo plataformas SaaS escalables.',
    }
};

// Language Manager for Project Pages
class SouthernPOSLanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.init();
    }
    
    init() {
        this.setLanguage(this.currentLang, false);
        this.setupEventListeners();
        this.updateActiveOption();
    }
    
    setupEventListeners() {
        const languageToggle = document.getElementById('languageToggle');
        const languageDropdown = document.getElementById('languageDropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        
        languageToggle?.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
        
        document.addEventListener('click', () => {
            languageDropdown?.classList.remove('active');
        });
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                this.setLanguage(lang);
                languageDropdown.classList.remove('active');
            });
        });
    }
    
    setLanguage(lang, save = true) {
        this.currentLang = lang;
        
        if (save) {
            localStorage.setItem('language', lang);
        }
        
        this.translatePage();
        this.updateLanguageDisplay();
        this.updateActiveOption();
        document.documentElement.lang = lang;
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = southernposTranslations[this.currentLang][key];
            
            if (translation) {
                element.textContent = translation;
            }
        });
    }
    
    updateLanguageDisplay() {
        const currentLangElement = document.getElementById('currentLang');
        if (currentLangElement) {
            currentLangElement.textContent = this.currentLang.toUpperCase();
        }
    }
    
    updateActiveOption() {
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            if (option.dataset.lang === this.currentLang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new SouthernPOSLanguageManager();
    });
} else {
    new SouthernPOSLanguageManager();
}
