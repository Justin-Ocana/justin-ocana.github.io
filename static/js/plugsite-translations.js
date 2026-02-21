// Translations for Plugsite Project Page
const plugsiteTranslations = {
    en: {
        // Navigation
        'nav.back': 'Back to Portfolio',
        
        // Hero
        'hero.label': 'Multi-Tenant SaaS Platform',
        'hero.title': 'Plugsite',
        'hero.subtitle': 'E-Commerce Platform for Minecraft Servers',
        'hero.tagline': 'Complete multi-tenant SaaS platform designed specifically for Minecraft servers, featuring PayPal integration, vendor withdrawal system, and advanced per-store customization.',
        'hero.status': '87% Complete - Active Development',
        'hero.commercial': 'Commercial SaaS Product',
        'hero.timeline': 'Early 2024 - Present',
        'hero.demo': 'Try Live Demo',
        'hero.architecture': 'View Architecture',
        
        // Features
        'features.multitenant': 'Multi-Tenant Architecture',
        'features.multitenant.desc': 'Complete data isolation per store with independent sessions',
        'features.withdrawal': 'Vendor Withdrawal System',
        'features.withdrawal.desc': 'Automated withdrawal requests with admin approval and chat support',
        'features.paypal': 'PayPal Integration',
        'features.paypal.desc': 'Secure payments with webhooks and automatic order processing',
        
        // Problem
        'problem.title': 'The Problem',
        'problem.intro': 'Minecraft servers need to monetize their communities, but face significant barriers when implementing their own store systems.',
        'problem.1': 'Lack of integration with modern payment systems',
        'problem.2': 'No withdrawal system for administrators',
        'problem.3': 'Difficult customization without technical knowledge',
        'problem.4': 'Need for own infrastructure and maintenance',
        
        // Solution
        'solution.title': 'The Solution',
        'solution.intro': 'Plugsite solves these problems with a complete SaaS platform:',
        'solution.1': 'Complete PayPal integration with webhooks',
        'solution.2': 'Automated withdrawal system with support chat',
        'solution.3': 'Visual customization without code',
        'solution.4': 'Scalable multi-tenant architecture',
        
        // Product Vision
        'vision.title': 'Product Vision',
        'vision.p1': 'Plugsite was designed as a complete SaaS platform that allows any Minecraft server to have its own professional store without technical knowledge or own infrastructure.',
        'vision.p2': 'The system implements multi-tenant architecture from the core, allowing multiple stores to operate completely independently on the same infrastructure, with total data isolation, individual customization and separate financial management.',
        
        // Multi-Tenant Architecture
        'multitenant.title': 'Multi-Tenant Architecture',
        'multitenant.intro': 'The heart of Plugsite is its multi-tenant architecture that allows complete data isolation for each store while sharing the same infrastructure.',
        'multitenant.isolation': 'Data Isolation',
        'multitenant.isolation.desc': 'Each store has its own logical database with users, products, orders and completely separate configurations. Independent session system per store.',
        'multitenant.customization': 'Individual Customization',
        'multitenant.customization.desc': 'Each store can customize colors, logo, navbar, footer and generate dynamic CSS without affecting other stores in the system.',
        'multitenant.balance': 'Separate Financial Balance',
        'multitenant.balance.desc': 'Independent balance system per store with sales tracking, withdrawals and commissions. Each vendor manages their funds autonomously.',
        
        // System Architecture
        'arch.title': 'System Architecture',
        'arch.intro': 'Modern technology stack with Django, MongoDB and cloud services for maximum scalability.',
        'arch.frontend': 'Frontend Layer',
        'arch.application': 'Application Layer',
        'arch.business': 'Business Logic',
        'arch.data': 'Data Layer',
        'arch.external': 'External Services',
        'arch.stack': 'Tech Stack',
        
        // Multi-Tenant Architecture (additional)
        'multitenant.users': 'Users per Store',
        'multitenant.users.desc': 'UsuarioTienda model allows each store to manage its own customers with independent authentication and separate purchase history.',
        
        // Main Features
        'main.title': 'Main Features',
        'main.multitenant': 'Multi-Tenant',
        'main.multitenant.desc': 'Architecture that allows multiple independent stores on the same infrastructure with total data isolation.',
        'main.users': 'User System',
        'main.users.desc': 'Complete user management with roles (admin, vendor, customer), permissions and independent sessions per store.',
        'main.orders': 'Order Management',
        'main.orders.desc': 'Complete order system with states, history, command execution on Minecraft servers and notifications.',
        'main.paypal': 'PayPal Integration',
        'main.paypal.desc': 'Complete PayPal integration including webhooks for automatic payment processing and order updates.',
        'main.withdrawal': 'Withdrawal System',
        'main.withdrawal.desc': 'Complete withdrawal management for vendors with requests, approvals, support chat and balance tracking.',
        'main.customization': 'Visual Customization',
        'main.customization.desc': 'Visual editor to customize colors, logo, navbar, footer and generate dynamic CSS without code.',
        
        // Features (detailed)
        'features.title': 'Main Features',
        'features.intro': 'Complete e-commerce system with advanced features for Minecraft store management.',
        'features.products': 'Product Management',
        'features.products.desc': 'Complete product system with multiple images, categories, stock, prices and automatic delivery commands to Minecraft server.',
        'features.paypal.title': 'PayPal Integration',
        'features.paypal.full': 'Secure payments with PayPal SDK, webhooks for automatic confirmation, transaction management and refund system.',
        'features.withdrawal.title': 'Withdrawal System',
        'features.withdrawal.full': 'Vendors can request withdrawals of their earnings with approval system, support chat, status tracking and payment receipts.',
        'features.customization.title': 'Advanced Customization',
        'features.customization.full': 'Each store can customize colors, fonts, navbar, footer with dynamic CSS generation and real-time preview.',
        'features.dashboard': 'Dashboard with Metrics',
        'features.dashboard.desc': 'Real-time dashboard with sales charts, revenue, best-selling products, recent activity and period statistics.',
        'features.chat': 'Chat System',
        'features.chat.desc': 'Real-time chat for withdrawal support, communication with administrators and request management with complete history.',
        'features.community': 'Server Community',
        'features.community.desc': 'Public server directory with reviews, votes, image gallery and verification system.',
        'features.coupons': 'Discount Codes',
        'features.coupons.desc': 'Coupon system with percentages, single use per account, expiration dates and automatic command to verify expired codes.',
        
        // Market Problem
        'market.title': 'The Market Problem',
        'market.intro': 'Minecraft servers need to monetize their communities, but face significant barriers when implementing their own store systems.',
        'market.problems': 'Current Problems',
        'market.prob.1': 'Generic store plugins without customization',
        'market.prob.2': 'Lack of integration with modern payment systems',
        'market.prob.3': 'No withdrawal system for administrators',
        'market.prob.4': 'Manual inventory and order management',
        'market.prob.5': 'Each server needs its own infrastructure',
        'market.solution': 'Plugsite Solution',
        'market.sol.1': 'Complete customization per store (colors, logo, design)',
        'market.sol.2': 'Complete PayPal integration with webhooks',
        'market.sol.3': 'Automated withdrawal system with support chat',
        'market.sol.4': 'Dashboard with real-time metrics',
        'market.sol.5': 'Scalable multi-tenant architecture',
        
        // Implementation Status
        'status.title': 'Implementation Status',
        'status.intro': 'Complete system audit shows 87% completeness with 100% operational core functionalities.',
        'status.implemented': 'Fully Implemented',
        'status.impl.1': 'Dual authentication system (owners + store users)',
        'status.impl.2': 'Complete multi-tenant store management',
        'status.impl.3': 'Product CRUD with multiple images',
        'status.impl.4': 'Category system per store',
        'status.impl.5': 'Discount codes with expiration',
        'status.impl.6': 'Shopping cart per store',
        'status.impl.7': 'Complete PayPal integration',
        'status.impl.8': 'Withdrawal system for vendors',
        'status.impl.9': 'Withdrawal administration panel',
        'status.impl.10': 'Dashboard with real-time metrics',
        'status.impl.11': 'Store customization (colors, navbar)',
        'status.impl.12': 'Server community system',
        'status.impl.13': 'Real-time chat',
        'status.impl.14': 'Balance and financial movements',
        'status.progress': 'In Development',
        'status.prog.1': 'Customer view per store',
        'status.prog.2': 'Advanced analytics dashboard',
        'status.prog.3': 'Index and footer customization',
        'status.prog.4': 'Persistent notification system',
        'status.prog.5': 'Global search in dashboard',
        'status.planned': 'Planned',
        'status.plan.1': 'Pre-designed template system',
        'status.plan.2': 'Minecraft API integration (server status)',
        'status.plan.3': 'Discord API integration',
        'status.plan.4': 'Real-time server status view',
        'status.plan.5': 'Downloadable plugin system',
        'status.plan.6': 'Report export',
        'status.plan.7': 'Custom webhooks',
        
        // Engineering Decisions
        'decisions.title': 'Engineering Decisions',
        'decisions.intro': 'Each technical decision was made considering scalability, maintainability and user experience.',
        'decisions.mongodb': 'Why MongoDB with Djongo?',
        'decisions.mongodb.desc': 'MongoDB allows flexibility in data schema, ideal for a multi-tenant system where each store can have unique configurations. Djongo provides Django ORM interface while maintaining MongoDB\'s power.',
        'decisions.multitenant': 'Why multi-tenant architecture from the start?',
        'decisions.multitenant.desc': 'Designing multi-tenancy from the core avoids costly future refactorings. Allows horizontal scaling by adding stores without modifying the base architecture.',
        'decisions.sessions': 'Why separate sessions per store?',
        'decisions.sessions.desc': 'Allows a user to have different accounts in multiple stores without conflicts. Improves security by completely isolating authentication sessions.',
        'decisions.cloudinary': 'Why Cloudinary for images?',
        'decisions.cloudinary.desc': 'Free hosting on Render doesn\'t guarantee file persistence. Cloudinary provides CDN, automatic image optimization and reliable storage.',
        'decisions.services': 'Why separate services (BalanceService, WithdrawalService)?',
        'decisions.services.desc': 'Separation of responsibilities facilitates testing, maintenance and reusability. Complex business logic is encapsulated in independent services.',
        
        // Technical Challenges
        'challenges.title': 'Technical Challenges Solved',
        'challenges.intro': 'Complex problems that required specific architectural solutions.',
        'challenges.isolation': 'Multi-Tenant Data Isolation',
        'challenges.isolation.desc': 'Implementation of automatic filters at ORM level to ensure each store only accesses its own data. Independent session system per store.',
        'challenges.decimal': 'Decimal128 Handling (MongoDB)',
        'challenges.decimal.desc': 'MongoDB uses Decimal128 for financial precision. Implementation of safe conversions with try-except in calculated properties to avoid type errors.',
        'challenges.paypal': 'PayPal Integration with Multi-Tenant',
        'challenges.paypal.desc': 'Each store needs its own PayPal configuration. Dynamic return URLs system and transaction tracking per store with webhooks.',
        'challenges.css': 'Dynamic CSS per Store',
        'challenges.css.desc': 'Real-time custom CSS generation based on each store\'s configuration. Dedicated endpoint serving CSS with custom CSS variables.',
        'challenges.balance': 'Financial Balance System',
        'challenges.balance.desc': 'Precise tracking of sales, commissions and withdrawals with immutable movement log. Calculation of available vs pending balance considering withdrawals in process.',
        'challenges.images': 'Multiple Image Management',
        'challenges.images.desc': 'Sortable image system with Cloudinary. Each product can have multiple images with customizable order and main image designation.',
        
        // Why I Built This
        'why.title': 'Why I Built This',
        'why.p1': 'Plugsite wasn\'t originally my idea—it came from my friend and business partner, Luis Elías Sánchez. He saw the real need in the Minecraft server community: owners wanted to monetize their communities but lacked the technical resources and financial means to implement their own store systems. I shared his vision and took on the challenge of bringing it to life through code.',
        'why.p2': 'We\'re both co-owners of this project and share the profits equally. Luis brings the business vision and understanding of what server owners need, while I handle the technical architecture and implementation. This partnership has been crucial—having someone who deeply understands the market while I focus on building a robust technical solution.',
        'why.p3': 'The most interesting technical challenge was designing a multi-tenant architecture from scratch. It\'s not just adding a "tenant_id" field to tables—it\'s thinking about data isolation, independent sessions, per-store customization, separate financial balances, and horizontal scalability. Every architectural decision had to consider how it would affect multiple stores operating simultaneously.',
        'why.p4': 'This project taught me the difference between building an application and building a platform. A platform must be flexible enough to adapt to different use cases, yet structured enough to maintain consistency and security. It\'s a delicate balance between customization and standardization.',
        'why.p5': 'Additionally, working with real financial systems (PayPal, withdrawals, commissions) forced me to think about data integrity, atomic transactions, auditing, and traceability in ways that academic projects never require. Every cent must be traceable, every transaction must be immutable, and every withdrawal must have a complete approval trail.',
        
        // CTA
        'cta.title': 'Explore Plugsite',
        'cta.subtitle': 'Experience the platform in production or review the technical implementation.',
        'cta.demo': 'View Live Demo',
        'cta.back': 'Back to Projects',
        'cta.note': 'Note: The platform is in active production.',
        
        // Footer
        'footer.copyright': '© 2026 Justin Ocaña. Building scalable SaaS platforms.',
        
        // Next Project
        'next.title': 'Next Project',
        'next.southernpos': 'SouthernPOS',
        'next.southernpos.desc': 'Cloud-based POS system with multi-tenant architecture for restaurants and retail businesses',
        'next.view': 'View Project',
    },
    es: {
        // Navigation
        'nav.back': 'Volver al Portafolio',
        
        // Hero
        'hero.label': 'Plataforma SaaS Multi-Tenant',
        'hero.title': 'Plugsite',
        'hero.subtitle': 'Plataforma E-Commerce para Servidores Minecraft',
        'hero.tagline': 'Plataforma SaaS multi-tenant completa diseñada específicamente para servidores Minecraft, con integración de PayPal, sistema de retiros para vendedores y personalización avanzada por tienda.',
        'hero.status': '87% Completo - Desarrollo Activo',
        'hero.commercial': 'Producto SaaS Comercial',
        'hero.timeline': 'Principios de 2024 - Presente',
        'hero.demo': 'Probar Demo en Vivo',
        'hero.architecture': 'Ver Arquitectura',
        
        // Features
        'features.multitenant': 'Arquitectura Multi-Tenant',
        'features.multitenant.desc': 'Aislamiento completo de datos por tienda con sesiones independientes',
        'features.withdrawal': 'Sistema de Retiros para Vendedores',
        'features.withdrawal.desc': 'Solicitudes de retiro automatizadas con aprobación de admin y soporte por chat',
        'features.paypal': 'Integración PayPal',
        'features.paypal.desc': 'Pagos seguros con webhooks y procesamiento automático de pedidos',
        
        // Problem
        'problem.title': 'El Problema',
        'problem.intro': 'Los servidores de Minecraft necesitan monetizar sus comunidades, pero enfrentan barreras significativas al implementar sistemas de tienda propios.',
        'problem.1': 'Falta de integración con sistemas de pago modernos',
        'problem.2': 'No hay sistema de retiros para administradores',
        'problem.3': 'Difícil personalización sin conocimientos técnicos',
        'problem.4': 'Necesidad de infraestructura propia y mantenimiento',
        
        // Solution
        'solution.title': 'La Solución',
        'solution.intro': 'Plugsite resuelve estos problemas con una plataforma SaaS completa:',
        'solution.1': 'Integración completa con PayPal y webhooks',
        'solution.2': 'Sistema de retiros automatizado con chat de soporte',
        'solution.3': 'Personalización visual sin código',
        'solution.4': 'Arquitectura multi-tenant escalable',
        
        // Product Vision
        'vision.title': 'Visión del Producto',
        'vision.p1': 'Plugsite fue diseñado como una plataforma SaaS completa que permite a cualquier servidor de Minecraft tener su propia tienda profesional sin necesidad de conocimientos técnicos ni infraestructura propia.',
        'vision.p2': 'El sistema implementa arquitectura multi-tenant desde el núcleo, permitiendo que múltiples tiendas operen de forma completamente independiente en la misma infraestructura, con aislamiento total de datos, personalización individual y gestión financiera separada.',
        
        // Multi-Tenant Architecture
        'multitenant.title': 'Arquitectura Multi-Tenant',
        'multitenant.intro': 'El corazón de Plugsite es su arquitectura multi-tenant que permite aislar completamente los datos de cada tienda mientras comparten la misma infraestructura.',
        'multitenant.isolation': 'Aislamiento de Datos',
        'multitenant.isolation.desc': 'Cada tienda tiene su propia base de datos lógica con usuarios, productos, pedidos y configuraciones completamente separadas. Sistema de sesiones independientes por tienda.',
        'multitenant.customization': 'Personalización Individual',
        'multitenant.customization.desc': 'Cada tienda puede personalizar colores, logo, navbar, footer y generar CSS dinámico sin afectar a otras tiendas del sistema.',
        'multitenant.balance': 'Balance Financiero Separado',
        'multitenant.balance.desc': 'Sistema de balance independiente por tienda con tracking de ventas, retiros y comisiones. Cada vendedor gestiona sus fondos de forma autónoma.',
        
        // System Architecture
        'arch.title': 'Arquitectura del Sistema',
        'arch.intro': 'Stack tecnológico moderno con Django, MongoDB y servicios cloud para máxima escalabilidad.',
        'arch.frontend': 'Capa Frontend',
        'arch.application': 'Capa de Aplicación',
        'arch.business': 'Lógica de Negocio',
        'arch.data': 'Capa de Datos',
        'arch.external': 'Servicios Externos',
        'arch.stack': 'Stack Tecnológico',
        
        // Multi-Tenant Architecture (additional)
        'multitenant.users': 'Usuarios por Tienda',
        'multitenant.users.desc': 'El modelo UsuarioTienda permite que cada tienda gestione sus propios clientes con autenticación independiente y historial de compras separado.',
        
        // Main Features
        'main.title': 'Características Principales',
        'main.multitenant': 'Multi-Tenant',
        'main.multitenant.desc': 'Arquitectura que permite múltiples tiendas independientes en la misma infraestructura con aislamiento total de datos.',
        'main.users': 'Sistema de Usuarios',
        'main.users.desc': 'Gestión completa de usuarios con roles (admin, vendor, customer), permisos y sesiones independientes por tienda.',
        'main.orders': 'Gestión de Pedidos',
        'main.orders.desc': 'Sistema completo de pedidos con estados, historial, ejecución de comandos en servidores Minecraft y notificaciones.',
        'main.paypal': 'Integración PayPal',
        'main.paypal.desc': 'Integración completa con PayPal incluyendo webhooks para procesamiento automático de pagos y actualización de pedidos.',
        'main.withdrawal': 'Sistema de Retiros',
        'main.withdrawal.desc': 'Gestión completa de retiros para vendedores con solicitudes, aprobaciones, chat de soporte y tracking de balance.',
        'main.customization': 'Personalización Visual',
        'main.customization.desc': 'Editor visual para personalizar colores, logo, navbar, footer y generar CSS dinámico sin código.',
        
        // Features (detailed)
        'features.title': 'Funcionalidades Principales',
        'features.intro': 'Sistema completo de e-commerce con funcionalidades avanzadas para gestión de tiendas de Minecraft.',
        'features.products': 'Gestión de Productos',
        'features.products.desc': 'Sistema completo de productos con imágenes múltiples, categorías, stock, precios y comandos de entrega automática al servidor de Minecraft.',
        'features.paypal.title': 'Integración PayPal',
        'features.paypal.full': 'Pagos seguros con PayPal SDK, webhooks para confirmación automática, gestión de transacciones y sistema de reembolsos.',
        'features.withdrawal.title': 'Sistema de Retiros',
        'features.withdrawal.full': 'Los vendedores pueden solicitar retiros de sus ganancias con sistema de aprobación, chat de soporte, tracking de estados y comprobantes de pago.',
        'features.customization.title': 'Personalización Avanzada',
        'features.customization.full': 'Cada tienda puede personalizar colores, fuentes, navbar, footer con generación de CSS dinámico y preview en tiempo real.',
        'features.dashboard': 'Dashboard con Métricas',
        'features.dashboard.desc': 'Dashboard en tiempo real con gráficos de ventas, ingresos, productos más vendidos, actividad reciente y estadísticas por período.',
        'features.chat': 'Sistema de Chat',
        'features.chat.desc': 'Chat en tiempo real para soporte de retiros, comunicación con administradores y gestión de solicitudes con historial completo.',
        'features.community': 'Comunidad de Servidores',
        'features.community.desc': 'Directorio público de servidores con reseñas, votaciones, galería de imágenes y sistema de verificación.',
        'features.coupons': 'Códigos de Descuento',
        'features.coupons.desc': 'Sistema de cupones con porcentajes, uso único por cuenta, fechas de expiración y comando automático para verificar códigos vencidos.',
        
        // Market Problem
        'market.title': 'El Problema del Mercado',
        'market.intro': 'Los servidores de Minecraft necesitan monetizar sus comunidades, pero enfrentan barreras significativas al implementar sistemas de tienda propios.',
        'market.problems': 'Problemas Actuales',
        'market.prob.1': 'Plugins de tienda genéricos sin personalización',
        'market.prob.2': 'Falta de integración con sistemas de pago modernos',
        'market.prob.3': 'No hay sistema de retiros para administradores',
        'market.prob.4': 'Gestión manual de inventario y pedidos',
        'market.prob.5': 'Cada servidor necesita su propia infraestructura',
        'market.solution': 'Solución Plugsite',
        'market.sol.1': 'Personalización completa por tienda (colores, logo, diseño)',
        'market.sol.2': 'Integración PayPal completa con webhooks',
        'market.sol.3': 'Sistema de retiros automatizado con chat de soporte',
        'market.sol.4': 'Dashboard con métricas en tiempo real',
        'market.sol.5': 'Arquitectura multi-tenant escalable',
        
        // Implementation Status
        'status.title': 'Estado de Implementación',
        'status.intro': 'Auditoría completa del sistema muestra un 87% de completitud con funcionalidades core 100% operativas.',
        'status.implemented': 'Completamente Implementado',
        'status.impl.1': 'Sistema de autenticación dual (propietarios + usuarios tienda)',
        'status.impl.2': 'Gestión completa de tiendas multi-tenant',
        'status.impl.3': 'CRUD de productos con imágenes múltiples',
        'status.impl.4': 'Sistema de categorías por tienda',
        'status.impl.5': 'Códigos de descuento con expiración',
        'status.impl.6': 'Carrito de compras por tienda',
        'status.impl.7': 'Integración PayPal completa',
        'status.impl.8': 'Sistema de retiros para vendedores',
        'status.impl.9': 'Panel de administración de retiros',
        'status.impl.10': 'Dashboard con métricas en tiempo real',
        'status.impl.11': 'Personalización de tiendas (colores, navbar)',
        'status.impl.12': 'Sistema de comunidad de servidores',
        'status.impl.13': 'Chat en tiempo real',
        'status.impl.14': 'Balance y movimientos financieros',
        'status.progress': 'En Desarrollo',
        'status.prog.1': 'Vista de clientes por tienda',
        'status.prog.2': 'Dashboard de análisis avanzado',
        'status.prog.3': 'Personalización de index y footer',
        'status.prog.4': 'Sistema de notificaciones persistente',
        'status.prog.5': 'Búsqueda global en dashboard',
        'status.planned': 'Planificado',
        'status.plan.1': 'Sistema de plantillas prediseñadas',
        'status.plan.2': 'Integración con API de Minecraft (estado servidor)',
        'status.plan.3': 'Integración con API de Discord',
        'status.plan.4': 'Vista de estado del servidor en tiempo real',
        'status.plan.5': 'Sistema de plugins descargables',
        'status.plan.6': 'Exportación de reportes',
        'status.plan.7': 'Webhooks personalizados',
        
        // Engineering Decisions
        'decisions.title': 'Decisiones de Ingeniería',
        'decisions.intro': 'Cada decisión técnica fue tomada considerando escalabilidad, mantenibilidad y experiencia del usuario.',
        'decisions.mongodb': '¿Por qué MongoDB con Djongo?',
        'decisions.mongodb.desc': 'MongoDB permite flexibilidad en el esquema de datos, ideal para un sistema multi-tenant donde cada tienda puede tener configuraciones únicas. Djongo proporciona la interfaz de Django ORM manteniendo la potencia de MongoDB.',
        'decisions.multitenant': '¿Por qué arquitectura multi-tenant desde el inicio?',
        'decisions.multitenant.desc': 'Diseñar multi-tenancy desde el núcleo evita refactorizaciones costosas futuras. Permite escalar horizontalmente agregando tiendas sin modificar la arquitectura base.',
        'decisions.sessions': '¿Por qué sesiones separadas por tienda?',
        'decisions.sessions.desc': 'Permite que un usuario pueda tener cuentas diferentes en múltiples tiendas sin conflictos. Mejora la seguridad al aislar completamente las sesiones de autenticación.',
        'decisions.cloudinary': '¿Por qué Cloudinary para imágenes?',
        'decisions.cloudinary.desc': 'Hosting gratuito en Render no garantiza persistencia de archivos. Cloudinary proporciona CDN, optimización automática de imágenes y almacenamiento confiable.',
        'decisions.services': '¿Por qué servicios separados (BalanceService, WithdrawalService)?',
        'decisions.services.desc': 'Separación de responsabilidades facilita testing, mantenimiento y reutilización. La lógica de negocio compleja está encapsulada en servicios independientes.',
        
        // Technical Challenges
        'challenges.title': 'Desafíos Técnicos Resueltos',
        'challenges.intro': 'Problemas complejos que requirieron soluciones arquitectónicas específicas.',
        'challenges.isolation': 'Aislamiento de Datos Multi-Tenant',
        'challenges.isolation.desc': 'Implementación de filtros automáticos a nivel de ORM para garantizar que cada tienda solo acceda a sus propios datos. Sistema de sesiones independientes por tienda.',
        'challenges.decimal': 'Manejo de Decimal128 (MongoDB)',
        'challenges.decimal.desc': 'MongoDB usa Decimal128 para precisión financiera. Implementación de conversiones seguras con try-except en propiedades calculadas para evitar errores de tipo.',
        'challenges.paypal': 'Integración PayPal con Multi-Tenant',
        'challenges.paypal.desc': 'Cada tienda necesita su propia configuración de PayPal. Sistema de return URLs dinámicas y tracking de transacciones por tienda con webhooks.',
        'challenges.css': 'CSS Dinámico por Tienda',
        'challenges.css.desc': 'Generación de CSS personalizado en tiempo real basado en configuración de cada tienda. Endpoint dedicado que sirve CSS con variables CSS custom.',
        'challenges.balance': 'Sistema de Balance Financiero',
        'challenges.balance.desc': 'Tracking preciso de ventas, comisiones y retiros con registro de movimientos inmutable. Cálculo de saldo disponible vs pendiente considerando retiros en proceso.',
        'challenges.images': 'Gestión de Imágenes Múltiples',
        'challenges.images.desc': 'Sistema de imágenes ordenables con Cloudinary. Cada producto puede tener múltiples imágenes con orden personalizable y designación de imagen principal.',
        
        // Why I Built This
        'why.title': 'Por Qué Construí Esto',
        'why.p1': 'Plugsite no fue originalmente mi idea—vino de mi amigo y socio comercial, Luis Elías Sánchez. Él vio la necesidad real en la comunidad de servidores de Minecraft: los propietarios querían monetizar sus comunidades pero carecían de los recursos técnicos y medios financieros para implementar sus propios sistemas de tienda. Compartí su visión y asumí el desafío de darle vida a través del código.',
        'why.p2': 'Ambos somos copropietarios de este proyecto y compartimos las ganancias por igual. Luis aporta la visión de negocio y comprensión de lo que necesitan los propietarios de servidores, mientras yo manejo la arquitectura técnica e implementación. Esta asociación ha sido crucial—tener a alguien que entiende profundamente el mercado mientras yo me enfoco en construir una solución técnica robusta.',
        'why.p3': 'El desafío técnico más interesante fue diseñar una arquitectura multi-tenant desde cero. No es solo agregar un campo "tenant_id" a las tablas—es pensar en aislamiento de datos, sesiones independientes, personalización por tienda, balances financieros separados y escalabilidad horizontal. Cada decisión arquitectónica tuvo que considerar cómo afectaría a múltiples tiendas operando simultáneamente.',
        'why.p4': 'Este proyecto me enseñó la diferencia entre construir una aplicación y construir una plataforma. Una plataforma debe ser lo suficientemente flexible para adaptarse a diferentes casos de uso, pero lo suficientemente estructurada para mantener consistencia y seguridad. Es un delicado equilibrio entre personalización y estandarización.',
        'why.p5': 'Además, trabajar con sistemas financieros reales (PayPal, retiros, comisiones) me obligó a pensar en integridad de datos, transacciones atómicas, auditoría y trazabilidad de formas que los proyectos académicos nunca requieren. Cada centavo debe ser rastreable, cada transacción debe ser inmutable y cada retiro debe tener un rastro completo de aprobación.',
        
        // CTA
        'cta.title': 'Explora Plugsite',
        'cta.subtitle': 'Experimenta la plataforma en producción o revisa la implementación técnica.',
        'cta.demo': 'Ver Demo en Vivo',
        'cta.back': 'Volver a Proyectos',
        'cta.note': 'Nota: La plataforma está en producción activa.',
        
        // Footer
        'footer.copyright': '© 2026 Justin Ocaña. Construyendo plataformas SaaS escalables.',
        
        // Next Project
        'next.title': 'Siguiente Proyecto',
        'next.southernpos': 'SouthernPOS',
        'next.southernpos.desc': 'Sistema POS en la nube con arquitectura multi-tenant para restaurantes y negocios minoristas',
        'next.view': 'Ver Proyecto',
    }
};

// Language Manager for Project Pages
class PlugsiteLanguageManager {
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
            const translation = plugsiteTranslations[this.currentLang][key];
            
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
        new PlugsiteLanguageManager();
    });
} else {
    new PlugsiteLanguageManager();
}
