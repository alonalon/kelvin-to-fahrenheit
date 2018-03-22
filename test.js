import test from 'ava';
import m from '.';

test('1 is -457.87', t => {
	t.is(m(1), -457.87);
});

test('278 is 40.73', t => {
	t.is(m(278), 40.73);
});

test('300 is 80.33', t => {
	t.is(m(300), 80.33);
});

test('20 is not -253.15', t => {
	t.not(m(20), '-253.15');
});

test('45 is not -368.15', t => {
	t.not(m(45), -368.15);
});

test('throw on wrong input', t => {
	t.throws(() => m('string'), TypeError);
});
