import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Divider
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";

/* form type */
type NewsletterForm = {
  email: string;
};

export default function WaitlistSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    register,
    formState: { errors },
  } = useForm<NewsletterForm>();

  return (
    <Box
      sx={{
        backgroundColor: "#283C85",
        
        paddingTop: isMobile ? "51px" : "54px",
        px: 2,
      }}
    >
      <Box
        sx={{
          
          mx: "auto",
          textAlign: "center",
          color: "#fff",
          maxWidth:"756px"
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            color: "#FFFFFF",
            lineHeight: "100%",
            fontSize:isMobile? "41" : "48px",
            fontWeight: 500,
            
          }}
        >
          Join Our Waitlist
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#F5F5F5",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            mt: "12px",
            maxWidth: "457px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          Be the first one to know about discounts, offers and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </Typography>

        {/* Email Form */}
        <Box
          component="form"
          sx={{
            mt: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF1C",
            borderRadius: "40px",
            border: "1px solid #2F8F83",
            height: "64px",
            px: 2,
          }}
        >
          <TextField
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            InputProps={{
              startAdornment: (
                <Icon
                  icon="mdi-light:email"
                  width="20"
                  height="20"
                  style={{ color: "#B2B2B2", marginRight: "8px" }}
                />
              ),
            }}
            sx={{
              flex: 1,
              background: "none",
              color: "#9A9EA6",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiInputBase-input": {
                padding: 0,
                fontSize: "14px",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#EEF2FF",
              height: isMobile ? "40px" : "48px",
              width: isMobile ? "120px" : "146px",
              ml: 1,
              fontSize: isMobile ? "12px" : "14px",
              borderRadius: "40px",
              color: "#283C85",
              fontWeight:"700",
              textTransform: "none",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Divider sx={{ border: "1px solid #EEF2FF1A", marginTop: isMobile? "26.96px" : "101px" }} />

    </Box>
  );
}
