import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { keyframes } from "styled-components";
import { LogoRoundIcon } from "../Svg";
import LoadingIcon from "./LoadingIcon";
// import PanIcon from "./PanIcon";
// import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const float = keyframes`
// 	0% {
// 		transform: translatey(0px);
// 	}
// 	50% {
// 		transform: translatey(10px);
// 	}
// 	100% {
// 		transform: translatey(0px);
// 	}
// `;

const Container = styled.div`
  position: relative;
`;

// const RotatingPancakeIcon = styled(PancakeIcon)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   animation: ${rotate} 2s linear infinite;
//   transform: translate3d(0, 0, 0);
// `;

const RunLoadingIcon = styled(LoadingIcon)`
  position: absolute;
  top: 0px;
  left: 0px;
`;

// const FloatingLogoIcon = styled(LogoRoundIcon)`
//   animation: ${float} 6s ease-in-out infinite;
//   transform: translate3d(0, 0, 0);
// `;

const FloatingLogoIcon = styled(LogoRoundIcon)`
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RunLoadingIcon width={`${size * 2.5}px`} />
      <FloatingLogoIcon width={`${size - 58}px`} />
    </Container>
  );
};

export default Spinner;
