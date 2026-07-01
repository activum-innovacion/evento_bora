import WishForm from "@/components/WishForm";

/* eslint-disable @next/next/no-img-element */
function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt="Residencial Bora"
      className={`h-auto [filter:brightness(0)_invert(1)] ${className ?? ""}`}
    />
  );
}

export default function Home() {
  return (
    <main className="flex-1 bg-[var(--bora-forest)] text-[var(--bora-cream)]">
      {/* ── HERO (piscina) ───────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* photo background — edificio al atardecer (estilo mailing) */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bora-aerea.jpg')" }}
          aria-hidden="true"
        />
        {/* overlay negro: legible arriba/abajo, foto cálida visible en el centro */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/90" />

        {/* marco fino decorativo */}
        <div className="pointer-events-none absolute inset-3 border border-[var(--bora-cream)]/25 sm:inset-5" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:py-24">
          <Logo className="mb-8 w-[150px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] sm:w-[190px]" />

          <div className="bora-rise flex flex-col items-center gap-1.5">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[var(--bora-cream)] sm:text-base">
              B·OOL Party
            </p>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[var(--bora-sage)] sm:text-xs">
              03 Julio · 18:00 – 21:00
            </p>
          </div>

          <h1 className="bora-rise mt-8 max-w-3xl text-3xl font-light leading-[1.12] tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] sm:text-5xl md:text-6xl">
            Bora acaba de empezar su historia…
            <span className="mt-2 block font-extrabold text-[var(--bora-aqua)]">
              y queremos escribirla contigo.
            </span>
          </h1>

          <a
            href="#deseo"
            className="bora-rise mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--bora-cream)] px-8 py-4 text-base font-semibold text-[var(--bora-forest)] transition hover:bg-white"
          >
            Dejar mi deseo
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* ── HISTORIA (textos del mailing) ────────────────────── */}
      <section className="relative px-6 py-16 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--bora-sage)]">
            Una nueva etapa merece un primer encuentro
          </p>

          <h2 className="mt-6 text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            El mejor verano
            <span className="mt-2 block font-extrabold text-[var(--bora-aqua)]">
              empieza en casa.
            </span>
          </h2>

          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-[var(--bora-cream)]/80">
            <p>
              Este comienzo de etapa queremos construirlo con vosotros. Este{" "}
              <span className="font-semibold text-[var(--bora-cream)]">
                Rincón de los Deseos
              </span>{" "}
              está pensado para que podáis compartir ideas, sugerencias y
              propuestas para poder seguir caminando juntos de la mejor manera.
            </p>
            <p>
              Toda idea, sugerencia o actividad es bienvenida, puede ser anónima
              o no, lo que prefieras. También hemos pensado en algunas
              categorías de actividades que quizás puedan encajar con lo que
              esperas de Bora Residencial.
            </p>
            <p className="font-semibold text-[var(--bora-cream)]">
              ¡Muchas gracias por seguir confiando en nosotros!
            </p>
          </div>

          {/* palette ribbon */}
          <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-3">
            {["--bora-sage", "--bora-aqua", "--bora-blush", "--bora-cream"].map(
              (c) => (
                <span
                  key={c}
                  className="h-2.5 w-16 rounded-full"
                  style={{ background: `var(${c})` }}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────── */}
      <section
        id="deseo"
        className="relative scroll-mt-8 border-t border-[var(--bora-cream)]/10 bg-black/15 px-6 py-16 sm:py-28"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--bora-sage)]">
              Tu deseo
            </span>
            <h2 className="mt-3 font-display text-4xl text-[var(--bora-cream)] sm:text-5xl">
              El Rincón de los Deseos
            </h2>
          </div>
          <WishForm />
        </div>
      </section>

      {/* ── CLOSING (aérea) ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-24 text-center sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bora-aerea.jpg')" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/88 via-black/78 to-black/95" />
        <div className="relative">
          <span className="mx-auto mb-8 block h-1.5 w-16 rounded-full bg-[var(--bora-blush)]" />
          <p className="mx-auto max-w-2xl text-lg text-[var(--bora-cream)]/75">
            Porque las mejores experiencias son las que se crean entre todos.
            Quién sabe… quizás la próxima actividad de Bora empiece con tu idea.
          </p>
          <p className="mx-auto mt-10 max-w-3xl text-3xl font-light leading-snug tracking-tight sm:text-4xl">
            Hay lugares donde la gente{" "}
            <span className="font-extrabold text-[var(--bora-aqua)]">vive</span>.
            <br />
            Y lugares donde la gente{" "}
            <span className="font-extrabold text-[var(--bora-blush)]">
              quiere vivir
            </span>
            .
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-black px-6 pb-12 pt-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 border-t border-[var(--bora-cream)]/15 pt-8 text-center">
          <Logo className="w-[80px] opacity-80" />
          <p className="text-xs text-[var(--bora-cream)]/50">
            Residencial Bora · Granada
          </p>
        </div>
      </footer>
    </main>
  );
}
