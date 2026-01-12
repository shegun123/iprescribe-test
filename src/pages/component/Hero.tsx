import { Box, Button, Typography } from "@mui/material";
import googleplay from "../../assets/googleplay.svg";
import appStore from "../../assets/appStore.svg";
import leftSideImage from "../../assets/leftSideImage.svg";
import readyToExplore from "../../assets/readyToExplore.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme(); // gives you access to MUI's breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: "20px", sm: "40px", md: "150px" },
        py: { xs: "38px", md: "0" },
        gap: { xs: "48px", md: "0" },
        background: "linear-gradient(180deg, #FFFFFF 0%, #D4DDFF 100%)",
      }}
    >
      {/* LEFT CONTENT */}
      <Box sx={{ maxWidth: "560px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start", // centers horizontally
          }}
        >
          <img
            src={readyToExplore}
            alt="Ready to explore"
            style={{
              maxWidth: isMobile ? "91.12%" : "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>

        <Typography
          sx={{
            color: "#212121",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            mt: "32px",
            fontSize: {
              xs: "36px",
              sm: "48px",
              md: "64px",
            },
            lineHeight: {
              xs: "44px",
              sm: "56px",
              md: "72px",
            },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Your Bridge <br />
          Between Care & <br />
          Convenience
        </Typography>

        <Typography
          sx={{
            color: "#757575",
            fontSize: "16px",
            lineHeight: "28px",
            mt: "12px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Schedule visits, communicate with care providers, and manage
          prescriptions with ease.
        </Typography>

        {/* STORE BUTTONS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: isMobile ? "10.46px" : "12px",
            mt: isMobile ? "27.27px" : "40px",
          }}
        >
          {/* Google Play */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#212121",
              borderRadius: "12px",
              px: "23px",
              py: "6px",
              display: "flex",
              gap: "8px",
              justifyContent: "flex-start",
              "&:hover": { backgroundColor: "#212121" },
            }}
          >
            <img src={googleplay} alt="Google Play" />
            <Box sx={{ textAlign: "left" }}>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    fontSize: isMobile ? "8.72px" : "10px",
                    color: "#EEF2FF",
                    fontWeight: "400",
                  }}
                >
                  Coming Soon
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMobile ? "13.95" : "16px",
                    fontWeight: 600,
                    color: "#EEF2FF",
                  }}
                >
                  Google Play
                </Typography>
              </Box>
            </Box>
          </Button>

          {/* App Store */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#212121",
              borderRadius: "12px",
              px: "23px",
              py: "6px",
              display: "flex",
              gap: "8px",
              justifyContent: "flex-start",
              "&:hover": { backgroundColor: "#212121" },
            }}
          >
            <img src={appStore} alt="App Store" />
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  fontSize: isMobile ? "8.72px" : "10px",
                  color: "#EEF2FF",
                  fontWeight: "400",
                }}
              >
                Coming Soon
              </Typography>
              <Typography
                sx={{
                  fontSize: isMobile ? "13.95" : "16px",
                  fontWeight: 600,
                  color: "#EEF2FF",
                }}
              >
                App Store
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>

      {/* RIGHT CONTENT */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "100%", md: "auto" },
        }}
      >
        <img
          src={leftSideImage}
          alt="App preview"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
