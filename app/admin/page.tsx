import Image from "next/image";
import { isAuthenticated } from "@/lib/auth";
import { createAdminClient, type Wish } from "@/lib/supabase";
import { logout } from "./actions";
import LoginForm from "./LoginForm";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    return <LoginForm />;
  }

  let wishes: Wish[] = [];
  let loadError: string | null = null;

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    wishes = (data ?? []) as Wish[];
  } catch (err) {
    loadError =
      err instanceof Error ? err.message : "Error cargando los deseos.";
  }

  return (
    <div className="min-h-screen bg-[var(--bora-mist)]">
      {/* header */}
      <header className="sticky top-0 z-10 border-b border-[var(--bora-forest)]/10 bg-[var(--bora-forest)] text-[var(--bora-cream)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Bora"
              width={64}
              height={37}
              className="h-auto w-[56px] [filter:brightness(0)_invert(1)]"
            />
            <div>
              <p className="font-display text-lg leading-none">
                El Rincón de los Deseos
              </p>
              <p className="text-xs text-[var(--bora-cream)]/60">
                Panel de administración
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/api/admin/export"
              className="rounded-full bg-[var(--bora-cream)] px-5 py-2.5 text-sm font-semibold text-[var(--bora-forest)] transition hover:bg-white"
            >
              ↓ Descargar Excel
            </a>
            <form action={logout}>
              <button
                type="submit"
                className="rounded-full border border-[var(--bora-cream)]/30 px-5 py-2.5 text-sm font-semibold text-[var(--bora-cream)] transition hover:bg-[var(--bora-cream)]/10"
              >
                Salir
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex items-baseline gap-3">
          <h1 className="font-display text-3xl text-[var(--bora-forest)]">
            {wishes.length} {wishes.length === 1 ? "deseo" : "deseos"}
          </h1>
          <span className="text-sm text-[var(--bora-forest)]/50">
            recibidos
          </span>
        </div>

        {loadError && (
          <div className="mb-6 rounded-2xl bg-[var(--bora-blush)]/60 px-5 py-4 text-sm text-[#8a4a63]">
            <strong>No se pudieron cargar los deseos.</strong> {loadError}
            <br />
            Comprueba las variables de entorno de Supabase y que la tabla{" "}
            <code>wishes</code> exista.
          </div>
        )}

        {!loadError && wishes.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[var(--bora-forest)]/20 bg-white/50 px-6 py-20 text-center text-[var(--bora-forest)]/60">
            Aún no hay deseos. En cuanto alguien participe, aparecerán aquí.
          </div>
        )}

        {wishes.length > 0 && (
          <div className="overflow-hidden rounded-3xl border border-[var(--bora-forest)]/10 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[var(--bora-sage)]/50 text-[var(--bora-forest)]">
                    <th className="px-5 py-4 font-semibold">Fecha</th>
                    <th className="px-5 py-4 font-semibold">Deseo</th>
                    <th className="px-5 py-4 text-right font-semibold">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wishes.map((w) => (
                    <tr
                      key={w.id}
                      className="border-t border-[var(--bora-forest)]/8 align-top text-[var(--bora-forest)]/90 hover:bg-[var(--bora-mist)]"
                    >
                      <td className="whitespace-nowrap px-5 py-4 text-[var(--bora-forest)]/60">
                        {formatDate(w.created_at)}
                      </td>
                      <td className="px-5 py-4">
                        <p className="max-w-xl whitespace-pre-wrap">
                          {w.message}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <DeleteButton id={w.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
