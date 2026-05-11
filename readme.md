Estructura de carpetas:
tracker-colecciones/
│
├── backend/                  # Servidor Node.js + Express
│   ├── config/               # Configuraciones (ej: db.js para conectar a Mongo)
│   ├── controllers/          # Lógica de negocio (authController.js, itemController.js)
│   ├── middlewares/          # Validaciones intermedias (verifyToken.js, checkAdminRole.js)
│   ├── models/               # Esquemas de Mongoose (User.js, Item.js)
│   ├── routes/               # Definición de endpoints (authRoutes.js, itemRoutes.js)
│   ├── services/             # Consumo de APIs externas desde el back (ej: googleBooksApi.js)
│   ├── tests/                # Tests unitarios con Jest (item.test.js, auth.test.js)
│   ├── utils/                # Funciones de ayuda (errorHandler.js, generadorJWT.js)
│   ├── .env                  # Variables de entorno (URL de Mongo, JWT Secret)
│   ├── package.json
│   └── server.js             # Punto de entrada de la aplicación
│
└── frontend/                 # Aplicación React (creada con Vite)
    ├── public/               # Favicon y assets estáticos
    ├── src/
    │   ├── assets/           # Imágenes locales y CSS global
    │   ├── components/       # Componentes reutilizables (Navbar, ItemCard, Spinner, Toast)
    │   ├── context/          # Estados globales (ej: AuthContext.jsx para el usuario logueado)
    │   ├── hooks/            # Custom hooks (ej: useFetch.js, useAuth.js)
    │   ├── pages/            # Vistas completas (Home, Dashboard, Login, Perfil)
    │   ├── routes/           # Lógica de React Router (PrivateRoute.jsx, PublicRoute.jsx)
    │   ├── services/         # Funciones que hacen fetch a tu backend (api.js)
    │   ├── utils/            # Validadores de formularios, formateadores de fechas
    │   ├── App.jsx           # Componente raíz donde se inyectan las rutas
    │   └── main.jsx          # Punto de montaje de React
    ├── .env                  # Variables de entorno (VITE_API_URL)
    ├── package.json
    └── vite.config.js