import { z } from 'zod';

import { ApiError } from '@/utils/http/ApiError';

export const getJson = async <TSchema extends z.ZodTypeAny>(
  input: RequestInfo | URL,
  schema: TSchema,
): Promise<z.infer<TSchema>> => {
  const response = await fetch(input);

  if (!response.ok) {
    throw new ApiError(`Request failed with status ${response.status}.`, response.status);
  }

  const payload: unknown = await response.json();
  return schema.parse(payload);
};
