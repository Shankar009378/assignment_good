import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProfileCard from "./ProfileCard";
import TipsCard from "./TipsCard";

const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "#22AD01",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: "#22AD01",
  },
}));

export default function PersonalInfo() {
  return (
    <Box sx={{width: '100%'}}>
        <CustomButton variant="text" startIcon={<ArrowBackIcon />}>
          Go Back
        </CustomButton>

        <Typography
          sx={{
            mt: 2,
            p: 1,
            width: '60%',
            fontWeight: 600,
            fontSize: 34,
            lineHeight: '44px',
            color: "#003C2F",
          }}
        >
          What is the optimal method for employers to reach out to you?
        </Typography>

        <Typography
          sx={{
            p: 1,
            width: '60%',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '19.2px',
            color: "#003C2F",
            opacity: 0.8
          }}
        >
          We suggest including an email and phone number.
        </Typography>

      <Box sx={{ display:'flex', flexDirection: { xs: "column", md: "row", lg: "row" }, justifyContent: 'space-between', marginTop: 4, p: 1 }}>
        <ProfileCard />
        <TipsCard />
      </Box>
    </Box>
  );
}
