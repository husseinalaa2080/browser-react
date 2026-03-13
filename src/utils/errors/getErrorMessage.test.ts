import { describe, expect, it } from 'vitest';

import { getErrorMessage } from '@/utils/errors/getErrorMessage';
import { ApiError } from '@/utils/http/ApiError';

describe('getErrorMessage', () => {
  it('maps API not found errors to user-friendly copy', () => {
    expect(getErrorMessage(new ApiError('404', 404))).toBe(
      'The requested Pokemon could not be found.',
    );
  });

  it('maps network errors to connection guidance', () => {
    expect(getErrorMessage(new TypeError('Failed to fetch'))).toBe(
      'Please check your connection and try again.',
    );
  });
});
