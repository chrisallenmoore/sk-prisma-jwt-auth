import type { RequestHandler } from '@sveltejs/kit';

import { signupUser } from '$lib/user.model';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();

	/**
	 * Sign up a new user
	 */
	const { error } = await signupUser(email, password);

	if (error) {
		return {
			status: 500,
			body: {
				error
			}
		};
	}

	return new Response(JSON.stringify({ answer: 42 }), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
};
