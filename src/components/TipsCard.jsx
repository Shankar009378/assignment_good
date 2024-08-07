import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import tipsImage from "../assets/tipsImage.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const card = (
  <React.Fragment>
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mb: 2,
          width: { xs: "57%", md: 0, lg: "35%" },
          marginLeft: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "#E9F7E6",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <EmojiObjectsIcon sx={{ color: "#22AD01", opacity: 0.8 }} />
          <Typography sx={{ color: "#22AD01", opacity: 0.8, fontWeight: 400 }}>
            Tips
          </Typography>
        </div>
      </Box>
      <List>
        <ListItem sx={{ alignItems: "flex-start" }}>
          <ListItemIcon sx={{ minWidth: "auto", mr: 1, mt: 1.2 }}>
            <FiberManualRecordIcon sx={{ fontSize: 10, color: "#00120E" }} />
          </ListItemIcon>
          <ListItemText
            primary="It's best to use a professional email. One that includes your full name is best."
            primaryTypographyProps={{
              sx: {
                color: "#00120E",
                fontWeight: 500,
                fontSize: 15,
                lineHeight: "22px",
              },
            }}
          />
        </ListItem>
        <ListItem sx={{ alignItems: "flex-start" }}>
          <ListItemIcon sx={{ minWidth: "auto", mr: 1, mt: 1.2 }}>
            <FiberManualRecordIcon sx={{ fontSize: 10, color: "#00120E" }} />
          </ListItemIcon>
          <ListItemText
            primary="Gmail is the preferred email client. Addresses from Yahoo or Hotmail tend to look outdated."
            primaryTypographyProps={{
              sx: {
                color: "#00120E",
                fontWeight: 500,
                fontSize: 15,
                lineHeight: "22px",
              },
            }}
          />
        </ListItem>
      </List>
    </CardContent>
    <Box sx={{ display: "flex", mb: -2 }}>
      <img src={tipsImage} alt="Profile" style={{ width: 200, height: 200 }} />
    </Box>
    <CardActions></CardActions>
  </React.Fragment>
);

export default function TipsCard() {
  return (
    <Box sx={{ width: { xs: "100%", md: "100%", lg: 222 }, }}>
      <Card variant="elevation" sx={{ borderRadius: "13.18px" }}>
        {card}
      </Card>
    </Box>
  );
}
