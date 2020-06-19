import { describe, expect, it } from '@jest/globals';
import { asyncTestFunc } from '../src/test/asyncTest';

describe('Basic Types', () => {
  it('Enum#number', () => {
    enum Color {
      Red,
      Green,
      Blue
    };

    let c: Color = Color.Green;

    expect(c).toBe(1);
  });

  it('Enum#name', () => {
    enum Color {
      Red = 1,
      Green,
      Blue
    };

    let colorName: string = Color[2];

    expect(colorName).toBe('Green');
  });

  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  it('undefined', () => {
    const z = undefined;
    expect(z).not.toBeNull();
    expect(z).not.toBeDefined();
    expect(z).toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

describe('async/await', () => {
  it('asyncTestFunc()', async () => {
    const data = await asyncTestFunc();
    expect(data).toBe('hello world');
  });
});