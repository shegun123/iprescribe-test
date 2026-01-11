import { Box, Typography } from "@mui/material";
import dlogo from "../../assets/dlogo.svg";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import consuiltationIcon from "../../assets/consultationIcon.svg";
import staffUserIcon from "../../assets/staffUserIcon.svg";
import shopIcon from "../../assets/shopIcon.svg";
import PaymentIcon from "../../assets/paymentIcon.svg";
import settingsIcon from "../../assets/Settings .svg";
import roleIcon from "../../assets/rolesIcon.svg";
import activityIcon from "../../assets/taskIcon.svg";
import notificationIcon from "../../assets/notificationIcon.svg";
import webUpdateIcon from "../../assets/websiteUpdateIcon.svg";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "260px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "19px",
        paddingBottom: "19px",
        borderRight: "1px solid rgba(255,255,255,0.1)",
        background: "linear-gradient(180deg, #283C85 0%, #090E1F 100%)",
      }}
    >
      {/* Logo */}
      {/* Logo */}
      <Box
        sx={{
          paddingLeft: "21.93px",
          paddingRight: "21.93px",
          marginTop: "19px",
        }}
      >
        <img src={dlogo} alt="dashboardLogo" />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <Box sx={{ gap: "16px" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "150%",
            }}
          >
            Main Menu
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                margin: "0px",
                padding: "0px",
                gap: "5px",
                marginTop: "16px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  height: "34px",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                  width: "3px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                  borderLeft: "3px solid #283C85",
                  backgroundColor: "#FFFFFF",
                  height: "44px",
                  alignItems: "center",
                  paddingLeft: "12px",
                  borderRadius: "10px 0 0 10px",

                  width: "100%",
                }}
              >
                <img src={dashboardIcon} alt="Dashboard Icon" />
                <Typography
                  sx={{
                    color: "#283C85",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "140%",
                  }}
                >
                  Dashboard
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={consuiltationIcon} alt="consuiltationIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                User Management
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={staffUserIcon} alt="staffUserIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Consult. & Presp.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={shopIcon} alt="shopIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Pharm. & Orders Mgt.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={PaymentIcon} alt="paymentIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Payments
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <Box sx={{ gap: "16px" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "150%",
              marginTop: "36px",
            }}
          >
            Main Menu
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={settingsIcon} alt="Settings Icon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Settings
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={roleIcon} alt="rolesIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Roles & Permissions
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={activityIcon} alt="ActivityIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Activity Log
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={activityIcon} alt="ActivityIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Blog / Health Tips
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={notificationIcon} alt="notificationIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Notifications Mgt.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                height: "44px",
                alignItems: "center",
                paddingLeft: "24px",
                width: "100%",
              }}
            >
              <img src={webUpdateIcon} alt="webUpdateIcon" />
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "140%",
                }}
              >
                Website Updates
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
