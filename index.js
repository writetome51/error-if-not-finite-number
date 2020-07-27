import { notFiniteNumber } from '@writetome51/is-finite-number';


export function errorIfNotFiniteNumber(arg) {
	if (notFiniteNumber(arg)) throw new Error("Input must be a finite number of type 'number'");
}
