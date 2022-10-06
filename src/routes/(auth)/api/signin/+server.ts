import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie';

import { signinUser } from '$lib/user.model';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();

	/**
	 * Sign in the user
	 */
	const { error, token } = await signinUser(email, password);

	if (error) {
		return {
			status: 401,
			body: {
				error
			}
		};
	}

	const authCookie = cookie.serialize('AuthorizationToken', `Bearer ${token}`, {
		httpOnly: true,
		path: '/',
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 // 1 day
	});

	return new Response(JSON.stringify({ answer: 42 }), {
		headers: {
			'content-type': 'application/json; charset=utf-8',
			'set-cookie': authCookie
		}
	});
};
