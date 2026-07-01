import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { isAuthenticated } from "@/lib/auth";
import { createAdminClient, type Wish } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  let wishes: Wish[] = [];
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    wishes = (data ?? []) as Wish[];
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { error: `No se pudieron cargar los deseos: ${message}` },
      { status: 500 }
    );
  }

  const rows = wishes.map((w) => ({
    Fecha: new Date(w.created_at).toLocaleString("es-ES"),
    Nombre: w.name ?? "",
    Deseo: w.message,
    Intereses: (w.tags ?? []).join(", "),
    Email: w.email ?? "",
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  worksheet["!cols"] = [
    { wch: 20 }, // Fecha
    { wch: 22 }, // Nombre
    { wch: 70 }, // Deseo
    { wch: 30 }, // Intereses
    { wch: 28 }, // Email
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Deseos Bora");

  const buffer: Buffer = XLSX.write(workbook, {
    type: "buffer",
    bookType: "xlsx",
  });

  const stamp = new Date().toISOString().slice(0, 10);

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="deseos-bora-${stamp}.xlsx"`,
      "Cache-Control": "no-store",
    },
  });
}
