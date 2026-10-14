import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-full select-none cursor-pointer will-change-transform " +
      "transition-[transform,background-color,border-color,box-shadow,opacity] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] " +
      "active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-[#E8850A] text-white hover:bg-[#D47500] active:bg-[#B86200] focus-visible:ring-[#E8850A] shadow-[0_2px_8px_-1px_rgba(232,133,10,0.36)] hover:shadow-[0_4px_14px_-2px_rgba(232,133,10,0.45)]",
      secondary:
        "bg-[#1F1A16] text-white hover:bg-[#382F27] active:bg-[#120F0D] focus-visible:ring-[#1F1A16] shadow-sm hover:shadow-md",
      outline:
        "border border-[#DED0BC] bg-white/70 backdrop-blur-sm text-[#1F1A16] hover:bg-[#F8F4EC] hover:border-[#CDBDA6] active:bg-[#EFE7D8] focus-visible:ring-[#E8850A] shadow-xs",
      ghost:
        "bg-transparent text-[#1F1A16] hover:bg-[#F0E8D8]/70 active:bg-[#E8DCB8] focus-visible:ring-[#E8850A]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 tracking-tight",
      md: "text-sm px-5 py-2.5 gap-2 tracking-tight",
      lg: "text-base px-7 py-3.5 gap-2.5 tracking-tight font-bold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
