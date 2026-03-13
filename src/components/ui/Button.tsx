import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    fullWidth?: boolean;
  }
>;

export const Button = ({
  children,
  className = '',
  fullWidth = false,
  variant = 'primary',
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={['ui-button', `ui-button--${variant}`, fullWidth && 'ui-button--full', className]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </button>
);
