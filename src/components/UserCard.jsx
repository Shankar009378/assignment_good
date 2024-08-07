import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import avatarImg from "../assets/avatar.png";
import { Typography } from "@mui/material";

export default function UserCard() {
  return (
    <Card
      sx={{
        maxWidth: 250,
        backgroundColor: "#F2F7F2",
        color: "#00120E",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={avatarImg}
            alt="User Avatar"
            sx={{ width: 40, height: 40 }}
          />
        }
        title={
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '16.8px',
                color: '#00120E',
              }}
            >
              Akash Kumar Padhi
            </Typography>
          }
          subheader={
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: 10,
                lineHeight: '12px',
                color: '#00120E',
                opacity: 0.8,
              }}
            >
              akashkumarpadhi@gmail.com
            </Typography>
          }
      />
    </Card>
  );
}1
