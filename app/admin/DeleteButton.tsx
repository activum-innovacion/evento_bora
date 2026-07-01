"use client";

import { useFormStatus } from "react-dom";
import { deleteWish } from "./actions";

function Inner() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-label="Borrar deseo"
      className="rounded-full border border-[#c98aa3]/40 px-3 py-1.5 text-xs font-semibold text-[#a65a78] transition hover:bg-[var(--bora-blush)]/50 disabled:opacity-50"
    >
      {pending ? "Borrando…" : "Borrar"}
    </button>
  );
}

export default function DeleteButton({ id }: { id: string }) {
  return (
    <form
      action={deleteWish}
      onSubmit={(e) => {
        if (
          !window.confirm(
            "¿Borrar este deseo? Esta acción no se puede deshacer."
          )
        ) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <Inner />
    </form>
  );
}
