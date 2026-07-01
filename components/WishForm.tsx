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
      className="group relative w-full rounded-full bg-[var(--bora-cream)] px-8 py-4 text-base font-semibold tracking-wide text-[var(--bora-forest)] transition hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--bora-aqua)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
      <div className="bora-rise rounded-3xl border border-[var(--bora-cream)]/15 bg-[#3a4f44] p-10 text-center text-[var(--bora-cream)] shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)] sm:p-14">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--bora-cream)]/15 text-3xl text-[var(--bora-cream)]">
          ✦
        </div>
        <h3 className="font-display text-3xl">¡Gracias por soñar con nosotros!</h3>
        <p className="mx-auto mt-4 max-w-md text-[var(--bora-cream)]/75">
          Tu deseo ya forma parte de la historia de Bora. Quién sabe… quizás la
          próxima actividad empiece con tu idea.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full border border-[var(--bora-cream)]/30 px-6 py-3 text-sm font-semibold text-[var(--bora-cream)] transition hover:bg-[var(--bora-cream)]/10"
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
      className="rounded-3xl border border-[var(--bora-cream)]/15 bg-[#3a4f44] p-6 text-[var(--bora-cream)] shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)] sm:p-10"
    >
      <div className="space-y-5">
        {/* 1 · El deseo */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-[var(--bora-cream)]"
          >
            Tu deseo, idea o experiencia soñada{" "}
            <span className="text-[var(--bora-blush)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="Escribe tu idea, propuesta o experiencia soñada para la vida en Bora…"
            className="mt-2 w-full resize-y rounded-2xl border border-[var(--bora-cream)]/20 bg-black/20 px-4 py-3 text-[var(--bora-cream)] placeholder:text-[var(--bora-cream)]/40 focus:border-[var(--bora-cream)]/60 focus:outline-none focus:ring-4 focus:ring-[var(--bora-aqua)]/30"
          />
        </div>

        {/* 2 · Etiquetas / ideas */}
        <fieldset>
          <legend className="text-sm font-medium text-[var(--bora-cream)]/70">
            ¿Sin deseo? Te damos alguna idea 👇
          </legend>
          <div className="mt-3 flex flex-wrap gap-2.5">
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
                      ? "border-transparent bg-[var(--bora-cream)] text-[var(--bora-forest)]"
                      : "border-[var(--bora-cream)]/30 bg-transparent text-[var(--bora-cream)] hover:border-[var(--bora-cream)]/60 hover:bg-[var(--bora-cream)]/10"
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
          <p className="rounded-xl bg-[var(--bora-blush)] px-4 py-3 text-sm font-medium text-[#8a4a63]">
            {state.error}
          </p>
        )}

        <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-[var(--bora-cream)]/50">
            Las mejores experiencias son las que se crean entre todos.
          </p>
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
