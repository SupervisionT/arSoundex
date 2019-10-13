import test from 'ava';
import arSoundexCJS from '../bundle';
import arSoundexESM from '../bundle/index.esm';

test('Make sure function works as expected in CJS bundle', t => {
  t.is(arSoundexCJS('ضربوه', 6, 1), 'x26700');
  t.is(arSoundexCJS('ضرب', 6, 1), 'x26700');
});

test('Make sure function works as expected in ESM bundle', t => {
  t.is(arSoundexESM('ضربوه', 6, 1), 'x26700');
  t.is(arSoundexESM('ضرب', 6, 1), 'x26700');
});
