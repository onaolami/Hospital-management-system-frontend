import { useMemo } from "react";
import styles from "./styles.module.css";

interface IProps {
  size?: "DEFAULT" | "SMALL" | "LARGE";
  children?: React.ReactNode;
  variant?: "DEFAULT" | "PRIMARY";
  className?: string;
}

const Button = ({
  children,
  className,
  variant = "DEFAULT",
  size = "DEFAULT",
  ...others
}: IProps) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "SMALL":
        return styles.sizeSmall;

      case "LARGE":
        return styles.sizeLarge;

      default:
        return styles.sizeDefault;
    }
  }, [size]);

  return (
    <button
      className={`${styles.btn} ${
        variant === "DEFAULT" ? styles.variantDefault : styles.variantPrimary
      } ${sizeStyle} ${className}`}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
