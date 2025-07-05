import React, { forwardRef } from 'react';
import { ButtonAsButton, ButtonAsLink, ButtonProps } from './Button.props';
import styles from './Button.module.scss'
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = 'red',
    children,
    className = '',
    as = 'button', 
    ...rest
  } = props;

  const buttonClasses = cn(
    styles.button,
    styles[`button__${variant}`],
    className
  );

  if (as === 'link') {
    const { href, onClick, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link
        href={href}
        className={buttonClasses}
        onClick={onClick}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const { disabled, onClick, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';