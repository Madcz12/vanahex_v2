/* =========================================
   VANAHEX V2 — Landing Page Static Data
   All content arrays/objects for the landing
   ========================================= */

/** Navigation links — "Servicios" groups TPV items under a dropdown */
export const navLinks = [
  {
    label: 'Servicios',
    href: '#casos',
    hasDropdown: true,
    children: [
      { label: 'TPV Hostelería', href: '/casos/vanahex-barra', dotColor: '#3b82f6', desc: 'Comandas en móvil, QR de mesa y carta en vivo' },
      { label: 'TPV Tienda & Retail', href: '/casos/vanahex-tienda', dotColor: '#8b5cf6', desc: 'Inventario, stock y control de caja' },
      { label: 'TPV Motos & Repuestos', href: '/casos/vanahex-repuestos', dotColor: '#f97316', desc: 'Despiece, compatibilidad de motos y stock' },
      { label: 'Web Propia a Medida', href: '#casos', dotColor: '#2dd4a8', desc: 'Tu sitio web profesional con tu propia marca' },
      { label: 'Bot WhatsApp 24/7', href: '#bot-whatsapp', dotColor: '#06b6d4', desc: 'Agenda citas y atiende clientes de forma autónoma' },
      { label: 'Directorio Global', href: '#directorio', dotColor: '#f59e0b', desc: 'Presencia en la red internacional de comercios' },
      { label: 'Software Factory', href: '#contacto', dotColor: '#ec4899', desc: 'Desarrollo web y plataformas escalables' },
    ],
  },
  { label: 'Casos de Éxito', href: '#casos' },
  { label: 'Directorio', href: '#directorio' },
  { label: 'Planes & Precios', href: '#planes' },
  { label: 'Contacto', href: '#contacto' },
]

/** Hero rotating sector badges */
export const heroSectors = [
  { label: 'Barberías & Salones', icon: 'bi-scissors' },
  { label: 'Restaurantes & Bares', icon: 'bi-cup-straw' },
  { label: 'Estética & Spas', icon: 'bi-flower1' },
  { label: 'Gimnasios & Clínicas', icon: 'bi-heart-pulse' },
]

/** Country availability badges */
export const globalBadges = [
  { flag: '🇪🇸', code: 'es', name: 'España' },
  { flag: '🇲🇽', code: 'mx', name: 'México' },
  { flag: '🇨🇴', code: 'co', name: 'Colombia' },
  { flag: '🇺🇸', code: 'us', name: 'USA' },
  { flag: '🌎', code: '', name: 'Latam' },
]

/** Accepted payment methods */
export const paymentMethods = [
  { icon: 'bi-phone', label: 'Bizum (España)' },
  { icon: 'bi-paypal', label: 'PayPal Express' },
  { icon: 'bi-bank', label: 'Transferencia SEPA' },
]

/** POS / TPV feature cards */
export const serviceCards = [
  { icon: 'bi-phone', title: 'Comandas en el móvil', desc: 'Mesas por zonas, productos con foto y opciones, notas para barra.' },
  { icon: 'bi-cash-stack', title: 'Caja en vivo', desc: 'Cobro en efectivo, tarjeta o pago móvil, dividir cuentas, invitaciones y cierre de caja.' },
  { icon: 'bi-qr-code', title: 'Pedidos por QR', desc: 'Cada mesa con su QR: el cliente pide, llama al camarero o pide la cuenta.' },
  { icon: 'bi-graph-up', title: 'Control del dueño', desc: 'Ventas del turno, lo más vendido, ventas por camarero y registro de anulaciones.' },
]

/** WhatsApp bot key features */
export const whatsappFeatures = [
  { icon: 'bi-lightning-charge-fill', text: 'Responde en menos de 2 segundos a cualquier hora.', color: 'var(--vx-accent-yellow)' },
  { icon: 'bi-database-fill', text: 'Sincronización directa con tu base de datos de clientes y citas.', color: 'var(--vx-accent-mint)' },
  { icon: 'bi-bell-fill', text: 'Recordatorio automático 2 horas antes de la cita para 0% ausencias.', color: 'var(--vx-accent-gold)' },
]

