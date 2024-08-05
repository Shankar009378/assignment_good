import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    ●
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <EmojiObjectsIcon sx={{ color: "#003C2F", opacity: 0.8 }} />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "19.2px",
            color: "#003C2F",
            opacity: 0.8,
          }}
        >
          Tips
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: "#00120E",
            fontWeight: 500,
            fontSize: 15,
            lineHeight: "22px",
          }}
        >
          {bull}
          It's best to use a professional email. One that includes your full
          name is best.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#00120E",
            fontWeight: 500,
            fontSize: 15,
            lineHeight: "22px",
            mt: 1,
          }}
        >
          {bull} Gmail is the preferred email client. Addresses from Yahoo or
          Hotmail tend to look outdated.
        </Typography>
      </Box>
    </CardContent>
    <CardActions>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 60,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Box
          component="img"
          src="../assets/tipsImage.png"
          sx={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
        />
        <Box
          component="img"
          src="../assets/tipsMask.png"
          sx={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        />
      </Box>
    </CardActions>
  </React.Fragment>
);

export default function TipsCard() {
  return (
    <Box sx={{ maxWidth: 222 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
