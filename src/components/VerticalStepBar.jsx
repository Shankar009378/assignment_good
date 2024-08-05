import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Check from "@mui/icons-material/Check";

const steps = ["Personal Info", "Education"];

const CustomStepLabel = styled(StepLabel)(({ theme, active }) => ({
  "& .MuiStepLabel-label": {
    fontSize: 14,
    fontWeight: 600,
    color: active ? "green" : "black",
  },
}));

const CustomStepIconRoot = styled("div")(({ theme, active, completed  }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 30,
  height: 30,
  borderRadius: "50%",
  backgroundColor: active ? "green" : completed ? "green" : "#eaeaf0",
  color: active || completed ? "#fff" : "black",
  "& .MuiStepIcon-text": {
    fontSize: "1.5rem", // Custom font size for step numbers
    color: active || completed ? "white" : "black",
  },
}));

function CustomStepIcon(props) {
  const { active, completed, icon } = props;
  return (
    <CustomStepIconRoot active={active}>
      {completed ? (
        <Check className="MuiStepIcon-text" />
      ) : (
        <Typography variant="caption" className="MuiStepIcon-text">
          {icon}
        </Typography>
      )}
    </CustomStepIconRoot>
  );
}

export default function VerticalStepperBar({ onStepChange }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return false; // No optional steps for this example
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    const newStep = activeStep + 1;
    setActiveStep(newStep);
    setSkipped(newSkipped);
    onStepChange(newStep);

    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newStep = activeStep - 1;
    setActiveStep(newStep);
    onStepChange(newStep);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped((prevSkipped) => {
    //   const newSkipped = new Set(prevSkipped.values());
    //   newSkipped.add(activeStep);
    //   return newSkipped;
    // });
    const newStep = activeStep + 1;
    setActiveStep(newStep);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
    onStepChange(newStep);
  };

  const handleReset = () => {
    setActiveStep(0);
    onStepChange(0);
  };

  return (
    <Box sx={{ width: "100%", marginTop: 5, marginLeft: 3 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              {/* <StepLabel {...labelProps}>{label}</StepLabel> */}
              <CustomStepLabel
                {...labelProps}
                active={activeStep === index}
                StepIconComponent={(props) => (
                  <CustomStepIcon {...props} active={activeStep === index} />
                )}
              >
                {label}
              </CustomStepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
