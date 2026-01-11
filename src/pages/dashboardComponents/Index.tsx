import { Box } from "@mui/material";
import StatCard from "./StatCard";
import BarsDataset from "./charts/BarsDataset";
import AccessibleTable from "./charts/tables/AccessibleTable";
import Consultation from "./charts/ConsultationOverTimeCard";
import DonutChart from "./charts/TopSpecialtiesCard";
import HeadingUpDate from "./HeadingUpDate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../../store";
import PrescriptionVolumeTrendCard from "./charts/PrescriptionVolumeTrendCard";
import { useTheme, useMediaQuery } from "@mui/material";

const DashboardComponent = () => {

   const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { token } = useAuthStore();
  const { data: statData } = useQuery({
    queryKey: ["stats-data"],
    queryFn: async () => {
      const response = await axios.get(
        "https://stagingapi.iprescribe.online/api/v1/admin/dashboard/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.data;
    },
    retry: 3,
    retryDelay: 100,
  });

  return (
    <Box
      sx={{
        marginTop: "64px",
        flex: "1",
        paddingTop: "13px",
        paddingLeft: "26px",
        paddingRight: "18px",
      }}
    >
      <HeadingUpDate />

      <StatCard statData={statData} />

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile? "column":"row",
          gap: "20px",
          marginTop: "17px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #EBEBEB",
            gap: "41px",
            padding: "20px",
            borderRadius: "6px",
            flex: "1",
          }}
        >
          <Consultation statData={statData} />
        </Box>

        <Box
          sx={{
            border: "1px solid #EBEBEB",
            gap: "41px",
            padding: "20px",
            borderRadius: "6px",
            flex: "1",
          }}
        >
          <PrescriptionVolumeTrendCard statData={statData} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile?"column":"row",
          gap: "20px",
          marginTop: "17px",
          marginBottom: "17px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #EBEBEB",
            gap: "41px",
            padding: "20px",
            borderRadius: "6px",
            flex: "1",
          }}
        >
          <BarsDataset statData={statData} />
        </Box>

        <Box
          sx={{
            border: "1px solid #EBEBEB",
            gap: "41px",
            padding: "20px",
            borderRadius: "6px",
            flex: "1",
          }}
        >
          <DonutChart statData={statData} />
        </Box>
      </Box>

      <AccessibleTable />
    </Box>
  );
};

export default DashboardComponent;