/** Pricing plans */
export const pricingPlans = [
  {
    name: 'Mensual',
    price: '29',
    currency: '€',
    period: '/ mes',
    setup: '+ 390 € de instalación (una sola vez)',
    desc: 'Paga la instalación una vez y después una cuota mensual. Sin permanencia.',
    features: [
      'Programa de gestión: agenda, clientes, caja y stock',
      'Bot de WhatsApp 24/7 que recibe tus reservas',
      'Web profesional con reservas, mapa y tu marca',
      'Código QR para tu local',
      'Instalación y configuración por nuestro equipo',
      'Soporte por WhatsApp',
    ],
    cta: 'Elegir Mensual',
    highlight: false,
  },
  {
    name: 'Primer Año Todo Incluido',
    label: 'Más Elegido • Pago Único',
    price: '690',
    currency: '€',
    period: '/ primer año',
    setup: 'Instalación + 12 meses incluidos · Renovación 290 €/año',
    desc: 'Un solo pago y te olvidas todo el año. Después, renovación anual más barata.',
    features: [
      'Programa de gestión: agenda, clientes, caja y stock',
      'Bot de WhatsApp 24/7 que recibe tus reservas',
      'Web profesional con reservas, mapa y tu marca',
      'Código QR para tu local',
      'Instalación y configuración por nuestro equipo',
      'Soporte por WhatsApp',
      'Precio cerrado todo el año',
    ],
    cta: 'Quiero el primer año todo incluido',
    highlight: true,
    badge: 'Mejor valor',
  },
]

