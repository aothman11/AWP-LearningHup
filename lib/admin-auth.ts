import { NextRequest } from "next/server";

/**
 * Bearer-token admin guard.
 * Reads ADMIN_SECRET from env and compares it to the Authorization header.
 * Returns false when ADMIN_SECRET is unset so the endpoint stays locked.
 */
export function isAdmin(req: NextRequest): boolean {
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  return !!process.env.ADMIN_SECRET && token === process.env.ADMIN_SECRET;
}
