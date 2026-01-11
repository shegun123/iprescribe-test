
import {
  Box,
  
  Typography,
  Stack,

} from "@mui/material";
import more from "../../../assets/more.svg"
import { useTheme, useMediaQuery } from "@mui/material";


const DATA = [
  { label: "Pediatrics", value: 45, color: "#00C9A7" },
  { label: "Cardiology", value: 30, color: "#4C6EF5" },
  { label: "Surgery", value: 15, color: "#FF9F43" },
  { label: "Others", value: 10, color: "#FF6B81" },
];

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function TopSpecialties() {
  let offset = 0;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    

  return (
    <Box>
     <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#212121",
            mb: 1,
          }}
        >
          Active Doctors vs Active Patients
        </Typography>

        <img
          src={more}
          alt=""
          style={{ cursor: "pointer" }}
          // onClick={() => {
          //   console.log("Image clicked");
          // }}
        />
      </Box>

      <Stack sx={{display:"flex", flexDirection: isMobile? "column" : "row", gap:"20px"}}>
        {/* Donut Chart */}
        <Box position="relative" width={240} height={240}>
          <svg width="240" height="240" viewBox="0 0 240 240">
            {DATA.map((item) => {
              const dash = (item.value / 100) * CIRCUMFERENCE;
              const circle = (
                <circle
                  key={item.label}
                  cx="120"
                  cy="120"
                  r={RADIUS}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="20"
                  strokeDasharray={`${dash} ${CIRCUMFERENCE}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="round"
                />
              );
              offset += dash;
              return circle;
            })}
          </svg>

          {/* Center Text */}
          <Box
            position="absolute"
            inset={0}
            sx={{display: isMobile ? "none":"flex"}}
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontSize={28} fontWeight={700}>
              30%
            </Typography>
          </Box>

          {/* Tooltip */}
          <Box
            position="absolute"
            top={24}
            right={0}
            bgcolor="#1F2937"
            color="#fff"
            px={1.5}
            py={0.5}
            borderRadius={2}
            display="flex"
            alignItems="center"
            gap={0.5}
            fontSize={12}
          >
            {/* <TrendingUpIcon sx={{ fontSize: 14, color: "#22C55E" }} /> */}
            Cardiology
          </Box>
        </Box>

        {/* Stats */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap={3}
          flex={1}
        >
          {DATA.map((item) => (
            <Stack key={item.label} spacing={0.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  width={8}
                  height={8}
                  borderRadius="50%"
                  bgcolor={item.color}
                />
                <Typography fontSize={13} color="text.secondary">
                  {item.label}
                </Typography>
              </Stack>
              <Typography fontSize={22} fontWeight={700}>
                {item.value}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
