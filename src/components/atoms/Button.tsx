import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from "react";
import clsx from "clsx";
import tw from "tw-tailwind";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label?: string;
  isOutline?: boolean;
  wide?: boolean;
  buttonSize?: "large" | "small";
  suffixIcon?: ReactElement;
  prefixIcon?: ReactElement;
  styles?: string;
};

const StyledButton = tw.button``;

const Button = ({
  label,
  isOutline,
  wide,
  suffixIcon,
  prefixIcon,
  buttonSize,
  styles,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={clsx(
        "rounded outline-none",
        isOutline
          ? "border-def-black bg-white hover:bg-def-black hover:text-white hover:border hover:border-white"
          : "bg-def-black text-white text-sm hover:bg-white hover:text-black hover:border hover:border-black",
        buttonSize === "large"
          ? "px-6 py-3"
          : buttonSize === "small"
          ? "px-2 py-1"
          : "w-max px-4 h-10",
        styles
      )}
    >
      {prefixIcon ? prefixIcon : null}
      {label || ""}
      {suffixIcon ? suffixIcon : null}
    </button>
  );
};

export default Button;
