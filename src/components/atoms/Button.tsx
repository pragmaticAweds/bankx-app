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
};

const StyledButton = tw.button``;

const Button = ({
  label,
  isOutline,
  wide,
  suffixIcon,
  prefixIcon,
  buttonSize,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={clsx(
        "rounded outline-none",
        isOutline
          ? "border-def-black bg-white"
          : "bg-[#171717] text-white text-sm border-none",
        buttonSize === "large"
          ? "px-6 py-3"
          : buttonSize === "small"
          ? "px-2 py-1"
          : "px-3 py-2"
      )}
    >
      {prefixIcon ? prefixIcon : null}
      {label || ""}
      {suffixIcon ? suffixIcon : null}
    </button>
  );
};

export default Button;
