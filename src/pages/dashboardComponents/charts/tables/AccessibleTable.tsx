import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../../../../store";

/* ---------- Types ---------- */
interface Patient {
  id: number;
  created_at: string;
  first_name: string | null;
  email: string | null;
  phone: string | null;
  last_seen: string | null;
  state: string | null;
  device: string | null;
  status: string | null;
}

/* ---------- Helpers ---------- */
const formatDate = (date?: string | null): string => {
  if (!date) return "N/A";
  return new Date(date).toISOString().split("T")[0];
};

/* ---------- Component ---------- */
export default function RecentPatientsTable() {
  const { token } = useAuthStore();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { data: patientData, isLoading } = useQuery<{
    data: Patient[];
  }>({
    queryKey: ["patient-data"],
    queryFn: async () => {
      const response = await axios.get(
        "https://stagingapi.iprescribe.online/api/v1/admin/patients",
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
        borderRadius: "12px",
        border: "1px solid #EBEBEB",
        padding: "20px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: isMobile ? 600 : 1200 }}>
          {/* -------- Title Row -------- */}
          <TableHead>
            <TableRow>
              <TableCell colSpan={9} sx={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#212121",
                    }}
                  >
                    Recent Patients Sign Up
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#3F5BD9",
                      cursor: "pointer",
                    }}
                  >
                    See All →
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>

            {/* -------- Column Headers -------- */}
            <TableRow sx={{ backgroundColor: "#F4F7FF" }}>
              <TableCell>#</TableCell>
              <TableCell>Sign Up Date</TableCell>
              <TableCell>Patient Name</TableCell>

              {!isMobile && <TableCell>Email Address</TableCell>}
              {!isMobile && <TableCell>Phone Number</TableCell>}
              {!isMobile && <TableCell>Last Seen Date</TableCell>}
              {!isMobile && <TableCell>Location</TableCell>}
              {!isMobile && <TableCell>Device</TableCell>}

              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          {/* -------- Table Body -------- */}
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            )}

            {patientData?.data?.map((row: Patient, index: number) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#EEF2FF",
                  "& td": {
                    borderBottom: "1px solid #F0F0F0",
                    fontSize: "14px",
                    color: "#212121",
                    whiteSpace: "nowrap",
                  },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{formatDate(row.created_at)}</TableCell>
                <TableCell>{row.first_name || "N/A"}</TableCell>

                {!isMobile && <TableCell>{row.email || "N/A"}</TableCell>}
                {!isMobile && <TableCell>{row.phone || "N/A"}</TableCell>}
                {!isMobile && (
                  <TableCell>{formatDate(row.last_seen)}</TableCell>
                )}
                {!isMobile && <TableCell>{row.state || "N/A"}</TableCell>}
                {!isMobile && <TableCell>{row.device || "N/A"}</TableCell>}

                {/* -------- Status Badge -------- */}
                <TableCell>
                  <Box
                    sx={{
                      display: "inline-block",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      backgroundColor: "#ECF8F0CC",
                      color: "#1C8C6E",
                    }}
                  >
                    {row.status || "N/A"}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
