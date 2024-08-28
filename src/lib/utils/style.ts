export function stringifyStyleObject(style: Record<string, string>): string {
	return Object.entries(style)
		.map(([key, value]) => `${key}:${value}`)
		.join(';');
}
