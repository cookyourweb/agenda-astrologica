This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Tu Vuelta al Sol - Agenda Astrológica Personalizada

## Resumen de la Aplicación

"Tu Vuelta al Sol" es una aplicación web que genera agendas astrológicas personalizadas basadas en la carta natal y progresada del usuario. La aplicación permite a los usuarios:

1. Registrarse y autenticarse en el sistema
2. Introducir sus datos de nacimiento precisos (fecha, hora y lugar)
3. Generar su carta natal y progresada
4. Personalizar las preferencias de su agenda astrológica
5. Previsualizar el contenido antes de la compra
6. Realizar el pago de su agenda personalizada
7. Acceder a una versión digital interactiva de su agenda
8. Descargar una versión PDF de alta calidad
9. Recibir interpretaciones detalladas de su carta y eventos astrológicos relevantes

La agenda incluye secciones personalizadas como:
- Puntos fundamentales y configuración elemental
- Propósito de vida y perfil emocional
- Análisis de personalidad y patrones de pensamiento
- Estilo de amor y toma de decisiones
- Análisis de la carta progresada
- Prácticas de sanación para traumas de vidas pasadas
- Calendario mensual detallado con eventos astrológicos personalizados
- Rituales recomendados basados en la configuración astrológica individual

## Arquitectura Técnica

### Stack Tecnológico

- **Frontend**: Next.js (React) para SSR/SSG, optimización SEO y rendimiento
- **Backend**: API Routes de Next.js y middlewares
- **Base de Datos**: MongoDB (Atlas) para almacenamiento flexible de documentos
- **Autenticación**: NextAuth.js para manejo seguro de sesiones y múltiples proveedores
- **Despliegue**: Vercel para CI/CD automático, integrado con GitHub
- **Almacenamiento**: Vercel Blob Storage para PDFs y recursos estáticos
- **Pagos**: Stripe para procesamiento seguro de pagos y suscripciones
- **APIs Astrológicas**: Integración con Swiss Ephemeris a través de un servicio como Astrodienst o una implementación propia
- **Analítica**: Vercel Analytics + Google Analytics 4 para seguimiento de usuarios y conversiones
- **Monitorización**: Sentry para seguimiento de errores y rendimiento

### Estructura del Proyecto
/
├── public/                  # Recursos estáticos
├── src/
│   ├── app/                 # App Router de Next.js (routes)
│   ├── components/          # Componentes React reutilizables
│   │   ├── ui/              # Componentes de UI básicos
│   │   ├── astrology/       # Componentes específicos de astrología
│   │   ├── forms/           # Componentes de formularios
│   │   └── dashboard/       # Componentes del panel de usuario
│   ├── lib/                 # Utilidades y funciones auxiliares
│   │   ├── api/             # Funciones para llamadas a API
│   │   ├── astrology/       # Lógica y cálculos astrológicos
│   │   ├── auth/            # Configuración de autenticación
│   │   └── db/              # Conexión y modelos de base de datos
│   ├── hooks/               # Custom hooks de React
│   ├── context/             # Proveedores de contexto (Auth, UI, etc.)
│   ├── services/            # Servicios externos (pago, email, etc.)
│   ├── styles/              # Estilos globales y variables
│   └── types/               # Definiciones de TypeScript
├── middleware.ts            # Middleware de Next.js (auth, etc.)
├── next.config.js           # Configuración de Next.js
└── package.json             # Dependencias/
├── public/                  # Recursos estáticos
├── src/
│   ├── app/                 # App Router de Next.js (routes)
│   ├── components/          # Componentes React reutilizables
│   │   ├── ui/              # Componentes de UI básicos
│   │   ├── astrology/       # Componentes específicos de astrología
│   │   ├── forms/           # Componentes de formularios
│   │   └── dashboard/       # Componentes del panel de usuario
│   ├── lib/                 # Utilidades y funciones auxiliares
│   │   ├── api/             # Funciones para llamadas a API
│   │   ├── astrology/       # Lógica y cálculos astrológicos
│   │   ├── auth/            # Configuración de autenticación
│   │   └── db/              # Conexión y modelos de base de datos
│   ├── hooks/               # Custom hooks de React
│   ├── context/             # Proveedores de contexto (Auth, UI, etc.)
│   ├── services/            # Servicios externos (pago, email, etc.)
│   ├── styles/              # Estilos globales y variables
│   └── types/               # Definiciones de TypeScript
├── middleware.ts            # Middleware de Next.js (auth, etc.)
├── next.config.js           # Configuración de Next.js
└── package.json             # Dependencias
### Modelos de Datos

