import { NextResponse } from "next/server";

export function middleware(request) {

    /* Declare dependacy variable */
    const logedin = false;
    const isAdmin = false;
    const { pathname: Pathname } = request.nextUrl;

    /* Protected Route Logic */

    // Admin Routes
    if (Pathname.startsWith('/admin')) {
        if (!logedin) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        if (!isAdmin) {
            return NextResponse.redirect(new URL('/unauthorized', request.url));
        }

    };

    // User Routes
    if (Pathname.startsWith('/user')) {

        if (!logedin) {
            return NextResponse.redirect(new URL('/', request.url));
        }

    }




    return NextResponse.next();
}



export const config = {
   
    matcher: ['/admin/:path*', '/user/:path*']
};

