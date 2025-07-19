import { LinkProps } from 'next/link';
import { MouseEventHandler } from 'react';

export type BaseProps = {
  variant?: 'red' | 'white' | 'outline' | 'green' | 'blue';
  isLoading?: boolean;
  className?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  children: React.ReactNode;
};

export type ButtonAsButton = BaseProps & {
  as?: 'button';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonAsLink = BaseProps & {
  as: 'link';
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
} & Omit<LinkProps, 'href' | 'onClick'>;

export type ButtonProps = ButtonAsButton | ButtonAsLink;