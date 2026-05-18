import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

}

export const config = {
    matcher: ['/bookingss', '/facilities/:path', '/facilities-manage', '/facilities-add'],
}