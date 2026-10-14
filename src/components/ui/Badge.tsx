import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "saffron" | "sprout" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-semibold rounded-full select-none tracking-tight transition-colors duration-150";

  const variantStyles = {
    default: "bg-[#EFE7D8]/80 text-[#54483E] border border-[#DED0BC]/60",
    saffron: "bg-[#FFF4E5] text-[#C06B00] border border-[#E8850A]/25 shadow-[0_1px_3px_rgba(232,133,10,0.12)]",
    sprout: "bg-[#EBF5ED] text-[#236B2B] border border-[#236B2B]/20 shadow-[0_1px_3px_rgba(35,107,43,0.1)]",
    outline: "border border-[#DED0BC] text-[#54483E] bg-white/80 backdrop-blur-xs",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