/** Real project case studies */
export const projectCases = [
  {
    tag: 'NUEVO · BARES, RESTAURANTES Y CACHIMBERÍAS',
    tagColor: 'mint',
    title: 'VANAHEX Barra',
    slug: 'vanahex-barra',
    caseUrl: '/casos/vanahex-barra',
    demoUrl: 'https://vanahex.lat',
    location: 'Hostelería & Ocio Nocturno · Oasis Lounge',
    desc: 'La caja, las comandas móviles y los pedidos por QR de tu local. El camarero toma el pedido en su móvil, la caja lo ve al instante y la cocina recibe solo lo suyo. Sin terminales caras.',
    subtitle: 'Caja táctil, comanderas en móvil y pedidos por QR en tiempo real',
    image: '/vanahex_barra/oasis_barra.webp',
    imageAlt: 'VANAHEX Barra - Sistema TPV y Comandas',
    url: 'https://vanahex.lat',
    urlLabel: 'Probar demo en vivo',
    badgeLabel: 'Sistema en vivo',
    demoPin: 'PIN 2580 (caja), 1111 (camarero) o 3333 (cocina)',
    highlights: [
      'El camarero toma el pedido en su móvil o tablet',
      'La caja ve las cuentas abiertas y cobra al instante',
      'La cocina y la barra reciben solo sus comandas',
      'Pedidos por código QR desde cada mesa del local',
      'Sin comprar terminales caras: funciona en cualquier navegador',
    ],
  },
  {
    tag: 'CASO REAL & EVIDENCIA ACTIVA',
    tagColor: 'yellow',
    title: 'MS Barbershop Madrid',
    slug: 'barberia',
    caseUrl: '/casos/ms-barbershop',
    demoUrl: 'https://vanahex.lat/barberia.html',
    location: 'Calle Gran Vía 42, Madrid',
    desc: 'Este negocio ya utiliza la infraestructura de VANAHEX: su software de caja, su Bot de WhatsApp autónomo y su sitio web oficial propio.',
    subtitle: 'Web Oficial + Bot de WhatsApp 24/7 + Software de Caja',
    image: '/barberia_imagen.webp',
    imageAlt: 'MS Barbershop Madrid - Plataforma y web',
    url: 'https://vanahex.lat/barberia.html',
    urlLabel: 'Abrir Web Oficial de MS Barbershop',
    badgeLabel: 'Cliente fundador',
    services: [
      { name: 'Corte caballero + peinado', price: '12 €' },
      { name: 'Corte + Styling + Barba', price: '16 €' },
      { name: 'Afeitado tradicional a navaja', price: '15 €' },
    ],
    highlights: [
      'Página web oficial propia con catálogo y reservas en línea',
      'Bot de WhatsApp 24/7 con gestión de citas autónoma',
      'Software de gestión de caja, stock y clientes integrado',
    ],
  },
  {
    tag: 'PROYECTO PROPIO · EN PRODUCCIÓN',
    tagColor: 'purple',
    title: 'Vanaheim: plataforma de juegos online',
    slug: 'vanaheim',
    caseUrl: '/casos/vanahex-barra',
    demoUrl: 'https://wow-vanaheim.com',
    location: null,
    desc: 'Diseñada, programada y operada por el equipo de VANAHEX desde julio de 2026. Es nuestra prueba de fuego: una comunidad con cientos de usuarios que cada semana usa todo lo que ofrecemos.',
    subtitle: 'Comunidad masiva, tienda virtual y servidores cloud 24/7',
    image: '/wow_vanaheim/vanaheim_wow_background.webp',
    imageAlt: 'Vanaheim WoW - Plataforma de juego online',
    url: 'https://wow-vanaheim.com',
    urlLabel: 'Ver la plataforma en vivo',
    badgeLabel: 'En línea 24/7',
    stats: [
      { value: '+600', label: 'cuentas registradas' },
      { value: '+850', label: 'perfiles creados' },
      { value: '~180', label: 'usuarios activos por semana' },
      { value: '+350', label: 'compras en la tienda' },
      { value: '2', label: 'servidores en la nube conectados' },
      { value: '3', label: 'meses en producción' },
    ],
    techFeatures: [
      'Web con área de cliente, registro y soporte por tickets',
      'Tienda online con monedas virtuales y pagos (Yape, PayPal, Airtm)',
      'Panel de administración web y app Android para el equipo',
      'Bots de WhatsApp y Discord con avisos automáticos',
      'Servidores en la nube 24/7, copias automáticas y protección anti-ataques',
    ],
  },
  {
    tag: 'NUEVO · TIENDAS, FRUTERÍAS Y ALIMENTACIÓN',
    tagColor: 'mint',
    title: 'VANAHEX Tienda: cobra con el lector de códigos y ten tu stock siempre al día',
    slug: 'vanahex-tienda',
    caseUrl: '/casos/vanahex-tienda',
    demoUrl: null,
    location: 'Retail & Alimentación · Alimentación Plaza',
    desc: 'Pasas el producto por el lector y entra en el ticket; la fruta se cobra a peso. Cada venta descuenta el stock y el programa te avisa de lo que se está acabando. Cargas todos tus productos de golpe desde un Excel, registras la mercancía que te llega y ves tu margen de ganancia real. Funciona en cualquier TPV, ordenador o tablet con Chrome.',
    subtitle: 'Lector de códigos, cobro a peso, stock automático y carga masiva desde Excel',
    image: '/alimentacion_plaza/ali_plaza_main.webp',
    imageAlt: 'VANAHEX Tienda - TPV con lector de códigos y control de stock',
    url: null,
    urlLabel: 'Próximamente',
    badgeLabel: 'En desarrollo',
    highlights: [
      'Cobro con lector de códigos de barras y productos a peso',
      'Stock que se descuenta solo con cada venta',
      'Aviso automático cuando un producto se está acabando',
      'Carga masiva de productos desde un archivo Excel',
      'Registro de mercancía entrante y margen de ganancia real',
      'Funciona en cualquier TPV, ordenador o tablet con Chrome',
    ],
  },
  {
    tag: 'NUEVO · REPUESTOS Y TALLERES DE MOTOS',
    tagColor: 'orange',
    title: 'VANAHEX Repuestos: encuentra la pieza de cada moto en segundos y controla tu stock hasta la última argolla',
    slug: 'vanahex-repuestos',
    caseUrl: '/casos/vanahex-repuestos',
    demoUrl: null,
    location: 'Talleres & Tiendas de Repuestos de Motos',
    desc: 'Localiza al instante la pieza exacta por marca, modelo y año de moto. Control de inventario milimétrico hasta la última argolla, gestión de ventas en mostrador, clientes con fiados y entradas de almacén.',
    subtitle: 'Búsqueda por modelo, inventario al detalle, ventas y control de fiados',
    image: '/moto_rep_images/moto_repuestos_main.webp',
    imageAlt: 'VANAHEX Repuestos - Encuentra la pieza de cada moto en segundos y controla tu stock',
    url: null,
    urlLabel: 'Próximamente',
    badgeLabel: 'En desarrollo',
    highlights: [
      'Búsqueda inmediata por modelo de moto, cilindrada y compatibilidad',
      'Control de stock milimétrico hasta la última argolla o arandela',
      'Ventas en mostrador, facturación y seguimiento de cuentas fiadas',
      'Entrada ágil de mercancía y ajustes de inventario en tiempo real',
    ],
  },
  {
    tag: 'NUEVO CLIENTE · OCTUBRE 2026',
    tagColor: 'blue',
    title: 'FDS Melilla',
    slug: 'fds-melilla',
    caseUrl: '/casos/fds-melilla',
    demoUrl: 'https://fdsmelilla.vanahex.lat/',
    location: 'C/ de la Violeta 14, Nave 7, Melilla',
    desc: 'Empresa de climatización y obras de Melilla: instalación y mantenimiento de aire acondicionado para particulares y empresas, reformas y rehabilitación de fachadas.',
    subtitle: 'Climatización industrial, reformas y captación directa por WhatsApp',
    image: '/fds_melilla/melilla_img.webp',
    imageAlt: 'FDS Melilla - Web corporativa y captación',
    url: 'https://fdsmelilla.vanahex.lat/',
    urlLabel: 'Ver la web de FDS Melilla',
    badgeLabel: 'Web en vivo',
    highlights: [
      'Diseño a medida con su logo y sus colores corporativos',
      'Presupuesto por WhatsApp y llamada en un toque',
      'Aviso legal, privacidad y datos para Google en regla',
      'Publicada en menos de 24 horas y optimizada para móviles',
    ],
  },
]

