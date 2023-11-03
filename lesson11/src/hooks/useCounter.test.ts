import { describe, expect, it } from 'vitest';
import { renderHook, act } from '../utils/test-utils.tsx';
import { useCounter } from './useCounter.tsx';

describe('useCounter hook', () => {
  it('should return 0 as default value for counter', () => {
    const { result: { current } } = renderHook(useCounter)

    expect(current.count).toBe(0)
    expect(current.increment).toBeInstanceOf(Function)
  });

  it('should increment the counter', () => {
    const { result } = renderHook(useCounter)

    act(() => {
      result.current.increment();
    })

    expect(result.current.count).toBe(1)
  });
})
