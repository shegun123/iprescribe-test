import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import more from "../../../assets/more.svg";

/* ---------- Types ---------- */
interface ConsultationItem {
  month: string;
  count: number;
}

interface StatData {
  consultationOverTime: ConsultationItem[];
}

interface Props {
  statData?: StatData;
}

/* ---------- Component ---------- */
export default function ConsultationOverTimeCard({ statData }: Props) {
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#6B7280",
          }}
        >
          Consultation Over Time
        </Typography>

        <img
          src={more}
          alt="More options"
          style={{ cursor: "pointer" }}
        />
      </Box>

      {/* Chart */}
      <LineChart
        height={260}
        series={[
          {
            data: statData
              ? statData.consultationOverTime.map(
                  (c: ConsultationItem) => c.count
                )
              : [],
            area: true,
            color: "#0095FF",
            curve: "monotoneX",
          },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: statData
              ? statData.consultationOverTime.map(
                  (c: ConsultationItem) => c.month
                )
              : [],
            tickLabelStyle: {
              fill: "#9CA3AF",
              fontSize: 12,
            },
          },
        ]}
        yAxis={[
          {
            min: 0,
            max: 100,
            tickLabelStyle: {
              fill: "#9CA3AF",
              fontSize: 12,
            },
          },
        ]}
        grid={{ horizontal: true }}
        slotProps={{
          legend: { position: "none" }, // ✅ FIXED
          tooltip: {
            sx: {
              backgroundColor: "#111827",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "13px",
              padding: "8px 12px",
            },
          },
        }}
        sx={{
          "& .MuiAreaElement-root": {
            fill: "url(#area-gradient)",
          },
          "& .MuiLineElement-root": {
            strokeWidth: 3,
          },
          "& .MuiMarkElement-root": {
            stroke: "#0095FF",
            fill: "#fff",
            strokeWidth: 2,
            r: 5,
          },
        }}
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0095FF" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#0095FF" stopOpacity={0} />
          </linearGradient>
        </defs>
      </LineChart>
    </Box>
  );
}
