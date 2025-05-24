import { Link } from "react-router-dom";
import { solidStyle, outlineStyle, baseStyle } from "../styles/buttonStyle";

export default function Button({
  children,
  onClick,
  disabled,
  type = "button",
  variant = "solid", // "solid" | "outline"
  to, // lien optionnel
  className, // classe CSS optionnelle
}) {
  const variants = {
    solid: solidStyle,
    outline: outlineStyle,
  };

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
