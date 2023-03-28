export function calcTime(date: Date) {
	const ms = Date.now() - date.getTime();
	const hours = Math.floor(ms / 3600000) % 24;
	const seconds = Math.floor(ms / 1000) % 60;
	const minutes = Math.floor(ms / 60000) % 60;

	if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
	if (minutes > 0) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
	return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
}

export function msToString(ms: number) {
	const seconds = Math.floor(ms / 1000) % 60;
	const minutes = Math.floor(ms / 60000) % 60;

	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
