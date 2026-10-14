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
    "inline-flex items-center font-medium rounded-full select-none";

  const variantStyles = {
    default: "bg-[#F0E8D8] text-[#5C4E42]",
    saffron: "bg-[#FFF3E0] text-[#C06B00] border border-[#F5A020]/30",
    sprout: "bg-[#E8F5E9] text-[#2E7D32] border border-[#43A047]/30",
    outline: "border border-[#DED0BC] text-[#5C4E42] bg-white",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
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
