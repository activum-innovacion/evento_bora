# El Rincón de los Deseos · Residencial Bora

Landing para la dinámica del evento de Bora: los asistentes dejan su deseo /
idea para la azotea y la vida en el residencial. Las respuestas se guardan en
Supabase y se consultan / descargan en Excel desde un panel `/admin` protegido.

Stack: **Next.js 16** (App Router) · **Tailwind CSS v4** · **Supabase** · **Vercel**.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing con la copy del evento y el formulario de deseos |
| `/admin` | Panel protegido con contraseña: tabla de deseos + descarga a Excel |
| `/api/admin/export` | Genera el `.xlsx` (requiere sesión de admin) |

## Puesta en marcha

### 1. Crear la tabla en Supabase
En tu proyecto Supabase → **SQL Editor**, ejecuta el contenido de
[`supabase/schema.sql`](supabase/schema.sql). Crea la tabla `wishes` con RLS
activada (solo el servidor, con la `service_role` key, puede leer/escribir).

### 2. Variables de entorno
Copia `.env.example` a `.env.local` y rellena:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<tu-proyecto>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service_role key — Settings → API>
ADMIN_PASSWORD=<contraseña del panel>
ADMIN_SESSION_SECRET=<cadena larga aleatoria>
```

> La `service_role` key **solo** se usa en el servidor y nunca llega al
> navegador. No hay ninguna clave de Supabase en el bundle del cliente.

### 3. Desarrollo local
```bash
npm install
npm run dev        # http://localhost:3000
```

## Despliegue en Vercel
1. Importa el repo en Vercel (framework: Next.js, detectado automáticamente).
2. En **Settings → Environment Variables** añade las 4 variables de arriba
   (marca `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_PASSWORD` y `ADMIN_SESSION_SECRET`
   como *Sensitive*).
3. Deploy. La landing es pública; `/admin` pide contraseña.

## Seguridad
- El formulario y el panel corren **en el servidor** (Server Actions + Route
  Handlers); ninguna clave sensible se expone al cliente.
- RLS activada sin políticas públicas: la tabla es inaccesible salvo por el
  servidor con la `service_role` key.
- `/admin` protegido por cookie de sesión `httpOnly` firmada (HMAC).
- El formulario incluye un *honeypot* anti-bots.
