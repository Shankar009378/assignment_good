import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Avatar, Grid, Paper, TextField } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          sx={{
            marginLeft: 1,
            marginTop: 2,
            width: "100%",
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="Country"
          variant="outlined"
          sx={{
            width: "100%",
            marginTop: 2,
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="Pin Code"
          variant="outlined"
          sx={{
            width: "95%",
            marginTop: 2,
          }}
        />
      </Grid>
    </React.Fragment>
  );
}

const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
        <Avatar
          alt="Profile Picture"
          src="../assets/profile.png"
          sx={{ width: 100, height: 100 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>

            <Grid item xs={20}>
              <TextField
                id="outlined-basic"
                label="Proffesion"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#E9F7E6", height: 54 }}
      >
        <Typography sx={{ color: "#22AD01", fontSize: 14, fontWeight: 600 }}>
          UPLOAD PHOTO
        </Typography>
      </Button>

      <Grid item xs={20}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          sx={{
            width: "357%",
          }}
        />
      </Grid>
    </CardActions>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={{
              width: "100%",
              marginTop: 3,
              marginLeft: 1
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            sx={{
              width: "97%",
              marginTop: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>

    <Box>

    </Box>
  </React.Fragment>
);

export default function ProfileCard() {
  return (
    <Box sx={{ width: "75%" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
