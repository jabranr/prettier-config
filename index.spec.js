import { test, describe, it } from 'node:test';
import assert from 'node:assert';
import prettierConfig from './index.js';

describe('Prettier configuration', () => {
  it('should export an object', () => {
    assert.strictEqual(typeof prettierConfig, 'object');
  });
  it('should have trailing commas set to none', () => {
    assert.strictEqual(prettierConfig.trailingComma, 'none');
  });

  it('should have semicolons enabled', () => {
    assert.strictEqual(prettierConfig.semi, true);
  });

  it('should use single quotes', () => {
    assert.strictEqual(prettierConfig.singleQuote, true);
  });

  it('should have bracket spacing enabled', () => {
    assert.strictEqual(prettierConfig.bracketSpacing, true);
  });

  it('should always use arrow function parentheses', () => {
    assert.strictEqual(prettierConfig.arrowParens, 'always');
  });

  it('should have print width set to 80', () => {
    assert.strictEqual(prettierConfig.printWidth, 80);
  });

  it('should have tab width set to 2', () => {
    assert.strictEqual(prettierConfig.tabWidth, 2);
  });

  it('should use LF line endings', () => {
    assert.strictEqual(prettierConfig.endOfLine, 'lf');
  });
});
