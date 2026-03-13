import { ApiError } from '@/utils/http/ApiError';

export const getErrorMessage = (error: unknown) => {
  if (error instanceof ApiError) {
    if (error.status === 404) {
      return 'The requested Pokemon could not be found.';
    }

    if (error.status >= 500) {
      return 'The PokeAPI is having trouble right now. Please try again.';
    }

    return 'We could not complete that request. Please try again.';
  }

  if (error instanceof TypeError) {
    return 'Please check your connection and try again.';
  }

  return 'Something unexpected happened. Please try again.';
};
