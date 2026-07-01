"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { login, type LoginState } from "./actions";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-[var(--bora-forest)] px-6 py-3.5 font-semibold text-[var(--bora-cream)] transition hover:bg-[#2c3d34] disabled:opacity-70"
    >
      {pending ? "Entrando…" : "Acceder"}
    </button>
  );
}

export default function LoginForm() {
  const [state, action] = useActionState<LoginState, FormData>(login, {});

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        action={action}
        className="w-full max-w-sm rounded-3xl border border-[var(--bora-sage)] bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(58,79,68,0.5)] backdrop-blur"
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 rounded-2xl bg-[var(--bora-forest)] px-5 py-4">
            <Image
              src="/logo.svg"
              alt="Residencial Bora"
              width={90}
              height={52}
              className="h-auto w-[80px] [filter:brightness(0)_invert(1)]"
            />
          </div>
          <h1 className="font-display text-2xl text-[var(--bora-forest)]">
            Panel de deseos
          </h1>
          <p className="mt-1 text-sm text-[var(--bora-forest)]/60">
            Acceso restringido
          </p>
        </div>

        <label
          htmlFor="password"
          className="block text-sm font-semibold text-[var(--bora-forest)]"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="mt-2 w-full rounded-2xl border border-[var(--bora-forest)]/20 bg-[var(--bora-cream)] px-4 py-3 text-[var(--bora-forest)] focus:border-[var(--bora-forest)] focus:outline-none focus:ring-4 focus:ring-[var(--bora-aqua)]/40"
        />

        {state.error && (
          <p className="mt-4 rounded-xl bg-[var(--bora-blush)]/60 px-4 py-3 text-sm font-medium text-[#8a4a63]">
            {state.error}
          </p>
        )}

        <div className="mt-6">
          <Submit />
        </div>
      </form>
    </div>
  );
}
