import test from 'node:test';
import assert from 'node:assert/strict';
import { hello } from '../src/index.js';

test('hello returns greeting', () => {
  assert.equal(hello('Superapp'), 'Hello, Superapp!');
});
