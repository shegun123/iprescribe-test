import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import more from "../../../assets/more.svg"

// Type for your dataset
interface StatData {
  active_doctors_vs_patients?: {
    categories?: string[];
    series?: { data?: number[] }[] | undefined;
  };
}

interface DatasetItem {
  month: string;
  doctors: number;
  patients: number;
  [key: string]: string | number;
}

interface Props {
  statData: StatData;
}

export default function ActiveDoctorsPatientsChart({ statData } : Props) {
  // const dataset = [
  //   { month: "Jan", doctors: 68, patients: 102 },
  //   { month: "Feb", doctors: 70, patients: 30 },
  //   { month: "Mar", doctors: 45, patients: 50 },
  //   { month: "Apr", doctors: 70, patients: 88 },
  //   { month: "May", doctors: 35, patients: 25 },
  //   { month: "Jun", doctors: 68, patients: 15 },
  //   { month: "Jul", doctors: 42, patients: 28 },
  //   { month: "Aug", doctors: 70, patients: 102 },
  //   { month  : "Sep", doctors: 25, patients: 48 },
  //   { month: "Oct", doctors: 45, patients: 32 },
  //   { month: "Nov", doctors: 40, patients: 22 },
  //   { month: "Dec", doctors: 70, patients: 102 },
  // ]
  const dataset: DatasetItem[] =
    statData?.active_doctors_vs_patients?.categories?.map((month, index) => ({
      month,
      doctors: statData?.active_doctors_vs_patients?.series?.[0]?.data?.[index] || 0,
      patients: statData?.active_doctors_vs_patients?.series?.[1]?.data?.[index] || 0,
    })) || [];

  console.log(dataset);
  return (
    <Box>
      {/* Title */}
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
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
  onClick={() => {
    console.log("Image clicked");
  }}
/>
      </Box>

      {/* Chart */}
      <BarChart
        dataset={dataset}
        height={260}
        xAxis={[
          {
            dataKey: "month",
            scaleType: "band",
          },
        ]}
        series={[
          {
            dataKey: "doctors",
            label: "Doctors",
            color: "#FF9F43",
          },
          {
            dataKey: "patients",
            label: "Patients",
            color: "#00A3FF",
          },
        ]}
        grid={{ horizontal: true }}
        slotProps={{
          legend: {
            direction: "horizontal",
            position: {
              vertical: "top",
              horizontal: "end",
            },
          },
        }}
      />
    </Box>
  );
}
