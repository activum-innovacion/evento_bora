"use server";

import { createAdminClient } from "@/lib/supabase";

export type WishFormState = {
  ok: boolean;
  error?: string;
};

const MAX_MESSAGE = 2000;
const MAX_NAME = 120;
const MAX_EMAIL = 160;

export async function submitWish(
  _prev: WishFormState,
  formData: FormData
): Promise<WishFormState> {
  const message = String(formData.get("message") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  // Honeypot: real users leave this empty.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { ok: true };
  }

  if (!message) {
    return { ok: false, error: "Escribe tu deseo antes de enviarlo." };
  }
  if (message.length > MAX_MESSAGE) {
    return { ok: false, error: "Tu mensaje es demasiado largo." };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "El correo no parece válido." };
  }

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("wishes").insert({
      message: message.slice(0, MAX_MESSAGE),
      name: name ? name.slice(0, MAX_NAME) : null,
      email: email ? email.slice(0, MAX_EMAIL) : null,
    });

    if (error) {
      console.error("Error guardando deseo:", error.message);
      return {
        ok: false,
        error: "No hemos podido guardar tu deseo. Inténtalo de nuevo.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("submitWish exception:", err);
    return {
      ok: false,
      error: "Ha ocurrido un error inesperado. Inténtalo de nuevo.",
    };
  }
}
