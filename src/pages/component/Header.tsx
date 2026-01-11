import {
  Box,
  Stack,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Features", id: "features" },
  { label: "Contact Us", id: "contact" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <Box
    
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mx={{ xs: "37px", md: "150px" }}
      py="12px"
    >
      {/* Logo */}
      <Box display="flex" alignItems="center">
        <img src={logo} alt="logo" />
      </Box>

      {/* Desktop Nav */}
      {!isMobile && (
        <Stack direction="row" spacing="40px" alignItems="center">
          {navItems.map((item) => (
            <Typography
              key={item.id}
              sx={{
                cursor: "pointer",
                fontWeight: 400,
                fontSize: "14px",
                color: "#424242",
              }}
            >
              {item.label}
            </Typography>
          ))}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#283C85",
              px: "38px",
              py: "16.5px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "12px",
              color: "#EEF2FF",
            }}
          >
            Join Waitlist
          </Button>
        </Stack>
      )}

      {/* Mobile Nav */}
      {isMobile && (
        <Box display="flex" alignItems="center" gap={2}>
          {/* Join Waitlist Button always visible */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#283C85",
              px: "20px",
              py: "10px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "12px",
              color: "#EEF2FF",
            }}
          >
            Join Waitlist
          </Button>

          {/* Hamburger menu */}
          <IconButton
            onClick={toggleDrawer}
            sx={{
              backgroundColor: "rgba(40, 60, 133, 0.1)",
              borderRadius: "8px",
            }}
          >
            <Icon icon="material-symbols:menu" width="24" height="24" />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            PaperProps={{
              sx: { width: 260, p: 2 },
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem key={item.id} sx={{ py: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      cursor: "pointer",
                      color: "#424242",
                    }}
                    onClick={toggleDrawer}
                  >
                    {item.label}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      )}
    </Box>
  );
}
