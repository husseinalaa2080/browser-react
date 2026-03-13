import type { AriaRole, ReactNode } from 'react';

type StatePanelProps = {
  action?: ReactNode;
  ariaLive?: 'assertive' | 'polite';
  copy: string;
  eyebrow?: string;
  media?: ReactNode;
  role?: AriaRole;
  tone?: 'default' | 'error';
  title: string;
};

export const StatePanel = ({
  action,
  ariaLive,
  copy,
  eyebrow,
  media,
  role,
  tone = 'default',
  title,
}: StatePanelProps) => (
  <div
    aria-live={ariaLive}
    className={`state-card ${tone === 'error' ? 'state-card--error' : ''}`.trim()}
    role={role}
  >
    {media}
    {eyebrow ? <p className="state-card__eyebrow">{eyebrow}</p> : null}
    <p className="state-card__title">{title}</p>
    <p className="state-card__copy">{copy}</p>
    {action}
  </div>
);
