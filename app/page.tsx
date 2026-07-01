import WishForm from "@/components/WishForm";

// Deterministic star positions (avoids hydration mismatch)
const STARS = [
  { top: "12%", left: "8%", s: 3, d: "0s" },
  { top: "22%", left: "82%", s: 2, d: "1.2s" },
  { top: "18%", left: "48%", s: 4, d: "0.5s" },
  { top: "40%", left: "18%", s: 2, d: "2s" },
  { top: "34%", left: "70%", s: 3, d: "0.8s" },
  { top: "56%", left: "88%", s: 2, d: "1.6s" },
  { top: "62%", left: "30%", s: 3, d: "2.4s" },
  { top: "70%", left: "60%", s: 2, d: "0.3s" },
  { top: "48%", left: "44%", s: 2, d: "3s" },
  { top: "28%", left: "26%", s: 2, d: "1s" },
  { top: "78%", left: "14%", s: 3, d: "1.9s" },
  { top: "14%", left: "66%", s: 2, d: "2.7s" },
];

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
        {/* photo background — la piscina protagonista */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bora-piscina.jpg')" }}
          aria-hidden="true"
        />
        {/* overlay: oscuro arriba (legibilidad) y más claro abajo (se ve la piscina) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bora-forest)]/95 via-[var(--bora-forest)]/80 to-[var(--bora-forest)]/45" />

        {/* starfield */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {STARS.map((st, i) => (
            <span
              key={i}
              className="bora-twinkle absolute rounded-full bg-[var(--bora-sage)]"
              style={{
                top: st.top,
                left: st.left,
                width: st.s,
                height: st.s,
                animationDelay: st.d,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:py-24">
          <Logo className="mb-10 w-[120px] opacity-95 sm:w-[140px]" />

          <span className="bora-rise inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--bora-cream)]/25 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--bora-sage)] sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            El Rincón de los Deseos
          </span>

          <h1 className="bora-rise mt-8 max-w-4xl text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            Esta azotea acaba de empezar su historia…
            <span className="mt-3 block font-extrabold text-[var(--bora-aqua)]">
              y queremos escribirla contigo.
            </span>
          </h1>

          <p className="bora-rise mt-8 max-w-2xl text-lg text-[var(--bora-cream)]/85 sm:text-xl">
            ¿Qué te gustaría vivir aquí? Déjanos tu deseo y ayúdanos a imaginar
            todo lo que este espacio puede llegar a ser.
          </p>

          <a
            href="#deseo"
            className="bora-rise mt-12 inline-flex items-center gap-2 rounded-full bg-[var(--bora-cream)] px-8 py-4 text-base font-semibold text-[var(--bora-forest)] transition hover:bg-white"
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

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--bora-cream)]/80">
            Es el comienzo de algo que queremos construir con vosotros. ¿Una
            sesión de <span className="font-semibold text-[var(--bora-cream)]">yoga al amanecer</span>?
            ¿<span className="font-semibold text-[var(--bora-cream)]">Cine de verano</span> bajo
            las estrellas? ¿Catas, conciertos, talleres, fiestas temáticas o
            encuentros entre vecinos?
          </p>

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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bora-forest)]/92 via-[var(--bora-forest)]/88 to-[var(--bora-forest)]/95" />
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
      <footer className="bg-[var(--bora-forest)] px-6 pb-12 pt-4">
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