#### Usuario
```typescript
{
  _id: ObjectId,
  email: string,
  password: string, // Hasheado
  fullName: string,
  createdAt: Date,
  lastLogin: Date,
  role: "user" | "admin",
  isVerified: boolean,
  subscriptionStatus: "free" | "premium" | "none"
}### Modelos de Datos

#### Usuario
```typescript
{
  _id: ObjectId,
  email: string,
  password: string, // Hasheado
  fullName: string,
  createdAt: Date,
  lastLogin: Date,
  role: "user" | "admin",
  isVerified: boolean,
  subscriptionStatus: "free" | "premium" | "none"
}

### Modelos de Datos

#### Usuario
```typescript
{
  _id: ObjectId,
  email: string,
  password: string, // Hasheado
  fullName: string,
  createdAt: Date,
  lastLogin: Date,
  role: "user" | "admin",
  isVerified: boolean,
  subscriptionStatus: "free" | "premium" | "none"
}
### Datos de Nacimiento

{
  _id: ObjectId,
  userId: ObjectId,
  fullName: string,
  birthDate: Date,
  birthTime: string,
  birthPlace: string,
  latitude: number,
  longitude: number,
  timezone: string
}
### Carta Astral

{
  _id: ObjectId,
  userId: ObjectId,
  birthDataId: ObjectId,
  natalChart: object, // JSON con la carta natal
  progressedCharts: array, // Array de cartas progresadas con fechas
  createdAt: Date,
  lastUpdated: Date
}

### Agenda
{
  _id: ObjectId,
  userId: ObjectId,
  chartId: ObjectId,
  startDate: Date,
  endDate: Date,
  content: object, // JSON con el contenido de la agenda
  pdfUrl: string,
  createdAt: Date,
  status: "draft" | "published"
}
### Pagos
{
  _id: ObjectId,
  userId: ObjectId,
  agendaId: ObjectId,
  amount: number,
  currency: string,
  paymentMethod: string,
  status: "pending" | "completed" | "failed",
  transactionId: string,
  createdAt: Date
}
#### Analitica de Usuario
{
  _id: ObjectId,
  userId: ObjectId,
  sessionId: string,
  event: string,  // "signup", "chart_created", "preview_viewed", "purchase", etc.
  page: string,
  referrer: string,
  timestamp: Date,
  metadata: object // Datos adicionales específicos del evento
}


## Flujo de Usuario

1. **Registro/Login**: El usuario se registra o inicia sesión
2. **Dashboard**: Accede a su panel personal donde puede ver sus agendas o crear una nueva
3. **Formulario**: Completa el formulario con datos de nacimiento precisos
4. **Procesamiento**: El sistema calcula la carta natal y progresada
5. **Personalización**: El usuario selecciona preferencias para su agenda
6. **Previsualización**: Se muestra una vista previa limitada de la agenda
7. **Pago**: El usuario realiza el pago a través de Stripe
8. **Generación**: El sistema genera la agenda completa (digital y PDF)
9. **Acceso**: El usuario accede a su agenda desde su área privada

## Integración de APIs Astrológicas

La aplicación se conectará a servicios astrológicos que utilizan Swiss Ephemeris para cálculos precisos, obteniendo:
- Posiciones planetarias y aspectos
- Casas astrológicas
- Aspectos entre planetas
- Cartas progresadas
- Tránsitos importantes
- Fases lunares y eclipses

## Seguridad y Protección de Datos

- Autenticación segura con NextAuth.js
- Encriptación de datos sensibles
- Conformidad con GDPR para datos personales
- Conexiones seguras HTTPS
- Protección de rutas API con rate limiting

## Analítica y Métricas de Éxito

### Herramientas de Análisis
- **Vercel Analytics**: Análisis integrado con el despliegue para métricas básicas
- **Google Analytics 4**: Seguimiento detallado de comportamiento y conversiones
- **Mixpanel**: Para análisis de embudo y seguimiento de eventos detallados
- **Hotjar**: Mapas de calor y grabaciones de sesiones para entender el comportamiento del usuario

### KPIs (Indicadores Clave de Rendimiento)
1. **Adquisición de Usuarios**
   - Tasa de conversión de visitantes a registros
   - Costo de adquisición de cliente (CAC)
   - Fuentes de tráfico más efectivas

2. **Engagement**
   - Tiempo de permanencia en la aplicación
   - Frecuencia de visitas
   - Tasa de retención (semanal/mensual)
   - Número de cartas astrales generadas por usuario

3. **Conversión**
   - Tasa de conversión de registro a compra
   - Valor promedio del pedido
   - Tasa de abandono en el proceso de compra
   - Tiempo entre registro y primera compra

4. **Retención y Satisfacción**
   - Tasa de retención después de la compra
   - Net Promoter Score (NPS)
   - Valoraciones y comentarios de usuarios
   - Tasa de usuarios que compran agendas adicionales

5. **Técnicos y Rendimiento**
   - Tiempo de carga de la página
   - Tasa de errores
   - Dispositivos y navegadores utilizados
   - Puntuación Core Web Vitals

### Tableros y Reportes
- Tablero en tiempo real con métricas clave
- Informes semanales automatizados
- Análisis mensual de tendencias y comportamiento
- Seguimiento de funnel de conversión

### Implementación de Seguimiento
```javascript
// Ejemplo de seguimiento de eventos con Google Analytics 4
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
  
  // También enviar a nuestra base de datos para análisis propios
  fetch('/api/analytics/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event: eventName, ...params, timestamp: new Date() })
  });
};```

 ### Monetización

Compra única de agenda personalizada
Posibilidad de suscripción para actualizaciones mensuales
Diferentes niveles de detalle (básico, estándar, premium)

 ### Desarrollo y Despliegue

Control de versiones con GitHub
CI/CD automático a través de Vercel
Entornos de desarrollo, pruebas y producción
Tests automatizados para funcionalidades críticas

 ### Próximos Pasos

- Configurar el proyecto base con Next.js y el sistema de autenticación
- Implementar la conexión a MongoDB y modelos de datos
- Desarrollar el formulario de entrada de datos astrológicos
- Implementar la integración con APIs astrológicas
- Desarrollar los generadores de contenido personalizado
- Crear el sistema de visualización de la agenda digital
- Configurar la generación de PDFs de alta calidad
- Implementar el sistema de pagos con Stripe
- Configurar la analítica y el seguimiento de métricas
- Pruebas exhaustivas y optimización de rendimiento
- Lanzamiento y marketing


Esta arquitectura proporciona una base sólida y escalable para "Tu Vuelta al Sol", permitiendo un desarrollo progresivo y la adición de nuevas características en el futuro, como notificaciones personalizadas basadas en tránsitos o funcionalidades de comunidad.Monetización

Compra única de agenda personalizada
Posibilidad de suscripción para actualizaciones mensuales
Diferentes niveles de detalle (básico, estándar, premium)

## Desarrollo y Despliegue

Control de versiones con GitHub
CI/CD automático a través de Vercel
Entornos de desarrollo, pruebas y producción
Tests automatizados para funcionalidades críticas

