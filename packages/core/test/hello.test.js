import test from 'node:test';
import assert from 'node:assert/strict';
import { hello } from '../dist/index.js';

test('hello returns greeting', () => {
  assert.equal(hello('Superapp'), 'Hello, Superapp!');
});
