import React from "react";
import { cn } from "@/lib/utils";

interface BaseButtonProps {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

interface ButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {}

interface LinkButtonProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string;
}

type ButtonComponentProps = ButtonProps | LinkButtonProps;

export default function Button(props: ButtonComponentProps) {
  const { variant = "default", size = "md", className, children, ...restProps } = props;
  
  const baseClasses = "inline-flex items-center justify-center rounded-[16px] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-sm hover:shadow-md";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    outline: "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/50",
    ghost: "hover:bg-accent hover:text-accent-foreground border border-transparent hover:border-border",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  if ('href' in restProps) {
    return (
      <a
        className={classes}
        {...restProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...restProps}
    >
      {children}
    </button>
  );
}
