# Proyecto Final — Tracker de Anime y Manga

Este repositorio contiene una aplicación full-stack para llevar colecciones y reseñas de anime y manga. La aplicación está dividida en dos carpetas principales: `backend` (API en Node.js + Express) y `frontend` (cliente en React, Vite).

## Tecnologías

- Backend: Node.js, Express, Mongoose, JWT
- Frontend: React, Vite
- Base de datos: MongoDB

## Estructura general

- `backend/` — servidor y API (carpetas: `controllers`, `models`, `routes`, `config`, `middleware`, `services`, `utils`).
- `frontend/` — aplicación React (Vite) en `src/`.

## Requisitos

- Node.js (v16+ recomendado)
- npm o yarn
- MongoDB (local o servicio en la nube)

## Variables de entorno (ejemplos)

Crear un archivo `.env` en `backend/` con al menos:

- `MONGO_URI` — URL de conexión a MongoDB
- `JWT_SECRET` — secreto para generar tokens JWT
- `PORT` — puerto opcional (por defecto 3000)

En `frontend/` puedes definir (opcional):

- `VITE_API_URL` — URL base hacia la API (ej: `http://localhost:3000/api`)

## Instalación y ejecución

1) Backend

```bash
cd backend
npm install
# Desarrollo (recarga automática con nodemon)
npm run dev
# Producción
npm start
```

El `package.json` del backend incluye los scripts `dev` (nodemon) y `start` (node src/index.js).

2) Frontend

```bash
cd frontend
npm install
# Si existe el script dev (Vite):
npm run dev
# Si no existe, usar npx vite como alternativa:
npx vite
```

> Nota: el `package.json` en `frontend/` es mínimo; si `npm run dev` falla, `npx vite` lanzará el servidor de desarrollo.

## API — resumen rápido

Las rutas principales se encuentran en `backend/src/routes`. Archivos detectados:

- `users.routes.js` — `/login`, `/register`, `/profile`, `/logout`, `/current`
- `manga.routes.js` — `POST /` (añadir), `GET /` (listar), `GET /:mangaId` (detalle)
- `anime.routes.js`, `animeList.routes.js`, `mangaList.routes.js`, `reviews.routes.js`, `profile.routes.js`, `friends.routes.js`, `auth.routes.js` — definirán recursos relacionados a anime, listas, reseñas, perfiles y amistades.

Ejemplo de uso (suponiendo base `/api`):

- POST `/api/users/register` — registrar usuario
- POST `/api/users/login` — iniciar sesión y obtener token
- GET `/api/mangas` — obtener lista de mangas
- POST `/api/mangas` — crear un nuevo manga
- GET `/api/mangas/:mangaId` — obtener detalle

Como cada ruta está definida en su archivo correspondiente, revisa `backend/src/routes` para ver más detalles y controladores asociados en `backend/src/controllers`.

## Conexión a la base de datos

La configuración de Mongoose se encuentra en `backend/src/config` (`database.js` / `db.js`). Asegúrate de que `MONGO_URI` apunte a tu instancia de MongoDB antes de arrancar el backend.

## Pruebas

No hay pruebas automatizadas incluidas por defecto en el repositorio. Si deseas añadir tests, puedes usar Jest o Mocha y colocar los archivos en `backend/tests`.

## Contribuir

- Abre un issue para discutir cambios o bugs.
- Crea ramas con prefijo `feature/` o `fix/` y luego PR hacia la rama principal del repo.

## Puntos a mejorar (sugerencias)

- Añadir scripts de `frontend/package.json` (`dev`, `build`, `preview`).
- Documentar formatos de las respuestas de la API y ejemplos de payloads.
- Añadir tests unitarios e integración para controladores y utilidades.

## Contacto

Si necesitas ayuda con la puesta en marcha, proporciona el `package.json` del frontend (con scripts) o los valores actuales de `.env` (sin secretos) y te ayudo a ajustarlo.

---
Archivo generado automáticamente: documentación del proyecto.