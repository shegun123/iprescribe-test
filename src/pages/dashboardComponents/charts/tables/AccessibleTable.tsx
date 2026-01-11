import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../../../../store";

/* ---------- Helpers ---------- */
const formatDate = (date) => {
  if (!date) return "N/A";
  return new Date(date).toISOString().split("T")[0];
};

/* ---------- Component ---------- */
export default function RecentPatientsTable() {
  const { token } = useAuthStore();

  const { data: patientData, isLoading } = useQuery({
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
      <TableContainer>
        <Table>
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
              {[
                "#",
                "Sign Up Date",
                "Patient Name",
                "Email Address",
                "Phone Number",
                "Last Seen Date",
                "Location",
                "Device",
                "Status",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#6C7278",
                    borderBottom: "1px solid #E6E8EC",
                  }}
                >
                  {header}
                </TableCell>
              ))}
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

            {patientData?.data?.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#EEF2FF",
                  "& td": {
                    borderBottom: "1px solid #F0F0F0",
                    fontSize: "14px",
                    color: "#212121",
                  },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{formatDate(row.created_at)}</TableCell>
                <TableCell>{row.first_name || "N/A"}</TableCell>
                <TableCell>{row.email || "N/A"}</TableCell>
                <TableCell>{row.phone || "N/A"}</TableCell>
                <TableCell>{formatDate(row.last_seen)}</TableCell>
                <TableCell>{row.state || "N/A"}</TableCell>
                <TableCell>{row.device || "N/A"}</TableCell>

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
                      backgroundColor:
                        row.status === "pending" ? "#ECF8F0CC" : "#ECF8F0CC",
                      color: row.status === "pending" ? "#1C8C6E" : "#1C8C6E",
                    }}
                  >
                    {row.status}
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
