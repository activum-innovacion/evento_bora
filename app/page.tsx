import Image from "next/image";
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

export default function Home() {
  return (
    <main className="flex-1">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--bora-forest)] text-[var(--bora-cream)]">
        {/* photo background (aparece al añadir public/images/bora-aerea.jpg) */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bora-aerea.jpg')" }}
          aria-hidden="true"
        />
        {/* green gradient overlay for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bora-forest)]/85 via-[var(--bora-forest)]/80 to-[var(--bora-forest)]/95" />

        {/* glow accents */}
        <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[var(--bora-aqua)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[var(--bora-blush)]/15 blur-3xl" />

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

        <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
          <Image
            src="/logo.svg"
            alt="Residencial Bora"
            width={150}
            height={86}
            priority
            className="mb-10 h-auto w-[120px] opacity-95 [filter:brightness(0)_invert(1)] sm:w-[140px]"
          />

          <span className="bora-rise inline-flex items-center gap-2 rounded-full border border-[var(--bora-cream)]/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--bora-sage)]">
            El Rincón de los Deseos
          </span>

          <h1 className="bora-rise mt-8 max-w-4xl font-display text-4xl leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            Esta azotea acaba de empezar su historia…
            <span className="mt-3 block text-[var(--bora-aqua)]">
              y queremos escribirla contigo.
            </span>
          </h1>

          <p className="bora-rise mt-8 max-w-2xl text-lg text-[var(--bora-cream)]/80 sm:text-xl">
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

      {/* ── INVITATION ───────────────────────────────────────── */}
      <section className="relative px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-snug text-[var(--bora-forest)] sm:text-4xl">
            ¿Una sesión de yoga al amanecer? ¿Cine de verano bajo las estrellas?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--bora-forest)]/75">
            ¿Catas, conciertos, talleres, fiestas temáticas o encuentros entre
            vecinos? Escribe tu idea, propuesta o experiencia soñada para la
            azotea o para la vida en Bora.
          </p>
        </div>

        {/* palette ribbon */}
        <div className="mx-auto mt-14 flex max-w-md items-center justify-center gap-3">
          {["--bora-sage", "--bora-aqua", "--bora-blush", "--bora-forest"].map(
            (c) => (
              <span
                key={c}
                className="h-2.5 w-16 rounded-full"
                style={{ background: `var(${c})` }}
              />
            )
          )}
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────── */}
      <section
        id="deseo"
        className="relative scroll-mt-8 bg-[var(--bora-sage)]/40 px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--bora-forest)]/60">
              Tu deseo
            </span>
            <h2 className="mt-3 font-display text-4xl text-[var(--bora-forest)] sm:text-5xl">
              El Rincón de los Deseos
            </h2>
          </div>
          <WishForm />
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="bg-[var(--bora-forest)] px-6 py-20 text-center text-[var(--bora-cream)] sm:py-24">
        <span className="mx-auto mb-8 block h-1.5 w-16 rounded-full bg-[var(--bora-blush)]" />
        <p className="mx-auto max-w-2xl text-lg text-[var(--bora-cream)]/70">
          Porque las mejores experiencias son las que se crean entre todos.
          Quién sabe… quizás la próxima actividad de Bora empiece con tu idea.
        </p>
        <p className="mx-auto mt-10 max-w-3xl font-display text-3xl leading-snug sm:text-4xl">
          Hay lugares donde la gente{" "}
          <span className="text-[var(--bora-aqua)]">vive</span>.
          <br />
          Y lugares donde la gente{" "}
          <span className="text-[var(--bora-blush)]">quiere vivir</span>.
        </p>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-[var(--bora-forest)] px-6 pb-12 pt-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 border-t border-[var(--bora-cream)]/15 pt-8 text-center">
          <Image
            src="/logo.svg"
            alt="Residencial Bora"
            width={90}
            height={52}
            className="h-auto w-[80px] opacity-80 [filter:brightness(0)_invert(1)]"
          />
          <p className="text-xs text-[var(--bora-cream)]/50">
            Residencial Bora · Granada
          </p>
        </div>
      </footer>
    </main>
  );
}
