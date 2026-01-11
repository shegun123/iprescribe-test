
import { Box, Typography } from "@mui/material";
import patientIcon from "../../assets/patientIcon.svg";
import arror from "../../assets/cardArror.svg";
import uparror from "../../assets/arrowUp.svg";
import { useTheme, useMediaQuery } from "@mui/material";

const StatCard = ({ statData }) => {

   const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "9px" }}>
      {/* card 1 */}
      <Box
        sx={{
          background: "#F9F4FF",
          padding: "18px 20px",
          borderRadius: "10px",
          flex: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Typography
              sx={{
                color: "#6c7278",
                fontSize: "14px",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Total Patients
            </Typography>

            <Typography
              sx={{
                color: "#1A1C1E",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "120%",
              }}
            >
              {statData?.patients?.total_patients}
            </Typography>
          </Box>

          <img src={patientIcon} alt="PatientIcon" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            {statData?.patients?.positive ? (
              <img src={uparror} alt="arrow" />
            ) : (
              <img src={arror} alt="arrow" />
            )}
            <Typography
              sx={{
                color: "#E15C7A",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "140%",
              }}
            >
              {statData?.patients?.patients_percentage_since_last_week}%
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#6C7278",
              lineHeight: "140%",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Since last week
          </Typography>
        </Box>
      </Box>

      {/* card 2 */}
      <Box
        sx={{
          background: "#F9F4FF",
          padding: "18px 20px",
          borderRadius: "10px",
          flex: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Typography
              sx={{
                color: "#6c7278",
                fontSize: "14px",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Total Doctors
            </Typography>

            <Typography
              sx={{
                color: "#1A1C1E",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "120%",
              }}
            >
              {statData?.doctors?.total_doctors}
            </Typography>
          </Box>

          <img src={patientIcon} alt="PatientIcon" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            {/* {}
            <img src={arror} alt="arrow" /> */}

            {statData?.doctors?.positive ? (
              <img src={uparror} alt="arrow" />
            ) : (
              <img src={arror} alt="arrow" />
            )}
            <Typography
              sx={{
                color: "#E15C7A",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "140%",
              }}
            >
              {statData?.doctors?.doctors_percentage_since_last_week}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#6C7278",
              lineHeight: "140%",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Since last week
          </Typography>
        </Box>
      </Box>

      {/* card 3 */}
      <Box
        sx={{
          background: "#F9F4FF",
          padding: "18px 20px",
          borderRadius: "10px",
          flex: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Typography
              sx={{
                color: "#6c7278",
                fontSize: "14px",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Pending Reviews
            </Typography>

            <Typography
              sx={{
                color: "#1A1C1E",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "120%",
              }}
            >
              {statData?.pending_reviews?.total_pending_reviews}
            </Typography>
          </Box>

          <img src={patientIcon} alt="PatientIcon" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
          

            {statData?.pending_reviews?.positive ? (
              <img src={uparror} alt="arrow" />
            ) : (
              <img src={arror} alt="arrow" />
            )}
            <Typography
              sx={{
                color: "#E15C7A",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "140%",
              }}
            >
              {statData?.pending_reviews?.pending_reviews_percentage_since_last_week}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#6C7278",
              lineHeight: "140%",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Since last week
          </Typography>
        </Box>
      </Box>

      {/* card 4 */}
      <Box
        sx={{
          background: "#F9F4FF",
          padding: "18px 20px",
          borderRadius: "10px",
          flex: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Typography
              sx={{
                color: "#6c7278",
                fontSize: "14px",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Total Consultations
            </Typography>

            <Typography
              sx={{
                color: "#1A1C1E",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "120%",
              }}
            >
            {statData?.consultations?.total_consultations}
            </Typography>
          </Box>

          <img src={patientIcon} alt="PatientIcon" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
          {statData?.consultations?.positive ? (
              <img src={uparror} alt="arrow" />
            ) : (
              <img src={arror} alt="arrow" />
            )}
            <Typography
              sx={{
                color: "#E15C7A",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "140%",
              }}
            >
              {statData?.consultations?.consultations_percentage_since_last_week}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#6C7278",
              lineHeight: "140%",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Since last week
          </Typography>
        </Box>
      </Box>

      {/* card 5 */}
      <Box
        sx={{
          background: "#F9F4FF",
          padding: "18px 20px",
          borderRadius: "10px",
          flex: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Typography
              sx={{
                color: "#6c7278",
                fontSize: "14px",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Prescriptions Issued
            </Typography>

            <Typography
              sx={{
                color: "#1A1C1E",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "120%",
              }}
            >
              {statData?.prescriptions?.total_prescriptions}
            </Typography>
          </Box>

          <img src={patientIcon} alt="PatientIcon" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
          {statData?.prescriptions?.positive ? (
              <img src={uparror} alt="arrow" />
            ) : (
              <img src={arror} alt="arrow" />
            )}
            <Typography
              sx={{
                color: "#E15C7A",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "140%",
              }}
            >
              {statData?.prescriptions?.prescriptions_percentage_since_last_week}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#6C7278",
              lineHeight: "140%",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Since last week
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatCard;
