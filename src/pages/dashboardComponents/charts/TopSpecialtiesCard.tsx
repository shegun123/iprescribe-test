import {
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import more from "../../../assets/more.svg";

/* ---------- Constants ---------- */
const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/* ---------- Types ---------- */
interface SeriesItem {
  name: string;
  data: number[];
}

interface StatData {
  series: SeriesItem[];
}

interface DonutItem {
  label: string;
  value: number;
  percent: number;
  color: string;
}

interface Props {
  statData?: StatData;
}

/* ---------- Component ---------- */
export default function TopSpecialties({ statData }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* ---------- Extract API Data ---------- */
  const doctors =
    statData?.series
      ?.find((i: SeriesItem) => i.name === "Active Doctors")
      ?.data?.[0] ?? 0;

  const patients =
    statData?.series
      ?.find((i: SeriesItem) => i.name === "Active Patients")
      ?.data?.[0] ?? 0;

  const total = doctors + patients;
  const hasData = total > 0;

  /* ---------- Chart Data ---------- */
  const DATA: DonutItem[] = hasData
    ? [
        {
          label: "Active Doctors",
          value: doctors,
          percent: Math.round((doctors / total) * 100),
          color: "#4C6EF5",
        },
        {
          label: "Active Patients",
          value: patients,
          percent: Math.round((patients / total) * 100),
          color: "#00C9A7",
        },
      ]
    : [];

  let offset = 0;

  return (
    <Box>
      {/* ---------- Header ---------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography fontSize="15px" fontWeight={600} color="#212121">
          Active Doctors vs Active Patients
        </Typography>

        <img src={more} alt="more" style={{ cursor: "pointer" }} />
      </Box>

      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={3}
        alignItems="center"
      >
        {/* ---------- Donut Chart ---------- */}
        <Box position="relative" width={240} height={240}>
          <svg width="240" height="240" viewBox="0 0 240 240">
            {/* --- Base Ring --- */}
            <circle
              cx="120"
              cy="120"
              r={RADIUS}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="20"
              strokeDasharray={!hasData ? "6 6" : "none"}
            />

            {/* --- Data Rings --- */}
            {hasData &&
              DATA.map((item: DonutItem) => {
                const dash = (item.percent / 100) * CIRCUMFERENCE;

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

          {/* ---------- Center Text ---------- */}
          <Box
            position="absolute"
            sx={{
              inset: 0, // ✅ FIXED (must be inside sx)
              display: isMobile ? "none" : "flex",
            }}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            {hasData ? (
              <>
                <Typography fontSize={26} fontWeight={700}>
                  {DATA[0].percent}%
                </Typography>
                <Typography fontSize={12} color="text.secondary">
                  Doctors
                </Typography>
              </>
            ) : (
              <>
                <Typography fontSize={20} fontWeight={600} color="#6B7280">
                  0%
                </Typography>
                <Typography fontSize={12} color="#9CA3AF">
                  No data yet
                </Typography>
              </>
            )}
          </Box>
        </Box>

        {/* ---------- Stats ---------- */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap={3}
          width="100%"
        >
          {(hasData
            ? DATA
            : [
                {
                  label: "Active Doctors",
                  value: 0,
                  percent: 0,
                  color: "#4C6EF5",
                },
                {
                  label: "Active Patients",
                  value: 0,
                  percent: 0,
                  color: "#00C9A7",
                },
              ]
          ).map((item: DonutItem) => (
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

              <Typography fontSize={12} color="text.secondary">
                {item.percent}%
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
