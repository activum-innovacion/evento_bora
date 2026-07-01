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
          <Logo className="mb-10 w-[130px] opacity-95 drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] sm:w-[150px]" />

          <span className="bora-rise inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--bora-cream)]/30 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--bora-sage)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            El Rincón de los Deseos
          </span>

          <p className="bora-rise mt-8 max-w-2xl text-lg text-[var(--bora-cream)]/90 drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] sm:text-xl">
            ¿Qué te gustaría vivir aquí? Déjanos tu deseo y ayúdanos a imaginar
            todo lo que este espacio puede llegar a ser.
          </p>

          <a
            href="#deseo"
            className="bora-rise mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--bora-cream)] px-8 py-4 text-base font-semibold text-[var(--bora-forest)] transition hover:bg-white"
          >
            Dejar mi deseo
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* ── HISTORIA ─────────────────────────────────────────── */}
      <section className="relative px-6 py-16 sm:py-28">
        <div className="mx-auto max-w-2xl space-y-5 text-center text-lg leading-relaxed text-[var(--bora-cream)]/85">
          <p>
            Este{" "}
            <span className="font-semibold text-[var(--bora-cream)]">
              Rincón de los Deseos
            </span>{" "}
            está pensado para que podáis compartir ideas, sugerencias y
            propuestas para poder seguir caminando juntos de la mejor manera.
          </p>
          <p>
            Toda idea, sugerencia o actividad es bienvenida y anónima. También
            hemos pensado en algunas categorías de actividades que quizás puedan
            encajar con lo que esperas de Bora Residencial.
          </p>
        </div>
      </section>

      {/* ── FORM + CIERRE (foto aérea + negro) ───────────────── */}
      <section
        id="deseo"
        className="relative scroll-mt-8 overflow-hidden px-6 py-16 sm:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bora-aerea.jpg')" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/90 via-black/82 to-black/95" />

        <div className="relative mx-auto max-w-3xl">
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

          <p className="mx-auto mt-16 max-w-3xl text-center text-3xl font-light leading-snug tracking-tight sm:mt-20 sm:text-4xl">
            Las mejores experiencias son las que se crean{" "}
            <span className="font-extrabold text-[var(--bora-aqua)]">
              entre todos
            </span>
            .
            <br />
            Quizás la próxima actividad de Bora empiece con{" "}
            <span className="font-extrabold text-[var(--bora-blush)]">
              tu idea
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
