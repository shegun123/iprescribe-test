import React, { useRef } from "react";

type PinFieldProps = {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  labelText?: React.ReactNode;
  disabled?: boolean;
};

export default function PinField({
  value,
  onChange,
  length = 6,
  labelText,
  disabled = false,
}: PinFieldProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) return;
    const newValueArr = value.split("");
    newValueArr[idx] = val[val.length - 1];
    const newValue = newValueArr.slice(0, length);
    while (newValue.length < length) newValue.push("");
    onChange(newValue.join(""));
    if (val && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace") {
      if (value[idx]) {
        const newValueArr = value.split("");
        newValueArr[idx] = "";
        onChange(newValueArr.join(""));
      } else if (idx > 0) {
        inputsRef.current[idx - 1]?.focus();
        const newValueArr = value.split("");
        newValueArr[idx - 1] = "";
        onChange(newValueArr.join(""));
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    } else if (e.key === "ArrowRight" && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  // Ensure value is always a string of the correct length
  let safeValue = value || "";
  if (safeValue.length < length) {
    safeValue = safeValue.padEnd(length, "");
  } else if (safeValue.length > length) {
    safeValue = safeValue.slice(0, length);
  }

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
      <div style={{ display: "flex", gap: "0.5em", justifyContent: "center" }}>
        {Array.from({ length }).map((_, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputsRef.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={safeValue[idx] || ""}
            onChange={(e) => handleInputChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            disabled={disabled}
            style={{
              width: "47.5px",
              height: "47.5px",
              textAlign: "center",
              fontSize: "1.5em",
              borderRadius: "8px",
              border: "1px solid #D9EDEA",
              background: "#FFFFFF",
              outline: "none",
              fontWeight: 500,
              color: "#101828",
            }}
            autoComplete="one-time-code"
          />
        ))}
      </div>
    </div>
  );
}
