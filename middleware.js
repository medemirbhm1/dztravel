import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = Boolean(req.cookies.get("refresh"));
  let url = req.url;

  if (!verify && url.includes("/app")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (
    verify &&
    (url === "http://localhost:3000/" ||
      url.includes("/login") ||
      url.includes("/signup"))
  ) {
    return NextResponse.redirect("http://localhost:3000/app");
  }
}
