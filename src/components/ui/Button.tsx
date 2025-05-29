import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded focus:outline-none transition px-3 py-4';

  const variantStyles: Record<Variant, string> = {
    primary: 'bg-black text-white hover:bg-gray-900 focus:bg-gray-800',
    secondary:
      'bg-white text-black hover:bg-gray-100 focus:bg-gray-200 border border-gray-200'
  };

  const sizeStyles: Record<Size, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
