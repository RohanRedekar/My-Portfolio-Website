import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
export const Steper = () => {
  const steps = [
    "12th (Science)",
    "Bsc (Physics)",
    "Masai School (Web Development)",
  ];
  return (
    <div style={{paddingBottom: "20px"}}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={3} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <p style={{ color: "white", fontSize: "18px" }}>{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};
