import { Ok, Err, type Result } from 'oxide.ts';

export const tryResult = <T>(fn: () => T): Result<T, unknown> => {
	try {
		return Ok(fn());
	} catch (err) {
		return Err(err);
	}
};

export const asyncTryResult = async <T>(fn: () => Promise<T>): Promise<Result<T, unknown>> => {
	try {
		return Ok(await fn());
	} catch (err) {
		return Err(err);
	}
};
