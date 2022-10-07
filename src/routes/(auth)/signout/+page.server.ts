import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	/**
	 * Redirect to Home page if not signed in
	 */
	if (!locals.user) {
		throw redirect(302, '/');
	}

	/**
	 * Eat the cookie
	 */
	cookies.set('AuthorizationToken', '', {
		path: '/',
		expires: new Date(0)
	});
};
