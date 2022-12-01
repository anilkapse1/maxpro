import {
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Assess1 from "./Assess1";
import Assess2 from "./Assess2";
import Assess3 from "./Assess3";
import Assess4 from "./Assess4";
import Assess5 from "./Assess5";
import Assess6 from "./Assess6";
import Assess7 from "./Assess7";
import Laststep from "./Laststep";
import { Stepcontext } from "../context/Context";
import { Container } from "react-bootstrap";
import bg from "../assets/images/plus.png";
import risk from "../assets/images/risk.png";

function getStep() {
  return ["step1", "step2", "step3", "step4", "step5", "step6", "step7"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Assess1 />;
    case 1:
      return <Assess2 />;
    case 2:
      return <Assess3 />;
    case 3:
      return <Assess4 />;
    case 4:
      return <Assess5 />;
    case 5:
      return <Assess6 />;
    case 6:
      return <Assess7 />;
    default:
      return "unknown case";
  }
}

const Steppercontrol = () => {
  const Hero = styled.section`
    background: url(${bg}) repeat-y right top,${({ theme }) => theme.colors.text2};
    background-size: 50%;
    height: 100%;
    padding-top: 100px;
    position: relative;
    &:after {
      content: "";
      background: url(${risk});
      position: absolute;
      left: -30px;
      top: 40px;
      width: 18%;
      height: 35%;
      background-repeat: no-repeat;
      opacity: 0.4;
      z-index: 0;
      background-size: contain;
      transform-origin: center;
      animation: risk 2s ease-in-out infinite alternate-reverse both;
    }
    .parent {
      height: calc(100vh - 100px);
      z-index: 1;
      position: relative;
      .riskHead {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2rem;
        font-weight: 200;
        margin-bottom: 40px;
        background: rgb(0, 86, 143);
        background: linear-gradient(
          90deg,
          rgba(0, 86, 143, 1) 0%,
          rgba(0, 165, 195, 1) 69%,
          rgba(0, 165, 195, 1) 100%
        );
        span {
          color: #c3cd73;
          font-weight: 400;
        }
      }
      .formStepper {
        padding: 35px 20px;
        position: relative;
        overflow: hidden;
        height: 80%;
        background-color:rgb(244,11,35,.1);

        border-radius: 10px;

        svg.Mui-completed {
          color: ${({ theme }) => theme.colors.white};
        }
        .MuiStepConnector-line {
          border-color: rgba(0, 0, 0, 0.38);
        }
        form {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-between;
          height: 100%;
          .calltoaction {
            margin-top: 15px;
            button {
              margin: 0px 10px 0px 0px;
            }
          }
        }
      }
    }

    @keyframes risk {
      0% {
        transform: rotate(-30deg);
      }
      100% {
        transform: rotate(50deg);
      }
    }

    .lastStep{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      height: 100%;
      h3{
                    color:white;
                    margin-top:20px;
                    margin-bottom:20px;
                    font-weight:200;
                    animation:greeting 2s ease-in-out infinite alternate-reverse both;

                }

    }

    @keyframes greeting{
                0%{
                    color:white;                
                }
                100%{
                    color:#404040;
                }
            }

  `;

  const { activeSteps, setActiveSteps } = useContext(Stepcontext);
  const steps = getStep();

  const handleNext = () => {
    setActiveSteps(activeSteps + 1);
  };

  const handleBack = () => {
    setActiveSteps(activeSteps - 1);
  };

  const Lastback = () => {
    setActiveSteps(0);
  };

  return (
    <Hero>
      <Container>
        <div className="parent">
          <h1 className="riskHead">
            Let's assess your <span>Risk appetite</span>
          </h1>
          <div className="formStepper">
            <Stepper activeStep={activeSteps}>
              {steps.map((val, idx) => {
                return (
                  <Step>
                    <StepLabel>{val}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {}
            {activeSteps === 7 ? (
              <div className="lastStep">
              <h3>You have a HIGH risk profile. We suggest you to invest.</h3>
                <Laststep />
                <div className="calltoaction">
                  <Button variant="outlined" onClick={Lastback}>
                    Re-calculate
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <form>
                  {getStepContent(activeSteps)}
                  <div className="calltoaction">
                    <Button
                      variant="outlined"
                      disabled={activeSteps === 0}
                      onClick={handleBack}
                    >
                      Go Back
                    </Button>
                    <Button
                      type="submit"
                      variant="outlined"
                      onClick={handleNext}
                    >
                      {activeSteps === 7 ? "Finish" : "next question"}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>
    </Hero>
  );
};

export default Steppercontrol;
