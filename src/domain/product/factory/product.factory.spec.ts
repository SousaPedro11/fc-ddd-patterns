import { describe, it, expect } from '@jest/globals';
import ProductFactory from './product.factory';

describe('ProductFactory', () => {
  it('should create a product type a', () => {
    const product = ProductFactory.create('a', 'Product A', 1);
    expect(product.id).toBeDefined();
    expect(product.name).toBe('Product A');
    expect(product.price).toBe(1);
    expect(product.constructor.name).toBe('Product');
  });

  it('should create a product type b', () => {
    const product = ProductFactory.create('b', 'Product B', 1);
    expect(product.id).toBeDefined();
    expect(product.name).toBe('Product B');
    expect(product.price).toBe(2);
    expect(product.constructor.name).toBe('ProductB');
  });

  it('should throw an error for invalid product type', () => {
    expect(() => ProductFactory.create('c', 'Product C', 1)).toThrowError(
      'Product type not supported',
    );
  });
});
