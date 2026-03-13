export const getOffsetFromNextUrl = (value: string | null) => {
  if (!value) {
    return null;
  }

  const nextUrl = new URL(value);
  const offsetValue = nextUrl.searchParams.get('offset');

  if (!offsetValue) {
    return null;
  }

  const offset = Number(offsetValue);
  return Number.isInteger(offset) && offset >= 0 ? offset : null;
};
