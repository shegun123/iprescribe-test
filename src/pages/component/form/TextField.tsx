import { TextField as MuiTextField } from "@mui/material";
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material";

type CustomTextFieldProps = MuiTextFieldProps & {
  labelText?: React.ReactNode;
};

export default function TextField({
  labelText,
  ...props
}: CustomTextFieldProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
      }}
    >
      {labelText && <label className="label">{labelText}</label>}
      <MuiTextField
        fullWidth
        variant="outlined"
        {...props}
        sx={{
          height: 40,
          background: "#FFFFFF",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            padding: "0",
            borderRadius: "8px",
            background: "#FFFFFF",
            border: "1px solid #D9EDEA",
            "& fieldset": {
              borderColor: "#D9EDEA",
              borderWidth: "1px",
            },
            "& input": {
              padding: "10px 14px",
              height: "20px",
              gap: "8px",
              fontFamily: "typography.fontFamily",
              fontSize: "14px",
              fontWeight: 500,
              color: "#101828",
            },
            "&::placeholder": {
              color: "#9E9E9E",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D9EDEA",
            },
          },
        }}
      />
    </div>
  );
}
