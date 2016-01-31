import test from 'ava';
import k from './';

test(t => {
	t.is(k(1), -457.87);
});

test(t => {
	t.is(k(278), 40.73);
});

test(t => {
	t.is(k(300), 80.33);
});

test(t => {
	t.not(k(20), '-253.15');
});

test(t => {
	t.not(k(45), -368.15);
});
