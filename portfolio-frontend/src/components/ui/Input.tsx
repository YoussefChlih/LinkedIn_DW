import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          className={clsx(
            'w-full px-4 py-3 rounded-lg border bg-background text-foreground',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'placeholder:text-muted-foreground',
            icon && 'pl-10',
            error ? 'border-red-500' : 'border-border',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {label}
        </label>
      )}
      <textarea
        className={clsx(
          'w-full px-4 py-3 rounded-lg border bg-background text-foreground',
          'transition-all duration-200 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'placeholder:text-muted-foreground',
          error ? 'border-red-500' : 'border-border',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
