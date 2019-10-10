import test from 'ava';
import arSoundex from '../src';

test('Make sure algorithm works as expected', t => {
  t.is(arSoundex('ضربوه', 6, 1), 'x26700');
  t.is(arSoundex('ضرب', 6, 1), 'x26700');
});
