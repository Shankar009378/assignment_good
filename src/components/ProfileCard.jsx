import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Avatar, Grid, Input, Paper, Stack, TextField } from "@mui/material";
import profileImage from "../assets/profileImage.png";
import InfoIcon from "@mui/icons-material/Info";

const labels = ["City", "Country", "Pincode"];

const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}>
        <img
          alt="Profile Picture"
          src={profileImage}
          sx={{ width: 100, height: 100 }}
        />

        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div>
                <label
                  htmlFor="fname"
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "16.8px",
                  }}
                >
                  First Name
                </label>
              </div>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="e.g. Akash"
                style={{
                  backgroundColor: "#F2F7F2",
                  padding: "18px 16px 18px 16px",
                  marginTop: 8,
                  borderRadius: 10,
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <div>
                <label
                  htmlFor="lname"
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "16.8px",
                  }}
                >
                  Surname
                </label>
              </div>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="e.g. Padhi"
                style={{
                  backgroundColor: "#F2F7F2",
                  padding: "18px 16px 18px 16px",
                  marginTop: 8,
                  borderRadius: 10,
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </Grid>
          </Grid>

          <div sx={{ width: "100%" }}>
            <Stack spacing={2} sx={{ marginTop: 2 }}>
              <div>
                <label
                  htmlFor="lname"
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "16.8px",
                  }}
                >
                  Proffession
                </label>
              </div>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="e.g. Software Enginner"
                style={{
                  backgroundColor: "#F2F7F2",
                  padding: "18px 16px 18px 16px",
                  marginTop: 8,
                  borderRadius: 10,
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </Stack>
          </div>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Button
          variant="contained"
          disableRipple
          sx={{
            backgroundColor: "#E9F7E6",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#E9F7E6",
            },
            marginTop: 3.5,
            padding: 2,
            width: "22%",
          }}
        >
          <Typography
            sx={{
              color: "#22AD01",
              fontSize: 14,
              lineHeight: "16.8px",
              fontWeight: 600,
            }}
          >
            UPLOAD PHOTO
          </Typography>
        </Button>
        <Box sx={{ width: "74%" }}>
          <div>
            <label
              htmlFor="city"
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "16.8px",
              }}
            >
              City
            </label>
          </div>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="e.g. Andhra Pradesh"
            style={{
              backgroundColor: "#F2F7F2",
              padding: "18px 16px",
              marginTop: 8,
              borderRadius: 10,
              width: "100%",
              border: "none",
              outline: "none",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {labels.map((label, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <div>
                <label
                  htmlFor={`input-${index}`}
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "16.8px",
                  }}
                >
                  {label}
                </label>
              </div>
              <input
                type="text"
                id={`input-${index}`}
                name={`input-${index}`}
                placeholder={`e.g. ${label}`}
                style={{
                  backgroundColor: "#F2F7F2",
                  padding: "18px 16px",
                  marginTop: 8,
                  borderRadius: 10,
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div>
              <label
                htmlFor="city"
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "16.8px",
                }}
              >
                Email Address
              </label>
            </div>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="e.g. akash@gmail.com"
              style={{
                backgroundColor: "#F2F7F2",
                padding: "18px 16px",
                marginTop: 8,
                borderRadius: 10,
                width: "100%",
                border: "none",
                outline: "none",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <div>
              <label
                htmlFor="city"
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "16.8px",
                }}
              >
                Phone Number
              </label>
            </div>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="e.g. +91 0123456789"
              style={{
                backgroundColor: "#F2F7F2",
                padding: "18px 16px",
                marginTop: 8,
                borderRadius: 10,
                width: "100%",
                border: "none",
                outline: "none",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              color: "#003C2F",
              opacity: 0.8,
              fontSize: 14,
              lineHeight: "19.2px",
              fontWeight: 500,
            }}
          >
            Add additional information to your resume (optional)
          </Typography>
          <InfoIcon sx={{ color: "#22AD01", backgroundColor: "#E9F7E6" }} />
        </Box>

        <Box sx={{ display: "flex", gap: "7px" }}>
          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: "#E9F7E6",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#E9F7E6",
              },
              marginTop: 2,
              padding: "16px 32px 16px 32px",
            }}
          >
            <Typography
              sx={{
                color: "#22AD01",
                fontSize: 12,
                lineHeight: "14.4px",
                fontWeight: 600,
              }}
            >
              LINKEDIN +
            </Typography>
          </Button>

          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: "#E9F7E6",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#E9F7E6",
              },
              marginTop: 2,
              padding: "16px 32px 16px 32px",
            }}
          >
            <Typography
              sx={{
                color: "#22AD01",
                fontSize: 12,
                lineHeight: "14.4px",
                fontWeight: 600,
              }}
            >
              WEBSITE +
            </Typography>
          </Button>

          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: "#E9F7E6",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#E9F7E6",
              },
              marginTop: 2,
              padding: "16px 32px 16px 32px",
            }}
          >
            <Typography
              sx={{
                color: "#22AD01",
                fontSize: 12,
                lineHeight: "14.4px",
                fontWeight: 600,
              }}
            >
              DOCUMENT CARD +
            </Typography>
          </Button>
        </Box>
      </Box>
    </CardContent>
    <CardActions></CardActions>
  </React.Fragment>
);

export default function ProfileCard() {
  return (
    <Box sx={{ width: "75%" }}>
      <Card variant="elevation">{card}</Card>

      <Stack spacing={2} direction="row" sx={{display: 'flex', justifyContent: 'flex-end', marginTop: 5}}>
        <Button
          variant="text"
          sx={{
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: "#003C2F",
            },
          }}
        >
          <Typography
            sx={{
              color: "#003C2F",
              fontSize: 12,
              lineHeight: "14.4px",
              fontWeight: 600,
            }}
          >
            PREVIEW
          </Typography>
        </Button>
        <Button
          variant="contained"
          disableRipple
          sx={{
            backgroundColor: "#22AD01",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#22AD01",
            },
            marginTop: 2,
            padding: "16px 32px 16px 32px",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFF",
              fontSize: 12,
              lineHeight: "14.4px",
              fontWeight: 600,
            }}
          >
            NEXT: EDUCATION
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}
