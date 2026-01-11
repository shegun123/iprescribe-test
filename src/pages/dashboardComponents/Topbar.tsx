import { Box, Divider, Typography, Drawer } from "@mui/material";
import notificationIcon from "../../assets/TBnotificationIcon.svg";
import dropDownIcon from "../../assets/dropdownArrow.svg";
import profilePicture from "../../assets/profilePictureIcon.svg";
import menu from "../../assets/menu.svg";
import { useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Topbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      position={"fixed"}
      sx={{
        boxSizing: "border-box",
        width: "fit-content",
        marginLeft: isMobile ? "0" : "260px",
        zIndex: 99,
      }}
    >
      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          variant="temporary"
          sx={{ "& .MuiDrawer-paper": { width: 260 } }}
        >
          <Sidebar />
        </Drawer>
      )}

      {/* Topbar */}
      <Box
        width={isMobile ? "100vw" : "calc(100vw - 280px)"}
        bgcolor="white"
        sx={{
          height: "64px",
          boxSizing: "border-box",
          zIndex: 10,
          marginLeft: "auto",
        }}
      >
        <Box
          sx={{
            paddingTop: "12px",
            paddingBottom: "12px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* Notification icon only on desktop */}
          {!isMobile && <img src={notificationIcon} alt="NotificationIcon" />}
          {!isMobile && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ border: "1px solid #DCE4E8", marginLeft: "8px" }}
            />
          )}

          {/* Menu icon only on mobile */}
          {isMobile ? (
            <img
              src={menu}
              alt="menu"
              onClick={() => setDrawerOpen(true)}
              style={{
                cursor: "pointer",
                width: "32px",
                height: "32px",
                margin: "0 16px",
              }}
            />
          ) : (
            // Profile box on desktop
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                padding: "8px 12px",
                borderRadius: "8px",
                width: "fit-content",
                cursor: "pointer",
                marginLeft: "24px",
              }}
            >
              <img src={profilePicture} alt="profilePicture" />
              <Box
                sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "#222", whiteSpace: "nowrap" }}
                >
                  Alexandro
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#666",
                    fontWeight: 400,
                    textTransform: "capitalize",
                  }}
                >
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          {!isMobile && <img src={dropDownIcon} alt="DropDownIcon" />}
        </Box>
      </Box>
    </Box>
  );
}
