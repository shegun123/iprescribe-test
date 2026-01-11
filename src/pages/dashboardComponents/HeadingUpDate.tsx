import { Box, Button, Typography } from "@mui/material";
// import React from 'react'
import calender from "../../assets/calender.svg";
import { useTheme, useMediaQuery } from "@mui/material";

const HeadingUpDate = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "17px",
        width:"100%"
        
      }}
    >
      <Box sx={{width:isMobile ?"100%" : "auto", marginBottom:"10px"}}>
        <Typography
          sx={{
            color: "#1A1C1E",

            fontSize: "18px",
            fontWeight: "600",
            letterSpacing: "0.2px",
          }}
        >
          Dashboard{" "}
        </Typography>

        <Typography
          sx={{ color: "#6C7278", fontSize: "14px", fontWeight: "500" }}
        >
          Latest update for the last 7 days. check now
        </Typography>
      </Box>

      {/* Left */}
      {/* Left */}
      {/* Left */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: "9px",
          width:"100%",
          justifyContent:"flex-end"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "8.29px",
            border: "0.83px solid #DCE4E8",
            paddingX: isMobile ? "12px" : "19.9px",
            paddingY: "10.78px",
            borderRadius: "8.29px",
            
          }}
        >
          <img src={calender} alt="calanderIcon" />
          <Typography sx={{ color: "#1A1C1E", font: "500", fontSize: "14px" }}>
            12th Sept - 15th Sept, 2025
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: "60px",
            backgroundColor: "#283C85",
            paddingX: "26.54px",
            paddingY: "13.27px",
            borderRadius: "9.95px",
            width: isMobile ? "100%" : "auto"

          }}
        >
          Export
        </Button>
      </Box>
    </Box>
  );
};

export default HeadingUpDate;
