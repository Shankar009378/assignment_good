import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Grid, Stack, IconButton } from "@mui/material";
import AiIcon from "@mui/icons-material/SmartToy";
import BoldIcon from "@mui/icons-material/FormatBold";
import ItalicIcon from "@mui/icons-material/FormatItalic";
import UnderlineIcon from "@mui/icons-material/FormatUnderlined";

const CustomSelect = styled("select")({
  backgroundColor: "#F2F7F2",
  padding: "18px 16px 18px 16px",
  marginTop: 8,
  borderRadius: 10,
  width: "100%",
  border: "none",
  outline: "none",
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2322AD01' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  backgroundPosition: "right 16px center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "23px",
  "&:focus": {
    borderColor: "#22AD01",
  },
});

const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                School Name
              </label>
            </div>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="e.g. Sai International"
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
                htmlFor="fname"
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "16.8px",
                }}
              >
                Location
              </label>
            </div>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="e.g. Bhubaneswar"
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
      </Box>

      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                Degree
              </label>
            </div>
            <CustomSelect name="degree" id="degree">
              <option value="High School">High School</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="B.Tech">B.Tech</option>
            </CustomSelect>
          </Grid>
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
                Field Of Study
              </label>
            </div>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="e.g. Math"
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
      </Box>

      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                Graduation Month
              </label>
            </div>
            <CustomSelect name="month" id="month">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
            </CustomSelect>
          </Grid>
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
                Graduation Year
              </label>
            </div>
            <CustomSelect name="year" id="year">
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </CustomSelect>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%", marginTop: 2 }}>
        <div>
          <label
            htmlFor="fname"
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "16.8px",
            }}
          >
            Education Description
          </label>
        </div>

        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          style={{
            backgroundColor: "#F2F7F2",
            padding: "18px 16px 18px 16px",
            marginTop: 8,
            borderRadius: 10,
            width: "100%",
            border: "none",
            outline: "none",
            resize: "none",
          }}
        ></textarea>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
      >
        <div style={{backgroundColor: '#F2F7F2', borderRadius: '8px', padding: '8px'}}>
          <IconButton>
            <BoldIcon style={{width: 20, height: 20}}/>
          </IconButton>
          <IconButton>
            <ItalicIcon style={{width: 20, height: 20}} />
          </IconButton>
          <IconButton>
            <UnderlineIcon style={{width: 20, height: 20}} />
          </IconButton>
        </div>
        <div style={{ display: "flex", alignItems: "center", backgroundColor: '#E9F7E6', padding: '0px 16px 0px 16px', borderRadius: '8px'  }}>
          <AiIcon sx={{ color: "#22AD01", marginRight: 1 }} />
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 600,
              lineHeight: "15.6px",
              color: '#22AD01'
            }}
          >
            Use AI
          </Typography>
        </div>
      </Box>
    </CardContent>
    <CardActions></CardActions>
  </React.Fragment>
);

export default function EducationCard() {
  return (
    <Box sx={{ width: "75%" }}>
      <Card variant="elevation">{card}</Card>

      <Stack
        spacing={2}
        direction="row"
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: 5 }}
      >
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
            NEXT
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
}
