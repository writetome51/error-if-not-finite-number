import {errorIfNotFiniteNumber} from './index.js';


let errorTriggered = false;
try {
	errorIfNotFiniteNumber(Number.NEGATIVE_INFINITY);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1 passed');
else console.log('test 1 FAILED');



errorTriggered = false;
try {
	errorIfNotFiniteNumber(Number.POSITIVE_INFINITY);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


errorTriggered = false;
try {
	errorIfNotFiniteNumber(Number.NaN);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


errorTriggered = false;
try {
	errorIfNotFiniteNumber('1');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');



errorTriggered = false;
try {
	errorIfNotFiniteNumber('');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5A passed');
else console.log('test 5A FAILED');


errorTriggered = false;
try {
	errorIfNotFiniteNumber();
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5B passed');
else console.log('test 5B FAILED');


errorTriggered = false;
try {
	errorIfNotFiniteNumber(true);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5BB passed');
else console.log('test 5BB FAILED');


// should not trigger error:

errorTriggered = false;
try {
	errorIfNotFiniteNumber(Number.MAX_VALUE);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5C FAILED');
else console.log('test 5C passed');

errorTriggered = false;
try {
	errorIfNotFiniteNumber(Number.MIN_VALUE);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5D FAILED');
else console.log('test 5D passed');


errorTriggered = false;
try {
	errorIfNotFiniteNumber(-10);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 FAILED');
else console.log('test 6 passed');


errorTriggered = false;
try {
	errorIfNotFiniteNumber(-10.000000009911);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 FAILED');
else console.log('test 7 passed');



errorTriggered = false;
try {
	errorIfNotFiniteNumber(-10.9999999999999999999999999);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 FAILED');
else console.log('test 8 passed');

