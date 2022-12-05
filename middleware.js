import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export default async function middleware(req) {
  if (req.nextUrl.pathname.includes("/admin/dashboard/noticias")) {
    const data = req.cookies.get("adminCookie");
    if (!data) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    try {
      const encoder = new TextEncoder();
      await jwtVerify(
        data.value,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
      );
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  return NextResponse.next();
}