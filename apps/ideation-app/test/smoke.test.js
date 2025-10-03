import test from 'node:test';
import assert from 'node:assert/strict';
import { hello } from '@superapp/core';

test('app can import @superapp/core', () => {
  assert.equal(typeof hello, 'function');
});
