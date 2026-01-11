import { Button as MuiButton } from "@mui/material";

export default function Button({
  children,
  className,
  color,
  fullWidth = false,
  startIcon,
  endIcon,
  ...props
}: React.ComponentProps<typeof MuiButton>) {
  return (
    <MuiButton
      color={color}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
      className={`custom-button custom-button-${props.variant} ${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </MuiButton>
  );
}
