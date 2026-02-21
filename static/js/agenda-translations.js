// Translations for Agenda Virtual EIWA Project Page
const agendaTranslations = {
    en: {
        // Navigation
        'nav.back': 'Back to Portfolio',
        
        // Hero
        'hero.label': 'Educational Platform',
        'hero.title': 'Agenda Virtual EIWA',
        'hero.subtitle': 'Digital Academic Planner for Students',
        'hero.tagline': 'Transforming EIWA\'s physical agenda into a collaborative digital platform. Built with Django and PostgreSQL for students who need better organization tools.',
        'hero.status': 'Production-ready (v1.0.5)',
        'hero.focus': 'Backend Architecture Focus',
        'hero.timeline': 'December 2024 - Present',
        'hero.demo': 'Try Live Demo',
        'hero.architecture': 'View Architecture',
        
        // Features
        'features.role': 'Role-Based Permissions',
        'features.role.desc': 'Hierarchical system with configurable access control',
        'features.collab': 'Real-Time Collaboration',
        'features.collab.desc': 'Live notifications and instant updates across devices',
        'features.calendar': 'Smart Calendar',
        'features.calendar.desc': 'Integrated calendar with workload tracking',
        
        // Problem
        'problem.title': 'The Problem',
        'problem.p1': 'At EIWA (my school), students use physical agendas to track assignments and deadlines. However, distracted students often forget to write things down, lose track of tasks, or struggle to stay organized with paper-based systems.',
        'problem.p2': 'The physical agenda works for some, but for students who need better organization tools, there was no digital alternative that understood our school\'s workflow and collaboration needs.',
        'problem.p3': 'Agenda Virtual EIWA was created to solve this problem.',
        
        // Solution
        'solution.title': 'The Solution',
        'solution.lead': 'Agenda Virtual EIWA is a digital platform that brings the physical agenda online, adding collaboration features and smart organization tools:',
        'solution.1': 'Never forget to write down assignments - classmates can share tasks instantly',
        'solution.2': 'Group collaboration with role-based permissions (Leader / Co-leader / Member)',
        'solution.3': 'Automatic reminders and notifications for upcoming deadlines',
        'solution.4': 'Calendar view to visualize workload and plan ahead',
        'solution.5': 'Individual task tracking - mark your own progress independently',
        'solution.6': 'Works on any device - phone, tablet, or computer',
        
        // Tech Stack
        'tech.title': 'Technical Stack',
        'tech.backend': 'Backend',
        'tech.database': 'Database',
        'tech.frontend': 'Frontend',
        'tech.infrastructure': 'Infrastructure',
        
        // Key Features
        'keyfeatures.title': 'Key Features',
        'keyfeatures.1.title': 'Advanced Permission System',
        'keyfeatures.1.desc': 'Hierarchical role system with Leader, Co-leader, and Member roles. Granular permissions for task creation, editing, and deletion with approval workflows.',
        'keyfeatures.2.title': 'Real-Time Notifications',
        'keyfeatures.2.desc': 'Push notifications system with browser support, notification center, and badge counters. 16 different activity types tracked and notified.',
        'keyfeatures.3.title': 'Group Management',
        'keyfeatures.3.desc': 'Unique invitation codes, join approval system, member warnings (3-strike system), and complete activity history logging.',
        'keyfeatures.4.title': 'Task System',
        'keyfeatures.4.desc': 'Tasks with priorities, due dates, subject association, individual completion tracking, and collaborative editing with approval workflows.',
        'keyfeatures.5.title': 'Calendar Integration',
        'keyfeatures.5.desc': 'Monthly calendar view with task visualization, filtering by group and subject, priority indicators, and deadline tracking.',
        'keyfeatures.6.title': 'Modern UI/UX',
        'keyfeatures.6.desc': 'Responsive design, dark mode, smooth animations, toast notifications, keyboard shortcuts, and WCAG 2.1 accessibility compliance.',
        
        // Architecture
        'arch.title': 'Architecture Highlights',
        'arch.overview': 'System Overview',
        'arch.apps': 'Modular App Architecture',
        
        // Versions
        'versions.title': 'Continuous Development & Versioning',
        'versions.intro': 'EIWA is under active development. Below are major milestones that shaped the platform\'s evolution.',
        'versions.current': 'CURRENT',
        
        // Usage
        'usage.title': 'Real-World Usage',
        'usage.intro': 'Currently being used by students at EIWA for daily academic organization.',
        'usage.students': 'Active Students',
        'usage.groups': 'Study Groups',
        'usage.tasks': 'Tasks Created',
        'usage.requests': 'Approval Requests',
        'usage.feedback': 'Platform has been actively used since December 2024, with continuous improvements based on real student feedback.',
        
        // Engineering Decisions
        'decisions.title': 'Key Engineering Decisions',
        'decisions.conclusion': 'Successfully deployed and actively used by students and teachers for academic collaboration. The platform demonstrates proficiency in full-stack development, database design, and building scalable web applications with continuous iteration based on user feedback.',
        
        // Planned Improvements
        'improvements.title': 'Planned Improvements',
        'improvement.calendar': 'Google Calendar Integration',
        'improvement.calendar.desc': 'Sync tasks with external calendars for better workflow integration',
        'improvement.search': 'Advanced Search System',
        'improvement.search.desc': 'Full-text search across tasks, groups, and subjects with filters',
        'improvement.offline': 'Enhanced Offline Mode',
        'improvement.offline.desc': 'Complete offline functionality with background sync',
        'improvement.files': 'File Attachments (Stable)',
        'improvement.files.desc': 'Move experimental file system to stable production release',
        'improvement.email': 'Email Notifications',
        'improvement.email.desc': 'Configurable email alerts for important events and deadlines',
        'improvement.analytics': 'Analytics Dashboard',
        'improvement.analytics.desc': 'Detailed productivity metrics and group performance insights',
        
        // Next Project
        'next.title': 'Next Project',
        'next.southernpos': 'SouthernPOS',
        'next.southernpos.desc': 'Cloud-based POS system with multi-tenant architecture for restaurants and retail businesses',
        'next.view': 'View Project',
        
        // Version Details
        'v105.title': 'Full Personalization & File System',
        'v105.feat1': 'Customizable SVG avatar system (71 unique avatars, 12 color themes)',
        'v105.feat2': 'Experimental document attachment system with permission layers',
        'v105.feat3': 'Multi-group unified dashboard view',
        'v105.feat4': 'Drag & Drop file upload with preview',
        'v105.feat5': 'Performance optimizations in unified task queries',
        'v104.title': 'Visual Polish & Error Handling',
        'v104.feat1': 'Dark mode color corrections for task headers and buttons',
        'v104.feat2': 'Custom error pages (404, 403, 500) with theme support',
        'v104.feat3': 'Improved visual consistency across the platform',
        'v103.title': 'Interactive Dashboard',
        'v103.feat1': 'Clickable statistics dashboard with smart filtering',
        'v103.feat2': 'Automatic task archiving system (30-day threshold)',
        'v103.feat3': 'Configurable productivity metrics',
        'v103.feat4': 'Improved visual hierarchy and UI feedback',
        'v101.title': 'Smart Moderation System',
        'v101.feat1': 'Intelligent content moderation with leet speak detection',
        'v101.feat2': 'Configurable moderation levels per group (Off, Censor, Block)',
        'v101.feat3': 'Weekly workload tracking in calendar',
        'v101.feat4': 'Improved group analytics and activity visualization',
        'v100.title': 'Initial Release',
        'v100.feat1': 'Collaborative task management with role-based permissions',
        'v100.feat2': 'Calendar integration with monthly and weekly views',
        'v100.feat3': 'Real-time notification system',
        'v100.feat4': 'PWA support with offline capabilities',
        'v100.feat5': 'Responsive design with dark mode',
        
        // Engineering Decisions Details
        'decision.modular.q': 'Why modular apps?',
        'decision.modular.a': 'Maintainability and separation of responsibilities. Each app handles a specific domain, making the codebase easier to navigate and scale.',
        'decision.postgres.q': 'Why PostgreSQL?',
        'decision.postgres.a': 'Better relational integrity and scalability. PostgreSQL\'s advanced features support complex queries and ensure data consistency.',
        'decision.roles.q': 'Why custom role system?',
        'decision.roles.a': 'Need for per-group configurable permissions. Django\'s built-in groups weren\'t flexible enough for dynamic, group-specific permission rules.',
        'decision.json.q': 'Why JSON metadata logging?',
        'decision.json.a': 'Flexible extensibility without schema explosion. Activity types can evolve without database migrations for each new field.',
        
        // Trade-offs
        'tradeoffs.title': 'Trade-offs Considered',
        'tradeoff.groups.q': 'Why not use Django Groups?',
        'tradeoff.groups.a': 'Django\'s built-in Groups are global and static. We needed per-group dynamic permissions that could be configured by group leaders in real-time.',
        'tradeoff.nosql.q': 'Why not NoSQL?',
        'tradeoff.nosql.a': 'Strong relational integrity was required. Tasks, groups, users, and permissions have complex relationships that benefit from SQL\'s ACID guarantees.',
        'tradeoff.framework.q': 'Why not a frontend framework?',
        'tradeoff.framework.a': 'Vanilla JavaScript kept the stack simple and reduced complexity. For this use case, Django templates with progressive enhancement were sufficient.',
        'tradeoff.microservices.q': 'Why not microservices?',
        'tradeoff.microservices.a': 'Monolithic Django app was more appropriate for the scale. Microservices would add unnecessary complexity for a single-developer project.',
        
        // Experimental Features
        'experimental.title': 'Experimental Features',
        'experimental.intro': 'Transparent about innovation and ongoing development.',
        'experimental.label': 'Experimental',
        'beta.label': 'Beta',
        'progress.label': 'In Progress',
        'experimental.files': 'File Attachment System',
        'experimental.files.desc': 'Document upload with permission layers, validation, and approval workflows. Currently in testing phase with active users.',
        'experimental.unified': 'Multi-Group Unified View',
        'experimental.unified.desc': 'Dashboard that aggregates tasks and statistics across multiple groups. Recommended for single-group use while being refined.',
        'experimental.offline': 'Offline Support',
        'experimental.offline.desc': 'PWA capabilities with service workers for offline task viewing and synchronization when connection is restored.',
        
        // Technical Challenges
        'challenges.title': 'Technical Challenges',
        'solution': 'Solution:',
        'challenge1.title': 'Designing a granular permission system without conflicts',
        'challenge1.desc': 'Creating a flexible permission model that could handle multiple roles and configurable settings while preventing permission conflicts and security holes.',
        'challenge1.solution': 'Implemented hierarchical validation with permission checks at model, view, and template levels. Used Django\'s ORM to enforce database-level constraints.',
        'challenge2.title': 'Preventing N+1 query problems',
        'challenge2.desc': 'As the application grew, inefficient database queries caused performance degradation, especially in list views with related objects.',
        'challenge2.solution': 'Systematic use of select_related() and prefetch_related() throughout the codebase. Added database indexes on frequently queried fields.',
        'challenge3.title': 'Implementing approval workflows cleanly',
        'challenge3.desc': 'Task creation and editing needed approval systems that were flexible enough to support different group configurations without code duplication.',
        'challenge3.solution': 'Created separate request models (TaskRequest, TaskEditRequest) with JSON fields for proposed changes, enabling clean approval logic.',
        'challenge4.title': 'Maintaining accessibility standards (WCAG 2.1)',
        'challenge4.desc': 'Ensuring the platform was usable by everyone, including users with disabilities, while maintaining a modern aesthetic.',
        'challenge4.solution': 'Implemented keyboard navigation, ARIA labels, sufficient color contrast, and minimum touch target sizes throughout the interface.',
        'challenge5.title': 'Structuring scalable database relationships',
        'challenge5.desc': 'Designing a database schema that could evolve without requiring major migrations or breaking existing functionality.',
        'challenge5.solution': 'Used JSON fields for flexible metadata, proper foreign key relationships, and Django migrations for controlled schema evolution.',
        
        // Lessons Learned
        'lessons.title': 'Lessons Learned',
        'lesson1': 'Design the database before building views',
        'lesson2': 'Modular structure prevents long-term chaos',
        'lesson3': 'Backend permission validation is critical',
        'lesson4': 'UX details matter as much as logic',
        
        // Complexity Metrics
        'metrics.title': 'Complexity Metrics',
        'metrics.apps': 'Django Apps',
        'metrics.models': 'Relational Models',
        'metrics.checks': 'QA Verification Checks',
        'metrics.activities': 'Tracked Activity Types',
        'metrics.levels': 'Permission Hierarchy Levels',
        'metrics.versions': 'Major Versions',
    },
    es: {
        // Navigation
        'nav.back': 'Volver al Portafolio',
        
        // Hero
        'hero.label': 'Plataforma Educativa',
        'hero.title': 'Agenda Virtual EIWA',
        'hero.subtitle': 'Planificador Académico Digital para Estudiantes',
        'hero.tagline': 'Transformando la agenda física de EIWA en una plataforma digital colaborativa. Construida con Django y PostgreSQL para estudiantes que necesitan mejores herramientas de organización.',
        'hero.status': 'Lista para producción (v1.0.5)',
        'hero.focus': 'Enfoque en Arquitectura Backend',
        'hero.timeline': 'Diciembre 2024 - Presente',
        'hero.demo': 'Probar Demo en Vivo',
        'hero.architecture': 'Ver Arquitectura',
        
        // Features
        'features.role': 'Permisos Basados en Roles',
        'features.role.desc': 'Sistema jerárquico con control de acceso configurable',
        'features.collab': 'Colaboración en Tiempo Real',
        'features.collab.desc': 'Notificaciones en vivo y actualizaciones instantáneas entre dispositivos',
        'features.calendar': 'Calendario Inteligente',
        'features.calendar.desc': 'Calendario integrado con seguimiento de carga de trabajo',
        
        // Problem
        'problem.title': 'El Problema',
        'problem.p1': 'En EIWA (mi colegio), los estudiantes usan agendas físicas para rastrear tareas y fechas límite. Sin embargo, los estudiantes distraídos a menudo olvidan anotar cosas, pierden el rastro de las tareas o luchan por mantenerse organizados con sistemas en papel.',
        'problem.p2': 'La agenda física funciona para algunos, pero para los estudiantes que necesitan mejores herramientas de organización, no había una alternativa digital que entendiera el flujo de trabajo y las necesidades de colaboración de nuestra escuela.',
        'problem.p3': 'Agenda Virtual EIWA fue creada para resolver este problema.',
        
        // Solution
        'solution.title': 'La Solución',
        'solution.lead': 'Agenda Virtual EIWA es una plataforma digital que lleva la agenda física en línea, agregando funciones de colaboración y herramientas de organización inteligentes:',
        'solution.1': 'Nunca olvides anotar tareas - los compañeros pueden compartir tareas al instante',
        'solution.2': 'Colaboración grupal con permisos basados en roles (Líder / Co-líder / Miembro)',
        'solution.3': 'Recordatorios automáticos y notificaciones para fechas límite próximas',
        'solution.4': 'Vista de calendario para visualizar la carga de trabajo y planificar con anticipación',
        'solution.5': 'Seguimiento individual de tareas - marca tu propio progreso de forma independiente',
        'solution.6': 'Funciona en cualquier dispositivo - teléfono, tableta o computadora',
        
        // Tech Stack
        'tech.title': 'Stack Técnico',
        'tech.backend': 'Backend',
        'tech.database': 'Base de Datos',
        'tech.frontend': 'Frontend',
        'tech.infrastructure': 'Infraestructura',
        
        // Key Features
        'keyfeatures.title': 'Características Clave',
        'keyfeatures.1.title': 'Sistema Avanzado de Permisos',
        'keyfeatures.1.desc': 'Sistema de roles jerárquico con roles de Líder, Co-líder y Miembro. Permisos granulares para creación, edición y eliminación de tareas con flujos de aprobación.',
        'keyfeatures.2.title': 'Notificaciones en Tiempo Real',
        'keyfeatures.2.desc': 'Sistema de notificaciones push con soporte de navegador, centro de notificaciones y contadores de insignias. 16 tipos diferentes de actividades rastreadas y notificadas.',
        'keyfeatures.3.title': 'Gestión de Grupos',
        'keyfeatures.3.desc': 'Códigos de invitación únicos, sistema de aprobación de unión, advertencias de miembros (sistema de 3 strikes) y registro completo del historial de actividades.',
        'keyfeatures.4.title': 'Sistema de Tareas',
        'keyfeatures.4.desc': 'Tareas con prioridades, fechas de vencimiento, asociación de materias, seguimiento de finalización individual y edición colaborativa con flujos de aprobación.',
        'keyfeatures.5.title': 'Integración de Calendario',
        'keyfeatures.5.desc': 'Vista de calendario mensual con visualización de tareas, filtrado por grupo y materia, indicadores de prioridad y seguimiento de fechas límite.',
        'keyfeatures.6.title': 'UI/UX Moderna',
        'keyfeatures.6.desc': 'Diseño responsivo, modo oscuro, animaciones suaves, notificaciones toast, atajos de teclado y cumplimiento de accesibilidad WCAG 2.1.',
        
        // Architecture
        'arch.title': 'Aspectos Destacados de la Arquitectura',
        'arch.overview': 'Descripción General del Sistema',
        'arch.apps': 'Arquitectura de Aplicaciones Modulares',
        
        // Versions
        'versions.title': 'Desarrollo Continuo y Versionado',
        'versions.intro': 'EIWA está en desarrollo activo. A continuación se muestran los hitos principales que dieron forma a la evolución de la plataforma.',
        'versions.current': 'ACTUAL',
        
        // Usage
        'usage.title': 'Uso en el Mundo Real',
        'usage.intro': 'Actualmente siendo utilizado por estudiantes de EIWA para la organización académica diaria.',
        'usage.students': 'Estudiantes Activos',
        'usage.groups': 'Grupos de Estudio',
        'usage.tasks': 'Tareas Creadas',
        'usage.requests': 'Solicitudes de Aprobación',
        'usage.feedback': 'La plataforma ha sido utilizada activamente desde diciembre de 2024, con mejoras continuas basadas en comentarios reales de estudiantes.',
        
        // Engineering Decisions
        'decisions.title': 'Decisiones Clave de Ingeniería',
        'decisions.conclusion': 'Desplegado con éxito y utilizado activamente por estudiantes y profesores para la colaboración académica. La plataforma demuestra competencia en desarrollo full-stack, diseño de bases de datos y construcción de aplicaciones web escalables con iteración continua basada en comentarios de usuarios.',
        
        // Planned Improvements
        'improvements.title': 'Mejoras Planificadas',
        'improvement.calendar': 'Integración con Google Calendar',
        'improvement.calendar.desc': 'Sincronizar tareas con calendarios externos para mejor integración de flujo de trabajo',
        'improvement.search': 'Sistema de Búsqueda Avanzada',
        'improvement.search.desc': 'Búsqueda de texto completo en tareas, grupos y materias con filtros',
        'improvement.offline': 'Modo Sin Conexión Mejorado',
        'improvement.offline.desc': 'Funcionalidad completa sin conexión con sincronización en segundo plano',
        'improvement.files': 'Adjuntos de Archivos (Estable)',
        'improvement.files.desc': 'Mover el sistema de archivos experimental a lanzamiento de producción estable',
        'improvement.email': 'Notificaciones por Email',
        'improvement.email.desc': 'Alertas de email configurables para eventos importantes y fechas límite',
        'improvement.analytics': 'Panel de Análisis',
        'improvement.analytics.desc': 'Métricas detalladas de productividad e información de rendimiento de grupo',
        
        // Next Project
        'next.title': 'Siguiente Proyecto',
        'next.southernpos': 'SouthernPOS',
        'next.southernpos.desc': 'Sistema POS en la nube con arquitectura multi-tenant para restaurantes y negocios minoristas',
        'next.view': 'Ver Proyecto',
        
        // Version Details
        'v105.title': 'Personalización Completa y Sistema de Archivos',
        'v105.feat1': 'Sistema de avatares SVG personalizables (71 avatares únicos, 12 temas de color)',
        'v105.feat2': 'Sistema experimental de adjuntos de documentos con capas de permisos',
        'v105.feat3': 'Vista de panel unificado multi-grupo',
        'v105.feat4': 'Carga de archivos con arrastrar y soltar con vista previa',
        'v105.feat5': 'Optimizaciones de rendimiento en consultas de tareas unificadas',
        'v104.title': 'Pulido Visual y Manejo de Errores',
        'v104.feat1': 'Correcciones de color en modo oscuro para encabezados y botones de tareas',
        'v104.feat2': 'Páginas de error personalizadas (404, 403, 500) con soporte de tema',
        'v104.feat3': 'Consistencia visual mejorada en toda la plataforma',
        'v103.title': 'Panel Interactivo',
        'v103.feat1': 'Panel de estadísticas clicable con filtrado inteligente',
        'v103.feat2': 'Sistema de archivado automático de tareas (umbral de 30 días)',
        'v103.feat3': 'Métricas de productividad configurables',
        'v103.feat4': 'Jerarquía visual mejorada y retroalimentación de UI',
        'v101.title': 'Sistema de Moderación Inteligente',
        'v101.feat1': 'Moderación de contenido inteligente con detección de leet speak',
        'v101.feat2': 'Niveles de moderación configurables por grupo (Desactivado, Censurar, Bloquear)',
        'v101.feat3': 'Seguimiento de carga de trabajo semanal en calendario',
        'v101.feat4': 'Análisis de grupo mejorado y visualización de actividad',
        'v100.title': 'Lanzamiento Inicial',
        'v100.feat1': 'Gestión colaborativa de tareas con permisos basados en roles',
        'v100.feat2': 'Integración de calendario con vistas mensuales y semanales',
        'v100.feat3': 'Sistema de notificaciones en tiempo real',
        'v100.feat4': 'Soporte PWA con capacidades sin conexión',
        'v100.feat5': 'Diseño responsivo con modo oscuro',
        
        // Engineering Decisions Details
        'decision.modular.q': '¿Por qué aplicaciones modulares?',
        'decision.modular.a': 'Mantenibilidad y separación de responsabilidades. Cada aplicación maneja un dominio específico, haciendo que el código sea más fácil de navegar y escalar.',
        'decision.postgres.q': '¿Por qué PostgreSQL?',
        'decision.postgres.a': 'Mejor integridad relacional y escalabilidad. Las características avanzadas de PostgreSQL soportan consultas complejas y aseguran la consistencia de datos.',
        'decision.roles.q': '¿Por qué sistema de roles personalizado?',
        'decision.roles.a': 'Necesidad de permisos configurables por grupo. Los grupos integrados de Django no eran lo suficientemente flexibles para reglas de permisos dinámicas específicas de grupo.',
        'decision.json.q': '¿Por qué registro de metadatos JSON?',
        'decision.json.a': 'Extensibilidad flexible sin explosión de esquema. Los tipos de actividad pueden evolucionar sin migraciones de base de datos para cada nuevo campo.',
        
        // Trade-offs
        'tradeoffs.title': 'Compromisos Considerados',
        'tradeoff.groups.q': '¿Por qué no usar Django Groups?',
        'tradeoff.groups.a': 'Los Groups integrados de Django son globales y estáticos. Necesitábamos permisos dinámicos por grupo que pudieran ser configurados por líderes de grupo en tiempo real.',
        'tradeoff.nosql.q': '¿Por qué no NoSQL?',
        'tradeoff.nosql.a': 'Se requería fuerte integridad relacional. Tareas, grupos, usuarios y permisos tienen relaciones complejas que se benefician de las garantías ACID de SQL.',
        'tradeoff.framework.q': '¿Por qué no un framework frontend?',
        'tradeoff.framework.a': 'JavaScript vanilla mantuvo el stack simple y redujo la complejidad. Para este caso de uso, las plantillas de Django con mejora progresiva fueron suficientes.',
        'tradeoff.microservices.q': '¿Por qué no microservicios?',
        'tradeoff.microservices.a': 'Una aplicación Django monolítica era más apropiada para la escala. Los microservicios agregarían complejidad innecesaria para un proyecto de un solo desarrollador.',
        
        // Experimental Features
        'experimental.title': 'Características Experimentales',
        'experimental.intro': 'Transparente sobre innovación y desarrollo continuo.',
        'experimental.label': 'Experimental',
        'beta.label': 'Beta',
        'progress.label': 'En Progreso',
        'experimental.files': 'Sistema de Adjuntos de Archivos',
        'experimental.files.desc': 'Carga de documentos con capas de permisos, validación y flujos de aprobación. Actualmente en fase de prueba con usuarios activos.',
        'experimental.unified': 'Vista Unificada Multi-Grupo',
        'experimental.unified.desc': 'Panel que agrega tareas y estadísticas de múltiples grupos. Recomendado para uso de un solo grupo mientras se refina.',
        'experimental.offline': 'Soporte Sin Conexión',
        'experimental.offline.desc': 'Capacidades PWA con service workers para visualización de tareas sin conexión y sincronización cuando se restaura la conexión.',
        
        // Technical Challenges
        'challenges.title': 'Desafíos Técnicos',
        'solution': 'Solución:',
        'challenge1.title': 'Diseñar un sistema de permisos granular sin conflictos',
        'challenge1.desc': 'Crear un modelo de permisos flexible que pudiera manejar múltiples roles y configuraciones mientras prevenía conflictos de permisos y agujeros de seguridad.',
        'challenge1.solution': 'Implementé validación jerárquica con verificaciones de permisos en niveles de modelo, vista y plantilla. Usé el ORM de Django para aplicar restricciones a nivel de base de datos.',
        'challenge2.title': 'Prevenir problemas de consultas N+1',
        'challenge2.desc': 'A medida que la aplicación crecía, las consultas ineficientes causaban degradación del rendimiento, especialmente en vistas de lista con objetos relacionados.',
        'challenge2.solution': 'Uso sistemático de select_related() y prefetch_related() en todo el código. Agregué índices de base de datos en campos consultados frecuentemente.',
        'challenge3.title': 'Implementar flujos de aprobación limpiamente',
        'challenge3.desc': 'La creación y edición de tareas necesitaban sistemas de aprobación flexibles para soportar diferentes configuraciones de grupo sin duplicación de código.',
        'challenge3.solution': 'Creé modelos de solicitud separados (TaskRequest, TaskEditRequest) con campos JSON para cambios propuestos, permitiendo lógica de aprobación limpia.',
        'challenge4.title': 'Mantener estándares de accesibilidad (WCAG 2.1)',
        'challenge4.desc': 'Asegurar que la plataforma fuera utilizable por todos, incluyendo usuarios con discapacidades, mientras se mantenía una estética moderna.',
        'challenge4.solution': 'Implementé navegación por teclado, etiquetas ARIA, contraste de color suficiente y tamaños mínimos de objetivo táctil en toda la interfaz.',
        'challenge5.title': 'Estructurar relaciones de base de datos escalables',
        'challenge5.desc': 'Diseñar un esquema de base de datos que pudiera evolucionar sin requerir migraciones mayores o romper funcionalidad existente.',
        'challenge5.solution': 'Usé campos JSON para metadatos flexibles, relaciones de clave foránea apropiadas y migraciones de Django para evolución controlada del esquema.',
        
        // Lessons Learned
        'lessons.title': 'Lecciones Aprendidas',
        'lesson1': 'Diseñar la base de datos antes de construir vistas',
        'lesson2': 'La estructura modular previene el caos a largo plazo',
        'lesson3': 'La validación de permisos en backend es crítica',
        'lesson4': 'Los detalles de UX importan tanto como la lógica',
        
        // Complexity Metrics
        'metrics.title': 'Métricas de Complejidad',
        'metrics.apps': 'Aplicaciones Django',
        'metrics.models': 'Modelos Relacionales',
        'metrics.checks': 'Verificaciones de QA',
        'metrics.activities': 'Tipos de Actividad Rastreados',
        'metrics.levels': 'Niveles de Jerarquía de Permisos',
        'metrics.versions': 'Versiones Principales',
    }
};

// Language Manager for Project Pages
class ProjectLanguageManager {
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
            const translation = agendaTranslations[this.currentLang][key];
            
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
        new ProjectLanguageManager();
    });
} else {
    new ProjectLanguageManager();
}
