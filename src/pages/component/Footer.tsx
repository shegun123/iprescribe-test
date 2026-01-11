import { Box, Typography,} from "@mui/material";
import facebookIcon from "../../assets/FacebookIcon.svg";
import twitterIcon from "../../assets/TwitterIcon.svg";
import linkedInIcon from "../../assets/LinkedInIcon.svg";
import iPrescribe from "../../assets/iPrescribe.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();  
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));  
  return (
    <Box
      sx={{
        backgroundColor: "#283C85",
        color: "#fff",
      paddingBottom:"27px",
        px: { xs: 2, md: "150px" },
        
      
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          paddingTop:"35px"
        }}
      >
        {/* Logo */}
        <img src={iPrescribe} alt="iPrescribe" />

        {/* Copyright */}
        <Typography variant="body2" sx={{ color:"#EEF2FF", fontWeight:"400", fontSize:"14px", lineHight:"100%"}}>
          © {new Date().getFullYear()} iPrescribe. All rights reserved.
        </Typography>

        {/* Social icons */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: "4px", marginTop: isMobile ? "17px" : "0px" }}>
          <img src={facebookIcon} alt="FacebookIcon" />
          <img src={twitterIcon} alt="TwitterIcon" />
          <img src={linkedInIcon} alt="LinkedInIcon" />
        </Box>
      </Box>
    </Box>
  );
}
