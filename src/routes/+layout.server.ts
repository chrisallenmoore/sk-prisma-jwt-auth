import type { LayoutServerLoad } from './$types';

/**
 * Get `locals.user` and pass it to the `page` store
 */
export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		user: locals.user
	};
};
