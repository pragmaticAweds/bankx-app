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
        "rounded outline-none whitespace-nowrap cursor-pointer max-w-max px-4",
        isOutline
          ? "border-def-black bg-white  hover:text-white hover:bg-gray-600"
          : "bg-gray-600 text-white hover:bg-white hover:text-black border-none",
        buttonSize === "large"
          ? "h-[2.75rem] text-lg"
          : buttonSize === "small"
          ? "h-8 text-sm"
          : "h-10",
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
