import { writable } from 'svelte/store';
export function localStore(key, defaultValue) {
	const store = writable(key);
	const { subscribe, set, update } = store;
	const isBrowser = typeof window !== 'undefined';
	set(defaultValue);
	isBrowser &&
		localStorage.getItem(key) &&
		set(JSON.parse(localStorage.getItem(key)));
	return {
		subscribe,
		set: (n) => {
			isBrowser && localStorage.setItem(key, JSON.stringify(n));
			set(n);
		},
		update: (cb) => {
			const updatedStore = cb(get(store));
			isBrowser && localStorage.setItem(key, JSON.stringify(updatedStore));
			set(updatedStore);
		}
	};
}
