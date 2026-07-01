"use client";

import { useActionState, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitWish, type WishFormState } from "@/app/actions";

const IDEAS = [
  "Yoga al amanecer",
  "Cine de verano",
  "Catas",
  "Conciertos",
  "Talleres",
  "Fiestas temáticas",
  "Encuentros entre vecinos",
];

const initialState: WishFormState = { ok: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative w-full rounded-full bg-[var(--bora-forest)] px-8 py-4 text-base font-semibold tracking-wide text-[var(--bora-cream)] transition hover:bg-[#2c3d34] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--bora-aqua)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Enviando tu deseo…" : "Dejar mi deseo ✦"}
    </button>
  );
}

export default function WishForm() {
  const [state, formAction] = useActionState(submitWish, initialState);
  const [selected, setSelected] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  function toggle(idea: string) {
    setSelected((prev) =>
      prev.includes(idea) ? prev.filter((i) => i !== idea) : [...prev, idea]
    );
  }

  if (state.ok) {
    return (
      <div className="bora-rise rounded-3xl border border-[var(--bora-sage)] bg-white/80 p-10 text-center shadow-[0_20px_60px_-30px_rgba(58,79,68,0.5)] backdrop-blur sm:p-14">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--bora-sage)] text-3xl">
          ✦
        </div>
        <h3 className="font-display text-3xl text-[var(--bora-forest)]">
          ¡Gracias por soñar con nosotros!
        </h3>
        <p className="mx-auto mt-4 max-w-md text-[var(--bora-forest)]/75">
          Tu deseo ya forma parte de la historia de esta azotea. Quién sabe…
          quizás la próxima actividad de Bora empiece con tu idea.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full border border-[var(--bora-forest)]/30 px-6 py-3 text-sm font-semibold text-[var(--bora-forest)] transition hover:bg-[var(--bora-sage)]/50"
        >
          Dejar otro deseo
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-3xl border border-[var(--bora-sage)] bg-white/80 p-6 shadow-[0_20px_60px_-30px_rgba(58,79,68,0.5)] backdrop-blur sm:p-10"
    >
      {/* Inspiration chips */}
      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--bora-forest)]/60">
          ¿Qué te gustaría vivir aquí?
        </legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {IDEAS.map((idea) => {
            const active = selected.includes(idea);
            return (
              <button
                type="button"
                key={idea}
                onClick={() => toggle(idea)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "border-[var(--bora-forest)] bg-[var(--bora-forest)] text-[var(--bora-cream)]"
                    : "border-[var(--bora-forest)]/25 bg-transparent text-[var(--bora-forest)] hover:border-[var(--bora-forest)]/60 hover:bg-[var(--bora-sage)]/40"
                }`}
              >
                {idea}
              </button>
            );
          })}
        </div>
        {selected.map((s) => (
          <input key={s} type="hidden" name="tags" value={s} />
        ))}
      </fieldset>

      <div className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-[var(--bora-forest)]"
          >
            Tu deseo, idea o experiencia soñada <span className="text-[#b06a86]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            maxLength={2000}
            placeholder="Escribe tu idea, propuesta o experiencia soñada para la azotea o para la vida en Bora…"
            className="mt-2 w-full resize-y rounded-2xl border border-[var(--bora-forest)]/20 bg-[var(--bora-cream)] px-4 py-3 text-[var(--bora-forest)] placeholder:text-[var(--bora-forest)]/40 focus:border-[var(--bora-forest)] focus:outline-none focus:ring-4 focus:ring-[var(--bora-aqua)]/40"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-[var(--bora-forest)]"
            >
              Tu nombre <span className="font-normal text-[var(--bora-forest)]/50">(opcional)</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              maxLength={120}
              placeholder="¿Cómo te llamas?"
              className="mt-2 w-full rounded-2xl border border-[var(--bora-forest)]/20 bg-[var(--bora-cream)] px-4 py-3 text-[var(--bora-forest)] placeholder:text-[var(--bora-forest)]/40 focus:border-[var(--bora-forest)] focus:outline-none focus:ring-4 focus:ring-[var(--bora-aqua)]/40"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[var(--bora-forest)]"
            >
              Email <span className="font-normal text-[var(--bora-forest)]/50">(opcional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={160}
              placeholder="Por si tu idea se hace realidad"
              className="mt-2 w-full rounded-2xl border border-[var(--bora-forest)]/20 bg-[var(--bora-cream)] px-4 py-3 text-[var(--bora-forest)] placeholder:text-[var(--bora-forest)]/40 focus:border-[var(--bora-forest)] focus:outline-none focus:ring-4 focus:ring-[var(--bora-aqua)]/40"
            />
          </div>
        </div>

        {/* Honeypot (hidden from humans) */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        {state.error && (
          <p className="rounded-xl bg-[var(--bora-blush)]/60 px-4 py-3 text-sm font-medium text-[#8a4a63]">
            {state.error}
          </p>
        )}

        <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-[var(--bora-forest)]/50">
            Las mejores experiencias son las que se crean entre todos.
          </p>
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
