import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import type { LineSeries } from "@mui/x-charts/LineChart"; // type-only import
import more from "../../../assets/more.svg";

interface TrendItem {
  month: string;
  count: number;
}

interface PrescriptionVolumeTrendData {
  prescriptionVolumeTrend: TrendItem[];
}

interface Props {
  statData: PrescriptionVolumeTrendData | null;
}

export default function PrescriptionVolumeTrendCard({ statData }: Props) {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#6B7280" }}>
          Prescription Volume Trend
        </Typography>
        <img src={more} alt="" style={{ cursor: "pointer" }} />
      </Box>

      {/* Chart */}
      <LineChart
        height={260}
        series={[
          {
            data: statData?.prescriptionVolumeTrend.map((item) => item.count) || [],
            area: true,
            color: "#22C55E",
            curve: "monotoneX",
          } as LineSeries,
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: statData?.prescriptionVolumeTrend.map((item) => item.month) || [],
            tickLabelStyle: { fill: "#9CA3AF", fontSize: 12 },
          },
        ]}
        yAxis={[{ min: 0, max: 100, tickLabelStyle: { fill: "#9CA3AF", fontSize: 12 } }]}
        grid={{ horizontal: true }}
        slotProps={{
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
          "& .MuiAreaElement-root": { fill: "url(#green-area-gradient)" },
          "& .MuiLineElement-root": { strokeWidth: 3 },
          "& .MuiMarkElement-root": { stroke: "#22C55E", fill: "#fff", strokeWidth: 2, r: 5 },
        }}
      >
        <defs>
          <linearGradient id="green-area-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22C55E" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
          </linearGradient>
        </defs>
      </LineChart>
    </Box>
  );
}
