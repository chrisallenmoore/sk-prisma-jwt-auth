import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { db } from '$lib/db';

const signupUser = async (email: string, password: string) => {
	try {
		const user = await db.user.create({
			data: {
				email,
				password: await bcrypt.hash(password, 10)
			}
		});

		return { user };
	} catch (error) {
		return {
			error: 'Something went wrong'
		};
	}
};

const signinUser = async (email: string, password: string) => {
	/**
	 * Check if user exists
	 */
	const user = await db.user.findUnique({
		where: {
			email
		}
	});

	if (!user) {
		return {
			error: 'Invalid credentials'
		};
	}

	/**
	 * Verify the password
	 */
	const passwordIsValid = await bcrypt.compare(password, user.password);

	if (!passwordIsValid) {
		return {
			error: 'Invalid credentials'
		};
	}

	const jwtUser = {
		id: user.id,
		email: user.email
	};

	const token = jwt.sign(jwtUser, import.meta.env.VITE_JWT_ACCESS_SECRET, {
		expiresIn: '1d'
	});

	return { token };
};

export { signupUser, signinUser };
