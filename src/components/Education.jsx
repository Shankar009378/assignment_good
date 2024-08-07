import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TipsCard from "./TipsCard";
import EducationCard from "./EducationCard";

const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "#22AD01",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: "#22AD01",
  },
}));

export default function Education() {
  return (
    <Box>
      <Box>
        <CustomButton variant="text" startIcon={<ArrowBackIcon />}>
          Go Back
        </CustomButton>

        <Typography
          sx={{
            mt: 2,
            p: 1,
            fontWeight: 600,
            fontSize: 40,
            lineHeight: "48px",
            color: "#003C2F",
          }}
        >
          Tell us about your education.
        </Typography>

        <Typography
          sx={{
            p: 1,
            width: "45%",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: "#003C2F",
            opacity: 0.8,
          }}
        >
          Enter your education experience so far, even if you are a current
          student or did not graduate.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          justifyContent: "space-between",
          marginTop: 4,
          p: 1,
        }}
      >
        <EducationCard />
        <TipsCard />
      </Box>
    </Box>
  );
}
