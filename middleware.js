import { NextResponse } from "next/server";

export function middleware(request) {

    const userCookie = request.cookies.get("user");
    const logedin = userCookie?.value === "true";

    const { pathname: Pathname } = request.nextUrl;

    // Admin Routes
    if (Pathname.startsWith('/admin')) {
        if (!logedin) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Login route
    if (Pathname.startsWith('/login')) {
        if (logedin) {
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/login'],
};
