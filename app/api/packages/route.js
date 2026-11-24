// pages/api/packages.js
import ConnectDB from "@/app/lib/mongodb";
import Package from "@/app/lib/packages";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await ConnectDB();
    const url = new URL(req.url);
    const id = parseInt(url.searchParams.get("id")); // Use params to access 'id' from the route

    if (id === -1) {
      const packages = await Package.find({});
      return NextResponse.json({ packages });
    } else {
      const pkg = await Package.findOne({ id: id }); // Replace 'id' with the actual field name that stores the package ID
      if (!pkg) {
        return NextResponse.error("Package not found", 404); // Use a valid status code (404 for Not Found)
      }
      return NextResponse.json({ pkg });
    }
  } catch (error) {
    console.error("Error retrieving packages:", error);
    return NextResponse.error("Failed to retrieve packages", 500); // Use a valid status code (500 for Internal Server Error)
  }
}