/** Global directory client entries */
export const directoryClients = [
  {
    name: 'MS Barbershop Madrid',
    category: 'Barbería / Peluquería',
    location: 'Calle Gran Vía 42, Madrid',
    country: 'es',
    countryLabel: 'España',
    badge: 'CLIENTE FUNDADOR',
    badgeColor: 'yellow',
    bgImage: '/barberia_imagen.webp',
    webUrl: '/casos/ms-barbershop',
    whatsappUrl: 'https://wa.me/34614138144?text=Hola%20MS%20Barbershop,%20quiero%20reservar%20una%20cita',
    services: [
      { name: 'Corte caballero + peinado', price: '(12 €)' },
      { name: 'Corte + Styling + Barba', price: '(16 €)' },
      { name: 'Afeitado tradicional a navaja', price: '(15 €)' },
    ],
    ctaLabel: 'Reservar por WhatsApp',
    hasWeb: true,
  },
  {
    name: 'FDS Melilla',
    category: 'Climatización y obras',
    location: 'C/ de la Violeta 14, Nave 7, Melilla',
    country: 'es',
    countryLabel: 'España',
    badge: 'NUEVO CLIENTE',
    badgeColor: 'blue',
    bgImage: '/fds_melilla/melilla_img.webp',
    webUrl: '/casos/fds-melilla',
    whatsappUrl: 'https://wa.me/34614138144?text=Hola%20FDS%20Melilla,%20quiero%20pedir%20presupuesto',
    services: [
      { name: 'Instalación de aire acondicion...', price: null },
      { name: 'Mantenimiento y limpieza de ...', price: null },
      { name: 'Reformas y rehabilitación de f...', price: null },
    ],
    ctaLabel: 'Pedir presupuesto por WhatsApp',
    hasWeb: true,
  },
]

/** Footer link list */
export const footerLinks = [
  { label: 'Sectores', href: '#casos' },
  { label: 'Web Barbería', href: '#casos' },
  { label: 'Web Propia', href: '#web-propia' },
  { label: 'Precios', href: '#planes' },
  { label: 'Directorio Global', href: '#directorio' },
  { label: 'Bot 24/7', href: '#bot-whatsapp' },
  { label: 'Privacidad', href: '#' },
]
