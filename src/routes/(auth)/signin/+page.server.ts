import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	/**
	 * Redirect to Dashboard page if logged in
	 */
	if (locals.user) {
		throw redirect(302, '/dashboard');
	}
};
