import Sidebar from "./dashboardComponents/Sidebar";
import Topbar from "./dashboardComponents/Topbar";
import { Box } from "@mui/material";
import DashboardComponent from "./dashboardComponents/Index";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {/* Body */}
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        {!isMobile && <Sidebar />}
        <Topbar />

        {/* Main content (ONLY THIS SCROLLS) */}
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <DashboardComponent />
        </Box>
      </Box>
    </>
  );
}
