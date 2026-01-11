import { Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

interface TextProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  fw?: number | string;
  fs?: number | string;
  color?: string;
  ff?: string;
  ta?: "left" | "right" | "center" | "justify" | "inherit";
  onClick?: () => void;
  [x: string]: unknown;
}

export default function Text({
  children,
  sx,
  fw,
  fs,
  color,
  ff = "typography.fontFamily",
  ta = "inherit",
  onClick,
  ...props
}: TextProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontWeight: fw,
        fontSize: fs,
        fontFamily: ff,
        color,
        textAlign: ta,
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
}
