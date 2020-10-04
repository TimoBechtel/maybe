Object.defineProperty(globalThis, 'maybe', {
	get: () => Math.random() < 0.5,
});
