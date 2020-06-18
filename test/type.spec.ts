import { describe, expect, it } from '@jest/globals';

describe('Basic Types', () => {
  it('Enum#number', () => {
    enum Color {
      Red,
      Green,
      Blue
    };

    let c: Color = Color.Green;

    expect(c).toBe(1);
  })

  it('Enum#name', () => {
    enum Color {
      Red = 1,
      Green,
      Blue
    };

    let colorName: string = Color[2];

    expect(colorName).toBe('Green');
  })
});

describe('async Test', () => {
  it('axios 테스트', () => {
    
  });
});