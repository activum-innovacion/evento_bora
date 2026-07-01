-- ─────────────────────────────────────────────────────────────
--  El Rincón de los Deseos · Residencial Bora
--  Ejecuta este script UNA VEZ en el SQL Editor de tu proyecto
--  Supabase (https://faenlsxzjuwvdercjwpe.supabase.co → SQL Editor).
-- ─────────────────────────────────────────────────────────────

create table if not exists public.wishes (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name       text,
  message    text not null,
  email      text,
  tags       text[]
);

-- Row Level Security activada SIN políticas públicas:
--   · La clave anónima/publishable NO puede leer ni escribir.
--   · La app usa la clave service_role (solo en el servidor),
--     que se salta RLS, tanto para guardar como para leer.
alter table public.wishes enable row level security;

create index if not exists wishes_created_at_idx
  on public.wishes (created_at desc);
