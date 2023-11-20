import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const isLoggedRedirect = ['/login', '/register', '/']

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  async function middleware(req: NextRequestWithAuth) {
    const path = req.nextUrl.pathname;
    const { token } = req.nextauth;
    const isAuthPage = isLoggedRedirect.includes(path);
    if(!!token && isAuthPage)
        return NextResponse.redirect(new URL('/home', req.url));
    else if(!token && !isAuthPage)
        return NextResponse.redirect(new URL('/login', req.url));

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
