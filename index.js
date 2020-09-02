import { not } from '@writetome51/not';


export function errorIfNotFiniteNumber(arg) {
	if (not(Number.isFinite(arg))) throw new Error("Input must be a finite number of type 'number'");
}
