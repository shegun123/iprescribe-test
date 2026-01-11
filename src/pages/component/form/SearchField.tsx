import { TextField as MuiTextField, InputAdornment } from "@mui/material";
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material";

type CustomTextFieldProps = MuiTextFieldProps & {
  labelText?: React.ReactNode;
};

export default function SearchField({
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
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" sx={{ paddingLeft: "14px" }}>
                <img src="/icons/search.svg" alt="search" />
              </InputAdornment>
            ),
          },
        }}
        {...props}
        sx={{
          height: 40,
          background: "#FFFFFF",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            padding: "0",
            borderRadius: "8px",
            background: "#FFFFFF",
            border: "1px solid primary.light",
            "& fieldset": {
              borderColor: "primary.light",
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
            "& placeholder": {
              color: "#9E9E9E",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />
    </div>
  );
}
