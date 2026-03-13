import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PokemonPaginationControls } from '@/features/pokemon/components/PokemonPaginationControls';

describe('PokemonPaginationControls', () => {
  it('navigates with numbered and previous buttons', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <PokemonPaginationControls
        currentPage={3}
        isBusy={false}
        onChange={onChange}
        totalPages={6}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Go to previous page' }));
    await user.click(screen.getByRole('button', { name: 'Go to page 4' }));

    expect(onChange).toHaveBeenNthCalledWith(1, 2);
    expect(onChange).toHaveBeenNthCalledWith(2, 4);
  });

  it('marks the active page for assistive tech', () => {
    render(
      <PokemonPaginationControls
        currentPage={3}
        isBusy={false}
        onChange={vi.fn()}
        totalPages={6}
      />,
    );

    expect(screen.getByRole('button', { name: 'Current page, 3' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });
});
