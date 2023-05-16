import { NextResponse } from "next/server";
const url = require("url");

export default function middleware(req) {
  let verify = Boolean(req.cookies.get("refresh"));
  const { pathname, host } = url.parse(req.url);

  if (!verify && (pathname.includes("/details") || pathname.includes("/app"))) {
    return NextResponse.redirect(host);
  }
  if (verify && pathname == "/") {
    return NextResponse.redirect(req.url + "/app");
  }
  if (verify && pathname == "/login") {
    return NextResponse.redirect(req.url.split("/login")[0] + "/app");
  }
  if (verify && pathname == "/signup") {
    return NextResponse.redirect(req.url.split("/signup")[0] + "/app");
  }
}
