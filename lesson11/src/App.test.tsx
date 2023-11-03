import {screen} from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import App from './App.tsx';
import { render, userEvent } from './utils/test-utils.tsx';

describe('App component', () => {
  it('should render header', () => {
    render(<App />)

    expect(screen.getByText(/hello vite \+ react!/i)).toBeInTheDocument()
  })

  // the same as `it`
  test('should increment counter', async () => {
    render(<App />)

    const button = screen.getByRole('button')

    await userEvent.click(button)
    // await userEvent.click(button)

    expect(screen.getByText('count is: 1')).toBeInTheDocument()
    // expect(screen.getByText('count is: 2')).toBeInTheDocument()
  });
});
