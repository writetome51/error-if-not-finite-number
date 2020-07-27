import {errorIfNotFiniteNumber} from './index.js';


let errorTriggered = false;
try {
	errorIfNotFiniteNumber(Number.NaN);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1 passed');
else console.log('test 1 FAILED');


errorTriggered = false;
try {
	errorIfNotFiniteNumber('1');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


errorTriggered = false;
try {
	errorIfNotFiniteNumber(-10);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 FAILED');
else console.log('test 3 passed');


errorTriggered = false;
try {
	errorIfNotFiniteNumber(-10.000000009911);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 FAILED');
else console.log('test 4 passed');
