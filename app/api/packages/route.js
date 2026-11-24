import ConnectDB from "@/app/lib/mongodb";
import Package from "@/app/lib/packages";
import samplePackages from "@/app/lib/sample-packages";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const id = parseInt(new URL(req.url).searchParams.get("id") ?? "-1", 10);
  let packages = samplePackages;
  try {
    if (await ConnectDB()) {
      const fromDb = await Package.find({}).lean();
      if (fromDb.length) packages = fromDb;
    }
  } catch (error) {
    console.error("Error retrieving packages:", error);
  }
  if (id === -1 || Number.isNaN(id)) return NextResponse.json({ packages });
  const pkg = packages.find((p) => p.id === id);
  if (!pkg) return NextResponse.json({ error: "Package not found" }, { status: 404 });
  return NextResponse.json({ pkg });
}
